<script>
  import { onMount } from "svelte";
  import Link from "./Link.svelte";
  import { chooseImageUrl } from "../utils";

  export let article;
  let imageUrl;

  onMount(async () => {
    imageUrl = chooseImageUrl(article.image);
  });
</script>

<article class="card">
  <div class="card-image">
    <Link path="articles" slug={article.slug}>
      <figure class="image is-4by3">
        <img src={imageUrl} alt={article.image.alternativeText} />
      </figure>
    </Link>
  </div>
  <div class="card-header">
    <Link path="articles" slug={article.slug}>
      <div class="card-header-title">{article.title}</div>
    </Link>
  </div>
</article>
