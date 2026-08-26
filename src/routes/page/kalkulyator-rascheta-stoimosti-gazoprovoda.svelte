<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import CalcGaz from '$lib/components/calc/CalcGaz.svelte'
    import HiddenH1 from "$lib/components/HiddenH1.svelte"
    import {t} from 'svelte-i18n'
</script>

<style>
    /* your styles go here */
</style>

<SvelteSeo title="{$t('calculators.pipeline_page.meta_title')}" description="{$t('calculators.pipeline_page.meta_description')}"/>
<HiddenH1>{$t('calculators.pipeline_page.meta_h1')}</HiddenH1>


<main class="main-content">
    <div class="container is-widescreen">
        <div class="columns">
            <div class="widget column">
                <h2 class="title">
                    <span><span>{$t('calculators.pipeline_page.title')}</span> </span><span class="heading-line"/>
                </h2>
            </div>
        </div>
        <div class="columns">
            <div class="column is-offset-1 is-8">
                <CalcGaz/>
            </div>
        </div>
    </div>
</main>
