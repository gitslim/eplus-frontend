<script context="module">
  import SvelteSeo from "svelte-seo";
  import { client, FAQ_BY_ID } from "../../apollo";

  export async function preload(page, session) {
    const { slug } = page.params;
    let cache = await client.query({
      query: FAQ_BY_ID,
      variables: { slug },
    });
    if (cache.data.faqs.length > 0) return { faq: cache.data.faqs[0] };

    return this.error(404, "Страница не найдена");
  }
</script>

<script>
  import DynamicZone from "../../components/DynamicZone.svelte";

  export let faq, segment;
</script>

<style>
  .message-header {
    background-color: #f86923;
  }
</style>

<SvelteSeo title={faq.title} />
<main class="main">
  <section class="section">
    <div class="container">
      <div class="message mt-5 mb-5">
        <div class="message-header">
          <p>{faq.title}</p>
        </div>
        <div class="box">
          <DynamicZone content={faq.content} />
        </div>
      </div>
    </div>
  </section>
</main>
