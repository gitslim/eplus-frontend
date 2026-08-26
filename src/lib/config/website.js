const domain = 'xn--c1adkmgpem4hrai.xn--p1ai'

const website = {
    ogLanguage: 'ru_RU',
    siteLanguage: 'ru-RU',
    siteTitle: 'Энергия Плюс — инжиниринговая компания полного цикла. Проектирование и строительство котельных и газопроводов. Производство БМК',
    siteDescription: 'Промышленные газовые котельные. Проект и монтаж в Москве и регионах. Газопроводы. Производитель газовых блочно-модульных котельных',
    siteH1: 'Инжиниринг полного цикла газовых сетей, промышленных газовых котельных и энергоцентров. Изыскания, проектирование, строительство, согласование и экспертиза проектной документации',
    en: {
        ogLanguage: 'en_US',
        siteLanguage: 'en-US',
        siteTitle: 'Energy Plus — Full-Cycle Engineering Company. Design and Construction of Boiler Plants & Gas Pipelines. Modular Boiler Manufacture',
        siteDescription: 'Industrial gas boiler houses. Design and installation in Moscow and regions. Gas pipelines. Manufacturer of gas modular block boiler houses',
        siteH1: 'Full-cycle engineering of gas networks, industrial boiler houses and power centers. Survey, design, construction, approval and expert appraisal',
    },
    contactEmail: 'info@energy-plus.biz',
    domain: domain,
    siteUrl: `https://${domain}`,
    apiUrl: import.meta.env.VITE_API_URL || `https://api.${domain}`,
    gtmId: 'GTM-N7DB4C5',
    disableAnalytics: import.meta.env.VITE_DISABLE_ANALYTICS === 'true' || import.meta.env.DEV || false
}

export {website as default}