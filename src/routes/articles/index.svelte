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
    import HiddenH1 from "$lib/components/HiddenH1.svelte"

    export let data
    let title = 'Статьи'

    const meta = {
        title: "Статьи. Природный газ. Энергетика.",
        description: "Материалы по теплоснабжению, газификации промышленных объектов. Комментарии экспертов.",
        h1: "Полезные статьи для инженеров, энергетиков, инвесторов. Газификация промышленного объекта. Энергоснабжение и повышение энергоэффективности"
    }

</script>


<SvelteSeo title="{meta.title}" description="{meta.description}"/>
<HiddenH1>{meta.h1}</HiddenH1>


<main class="container pt-4">
    <section class="section">
        <div class="box">
            <h2 class="title">{title}</h2>
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
