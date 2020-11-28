import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import babel from "@rollup/plugin-babel";
import {terser} from "rollup-plugin-terser";
import {string} from "rollup-plugin-string";
import json from "@rollup/plugin-json";
import includePaths from "rollup-plugin-includepaths";
import sveltePreprocess from 'svelte-preprocess'
import config from "sapper/config/rollup.js";
// import pkg from './package.json';

const mode = process.env.NODE_ENV;
const dev = mode === "development";
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

class SvelteExtractor {
  static extract( content ) {
    return content.match( /[A-Za-z0-9-_:\/]+/g ) || [];
  }
}

const postcssPlugins = (purgecss = false) => {
  return [
    require("postcss-import")(),
    require("postcss-url")(),
    require("autoprefixer")({
      overrideBrowserslist: "last 3 version"
    }),
    purgecss &&
    require( 'cssnano' )( {
      preset: 'default',
    }),
    // TODO: Enable purgecss
    // // Do not purge the CSS in dev mode to be able to play with classes in the browser dev-tools.
    // purgecss &&
    // require( '@fullhuman/postcss-purgecss' )( {
    //   content: [ './src/**/*.html',
    //     './src/**/*.svelte',
    //     './src/**/*.css',
    //     './static/**/*.css' ],
    //   extractors: [ {
    //     extractor: content => content.match( /[A-Za-z0-9-_:\/]+/g ) || [],
    //     // Specify the file extensions to include when scanning for
    //     // class names.
    //     extensions: [ 'svelte', 'css', 'html' ],
    //   }, ],
    //   fontFace: true,
    //   // Whitelist selectors to stop Purgecss from removing them from your CSS.
    //   whitelist: [ 'html', 'body' ],
    // } ),
  ].filter(Boolean)
}

const preprocess = sveltePreprocess({
  transformers: {
    scss: {
      includePaths: [
        'node_modules',
        'src'
      ]
    },
    postcss: {
      plugins: postcssPlugins(!dev) // Don't need purgecss because Svelte handle unused css for you.
    }
  }
})
const onwarn = (warning, onwarn) => (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) || onwarn(warning)

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
      string({
        include: "**/*.txt"
      }),
      svelte({
        dev,
        hydratable: true,
        emitCss: true,
        css: true,
        preprocess,
      }),
      resolve({browser: true, dedupe: ['svelte'],}),
      commonjs(),
      includePaths({paths: ["./src", "./",]}),

      !legacy &&
      babel({
        babelHelpers: 'bundled',
        extensions: [".js", ".mjs", ".html", ".svelte"],
        exclude: ["node_modules/@babel/**"],
        plugins: [
          "@babel/plugin-syntax-dynamic-import",
          "@babel/plugin-proposal-object-rest-spread"
        ]
      }),

      legacy &&
      babel({
        babelHelpers: 'runtime',
        extensions: [".js", ".mjs", ".html", ".svelte"],
        exclude: ["node_modules/@babel/**"],
        presets: [
          [
            "@babel/preset-env",
            {
              targets: "> 0.25%, ie >= 11, not dead"
            }
          ]
        ],
        plugins: [
          "@babel/plugin-syntax-dynamic-import",
          [
            "@babel/plugin-transform-runtime",
            {
              useESModules: true
            }
          ]
        ]
      }),

      !dev &&
      terser({
        module: true
      })
    ],
    onwarn
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      replace({
        "process.browser": false,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
      json(),
      svelte({
        generate: "ssr",
        dev,
        preprocess,
      }),
      string({
        include: "**/*.txt"
      }),
      resolve({dedupe: ['svelte']}),
      includePaths({paths: ["./src", "./",]}),
      commonjs(),
    ],
    external: [].concat(
      require("module").builtinModules ||
      Object.keys(process.binding("natives"))
    ),
    // external: Object.keys(pkg.dependencies).concat(
    //   require('module').builtinModules || Object.keys(process.binding('natives'))
    // ),
    onwarn
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode)
      }),
      commonjs(),
      !dev && terser()
    ],
    onwarn
  }
};
