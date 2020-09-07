<script context="module">
  import SvelteSeo from "svelte-seo"
  import {client, ARTICLE_BY_SLUG_QUERY} from "../../apollo";

  export async function preload(page, session) {
    const {slug} = page.params;

    let cache = await client.query({
      query: ARTICLE_BY_SLUG_QUERY,
      variables: {slug},
    });
    if (cache.data.articles.length > 0) return {article: cache.data.articles[0]};

    return this.error(404, "Страница не найдена");
  }
</script>

<script>
  import DynamicZone from "../../components/DynamicZone.svelte";

  export let article, segment;
</script>

<SvelteSeo
  title="{article.title}"
/>

<section class="section">
  <div class="container">
    <h1 class="title">{article.title}</h1>

    <div class="columns">
      <div class="column is-9">
<!--        <div class="box">-->
<!--          <figure class="image is-4by3">-->
<!--            <img src="{article.image.url}" alt="{article.image.alternativeText}">-->
<!--          </figure>-->
<!--        </div>-->
        <div class="box">
          <DynamicZone content="{article.content}"/>
        </div>
      </div>

      <div class="column">
        <div class="box">
          tags
        </div>
      </div>
    </div>
  </div>
</section>
