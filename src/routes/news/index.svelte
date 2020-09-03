<script context="module">
  import SvelteSeo from "svelte-seo"
  import {client, NEWS_ARTICLES} from "../../apollo";

  export async function preload(page, session) {

    let cache = await client.query({
      query: NEWS_ARTICLES,
      variables: {},
    });
    return {newsArticles: cache.data.newsArticles};

    return this.error(404, "Страница не найдена");
  }
</script>

<script>
  import NewsIndexItem from "../../components/NewsIndexItem.svelte";

  export let newsArticles, segment;
  let title = 'Новости'
</script>

<!--<div>-->
<!--    {#await $pageContent}-->
<!--        <li>Loading...</li>-->
<!--    {:then result}-->
<!--        <li>{result.title}</li>-->
<!--    {:catch error}-->
<!--        <li>Error loading page: {error}</li>-->
<!--    {/await}-->
<!--    {page.title}-->

<SvelteSeo
  title="{title}"
/>

<section class="section">
  <div class="container">
    <h1 class="title">{title}</h1>

    <div class="columns">
      <div class="column is-9">
        <div class="columns is-multiline">
          {#each newsArticles as article, i}
            <div class="column is-4">
              <NewsIndexItem article="{article}"/>
            </div>
          {/each}
        </div>
      </div>

      <div class="column">
        <div class="box">
          sidebar
        </div>
      </div>
    </div>
  </div>
</section>
