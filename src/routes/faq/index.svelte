<script context="module">
  import SvelteSeo from 'svelte-seo'
  import {fetchEndpoint} from '$lib/utils'

  export const load = async ({fetch}) => {
      return await fetchEndpoint(fetch, '/ep/list-faqs.json', {})
  }
</script>

<script>
    import CallbackForm from '$lib/components/CallbackForm.svelte'
    import SidebarRight from '$lib/components/SidebarRight.svelte'

    let title = 'Часто задаваемые вопросы'

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

<SvelteSeo {title}/>

<div class="container .is-widescreen mt-5">
    <main class="main columns is-desktop">
        <section class="section column is-8">
            <div class="widget">
                <h2 class="title">
                    <span>{title}</span>
                    <span class="heading-line"/>
                </h2>
            </div>

            <div class="is-centered">
                <ul class="faq">
                    {#each data.faqs as faq}
                        <div class="box">
                            <li class="faq__item">
                                <a href="/faq/{faq.slug}" class="faq__link">{faq.title}</a>
                            </li>
                        </div>
                    {/each}
                </ul>
            </div>
        </section>
        <div class="column is-4">
            <aside class="aside__right">
                <SidebarRight/>
                <CallbackForm white/>
            </aside>
        </div>
    </main>
</div>
