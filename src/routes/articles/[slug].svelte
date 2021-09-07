<script context="module">
    import SvelteSeo from 'svelte-seo'
    import {fetchEndpoint} from '$lib/utils'

    export const load = async ({fetch, page}) => {
        const {slug} = page.params
        return await fetchEndpoint(fetch, '/ep/get-article-by-slug.json', {slug})
    }
</script>

<script>
    import DynamicZone from '$lib/components/DynamicZone.svelte'
    import CallbackForm from '$lib/components/CallbackForm.svelte'
    import SidebarRight from '$lib/components/SidebarRight.svelte'

    export let data
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

<SvelteSeo
        title="{data.article.title}"
/>

<main class="container pt-4">
    <section class="section">

        <div class="columns">
            <div class="column is-8">
                <div class="box">
                    <h1 class="title">{data.article.title}</h1>
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