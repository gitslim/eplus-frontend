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

    /**
     * TODO Временно. Удалить после добавления полей description и h1 в STRAPI
     */
    let meta = {
        title:data.article.title, description: data.article.title, h1: data.article.title
    }

    if (data.article.slug === "pochemu-sostavlenie-smetnoj-dokumentacii-neobhodimo-poruchat-tolko-razrabotchiku-proekta-a-ne-frilanseru-ili-storonnemu-smetnomu-byuro") {
        meta = {
            title: 'Сметная документация. Котельные и газопроводы. Особенности составления сметы. Почему доверить смету лучше разработчику проекта',
            description: 'Сметную документацию для объекта энергетики лучше доверить специалистам, разрабатывающим проект. Материал написан опытным энергетиком. Более 20 лет работы со сметами',
            h1: 'Разработка сметной документации для котельной или газопровода требует полного погружения в специфику проекта. «Энергия Плюс» — сметы для промышленного объекта любой сложности'
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