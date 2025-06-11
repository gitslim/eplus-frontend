<script context="module">
  import SvelteSeo from 'svelte-seo'
</script>

<script>
    import LazyImage from 'svelte-lazy-image'
    import HiddenH1 from "$lib/components/HiddenH1.svelte"

    let title = 'История компании'
    const meta = {
        title: "История компании. Энергия Плюс. Инжиниринг полного цикла",
        description: "Энергия Плюс — проектная компания. Разработка проектов. Монтаж. Газопровод. Газовая промышленная котельная. Производство и поставка блочно-модульных котельных",
        h1: "Инжиниринг полного цикла. EPC-контракт. Проектирование и монтаж котельной. Москва и МО. Собственное производство котельного оборудования. БМК. Дизельное топливо и природный газ. Расчет стоимости проекта"
    }

</script>


<SvelteSeo title="{meta.title}" description="{meta.description}"/>
<HiddenH1>{meta.h1}</HiddenH1>


<section class="section">
    <div class="container">
        <h2 class="title">{title}</h2>
        <div class="columns">
            <div class="column is-8">
                <div class="block">
                    ООО «Энергия Плюс» основано в 2003 году.
                </div>
                <div class="block">
                    С момента образования компания динамично развивается и успешно работает на рынке инжиниринговых
                    услуг. За это
                    время накоплен уникальный опыт в реализации проектов топливно-энергетического комплекса, создан
                    потенциал
                    управленческих, инженерно-технических и рабочих кадров.
                </div>
                <div class="block">
                    Нами выполнены более 100 комплексных проектов, введены в эксплуатацию десятки энергетических
                    объектов. Мы
                    сотрудничаем с такими компаниями, как ОАО Корпорация «Трансстой», ОАО «Союздорпроект», ООО
                    «Росмикс», ОАО
                    «Мосгаз», ГУП МО «Мособлгаз» и другими.
                </div>
                <div class="block">
                    Партнёры отмечают стабильность, надёжность и качество сотрудничества с ООО «Энергия Плюс», которое
                    достигается
                    комплексным подходом к реализации проектов, высоким уровнем качества и использованием передовых
                    технологий.
                </div>

                <LazyImage
                        alt="История компании"
                        src="/images/company/history.jpg"
                />
            </div>

            <div class="column">
                <figure class="image is-16by9">
                    <iframe allowfullscreen
                            class="has-ratio"
                            height="360"
                            src="https://www.youtube.com/embed/L8tZf_xNUWQ?showinfo=0"
                            width="640"></iframe>
                </figure>
            </div>
        </div>
    </div>
</section>
