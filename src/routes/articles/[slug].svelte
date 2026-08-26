<script context="module">
    import SvelteSeo from 'svelte-seo'
    import {fetchEndpoint} from '$lib/utils'

    export const load = async ({fetch, page, session}) => {
        const {slug} = page.params
        const locale = session?.locale || 'ru'
        return await fetchEndpoint(fetch, '/ep/get-article-by-slug.json', {slug, locale})
    }
</script>

<script>
    import DynamicZone from '$lib/components/DynamicZone.svelte'
    import CallbackForm from '$lib/components/CallbackForm.svelte'
    import SidebarRight from '$lib/components/SidebarRight.svelte'
    import {t} from 'svelte-i18n'

    export let data

    /**
     * TODO Временно. Удалить после добавления полей description и h1 в STRAPI
     */
    let meta = {
        title: data.article.title, description: data.article.title, h1: data.article.title
    }

    if (data.article.slug === "pochemu-sostavlenie-smetnoj-dokumentacii-neobhodimo-poruchat-tolko-razrabotchiku-proekta-a-ne-frilanseru-ili-storonnemu-smetnomu-byuro" || data.article.slug === "why-cost-estimation-documentation-must-be-entrusted-only-to-the-project-developer") {
        meta = {
            title: $t('articles_page.meta_estimate_title'),
            description: $t('articles_page.meta_estimate_desc'),
            h1: $t('articles_page.meta_estimate_h1')
        }
    }
</script>

<style lang="scss">
  .aside__right {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 370px;
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
  }
</style>


<SvelteSeo title="{meta.title}" description="{meta.description}"/>


<main class="container pt-4">
    <section class="section">

        <div class="columns">
            <div class="column is-8">
                <div class="box">
                    <h1 class="title">{meta.h1}</h1>
                    <DynamicZone content="{data.article.content}"/>
                </div>
            </div>

            <div class="column is-4">
                <aside class="aside__right">
                    <SidebarRight/>
                    <CallbackForm white/>
                </aside>
            </div>

        </div>
    </section>
</main>