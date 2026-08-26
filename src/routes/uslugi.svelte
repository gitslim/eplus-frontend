<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import CallbackForm from '$lib/components/CallbackForm.svelte'
    import HiddenH1 from "$lib/components/HiddenH1.svelte"
    import { t } from 'svelte-i18n'
    import { session } from '$app/stores'

    $: currentLocale = $session.locale || 'ru'
    $: p = currentLocale === 'en' ? '/en' : ''
</script>

<style lang="scss">

</style>


<SvelteSeo title="{$t('uslugi_page.meta_title')}" description="{$t('uslugi_page.meta_description')}"/>


<section class="section py-4">
    <div class="container">
        <h1 class="title">{$t('uslugi_page.meta_h1')}</h1>

        <h2 class="title has-text-centered">
            <a class="has-text-grey" href="{p}/page/proektirovanie">{$t('uslugi_page.sec_design')}
            </a>
        </h2>

        <div class="tile is-ancestor">
            <div class="tile is-parent is-vertical is-4">
                <article class="tile is-child box">
                    <h3 class="subtitle">
                        <a class=""
                           href="{p}/page/proektirovanie-magistralnyh-gazoprovodov-i-grs">{$t('uslugi_page.main_pipelines_title')}</a>
                    </h3>
                    <p>
                        {$t('uslugi_page.main_pipelines_desc')}
                    </p>
                </article>

                <article class="tile is-child box">
                    <h3 class="subtitle">
                        <a href="{p}/page/proektirovanie-gazoraspredelitelnyh-sistem-i-grp">{$t('uslugi_page.gas_dist_title')}</a>
                    </h3>
                    <p>
                        {$t('uslugi_page.gas_dist_desc')}
                    </p>
                </article>

                <article class="tile is-child box">
                    <h3 class="subtitle"><span>{$t('uslugi_page.supervision_title')}</span></h3>
                    <p>
                        {$t('uslugi_page.supervision_desc')}
                    </p>
                </article>
            </div>

            <div class="tile is-parent is-vertical is-4">
                <article class="tile is-child box">
                    <h3 class="subtitle">
                        <a href="{p}/page/vnutriploshadochnye-i-vnutrennie-gazoprovody">{$t('uslugi_page.gas_supply_title')}</a>
                    </h3>
                    <p>
                        {$t('uslugi_page.gas_supply_desc')}
                    </p>
                </article>

                <article class="tile is-child box">
                    <h3 class="subtitle">
                        <a href="{p}/page/proektirovanie-avtonomnyh-kotelnyh">{$t('uslugi_page.boilers_title')}</a>
                    </h3>
                    <p>
                        {$t('uslugi_page.boilers_desc')}
                    </p>
                </article>

                <div class="tile is-child ">
                    <CallbackForm titleText="{$t('form.need_consultation')}" btnText="{$t('form.we_will_call_you')}" white/>
                </div>

            </div>

            <div class="tile is-parent is-vertical is-4">
                <article class="tile is-child box">
                    <h3 class="subtitle"><a href="{p}/page/proektirovanie-energocentrov">{$t('uslugi_page.energy_centers_title')}</a></h3>
                    <p>
                        {$t('uslugi_page.energy_centers_desc')}
                    </p>
                </article>

                <article class="tile is-child box">
                    <h3 class="subtitle"><a href="{p}/page/individualnye-i-centralnye-teplovye-punkty">{$t('uslugi_page.heat_substations_title')}</a></h3>
                    <p>
                        {$t('uslugi_page.heat_substations_desc')}
                    </p>
                </article>

                <article class="tile is-child box">
                    <h3 class="subtitle">
                        <a href="{p}/page/funkcii-generalnogo-proektirovshika">{$t('uslugi_page.gen_designer_title')}</a>
                    </h3>
                    <p>
                        {$t('uslugi_page.gen_designer_desc')}
                    </p>
                </article>
            </div>
        </div>

        <h2 class="title has-text-centered pt-6">
            <a class="has-text-grey" href="{p}/page/stroitelstvo">{$t('uslugi_page.sec_construction')}</a>
        </h2>

        <div class="tile is-ancestor">
            <div class="tile is-parent is-vertical is-4">
                <article class="tile is-child box">
                    <h3 class="subtitle">
                        <a href="{p}/page/postavka-oborudovaniya">{$t('uslugi_page.equip_supply_title')}</a></h3>
                    <p>
                        {$t('uslugi_page.equip_supply_desc')}
                    </p>
                </article>

                <article class="tile is-child box">
                    <h3 class="subtitle">
                        <a href="{p}/page/stroitelno-montazhnye-raboty">{$t('uslugi_page.construction_title')}</a>
                    </h3>
                    <p>
                        {$t('uslugi_page.construction_desc')}
                    </p>
                </article>
            </div>

            <div class="tile is-parent is-vertical is-4">
                <article class="tile is-child box">
                    <h3 class="subtitle">
                        <a href="{p}/page/pusko-naladochnye-raboty">{$t('uslugi_page.commissioning_title')}</a>
                    </h3>
                    <p>
                        {$t('uslugi_page.commissioning_desc')}
                    </p>
                </article>
            </div>

            <div class="tile is-parent is-vertical is-4">
                <article class="tile is-child box">
                    <h3 class="subtitle">
                        <a href="{p}/page/funkcii-tehnicheskogo-zakazchika">{$t('uslugi_page.tech_customer_title')}</a>
                    </h3>
                    <p>
                        {$t('uslugi_page.tech_customer_desc')}
                    </p>
                </article>

                <div class="tile is-child ">
                    <CallbackForm titleText="{$t('form.need_consultation')}" btnText="{$t('form.we_will_call_you')}" white/>
                </div>
            </div>
        </div>

        <h2 class="title has-text-centered pt-6">
            <a class="has-text-grey" href="{p}/rasschitat-stoimost">{$t('uslugi_page.sec_express_calc')}</a>
        </h2>

        <div class="tile is-ancestor">
            <div class="tile is-parent is-vertical is-4">
                <article class="tile is-child box">
                    <h3 class="subtitle">
                        <a href="{p}/page/teplotehnicheskij-raschet">{$t('uslugi_page.thermal_calc_title')}</a></h3>
                    <p>
                        {$t('uslugi_page.thermal_calc_desc')}
                    </p>
                </article>
            </div>
        </div>

    </div>
</section>
