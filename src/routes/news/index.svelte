<script context="module">
    import SvelteSeo from 'svelte-seo'
    import CallbackForm from '$lib/components/CallbackForm.svelte'
    import SidebarRight from '$lib/components/SidebarRight.svelte'
    import {fetchEndpoint} from '$lib/utils'

    export const load = async ({fetch, page}) => {
        return await fetchEndpoint(fetch, '/ep/list-news-articles', {})
    }
</script>

<script>
    import NewsIndexItem from '$lib/components/NewsIndexItem.svelte'

    export let data

    let title = 'Новости'
</script>

<SvelteSeo {title}/>

<section class="section">
    <div class="container .is-widescreen">
        <h1 class="title">{title}</h1>

        <div class="columns is-desktop">
            <div class="column is-8">
                <div class="columns is-multiline">
                    {#each data.newsArticles as article, i}
                        <div class="column is-4">
                            <NewsIndexItem {article}/>
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
    </div>
</section>
