const domain = 'xn--c1adkmgpem4hrai.xn--p1ai'

const website = {
    ogLanguage: 'ru_RU',
    siteLanguage: 'ru-RU',
    siteTitle: 'ЭнергияПлюс - инжиниринговая компания',
    contactEmail: 'info@energy-plus.biz',
    domain: domain,
    siteUrl: `https://${domain}`,
    apiUrl: import.meta.env.VITE_API_URL || `https://api.${domain}`,
    gtmId: 'GTM-N7DB4C5',
    disableAnalytics: import.meta.env.VITE_DISABLE_ANALYTICS || false
}

export {website as default}