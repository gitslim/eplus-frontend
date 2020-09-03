<script context="module">
  import SvelteSeo from "svelte-seo"
  import {client, PAGES_BY_SLUG_QUERY} from "../../apollo";

  export async function preload(page, session) {
    const {slug} = page.params;

    let cache = await client.query({
      query: PAGES_BY_SLUG_QUERY,
      variables: {slug},
    });
    // console.log("slug", slug, "cache", cache);
    if (cache.data.pages.length > 0) return {page: cache.data.pages[0]};

    return this.error(404, "Страница не найдена");
  }
</script>

<script>
  import DynamicZone from "../../components/DynamicZone.svelte";
  export let page, segment;
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
  title="{page.title}"
/>

<section class="section">
  <div class="container">
    <h1 class="title">{page.title}</h1>

    <div class="columns">
      <div class="column" class:is-9={page.sidebar.length > 0}>
        <div class="box">
          <DynamicZone content="{page.content}"/>
        </div>
      </div>

      {#if page.sidebar.length > 0}
        <div class="column">
          <div class="box">
            <DynamicZone content="{page.sidebar}"/>
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>
