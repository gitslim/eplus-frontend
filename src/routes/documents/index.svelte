<script context="module">
  import SvelteSeo from 'svelte-seo'
  import CallbackForm from '$lib/components/CallbackForm.svelte'
  import SidebarRight from '$lib/components/SidebarRight.svelte'
  import {fetchEndpoint} from '$lib/utils'

  export const load = async ({fetch, page}) => {
      return await fetchEndpoint(fetch, '/ep/list-documents.json', {})
  }
</script>

<script>
    import Icon from 'fa-svelte'
    import {formatDate} from '$lib/utils'
    import {faFile} from '@fortawesome/free-regular-svg-icons'
    import {
        faVk,
        faTwitter,
        faFacebook,
    } from '@fortawesome/free-brands-svg-icons'
    import HiddenH1 from "$lib/components/HiddenH1.svelte"

    export let data
    let title = 'Нормативные документы'

    const meta = {
        title: "Нормативные документы. Газораспределение. Энергетика. Строительство",
        description: "Нормативно-правовые документы. Регламенты по проектированию, строительству и эксплуатации. Опасные производственные объекты. ГОСТ, СНиП, регламенты для инженеров",
        h1: "Нормативная база для строительства и проектирования. Газовая котельная. Дизельная котельная. Газопровод. БМК. Документы для инженеров и проектировщиков. Природный газ и дизельное топливо"
    }

</script>


<SvelteSeo title="{meta.title}" description="{meta.description}"/>
<HiddenH1>{meta.h1}</HiddenH1>


<main class="container pt-4">
    <section class="section">
        <div class="box">
            <h2 class="title">{title}</h2>
        </div>

        <div class="columns">
            <div class="column is-9">
                <ul>
                    {#each data.documents as doc, i}
                        <li class="box">
                            <article class="media">
                                <div class="media-content">
                                    <div class="content">
                                        <a href={doc.file.url} target="_blank">
                                            <div class="is-size-7 has-text-weight-semibold">
                                                {doc.title}
                                            </div>
                                        </a>
                                    </div>
                                    <div class="level is-mobile">
                                        <div class="level-left">
                                            <div class="level-item">
                                                <Icon icon={faFile} class=""/>
                                            </div>
                                            <div class="level-item">
                                                <span>{formatDate(doc.date)}</span>
                                            </div>
                                        </div>
                                        <div class="level-right">
                                            <a class="level-item">
                                                <Icon icon={faVk} class="vk"/>
                                            </a>
                                            <a class="level-item">
                                                <Icon icon={faTwitter} class="twitter"/>
                                            </a>
                                            <a class="level-item">
                                                <Icon icon={faFacebook} class="fb"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </li>
                    {/each}
                </ul>
            </div>

            <div class="column">
                <aside class="aside__right">
                    <SidebarRight/>
                    <CallbackForm/>
                </aside>
            </div>
        </div>
    </section>
</main>
