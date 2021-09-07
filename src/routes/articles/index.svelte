<script context="module">
    import SvelteSeo from 'svelte-seo'
    import CallbackForm from '$lib/components/CallbackForm.svelte'
    import SidebarRight from '$lib/components/SidebarRight.svelte'
    import {fetchEndpoint} from '$lib/utils'

    export const load = async ({fetch, page}) => {
        return await fetchEndpoint(fetch, '/ep/list-articles.json', {})
    }
</script>

<script>
    import ArticleIndexItem from '$lib/components/ArticleIndexItem.svelte'

    export let data
    let title = 'Статьи'
</script>

<SvelteSeo {title}/>

<main class="container pt-4">
    <section class="section">
        <div class="box">
            <h1 class="title">{title}</h1>
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
