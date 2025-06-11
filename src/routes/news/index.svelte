<script context="module">
    import SvelteSeo from 'svelte-seo'
    import CallbackForm from '$lib/components/CallbackForm.svelte'
    import SidebarRight from '$lib/components/SidebarRight.svelte'
    import {fetchEndpoint} from '$lib/utils'

    export const load = async ({fetch, page}) => {
        return await fetchEndpoint(fetch, '/ep/list-news-articles.json', {})
    }
</script>

<script>
    import NewsIndexItem from '$lib/components/NewsIndexItem.svelte'
    import HiddenH1 from "$lib/components/HiddenH1.svelte"

    export let data

    let title = 'Новости'

    const meta = {
        title: "Новости энергетики, природного газа. Изменения в стандартах, СНиП, ГОСТ по проектированию и строительству. Полезные материалы для инженеров, энергетиков и директоров предприятий",
        description: "Новостные материалы. Газификация. Промышленные котельные и энергоцентры. Электросетевой комплекс.",
        h1: "Новости энергетики России и мира. Новости нефтегазовой отрасли. Изменения в законодательстве и нормативных документах. Читать новости о природном газе, СПГ, ESG и политике"
    }

</script>


<SvelteSeo title="{meta.title}" description="{meta.description}"/>
<HiddenH1>{meta.h1}</HiddenH1>


<section class="section">
    <div class="container .is-widescreen">
        <h2 class="title">{title}</h2>

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
