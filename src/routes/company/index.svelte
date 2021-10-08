<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import Link from '$lib/components/Link.svelte'
    import LazyImage from 'svelte-lazy-image'

    let title = 'О компании'
</script>

<SvelteSeo
        title="{title}"
/>

<style>

 h1 {
    margin-top: 1em;
 }

@media screen and (max-device-width: 768px) {

  .block {
    padding: 0px 10px;
  }

  h1 {
    padding: 0px 10px;
  }

}
</style>

<section class="section">
    <div class="container">
        <h1 class="title">{title}</h1>
        <div class="columns">
            <div class="column is-8">
<!--            <ul class="columns">
                    <li class="column is-4">
                        <Link cls="button is-fullwidth" path="company" slug="history" title="История">История</Link>
                    </li>
                    <li class="column is-4">
                        <Link cls="button is-fullwidth" path="company" slug="dopuski-sro"
                              title="Допуски СРО и аттестаты">Допуски
                            СРО и аттестаты
                        </Link>
                    </li>
                    <li class="column is-4">
                        <Link cls="button is-fullwidth" path="page" slug="referens-list" title="Референс-лист">
                            Референс-лист
                        </Link>
                    </li>
                </ul>

                <div class="is-divider"></div>  -->


                            <div class="block">
                                ООО &laquo;Энергия Плюс&raquo; основано в&nbsp;2003&nbsp;году.
                            </div>
                            <div class="block">
                                С&nbsp;момента образования компания динамично развивается и&nbsp;успешно работает
                                на&nbsp;рынке инжиниринговых услуг. За&nbsp;это время накоплен уникальный опыт в&nbsp;
                                реализации проектов топливно-энергетического комплекса, создан потенциал управленческих,
                                инженерно-технических и&nbsp;рабочих кадров.
                            </div>
                            <div class="block">
                                Нами выполнены более 100 комплексных проектов, введены в&nbsp;эксплуатацию десятки
                                энергетических объектов. Мы&nbsp;сотрудничаем с&nbsp;такими компаниями,
                                как ОАО Корпорация &laquo;Трансстой&raquo;, ОАО &laquo;Союздорпроект&raquo;,
                                ООО &laquo;Росмикс&raquo;, ОАО &laquo;Мосгаз&raquo;, ГУП МО&nbsp;&laquo;Мособлгаз&raquo;
                                и&nbsp;другими.
                            </div>
                            <div class="block">
                                Партнёры отмечают стабильность, надёжность и&nbsp;качество сотрудничества с&nbsp;
                                ООО &laquo;Энергия Плюс&raquo;, которое достигается комплексным подходом к&nbsp;
                                реализации проектов, высоким уровнем качества и&nbsp;использованием передовых технологий.
                            </div>

                            <LazyImage
                                    alt="История компании"
                                    src="/images/company/history.jpg"
                            />



                <br><br>

                <h3 class="subtitle has-text-centered">Презентация (pdf)</h3>
                <a href="/presentation/Энергия%20Плюс.pdf" target="_blank" title="Презентация Энергия Плюс">
                    <figure class="image">
                        <LazyImage
                                alt="Презентация Энергия Плюс"
                                src="/presentation/presentation-cover.jpg"
                        />
                    </figure>
                </a>
            </div>

            <div class="column">
                <figure class="image is-16by9">
                    <iframe allowfullscreen class="has-ratio" frameborder="0"
                            height="360"
                            src="https://www.youtube.com/embed/L8tZf_xNUWQ?showinfo=0" width="640"></iframe>
                </figure>
                <div class="is-divider"></div>
<!--                <figure class="image is-16by9">
                    <iframe allowfullscreen class="has-ratio" frameborder="0"
                            height="360"
                            src="https://www.youtube.com/embed/p4ZEccCeO2E?showinfo=0" width="640"></iframe>
                </figure>  -->
            </div>
        </div>
    </div>
</section>
