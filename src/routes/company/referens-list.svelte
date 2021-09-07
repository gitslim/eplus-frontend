<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import website from '$lib/config/website';
    const {siteUrl} = website

    let title = 'Референс-лист'
</script>

<SvelteSeo
        title="{title}"
/>

<section class="section">
    <div class="container">
        <h1 class="title">{title}</h1>
        <div class="columns">
            <div class="column is-8">
                <figure class="image is-4by5">
                    <iframe title="Референт-лист"
                            class="has-ratio"
                            src="https://docs.google.com/gview?embedded=true&amp;url={siteUrl}/docs/Референс-лист.pdf"></iframe>
                </figure>
            </div>

            <div class="column">
                <figure class="image is-16by9">
                    <iframe allowfullscreen
                            class="has-ratio"
                            width="640"
                            height="360"
                            src="https://www.youtube.com/embed/L8tZf_xNUWQ?showinfo=0"></iframe>
                </figure>
            </div>
        </div>
    </div>
</section>
