<script context="module">
    import {fetchEndpoint} from '$lib/utils'

    export const load = async ({fetch}) => {
        return await fetchEndpoint(fetch, '/ep/list-testimonials', {})
    }
</script>

<script>
    import VideoHero from '$lib/components/VideoHero.svelte'
    import FullEngineering from '$lib/components/FullEngineering.svelte'
    import MobileHero from '$lib/components/MobileHero.svelte'
    import ServiceCard from '$lib/components/ServiceCard.svelte'
    import TestimonialsCarousel from '$lib/components/TestimonialsCarousel.svelte'
    import ProjectsCarousel from '$lib/components/ProjectsCarousel.svelte'
    import PortfolioCounters from '$lib/components/PortfolioCounters.svelte'
    import {showModal} from '$lib/stores.js'

    export let data
</script>

<style>

</style>

<MobileHero>
    <div class="video-head container has-text-centered py-4" slot="head">
        <p class="title has-text-white">
            Проектирование и строительство объектов энергетики и систем газораспределения
        </p>
        <br/>
        <p class="subtitle">
            <button
                    class="button is-white"
                    on:click={() => showModal.set(true)}>Заказать проект
            </button>
        </p>
    </div>
</MobileHero>

<VideoHero video="/video/hero-video.mp4">
    <div class="video-head container has-text-centered py-4" slot="head">
        <p class="title has-text-white">
            Проектирование и строительство объектов энергетики и систем газораспределения
        </p>
        <br/>
        <p class="subtitle">
            <button
                    class="button is-primary"
                    on:click={() => showModal.set(true)}>Заказать проект
            </button>
        </p>
    </div>
</VideoHero>

<section class="section">
    <div class="container">
        <div class="columns">
            <div class="column">
                <ServiceCard
                        image="/images/Магистральные газопроводы.jpg"
                        path="page"
                        slug="proektirovanie-magistralnyh-gazoprovodov-i-grs"
                        title="Магистральные газопроводы"/>
            </div>
            <div class="column">
                <ServiceCard
                        image="/images/Газораспределительные системы.jpg"
                        path="page"
                        slug="proektirovanie-gazoraspredelitelnyh-sistem-i-grp"
                        title="Газораспределительные системы"/>
            </div>
            <div class="column">
                <ServiceCard
                        image="/images/Теплоэнергетика.jpg"
                        path="page"
                        slug="teplovye-punkty"
                        title="Теплоэнергетика"/>
            </div>
        </div>

        <div class="is-divider" data-content="Комплексный подход"/>
        <FullEngineering/>
        <div class="is-divider" data-content="Примеры выполненных проектов"/>
        <ProjectsCarousel/>
        <div class="is-divider" data-content="Цифры"/>
        <PortfolioCounters/>
        <div class="is-divider" data-content="Отзывы клиентов"/>
        <TestimonialsCarousel items={data.testimonials}/>
    </div>
</section>
