<script context="module">
  import SvelteSeo from 'svelte-seo'
</script>

<script>
    import LazyImage from 'svelte-lazy-image'

    let title = 'Буклет о компании'
</script>

<SvelteSeo
        title="{title}"
/>

<section class="section">
    <div class="container">
        <h1 class="title">{title}</h1>
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
                    <iframe allowfullscreen class="has-ratio" frameborder="0"
                            height="360"
                            src="https://www.youtube.com/embed/L8tZf_xNUWQ?showinfo=0" width="640"></iframe>
                </figure>
            </div>
        </div>
    </div>
</section>
