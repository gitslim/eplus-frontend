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

    /**
     * TODO Временно. Удалить после добавления полей description и h1 в STRAPI
     */
    let meta = {
        title:data.faq.title, description: data.faq.title, h1: data.faq.title
    }

    if (data.faq.slug === "pochemu-sostavlenie-smetnoj-dokumentaczii-neobhodimo-poruchat-tolko-razrabotchiku-proekta-a-ne-frilanseru-ili-storonnemu-smetnomu-byuro") {
        meta = {
            title: 'Сметная документация для котельных. Профессионалы своего дела. Экспертиза и согласования. Консультация бесплатно',
            description: 'Разработка сметы на строительство котельной. Прозрачный процесс, согласование с заказчиком. Почему составление сметы следует доверить компании-проектанту',
            h1: 'Лучшие сметчики для Вашего объекта. Разработка сметной документации. Промышленные газовые котельные и газопроводы. Ознакомьтесь перед тем, как заказать проект '
        }
    }
</script>

<style>
    /*.message-header {*/
    /*    background-color: #f86923;*/
    /*}*/
</style>


<SvelteSeo title="{meta.title}" description="{meta.description}"/>

<article>
    <h1 class="title has-text-centered">{meta.h1}</h1>
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
