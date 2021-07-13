<script context="module">
  import SvelteSeo from "svelte-seo";
  import { client, SITE_META } from "../apollo";

  export async function preload(page, session) {
    const { slug } = page.params;

    let cache = await client.query({
      query: SITE_META,
      variables: { slug },
    });
    // console.log("slug", slug, "cache", cache);

    cache.data.siteMeta.redirects.forEach((r) => {
      if (page.path === r["from"]) {
        return this.redirect(301, r["to"]);
      }
    });

    return { meta: cache.data.siteMeta };
  }
</script>

<script>
  import { stores } from "@sapper/app";
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  // import {onMount} from "svelte";
  // import {fade} from "svelte/transition";
  // import Button from 'svelma/src/components/Button.svelte'
  // import Icon from 'svelte-awesome/components/Icon.svelte'
  // import {faThumbsUp} from '@fortawesome/free-regular-svg-icons'
  // import {writable} from "svelte/store";

  // const right = writable(false);
  // const persistent = writable(true);
  // const elevation = writable(false);
  // const showNav = writable(true);

  const { preloading, page } = stores();
  const path = $page.path;

  export let meta, segment;
</script>

<style global lang="scss">
  @import "../scss/global.scss";

  .body-wrapper {
    padding-top: 3.25rem;
  }
</style>

<SvelteSeo title={meta.title} description={meta.description} />

<!--{#if $preloading}-->
<!--    <ProgressLinear app/>-->
<!--{/if}-->

<!--<Button type="is-primary" on:click={() => counter++}>-->
<!--  Click!: {counter}-->
<!--</Button>-->

<!--<Icon scale="8" data={faThumbsUp}/>-->

{#if segment === 'landing'}
  <slot />
{:else}
  <div class="body-wrapper">
    <Navbar {segment} />
    <slot />
    <Footer />
  </div>
{/if}
