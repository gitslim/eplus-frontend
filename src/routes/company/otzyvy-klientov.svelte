<script context="module">
    import SvelteSeo from 'svelte-seo'
    import {fetchEndpoint} from '$lib/utils'

    export const load = async ({fetch}) => {
        return await fetchEndpoint(fetch, '/ep/list-testimonials.json', {})
    }
</script>

<script>
    import TestimonialsGallery from '$lib/components/TestimonialsGallery.svelte'

    let title = 'Отзывы клиентов'
    export let data
</script>

<style lang="scss">
  .section {
    margin-top: 30px;
  }
</style>

<SvelteSeo {title}/>

<main class="container">
    <section class="section">
        <div class="widget">
            <h2 class="title"><span>{title} </span><span class="heading-line"/></h2>
        </div>
    </section>
    <section class="section carusel-wrap">
        <TestimonialsGallery items={data.testimonials}/>
    </section>
</main>
