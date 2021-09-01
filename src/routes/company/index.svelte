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

<section class="section">
    <div class="container">
        <h1 class="title">{title}</h1>
        <div class="columns">
            <div class="column is-8">
                <ul class="columns">
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
                        <Link cls="button is-fullwidth" path="company" slug="referens-list" title="Референс-лист">
                            Референс-лист
                        </Link>
                    </li>
                </ul>

                <div class="is-divider"></div>

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
                <figure class="image is-16by9">
                    <iframe allowfullscreen class="has-ratio" frameborder="0"
                            height="360"
                            src="https://www.youtube.com/embed/p4ZEccCeO2E?showinfo=0" width="640"></iframe>
                </figure>
            </div>
        </div>
    </div>
</section>
