<script context="module">
  import SvelteSeo from 'svelte-seo'
</script>

<script>
    import LazyImage from 'svelte-lazy-image'
    import HiddenH1 from "$lib/components/HiddenH1.svelte"
    import { t } from 'svelte-i18n'
    import { session } from '$app/stores'

    $: currentLocale = $session.locale || 'ru'
    $: p = currentLocale === 'en' ? '/en' : ''
</script>


<SvelteSeo title="{$t('company_page.meta_history_title')}" description="{$t('company_page.meta_history_description')}"/>
<HiddenH1>{$t('company_page.meta_history_h1')}</HiddenH1>


<section class="section">
    <div class="container">
        <h2 class="title">{$t('company_page.history_title')}</h2>
        <div class="columns">
            <div class="column is-8">
                <div class="block">
                    {$t('company_page.history_p1')}
                </div>
                <div class="block">
                    {$t('company_page.history_p2')}
                </div>
                <div class="block">
                    {$t('company_page.history_p3')}
                </div>
                <div class="block">
                    {$t('company_page.history_p4')}
                </div>

                <LazyImage
                        alt="{$t('company_page.history_img_alt')}"
                        src="/images/company/history.jpg"
                />
            </div>

            <div class="column">
                <figure class="image is-16by9">
                    <iframe allowfullscreen
                            class="has-ratio"
                            height="360"
                            src="https://www.youtube.com/embed/L8tZf_xNUWQ?showinfo=0"
                            width="640"></iframe>
                </figure>
            </div>
        </div>
    </div>
</section>
