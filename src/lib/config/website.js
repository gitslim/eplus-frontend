const domain = 'xn--c1adkmgpem4hrai.xn--p1ai'

const website = {
    ogLanguage: 'ru_RU',
    siteLanguage: 'ru-RU',
    siteTitle: 'Энергия Плюс — инжиниринговая компания полного цикла. Проектирование и строительство котельных и газопроводов. Производство БМК',
    siteDescription: 'Промышленные газовые котельные. Проект и монтаж в Москве и регионах. Газопроводы. Производитель газовых блочно-модульных котельных',
    siteH1: 'Инжиниринг полного цикла газовых сетей, промышленных газовых котельных и энергоцентров. Изыскания, проектирование, строительство, согласование и экспертиза проектной документации',
    contactEmail: 'info@energy-plus.biz',
    domain: domain,
    siteUrl: `https://${domain}`,
    apiUrl: import.meta.env.VITE_API_URL || `https://api.${domain}`,
    gtmId: 'GTM-N7DB4C5',
    disableAnalytics: import.meta.env.VITE_DISABLE_ANALYTICS || false
}

export {website as default}