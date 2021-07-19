<script context="module">
  import SvelteSeo from "svelte-seo"
  import {client, NEWS_ARTICLE_BY_SLUG_QUERY} from "../../apollo";

  export async function preload(page, session) {
    const {slug} = page.params;

    let cache = await client.query({
      query: NEWS_ARTICLE_BY_SLUG_QUERY,
      variables: {slug},
    });
    if (cache.data.newsArticles.length > 0) return {article: cache.data.newsArticles[0]};

    return this.error(404, "Страница не найдена");
  }
</script>

<script>
  import DynamicZone from "../../components/DynamicZone.svelte";
  import CallbackForm from "../../components/CallbackForm.svelte";
  import SidebarRight from "../../components/SidebarRight.svelte";

  export let article, segment;
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

<SvelteSeo
  title="{article.title}"
/>

<section class="section">
  <div class="container">
    <h1 class="title">{article.title}</h1>

    <div class="columns">
      <div class="column is-8">
        <div class="box">
          <figure class="image is-4by3">
            <img src="{article.image.url}" alt="{article.image.alternativeText}">
          </figure>
        </div>
        <div class="box">
          <DynamicZone content="{article.content}"/>
        </div>
      </div>

      <div class="column is-4">
        <aside class="aside__right">
          <SidebarRight />
          <CallbackForm white />
        </aside>
      </div>
    </div>
  </div>
</section>
