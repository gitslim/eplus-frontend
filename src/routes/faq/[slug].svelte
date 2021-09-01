<script context="module">
    import SvelteSeo from 'svelte-seo'
    import {fetchEndpoint} from '$lib/utils'

    export const load = async ({fetch, page}) => {
        const {slug} = page.params
        return await fetchEndpoint(fetch, '/ep/get-faq-by-slug', {slug})
    }
</script>

<script>
    import DynamicZone from '$lib/components/DynamicZone.svelte'

    export let data
</script>

<style>
    .message-header {
        background-color: #f86923;
    }
</style>

<SvelteSeo title={data.faq.title}/>
<main class="main">
    <section class="section">
        <div class="container">
            <div class="message mt-5 mb-5">
                <div class="message-header">
                    <p>{data.faq.title}</p>
                </div>
                <div class="box">
                    <DynamicZone content={data.faq.content}/>
                </div>
            </div>
        </div>
    </section>
</main>
