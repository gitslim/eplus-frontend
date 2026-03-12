// const tailwindcss = require("tailwindcss");
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const purgecss = require('@fullhuman/postcss-purgecss')

const mode = process.env.NODE_ENV
const dev = mode === 'development'

const config = {
    plugins: [
        //Some plugins, like postcss-nested, need to run before Tailwind,
        // tailwindcss(),
        //But others, like autoprefixer, need to run after,
        autoprefixer(),
        !dev && purgecss({
            content: ['./src/**/*.html', './src/**/*.svelte'],
            safelist: {
                standard: [/svelte/]
            }
        }),
        !dev && cssnano({
            preset: 'default',
        })
    ],
}

module.exports = config