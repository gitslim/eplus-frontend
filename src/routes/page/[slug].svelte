<script context="module">
    import SvelteSeo from 'svelte-seo'
    import {fetchEndpoint} from '$lib/utils'

    export const load = async ({fetch, page}) => {
        const {slug} = page.params
        return await fetchEndpoint(fetch, '/ep/get-page-by-slug', {slug})
    }
</script>

<script>
    import DynamicZone from '$lib/components/DynamicZone.svelte'

    export let data
</script>


<SvelteSeo title="{data.page.title}"/>

<section class="section">
    <div class="container">
        <h1 class="title">{data.page.title}</h1>

        <div class="columns">
            <div class="column" class:is-9={data.page.sidebar.length > 0}>
                <div class="box">
                    <DynamicZone content="{data.page.content}"/>
                </div>
            </div>

            {#if data.page.sidebar.length > 0}
                <div class="column">
                    <div class="box">
                        <DynamicZone content="{data.page.sidebar}"/>
                    </div>
                </div>
            {/if}
        </div>
    </div>
</section>
