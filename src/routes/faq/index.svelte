<script context="module">
  import SvelteSeo from "svelte-seo";
  import { client, FAQS } from "../../apollo";

  export async function preload(page, session) {
    let cache = await client.query({
      query: FAQS,
      variables: {},
    });

    return { faqs: cache.data.faqs };

    //return this.error(404, "Страница не найдена");
  }
  //cache.data.faqs
</script>

<script>
  import CallbackForm from "../../components/CallbackForm.svelte";
  import SidebarRight from "../../components/SidebarRight.svelte";

  let title = "Часто задаваемые вопросы";

  export let faqs;
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

<SvelteSeo {title} />

<div class="container .is-widescreen mt-5">
  <main class="main columns is-desktop">
    <section class="section column is-8">
      <div class="widget">
        <h2 class="title">
          <span>{title}</span>
          <span class="heading-line" />
        </h2>
      </div>

      <div class="is-centered">
        <ul class="faq">
          {#each faqs as faq}
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
        <SidebarRight />
        <CallbackForm white />
      </aside>
    </div>
  </main>
</div>
