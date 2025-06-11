<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import LazyImage from 'svelte-lazy-image'
    import Lightbox from 'svelte-lightbox/src/Lightbox.svelte'
    import HiddenH1 from "$lib/components/HiddenH1.svelte"

    let title = 'Допуски СРО и аттестаты'

    const meta = {
        title: "Допуски СРО и аттестаты. Инжиниринговая компания Энергия Плюс",
        description: "документы, необходимые для проектирования газопроводов и котельных. Допуски СРО для монтажа промышленных газовых котельных. Сертифицированная БМК на комбинированном топливе. Поставка и монтаж БМК",
        h1: "Допуски СРО и аттестаты для выполнения проектных и монтажных работ. Газопроводы малого, среднего и высокого давления. Котельные газовые. Котельные дизельные. Получение технических условий на подключение к газу. Расчет МЧРГ. ТТР и ТУ «Мосгаз», «Мособлгаз»"
    }

</script>

<SvelteSeo title="{meta.title}" description="{meta.description}"/>
<HiddenH1>{meta.h1}</HiddenH1>

<section class="section">
    <div class="container">
        <h2 class="title">{title}</h2>
        <div class="columns">
            <div class="column is-8">
                <h2 class="subtitle">Допуски СРО</h2>
                <div class="columns">
                    <div class="column is-4">
                        <Lightbox>
                            <LazyImage
                                    src="/images/company/sro-1.jpg"
                            />
                        </Lightbox>
                    </div>
                    <div class="column is-4">
                        <Lightbox>
                            <LazyImage
                                    src="/images/company/sro-2.jpg"
                            />
                        </Lightbox>
                    </div>
                    <div class="column is-4">
                        <Lightbox>
                            <LazyImage
                                    src="/images/company/sro-3.jpg"
                            />
                        </Lightbox>
                    </div>
                </div>

                <h2 class="subtitle">Сертификация ISO 9001</h2>
                <div class="columns">
                    <div class="column is-4">
                        <Lightbox>
                            <LazyImage
                                    src="/images/company/iso-1.jpg"
                            />
                        </Lightbox>
                    </div>
                    <div class="column is-4">
                        <Lightbox>
                            <LazyImage
                                    src="/images/company/iso-2.jpg"
                            />
                        </Lightbox>
                    </div>
                </div>

                <h2 class="subtitle">Аттестаты сварочных технологий</h2>
                <div class="columns">
                    <div class="column is-3">
                        <Lightbox>
                            <LazyImage
                                    src="/images/company/svar-tech-1.jpg"
                            />
                        </Lightbox>
                    </div>
                    <div class="column is-3">
                        <Lightbox>
                            <LazyImage
                                    src="/images/company/svar-tech-2.jpg"
                            />
                        </Lightbox>
                    </div>
                    <div class="column is-3">
                        <Lightbox>
                            <LazyImage
                                    src="/images/company/svar-tech-3.jpg"
                            />
                        </Lightbox>
                    </div>
                    <div class="column is-3">
                        <Lightbox>
                            <LazyImage
                                    src="/images/company/svar-tech-4.jpg"
                            />
                        </Lightbox>
                    </div>
                </div>

                <h2 class="subtitle">Аттестаты сварочного оборудования</h2>
                <div class="columns">
                    <div class="column is-4">
                        <Lightbox>
                            <LazyImage
                                    src="/images/company/svar-obor-1.jpg"
                            />
                        </Lightbox>
                    </div>
                    <div class="column is-4">
                        <Lightbox>
                            <LazyImage
                                    src="/images/company/svar-obor-2.jpg"
                            />
                        </Lightbox>
                    </div>
                </div>

            </div>

            <div class="column">
                <figure class="image is-16by9">
                    <iframe title="Презентация компании Энергия Плюс"
                            allowfullscreen
                            class="has-ratio"
                            height="360"
                            src="https://www.youtube.com/embed/L8tZf_xNUWQ?showinfo=0"
                            width="640"></iframe>
                </figure>
            </div>
        </div>
    </div>
</section>
