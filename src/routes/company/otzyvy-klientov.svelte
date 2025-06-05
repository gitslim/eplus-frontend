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
    const meta = {
        title: 'Отзывы клиентов о работе компании «Энергия Плюс». Получите больше информации о компании, прежде чем заказать проект или монтаж котельной',
        description: 'Отзывы заказчиков о выполнении проектирования и строительства котельных, блочно-модульных котельных, газопроводов. сотни довольных клиентов — это гарантия качества',
        h1: 'Ознакомьтесь с отзывами наших заказчиков перед тем, как заказать проект котельной, газопровода. Купить блочно-модульную котельную.'
    }
    export let data
</script>

<style lang="scss">
  .section {
    margin-top: 30px;
  }
</style>

<SvelteSeo title="{meta.title}" description="{meta.description}"/>
<h1 style="position: absolute; clip-path: inset(100%); width: 1px; height: 1px; overflow: hidden;">{meta.h1}</h1>


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
