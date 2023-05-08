<script context="module">
    import SvelteSeo from "svelte-seo";
</script>

<script>
    import Link from "$lib/components/Link.svelte";
    import LazyImage from "svelte-lazy-image";
    import Icon from "fa-svelte";
    import { faFile } from "@fortawesome/free-regular-svg-icons";

    let title = "О компании";
</script>

<SvelteSeo {title} />

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
                    ООО «Энергия Плюс» - компания, оказывающая услуги по
                    проектированию и строительству инженерных систем. В первую
                    очередь – это системы газо-, тепло- и электроснабжения
                    объектов различного назначения, в том числе котельные и
                    мини-ТЭС.
                </div>
                <div class="block">
                    Наличие экспертизы в вопросах промышленной безопасности,
                    позволяет нам предоставлять инжиниринговые услуги по самым
                    высоким стандартам энергоэффективности, надежности,
                    автоматизации и экологичности, а двадцатилетний опыт работы
                    в отрасли помогает находить оптимальные технические решения,
                    оптимизировать затраты, прогнозировать риски, оперативно
                    формировать проектные группы и самое главное своевременно
                    предоставлять ожидаемый результат.
                </div>
                <div class="block">
                    Для достижения таких результатов мы успешно используем
                    EPC-контрактирование, как инструмент управления
                    строительством на всех этапах реализации проекта.
                    Комплексное управление проектированием и строительством
                    позволяет в значительной мере сократить сроки реализации
                    проекта и полностью исключить непредвиденные расходы
                    Заказчика. Более подробный перечень комплекса услуг - <Link
                        path="page"
                        slug="funkcii-tehnicheskogo-zakazchika">здесь</Link
                    >.
                </div>
                <div class="block">
                    Наша команда состоит из профессионалов: изыскателей,
                    проектировщиков, инженеров, монтажников и управленцев,
                    которые имеют все необходимые формы допуска и аттестаций на
                    право выполнения работ на опасных производственных объектах
                </div>

                <LazyImage
                    alt="История компании"
                    src="/images/company/history.jpg"
                />

                <h3 class="title has-text-centered pt-6">Презентации</h3>
                <div class="tile is-ancestor mb-3">
                    <div class="tile is-6 p-3">
                        <a
                            href="/presentation/Буклет%20с%20услугами%20в%20области%20газоснабжения.pdf"
                            target="_blank"
                            title="Буклет с услугами в области газоснабжения"
                        >
                            <figure class="image">
                                <LazyImage
                                    alt="Буклет с услугами в области газоснабжения"
                                    src="/presentation/gaz-cover.png"
                                />
                                <div class="is-overlay p-1">
                                    <span class="tag is-primary"
                                        >Газоснабжение</span
                                    >
                                </div>
                            </figure>
                        </a>
                    </div>
                    <div class="tile is-6 p-3">
                        <a
                            href="/presentation/Буклет%20с%20услугами%20в%20области%20энергетики.pdf"
                            target="_blank"
                            title="Буклет с услугами в области энергетики"
                        >
                            <figure class="image">
                                <LazyImage
                                    alt="Буклет с услугами в области энергетики"
                                    src="/presentation/energy-cover.png"
                                />
                                <div class="is-overlay p-1">
                                    <span class="tag is-primary"
                                        >Энергетика</span
                                    >
                                </div>
                            </figure>
                        </a>
                    </div>
                </div>

                <!-- <div class="box mt-4">
                     <h2 class="subtitle is-4">Презентации:</h2>
                     <ul class="panel-list">
                     <li>
                     <Icon icon={faFile} class="" />
                     <a
                     class="is-underlined has-text-link"
                     href="/presentation/Буклет%20с%20услугами%20в%20области%20газоснабжения.pdf"
                     target="_blank"
                     title="Буклет с услугами в области газоснабжения"
                     >
                     Буклет с услугами в области газоснабжения
                     </a>
                     </li>
                     <li>
                     <Icon icon={faFile} class="" />
                     <a
                     class="is-underlined has-text-link"
                     href="/presentation/Буклет%20с%20услугами%20в%20области%20энергетики.pdf"
                     target="_blank"
                     title="Буклет с услугами в области энергетики"
                     >
                     Буклет с услугами в области энергетики
                     </a>
                     </li>
                     </ul>
                     </div>
                -->
                <!-- <br /><br /> -->

                <!-- <h3 class="subtitle has-text-centered">Презентация (pdf)</h3>
                     <a
                     href="/presentation/Энергия%20Плюс.pdf"
                     target="_blank"
                     title="Презентация Энергия Плюс"
                     >
                     <figure class="image">
                     <LazyImage
                     alt="Презентация Энергия Плюс"
                     src="/presentation/presentation-cover.jpg"
                     />
                     </figure>
                     </a> -->
            </div>

            <div class="column">
                <figure class="image is-16by9">
                    <iframe
                        allowfullscreen
                        class="has-ratio"
                        frameborder="0"
                        height="360"
                        src="https://www.youtube.com/embed/L8tZf_xNUWQ?showinfo=0"
                        width="640"
                    />
                </figure>
                <div class="is-divider" />
                <!--                <figure class="image is-16by9">
                                    <iframe allowfullscreen class="has-ratio" frameborder="0"
                                            height="360"
                                            src="https://www.youtube.com/embed/p4ZEccCeO2E?showinfo=0" width="640"></iframe>
                                </figure>  -->
            </div>
        </div>
    </div>
</section>

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
