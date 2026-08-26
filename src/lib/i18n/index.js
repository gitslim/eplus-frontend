import { init, addMessages, locale } from 'svelte-i18n'
import ruBase from './ru.json'
import enBase from './en.json'

function buildDictionary(lang, base) {
    const extra = {}
    if (lang === 'ru') {
        const modules = import.meta.globEager('./pages/*.ru.json')
        for (const path in modules) {
            Object.assign(extra, modules[path].default || modules[path])
        }
    } else if (lang === 'en') {
        const modules = import.meta.globEager('./pages/*.en.json')
        for (const path in modules) {
            Object.assign(extra, modules[path].default || modules[path])
        }
    }
    return {
        ...base,
        ...extra
    }
}

const ruDict = buildDictionary('ru', ruBase)
const enDict = buildDictionary('en', enBase)

addMessages('ru', ruDict)
addMessages('en', enDict)

export function setupI18n(initialLocale = 'ru') {
    init({
        fallbackLocale: 'ru',
        initialLocale: initialLocale
    })
}

export { locale }
