<script context="module">
  import SvelteSeo from "svelte-seo";

  import { client, TESTIMONIALS } from "../../apollo";

  export async function preload(page, session) {
    let cache = await client.query({
      query: TESTIMONIALS,
      variables: {},
    });
    return { testimonials: cache.data.testimonials };
  }
</script>

<script>
  import TestimonialsCarousel from "../../components/TestimonialsCarousel.svelte";

  let title = "Отзывы клиентов";
  export let segment, testimonials;
</script>

<style lang="scss">
  .section {
    margin-top: 30px;
  }
</style>

<SvelteSeo {title} />

<main class="container is-max-desktop">
  <section class="section">
    <div class="widget">
      <h2 class="title"><span>{title} </span><span class="heading-line" /></h2>
    </div>
  </section>
  <section class="section carusel-wrap">
    <TestimonialsCarousel items={testimonials} />
  </section>
</main>
