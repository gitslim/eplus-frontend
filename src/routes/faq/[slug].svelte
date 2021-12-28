<script context="module">
    import SvelteSeo from 'svelte-seo'
    import {fetchEndpoint} from '$lib/utils'

    export const load = async ({fetch, page}) => {
        const {slug} = page.params
        return await fetchEndpoint(fetch, '/ep/get-faq-by-slug.json', {slug})
    }
</script>

<script>
    import DynamicZone from '$lib/components/DynamicZone.svelte'
    import ContactFormButton from '$lib/components/ContactFormButton.svelte'

    export let data
</script>

<style>
    /*.message-header {*/
    /*    background-color: #f86923;*/
    /*}*/
</style>

<SvelteSeo title={data.faq.title}/>

<article>
    <h1 class="title has-text-centered">{data.faq.title}</h1>
    <DynamicZone content={data.faq.content}/>

    {#if data.faq.title == "Что понимается под охранной зоной газопровода?"}
        <div class="pt-4 knopka"
             style="text-align:center;">
            <ContactFormButton class="button is-primary is-large is-raunded button-raunded">
                <div slot="button"
                     style="font-size: 18px;
                                                font-weight: 600;
                                                line-height: 1.2em;"
                >Получить подробную <br> консультацию специалиста
                </div>
            </ContactFormButton>
        </div>
    {/if}

</article>
