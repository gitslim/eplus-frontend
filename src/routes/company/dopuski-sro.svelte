<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import LazyImage from 'svelte-lazy-image'
    import Lightbox from 'svelte-lightbox/src/Lightbox.svelte'
    import HiddenH1 from "$lib/components/HiddenH1.svelte"
    import { t } from 'svelte-i18n'
    import { session } from '$app/stores'

    $: currentLocale = $session.locale || 'ru'
    $: p = currentLocale === 'en' ? '/en' : ''
</script>

<SvelteSeo title="{$t('company_page.meta_sro_title')}" description="{$t('company_page.meta_sro_description')}"/>
<HiddenH1>{$t('company_page.meta_sro_h1')}</HiddenH1>

<section class="section">
    <div class="container">
        <h2 class="title">{$t('company_page.sro_title')}</h2>
        <div class="columns">
            <div class="column is-8">
                <h2 class="subtitle">{$t('company_page.sro_subtitle_sro')}</h2>
                <div class="columns">
                    <div class="column is-4">
                        <Lightbox>
                            <LazyImage
                                    src="/images/company/sro-1.jpg"
                            />
                        </Lightbox>
                    </div>
                    <div class="column is-4">
                        <Lightbox>
                            <LazyImage
                                    src="/images/company/sro-2.jpg"
                            />
                        </Lightbox>
                    </div>
                    <div class="column is-4">
                        <Lightbox>
                            <LazyImage
                                    src="/images/company/sro-3.jpg"
                            />
                        </Lightbox>
                    </div>
                </div>

                <h2 class="subtitle">{$t('company_page.sro_subtitle_iso')}</h2>
                <div class="columns">
                    <div class="column is-4">
                        <Lightbox>
                            <LazyImage
                                    src="/images/company/iso-1.jpg"
                            />
                        </Lightbox>
                    </div>
                    <div class="column is-4">
                        <Lightbox>
                            <LazyImage
                                    src="/images/company/iso-2.jpg"
                            />
                        </Lightbox>
                    </div>
                </div>

                <h2 class="subtitle">{$t('company_page.sro_subtitle_welding_tech')}</h2>
                <div class="columns">
                    <div class="column is-3">
                        <Lightbox>
                            <LazyImage
                                    src="/images/company/svar-tech-1.jpg"
                            />
                        </Lightbox>
                    </div>
                    <div class="column is-3">
                        <Lightbox>
                            <LazyImage
                                    src="/images/company/svar-tech-2.jpg"
                            />
                        </Lightbox>
                    </div>
                    <div class="column is-3">
                        <Lightbox>
                            <LazyImage
                                    src="/images/company/svar-tech-3.jpg"
                            />
                        </Lightbox>
                    </div>
                    <div class="column is-3">
                        <Lightbox>
                            <LazyImage
                                    src="/images/company/svar-tech-4.jpg"
                            />
                        </Lightbox>
                    </div>
                </div>

                <h2 class="subtitle">{$t('company_page.sro_subtitle_welding_equip')}</h2>
                <div class="columns">
                    <div class="column is-4">
                        <Lightbox>
                            <LazyImage
                                    src="/images/company/svar-obor-1.jpg"
                            />
                        </Lightbox>
                    </div>
                    <div class="column is-4">
                        <Lightbox>
                            <LazyImage
                                    src="/images/company/svar-obor-2.jpg"
                            />
                        </Lightbox>
                    </div>
                </div>

            </div>

            <div class="column">
                <figure class="image is-16by9">
                    <iframe title="{$t('company_page.video_title')}"
                            allowfullscreen
                            class="has-ratio"
                            height="360"
                            src="https://www.youtube.com/embed/L8tZf_xNUWQ?showinfo=0"
                            width="640"></iframe>
                </figure>
            </div>
        </div>
    </div>
</section>
