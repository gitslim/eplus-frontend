<script context="module">
    import SvelteSeo from 'svelte-seo'
    import {fetchEndpoint} from '$lib/utils'

    export const load = async ({fetch}) => {
        return await fetchEndpoint(fetch, '/ep/list-testimonials.json', {})
    }
</script>

<script>
    import TestimonialsGallery from '$lib/components/TestimonialsGallery.svelte'
    import HiddenH1 from "$lib/components/HiddenH1.svelte"
    import { t } from 'svelte-i18n'
    import { session } from '$app/stores'

    $: currentLocale = $session.locale || 'ru'
    $: p = currentLocale === 'en' ? '/en' : ''

    export let data
</script>

<style lang="scss">
  .section {
    margin-top: 30px;
  }
</style>

<SvelteSeo title="{$t('company_page.meta_testimonials_title')}" description="{$t('company_page.meta_testimonials_description')}"/>
<HiddenH1>{$t('company_page.meta_testimonials_h1')}</HiddenH1>


<main class="container">
    <section class="section">
        <div class="widget">
            <h2 class="title"><span>{$t('company_page.testimonials_title')} </span><span class="heading-line"/></h2>
        </div>
    </section>
    <section class="section carusel-wrap">
        <TestimonialsGallery items={data.testimonials}/>
    </section>
</main>
