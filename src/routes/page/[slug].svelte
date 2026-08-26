<script context="module">
    import {fetchEndpoint} from '$lib/utils'

    export const load = async ({fetch, page, session}) => {
        const {slug} = page.params
        const locale = session?.locale || 'ru'
        return await fetchEndpoint(fetch, '/ep/get-page-by-slug.json', {slug, locale})
    }
</script>

<script>
    import SvelteSeo from 'svelte-seo'
    import DynamicZone from '$lib/components/DynamicZone.svelte'
    import HiddenH1 from "$lib/components/HiddenH1.svelte"
    import {session} from '$app/stores'

    export let data

    $: currentLocale = $session?.locale || 'ru'

    let meta = {
        title: data?.page?.title,
        description: data?.page?.title,
        h1: data?.page?.title
    }

    $: {
        if (currentLocale === 'ru') {
            if (data?.page?.slug === "proektirovanie") {
                meta = {
                    title: "Проектирование газопроводов. Проектная документация для котельной.",
                    description: "Газ и дизель. Согласование и экспертиза. Разработка рабочей документации. Сметы.",
                    h1: "Проектирование промышленных котельных и газопроводов. Получение согласований и экспертиз. Разработка рабочей документации и сметы."
                }
            } else if (data?.page?.slug ==='proektirovanie-energocentrov') {
                meta = {
                    title: "Проектирование энергоцентров. Энергоснабжение промышленных объектов. Консультация. Расчет стоимости",
                    description: "Подготовка проектной документации для строительства энергоцентра. Изыскания, согласование, экспертиза. Полный цикл работ. Расчет стоимости проекта и строительства.",
                    h1: "Проектирование энергоцентра для промышленного объекта. Разработка специальных разделов проектной документации. Технико-экономическое обоснование и смета. Стоимость проекта энергоцентра"
                }
            } else if (data?.page?.slug ==='funkcii-generalnogo-proektirovshika') {
                meta = {
                    title: "Функции генерального проектировщика. Полный комплекс проектных работ",
                    description: "Подготовка проектной документации полного цикла. Изыскания, разработка проектной и рабочей документации. Экспертиза и смета. Расчет стоимости",
                    h1: "Разработка проектно-сметной документации для газовой и дизельной котельной. ПД и РД для газовых сетей. Есть допуск СРО. Стоимость проекта котельной"
                }
            } else if (data?.page?.slug ==='stroitelstvo') {
                meta = {
                    title: "Строительство промышленных котельных и энергоцентров. Экспертиза. Допуски СРО",
                    description: "Строительство промышленных объектов. Теплоснабжение и электроснабжение. Допуски СРО. Сметы.",
                    h1: "Строительство объектов малой энергетики. Промышленные газовые котельные. Энергоцентры для производственных объектов. Поставка БМК. Дизельные котельные и энергоцентры"
                }
            } else if (data?.page?.slug ==='postavka-oborudovaniya') {
                meta = {
                    title: "Поставка котельного оборудования",
                    description: "Котельное оборудование российского производства. Импорт котельного оборудования. Газовые котлы. Дизельные котлы. Газовые горелки. Расчет стоимости оборудования",
                    h1: "Поставка котельного оборудования. Комплектация промышленных котельных и энегоцентров. Сертификаты. Расчет стоимости. Консультация. Оборудование под любой бюджет. Природный газ и дизель"
                }
            } else if (data?.page?.slug ==='pusko-naladochnye-raboty') {
                meta = {
                    title: "Пуско-наладочные работы для котельного оборудования. Расчет стоимости",
                    description: "Выполнение пуско-наладки промышленной котельной. Природный газ и дизельное топливо. Расчет стоимости.",
                    h1: "Пуско-наладочные работы для газовой котельной. Пуско-наладка котельного оборудования. Консультация. Собственная бригада. Аккредитации и допуски"
                }
            } else if (data?.page?.slug ==='funkcii-tehnicheskogo-zakazchika') {
                meta = {
                    title: "Функции технического заказчика. Разработка проектной документации. Согласование. Экспертиза. Контроль строительства",
                    description: "Выполнение функции технического заказчика. Формирование проектной и рабочей документации. Сметы для котельной, газопровода. Природный газ и дизельное топливо",
                    h1: "Функции технического заказчика для объектов генерации тепловой и электрической энергии. Допуски и аккредитации. Проектирование газовой котельной. Проектирование газопровода"
                }
            } else if (data?.page?.slug ==='linejnye-obuekty-novoe-stroitelstvo') {
                meta = {
                    title: "Линейные объекты — новое строительство. Объекты, реализованные компанией. Энергия Плюс. Газопроводы",
                    description: "Реализованные объекты. Газопроводы. Проект и монтаж. Проектная документация. Экспертиза и согласования.",
                    h1: "Строительство линейных объектов. Газопроводы. Изыскания. Разработка проектно-сметной документации. Получение согласований ГРО. Сотрудничаем с «Газпром» «Мособлгаз», «Мосгаз». Аккредитации и СРО"
                }
            } else if (data?.page?.slug ==='linejnye-obuekty-rekonstrukciya') {
                meta = {
                    title: "Линейные объекты — реконструкция. Список объектов, реализованных ООО «Энергия Плюс». Реконструкция газопровода",
                    description: "Разработка документации. Согласование. Консультация. Расчет сметы. Расчет стоимости газопровода. Разработка проекта",
                    h1: "Реконструкция газопроводов любого давления. Реализованные проекты. Получить консультацию бесплатно. ПД и РД для распределительного газопровода. Внутриплощадочный газопровод. Сеть газопотребления."
                }
            } else if (data?.page?.slug ==='gazoprovody-v-granicah-uchastka-zakazchika') {
                meta = {
                    title: "Газопроводы в границах участка заказчика. Разработка и реализация проекта. Допуски СРО",
                    description: "Проектная документация для газопровода. Внутриплощадочный газопровод малого, среднего и высокого давления. Проектно-сметная документация. Расчет стоимости",
                    h1: "Расчет стоимости газопровода. Проектирование газопровода. Газораспределительные сети. Промышленный газопровод в границах участка заказчика."
                }
            } else {
                meta = {
                    title: data?.page?.title,
                    description: data?.page?.title,
                    h1: data?.page?.title
                }
            }
        } else {
            if (data?.page?.slug === "proektirovanie" || data?.page?.slug === "design") {
                meta = {
                    title: "Design of Gas Pipelines and Boiler Plants | Energy Plus",
                    description: "Gas and diesel. Approvals, state expertise, detailed engineering design and cost estimates.",
                    h1: "Industrial Boiler and Gas Pipeline Engineering. Regulatory Approvals, Working Documentation, and Cost Estimates."
                }
            } else if (data?.page?.slug === 'proektirovanie-energocentrov' || data?.page?.slug === 'power-centers-design') {
                meta = {
                    title: "Power Center Design | Industrial Energy Supply & Cost Estimation",
                    description: "Design documentation for power center construction. Surveys, approvals, expertise. Full cycle.",
                    h1: "Industrial Power Center Engineering. Feasibility studies, special design sections, and cost estimation."
                }
            } else if (data?.page?.slug === 'funkcii-generalnogo-proektirovshika' || data?.page?.slug === 'general-designer-functions') {
                meta = {
                    title: "General Designer Functions | Full-Cycle Engineering Services",
                    description: "Comprehensive design documentation: engineering surveys, detailed design, expert appraisal and estimation.",
                    h1: "Design and Cost Documentation for Boiler Plants and Gas Networks. SRO Certified."
                }
            } else if (data?.page?.slug === 'stroitelstvo' || data?.page?.slug === 'construction') {
                meta = {
                    title: "Construction of Industrial Boiler Plants and Power Centers | SRO Certified",
                    description: "Industrial facility construction. Heat and power supply. SRO permits and budgeting.",
                    h1: "Distributed Power Generation Facilities Construction. Industrial Gas Boilers and Modular Plants."
                }
            } else if (data?.page?.slug === 'postavka-oborudovaniya' || data?.page?.slug === 'equipment-supply') {
                meta = {
                    title: "Boiler Equipment Supply | Industrial Boilers and Burners",
                    description: "Boiler equipment supply. Domestic and imported industrial gas and diesel boilers and burners.",
                    h1: "Boiler and Power Center Equipment Supply. Certified equipment for any budget."
                }
            } else if (data?.page?.slug === 'pusko-naladochnye-raboty' || data?.page?.slug === 'commissioning-works') {
                meta = {
                    title: "Commissioning of Boiler Equipment | Start-up and Testing",
                    description: "Commissioning and start-up works for industrial gas and diesel boiler houses.",
                    h1: "Start-Up and Commissioning of Gas Boiler Plants. Certified engineers and field crew."
                }
            } else if (data?.page?.slug === 'funkcii-tehnicheskogo-zakazchika' || data?.page?.slug === 'technical-customer-functions') {
                meta = {
                    title: "Technical Customer Functions | Project Management & Construction Control",
                    description: "Technical customer services for boiler plants and gas pipelines. Regulatory approvals and supervision.",
                    h1: "Technical Customer Functions for Heat and Power Generation Facilities."
                }
            } else if (data?.page?.slug === 'linejnye-obuekty-novoe-stroitelstvo' || data?.page?.slug === 'linear-facilities-new-construction') {
                meta = {
                    title: "Linear Facilities — New Construction | Completed Gas Pipeline Projects",
                    description: "Completed gas pipeline construction projects. Engineering, installation, and expertise.",
                    h1: "Linear Facility Construction. Gas pipelines, surveys, design documentation, and regulatory approvals."
                }
            } else if (data?.page?.slug === 'linejnye-obuekty-rekonstrukciya' || data?.page?.slug === 'linear-facilities-reconstruction') {
                meta = {
                    title: "Linear Facilities — Reconstruction | Gas Pipeline Retrofitting",
                    description: "Reconstruction and upgrade of gas pipelines of all pressure levels. Turnkey design and engineering.",
                    h1: "Gas Pipeline Reconstruction. On-site networks and gas distribution systems."
                }
            } else if (data?.page?.slug === 'gazoprovody-v-granicah-uchastka-zakazchika' || data?.page?.slug === 'on-site-gas-pipelines') {
                meta = {
                    title: "On-Site Gas Pipelines | Customer Boundary Gas Infrastructure",
                    description: "Design and construction of low, medium, and high-pressure on-site gas pipelines.",
                    h1: "Design and Construction of Industrial On-Site Gas Pipelines and Distribution Networks."
                }
            } else {
                meta = {
                    title: data?.page?.title ? `${data.page.title} | Energy Plus` : "Energy Plus",
                    description: data?.page?.title || "Energy Plus",
                    h1: data?.page?.title || "Energy Plus"
                }
            }
        }
    }
</script>

<SvelteSeo title="{meta.title}" description="{meta.description}"/>

<main class="container pt-4">
    <section class="section">
        <div class="columns">

            <div class="column" class:is-8={data.page.sidebar.length > 0}>
                <div class="box">
                    <h1 class="title">{meta.h1}</h1>
                    <DynamicZone content="{data.page.content}"/>
                </div>
            </div>

            {#if data.page.sidebar.length > 0}
                <div class="column is-4">
<!--                    <div class="box">-->
                        <DynamicZone content="{data.page.sidebar}"/>
<!--                    </div>-->
                </div>
            {/if}
        </div>
    </section>
</main>
