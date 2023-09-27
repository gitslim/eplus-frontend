<script context="module">
    import {fetchEndpoint} from '$lib/utils'

    export const load = async ({fetch}) => {
        return await fetchEndpoint(fetch, '/ep/list-testimonials.json', {})
    }
</script>

<script>
    import VideoHero from '$lib/components/VideoHero.svelte'
    import FullEngineering from '$lib/components/FullEngineering.svelte'
    import MobileHero from '$lib/components/MobileHero.svelte'
    import ServiceCard from '$lib/components/ServiceCard.svelte'
    import ProjectsCarousel from '$lib/components/ProjectsCarousel.svelte'
    import PortfolioCounters from '$lib/components/PortfolioCounters.svelte'
    import SvelteSeo from 'svelte-seo'
    import website from '$lib/config/website'
    import BtnZayavka from '$lib/components/BtnZayavka.svelte'
    import Icon from 'fa-svelte'
    import {faPhone} from '@fortawesome/free-solid-svg-icons'
    import Link from '$lib/components/Link.svelte'
    import TestimonialsGallery from '$lib/components/TestimonialsGallery.svelte'

    export let data

    const testimonialsOrder = ['ИНСТРОЙПРОЕКТ', 'ИНТЕР РАО ИНЖИНИРИНГ', 'АО "САЛЮТ"']
    const testimonials = data.testimonials.sort((a, b) => {
        let ia = testimonialsOrder.indexOf(a.customer)
        let ib = testimonialsOrder.indexOf(b.customer)
        ia = (ia === -1) ? 1000 : ia
        ib = (ib === -1) ? 1000 : ib
        return ia - ib
    }).slice(0, 3)

    const {siteTitle} = website
</script>

<SvelteSeo title="{siteTitle}"/>

<MobileHero>
    <div class="video-head container has-text-centered py-4" slot="head">
        <p class="subtitle has-text-white">
            Проектирование, строительство систем газоснабжения и объектов энергетики
        </p>
        <div class="columns pt-4">
            <div class="column is-8-mobile is-offset-2-mobile">
                <a class="button is-rounded zphone" href="tel:+74957907697">
                    <Icon icon="{faPhone}"/>
                    <span class="is-white callibri_phone zphone">+7 (495) 790-76-97</span>
                </a>
            </div>

            <div class="column is-10-mobile is-offset-1-mobile">
                <BtnZayavka btnWhite="{true}" btnText="Заказать проект"/>
                <!--                <Link cls="button is-rounded is-focused" slug="uslugi" title="Перечень выполняемых работ">Перечень выполняемых работ</Link>-->
            </div>
        </div>
    </div>
</MobileHero>

<VideoHero video="/video/hero-video.mp4">
    <div class="video-head container has-text-centered py-4" slot="head">
        <p class="title has-text-white">
            Проектирование, строительство систем газоснабжения и объектов энергетики
        </p>
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <!--                <BtnZayavka btnText="Заказать проект"/>-->
                <Link cls="button is-focused" slug="uslugi" title="Перечень выполняемых работ">Перечень выполняемых
                    работ
                </Link>
            </div>
        </div>
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
                        slug="proektirovanie-avtonomnyh-kotelnyh"
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
        <TestimonialsGallery items={testimonials}/>
        <div class="has-text-centered py-4">
            <Link cls="button is-primary is-radiusless is-medium" path="company" slug="otzyvy-klientov">
                Все отзывы ...
            </Link>
        </div>
    </div>
</section>
