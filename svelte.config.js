import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-node'
// import adapter from '@sveltejs/adapter-static';

import {readFileSync} from 'fs'

const pkg = JSON.parse(readFileSync(new URL('package.json', import.meta.url), 'utf8'))

const dev = process.env.NODE_ENV !== 'production'

/**
 * This will add autocompletion if you're working with SvelteKit
 *
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
    kit: {
        // By default, `npm run build` will create a standard Node app.
        // You can create optimized builds for different platforms by
        // specifying a different adapter
        adapter: adapter(),
        // router: false, // use with adapter-static

        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',

        vite: {
            define: {__DEV__: dev},
            ssr: {
                noExternal: Object.keys(pkg.dependencies || {})
            }
        },
        // vite: { optimizeDeps: { include: ['@apollo'] }}
        // vite: {
        //     optimizeDeps: {
        //         include: [
        //             "@apollo/client/core",
        //             "@apollo/client/cache",
        //             // "@apollo/client/link/ws",
        //             "@apollo/client/link/context",
        //             "@apollo/client/link/error",
        //             "@apollo/client/utilities",
        //         ],
        //         exclude: ["@apollo/client"],
        //     },
        // },
        // vite: {
        //     resolve: {
        //         alias: {
        //             'svelte-apollo': '/node_modules/svelte-apollo/dist/svelte-apollo.es.js'
        //         },
        //     },
        // }
    },

    preprocess: preprocess({
        'postcss': true,
        scss: {
            prependData: "@import 'src/lib/styles/variables.scss';",
        }
    }),
}

export default config
