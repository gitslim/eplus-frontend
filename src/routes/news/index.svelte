<script context="module">
  import SvelteSeo from "svelte-seo";
  import { client, NEWS_ARTICLES } from "../../apollo";
  import CallbackForm from "../../components/CallbackForm.svelte";
  import SidebarRight from "../../components/SidebarRight.svelte";

  export async function preload(page, session) {
    let cache = await client.query({
      query: NEWS_ARTICLES,
      variables: {},
    });
    return { newsArticles: cache.data.newsArticles };

    return this.error(404, "Страница не найдена");
  }
</script>

<script>
  import NewsIndexItem from "../../components/NewsIndexItem.svelte";

  export let newsArticles, segment;
  let title = "Новости";
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

<SvelteSeo {title} />

<section class="section">
  <div class="container .is-widescreen">
    <h1 class="title">{title}</h1>

    <div class="columns is-desktop">
      <div class="column is-8">
        <div class="columns is-multiline">
          {#each newsArticles as article, i}
            <div class="column is-4">
              <NewsIndexItem {article} />
            </div>
          {/each}
        </div>
      </div>

      <div class="column is-4">
        <aside class="aside__right">
          <SidebarRight />
          <CallbackForm />
        </aside>
      </div>
    </div>
  </div>
</section>
