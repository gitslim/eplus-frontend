<script context="module">
    import {fetchEndpoint} from '$lib/utils'

    export const load = async ({fetch, page}) => {
        const {slug} = page.params
        return await fetchEndpoint(fetch, '/ep/get-page-by-slug.json', {slug})
    }
</script>

<script>
    import SvelteSeo from 'svelte-seo'
    import DynamicZone from '$lib/components/DynamicZone.svelte'

    export let data
</script>


<SvelteSeo title="{data.page.title}"/>

<main class="container pt-4">
    <section class="section">
        <div class="columns">

            <div class="column" class:is-8={data.page.sidebar.length > 0}>
                <div class="box">
                    <h1 class="title">{data.page.title}</h1>
                    <DynamicZone content="{data.page.content}"/>
                </div>
            </div>

            {#if data.page.sidebar.length > 0}
                <div class="column is-4">
<!--                    <div class="box">-->
                        <DynamicZone content="{data.page.sidebar}"/>
<!--                    </div>-->
                </div>
            {/if}
        </div>
    </section>
</main>
