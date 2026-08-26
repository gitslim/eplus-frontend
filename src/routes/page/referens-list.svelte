<script context="module">
    import {fetchEndpoint} from '$lib/utils'

    export const load = async ({fetch}) => {
        return await fetchEndpoint(fetch, '/ep/list-testimonials.json', {})
    }
</script>

<script>
    import HiddenH1 from "$lib/components/HiddenH1.svelte"
    import SvelteSeo from "svelte-seo"
    import {t} from 'svelte-i18n'
    import {session} from '$app/stores'
    import {linearFacilities, thermalFacilities} from '$lib/data/referenceProjects.js'

    $: currentLocale = $session.locale || 'ru'
</script>

<style>
    .content table th,
    .content table td {
        vertical-align: middle;
    }

    /*У всех таблиц 3 и 4 колонка*/
    .content table td:nth-child(3),
    .content table td:nth-child(4) {
        text-align: center;
    }

    /*2 таблица 2 колонка*/
    .content table:nth-child(4) td:nth-child(2) {
        text-align: center;
    }

    /*2 таблица 3 колонка*/
    .content table:nth-child(4) td:nth-child(3) {
        text-align: left;
    }

    /*заголовки таблиц*/
    .content table thead tr th {
        background-color: #f60;
        color: #fefefe;
        text-align: center;
    }

    #object_teplo {
        padding-top: 50px;
    }
</style>

<SvelteSeo title="{$t('reference_list_page.meta_title')}" description="{$t('reference_list_page.meta_description')}"/>
<HiddenH1>{$t('reference_list_page.meta_h1')}</HiddenH1>

<section class="section">
    <div class="container">
        <div class="columns">
            <div class="column is-8">
                <div class="box">
                    <h2 class="title">{$t('reference_list_page.title')}</h2>
                    <div class="content">
                        <h2 id="линейные-объекты">{$t('reference_list_page.section1_title')}</h2>
                        <table class="table is-bordered is-striped">
                            <thead>
                            <tr>
                                <th>{$t('reference_list_page.th_work_type')}</th>
                                <th>{$t('reference_list_page.th_description')}</th>
                                <th>{$t('reference_list_page.th_client')}</th>
                                <th>{$t('reference_list_page.th_period')}</th>
                            </tr>
                            </thead>
                            <tbody>
                            {#each linearFacilities as item}
                                <tr>
                                    <td>
                                        <p>{item.work[currentLocale] || item.work.ru}</p>
                                    </td>
                                    <td>
                                        <p>{item.desc[currentLocale] || item.desc.ru}</p>
                                    </td>
                                    <td>
                                        <p>{item.client[currentLocale] || item.client.ru}</p>
                                    </td>
                                    <td>
                                        <p>{item.period[currentLocale] || item.period.ru}</p>
                                    </td>
                                </tr>
                            {/each}
                            </tbody>
                        </table>

                        <h2 id="object_teplo">{$t('reference_list_page.section2_title')}</h2>
                        <table class="table is-bordered is-striped">
                            <thead>
                            <tr>
                                <th>{$t('reference_list_page.th_name_and_location')}</th>
                                <th>{$t('reference_list_page.th_client')}</th>
                                <th>{$t('reference_list_page.th_work_type')}</th>
                                <th>{$t('reference_list_page.th_period')}</th>
                            </tr>
                            </thead>
                            <tbody>
                            {#each thermalFacilities as item}
                                <tr>
                                    <td>
                                        <p>{item.desc[currentLocale] || item.desc.ru}</p>
                                    </td>
                                    <td>
                                        <p>{item.client[currentLocale] || item.client.ru}</p>
                                    </td>
                                    <td>
                                        <p>{item.work[currentLocale] || item.work.ru}</p>
                                    </td>
                                    <td>
                                        <p>{item.period[currentLocale] || item.period.ru}</p>
                                    </td>
                                </tr>
                            {/each}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="column is-4">
                <figure class="image is-16by9">
                    <iframe allowfullscreen class="has-ratio" frameborder="0" title="{$t('reference_list_page.video_title')}"
                            height="360"
                            src="https://www.youtube.com/embed/L8tZf_xNUWQ?showinfo=0" width="640"></iframe>
                </figure>
            </div>
        </div>
    </div>
</section>