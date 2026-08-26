<script context="module">
    import SvelteSeo from "svelte-seo";
</script>

<script>
    import Link from "$lib/components/Link.svelte";
    import LazyImage from "svelte-lazy-image";
    import Icon from "fa-svelte";
    import { faFile } from "@fortawesome/free-regular-svg-icons";
    import HiddenH1 from "$lib/components/HiddenH1.svelte"
    import { t } from "svelte-i18n";
    import { session } from "$app/stores";

    $: currentLocale = $session.locale || "ru";
    $: p = currentLocale === "en" ? "/en" : "";
</script>


<SvelteSeo title="{$t('company_page.meta_about_title')}" description="{$t('company_page.meta_about_description')}"/>
<HiddenH1>{$t('company_page.meta_about_h1')}</HiddenH1>

<section class="section">
    <div class="container">
        <h2 class="title">{$t('company_page.about_title')}</h2>
        <div class="columns">
            <div class="column is-8">
                <div class="block">
                    {$t('company_page.about_p1')}
                </div>
                <div class="block">
                    {$t('company_page.about_p2')}
                </div>
                <div class="block">
                    {@html $t('company_page.about_p3', {values: {p}})}
                </div>
                <div class="block">
                    {$t('company_page.about_p4')}
                </div>

                <h3 class="title has-text-centered pt-6">{$t('company_page.presentations_title')}</h3>
                <div class="tile is-ancestor mb-3">
                    <div class="tile is-6 p-3">
                        <a
                            href="/presentation/Буклет%20с%20услугами%20в%20области%20газоснабжения.pdf"
                            target="_blank"
                            title="{$t('company_page.booklet_gas_title')}"
                        >
                            <figure class="image">
                                <LazyImage
                                    alt="{$t('company_page.booklet_gas_title')}"
                                    src="/presentation/gaz-cover.png"
                                />
                                <div class="is-overlay p-1">
                                    <span class="tag is-primary"
                                        >{$t('company_page.tag_gas')}</span
                                    >
                                </div>
                            </figure>
                        </a>
                    </div>
                    <div class="tile is-6 p-3">
                        <a
                            href="/presentation/Буклет%20с%20услугами%20в%20области%20энергетики.pdf"
                            target="_blank"
                            title="{$t('company_page.booklet_energy_title')}"
                        >
                            <figure class="image">
                                <LazyImage
                                    alt="{$t('company_page.booklet_energy_title')}"
                                    src="/presentation/energy-cover.png"
                                />
                                <div class="is-overlay p-1">
                                    <span class="tag is-primary"
                                        >{$t('company_page.tag_energy')}</span
                                    >
                                </div>
                            </figure>
                        </a>
                    </div>
                </div>
            </div>

            <div class="column">
                <figure class="image is-16by9">
                    <iframe
                        allowfullscreen
                        class="has-ratio"
                        frameborder="0"
                        height="360"
                        src="https://www.youtube.com/embed/L8tZf_xNUWQ?showinfo=0"
                        width="640"
                    />
                </figure>
                <div class="is-divider" />
            </div>
        </div>
    </div>
</section>

<style>
    h1 {
        margin-top: 1em;
    }

    @media screen and (max-device-width: 768px) {
        .block {
            padding: 0px 10px;
        }

        h1 {
            padding: 0px 10px;
        }
    }
</style>
