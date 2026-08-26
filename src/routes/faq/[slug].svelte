<script context="module">
    import SvelteSeo from 'svelte-seo'
    import {fetchEndpoint} from '$lib/utils'

    export const load = async ({fetch, page, session}) => {
        const {slug} = page.params
        const locale = session?.locale || 'ru'
        return await fetchEndpoint(fetch, '/ep/get-faq-by-slug.json', {slug, locale})
    }
</script>

<script>
    import DynamicZone from '$lib/components/DynamicZone.svelte'
    import ContactFormButton from '$lib/components/ContactFormButton.svelte'
    import {t} from 'svelte-i18n'

    export let data

    /**
     * TODO Временно. Удалить после добавления полей description и h1 в STRAPI
     */
    let meta = {
        title: data.faq.title, description: data.faq.title, h1: data.faq.title
    }

    if (data.faq.slug === "pochemu-sostavlenie-smetnoj-dokumentaczii-neobhodimo-poruchat-tolko-razrabotchiku-proekta-a-ne-frilanseru-ili-storonnemu-smetnomu-byuro" || data.faq.slug === "why-cost-estimation-documentation-must-be-entrusted-only-to-the-project-developer") {
        meta = {
            title: $t('faq_page.meta_estimate_title'),
            description: $t('faq_page.meta_estimate_desc'),
            h1: $t('faq_page.meta_estimate_h1')
        }
    }
</script>

<style>
    /*.message-header {*/
    /*    background-color: #f86923;*/
    /*}*/
</style>


<SvelteSeo title="{meta.title}" description="{meta.description}"/>

<article>
    <h1 class="title has-text-centered">{meta.h1}</h1>
    <DynamicZone content={data.faq.content}/>

    {#if data.faq.slug === "chto-ponimaetsya-pod-ohrannoj-zonoj-gazoprovoda" || data.faq.slug === "what-is-meant-by-the-gas-pipeline-protection-zone" || data.faq.title == "Что понимается под охранной зоной газопровода?" || data.faq.title == "What is meant by the gas pipeline protection zone?"}
        <div class="pt-4 knopka"
             style="text-align:center;">
            <ContactFormButton class="button is-primary is-large is-raunded button-raunded">
                <div slot="button"
                     style="font-size: 18px;
                                                font-weight: 600;
                                                line-height: 1.2em;"
                >{@html $t('faq_page.get_expert_consultation')}
                </div>
            </ContactFormButton>
        </div>
    {/if}

</article>
