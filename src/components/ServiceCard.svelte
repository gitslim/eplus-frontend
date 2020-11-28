<script>
  import Link from "./Link.svelte"
  import LazyImage from 'svelte-lazy-image'

  export let title, image, path, slug
</script>

<div class="card  has-text-centered">
  <Link title="{title}" path="{path}" slug="{slug}">
  <div class="card-header">
    <div class="card-header-title has-text-primary-dark">{title}</div>
  </div>

  <div class="card-image">
    <figure class="image is-16by9">
      <LazyImage
        src="{image}"
        alt="{title}"
        placeholder="/white-200.png"
      />
    </figure>
  </div>
<!--  <div class="card-content">-->
<!--    <div class="media">-->
<!--      <div class="media-left">-->
<!--        <figure class="image is-48x48">-->
<!--          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">-->
<!--        </figure>-->
<!--      </div>-->
<!--      <div class="media-content">-->
<!--        <p class="title is-4">John Smith</p>-->
<!--        <p class="subtitle is-6">@johnsmith</p>-->
<!--      </div>-->
<!--    </div>-->

<!--    <div class="content">-->
<!--      Lorem ipsum dolor sit amet, consectetur adipiscing elit.-->
<!--      Phasellus nec iaculis mauris. <a>@bulmaio</a>.-->
<!--      <a href="#">#css</a> <a href="#">#responsive</a>-->
<!--      <br>-->
<!--      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>-->
<!--    </div>-->
<!--  </div>-->
  </Link>
</div>
