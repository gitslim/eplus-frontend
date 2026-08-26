<script context="module">
    import SvelteSeo from 'svelte-seo'
    import CallbackForm from '$lib/components/CallbackForm.svelte'
    import SidebarRight from '$lib/components/SidebarRight.svelte'
    import {fetchEndpoint} from '$lib/utils'

    export const load = async ({fetch, page, session}) => {
        const locale = session?.locale || 'ru'
        return await fetchEndpoint(fetch, '/ep/list-articles.json', {locale})
    }
</script>

<script>
    import ArticleIndexItem from '$lib/components/ArticleIndexItem.svelte'
    import HiddenH1 from "$lib/components/HiddenH1.svelte"
    import { t } from 'svelte-i18n'

    export let data
</script>


<SvelteSeo title="{$t('utility_pages.articles.meta_title')}" description="{$t('utility_pages.articles.meta_description')}"/>
<HiddenH1>{$t('utility_pages.articles.meta_h1')}</HiddenH1>


<main class="container pt-4">
    <section class="section">
        <div class="box">
            <h2 class="title">{$t('utility_pages.articles.title')}</h2>
        </div>

        <div class="columns is-desktop">
            <div class="column is-8">
                <div class="columns is-multiline">
                    {#each data.articles as article, i}
                        <div class="column is-4">
                            <ArticleIndexItem {article}/>
                        </div>
                    {/each}
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
