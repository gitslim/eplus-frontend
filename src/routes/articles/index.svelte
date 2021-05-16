<script context="module">
  import SvelteSeo from "svelte-seo"
  import {client, ARTICLES} from "../../apollo";

  export async function preload(page, session) {

    let cache = await client.query({
      query: ARTICLES,
      variables: {},
    });
    return {articles: cache.data.articles};

    // return this.error(404, "Страница не найдена");
  }
</script>

<script>
  import ArticleIndexItem from "../../components/ArticleIndexItem.svelte";
  export let articles, segment;
  let title = 'Статьи'
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
          {#each articles as article, i}
            <div class="column is-4">
              <ArticleIndexItem article="{article}"/>
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
