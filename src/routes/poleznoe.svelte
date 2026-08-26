<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import CallbackForm from '$lib/components/CallbackForm.svelte'
    import SidebarRight from '$lib/components/SidebarRight.svelte'
    import HiddenH1 from "$lib/components/HiddenH1.svelte"
    import { t } from 'svelte-i18n'
    import { session } from '$app/stores'

    $: currentLocale = $session.locale || 'ru'
    $: p = currentLocale === 'en' ? '/en' : ''
</script>

<SvelteSeo title="{$t('utility_pages.poleznoe.meta_title')}" description="{$t('utility_pages.poleznoe.meta_description')}"/>
<HiddenH1>{$t('utility_pages.poleznoe.meta_h1')}</HiddenH1>


<style lang="scss">
  .content-block {
    margin-right: 10px;
  }

  .block-sidebar {
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
  }

  .builder-element-inside {
    padding-left: 15px;
  }

  a {
    color: #202020;
    text-decoration: none;

    &:hover {
      color: #f86923;
    }
  }

  h3 {
    font-family: "Montserrat", sans-serif;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.6;
    color: #202020;
    margin-top: 12.5px;
    margin-bottom: 12.5px;
  }
</style>

<main class="container .is-widescreen">
    <div class="columns is-desktop content__wrap">
        <div class="content-block column is-8">
            <section>
                <div class="widget">
                    <h2 class="title">
                        <span><span>{$t('utility_pages.poleznoe.title')}</span></span><span class="heading-line"/>
                    </h2>
                </div>
                <div class="builder-element-inside">
                    <div class="builder-element-children-wrapper">
                        <h3><a href="{p}/faq">{$t('utility_pages.poleznoe.faq')}</a></h3>
                        <h3><a href="{p}/rasschitat-stoimost">{$t('utility_pages.poleznoe.calculators')}</a></h3>
                        <h3>
                            <a href="{p}/page/kalkulyator-rascheta-stoimosti-gazoprovoda">{$t('utility_pages.poleznoe.pipeline_calc')}</a>
                        </h3>
                        <h3>
                            <a href="{p}/page/kalkulyator-rascheta-stoimosti-stroitelstva-i-proektirovaniya-kotelnoj">{$t('utility_pages.poleznoe.boiler_calc')}</a>
                        </h3>
                        <h3><a href="{p}/documents">{$t('utility_pages.poleznoe.documents')}</a></h3>
                        <h3><a href="{p}/articles">{$t('utility_pages.poleznoe.articles')}</a></h3>
                    </div>
                </div>
            </section>
        </div>
        <div class="column is-4 mt-5">
            <aside class="aside__right">
                <SidebarRight/>
                <CallbackForm white/>
            </aside>
        </div>
    </div>
</main>
