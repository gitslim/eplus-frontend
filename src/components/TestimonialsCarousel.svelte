<script>
  import Carousel from '@beyonk/svelte-carousel'
  import {onMount} from 'svelte'
  import LazyImage from 'svelte-lazy-image'
  import Icon from 'fa-svelte'
  import {faChevronCircleLeft, faChevronCircleRight} from "@fortawesome/free-solid-svg-icons";

  export let items, startIndex = 0
  let carousel

  const perPage = {
    800: Math.min(items.length, 4),
    500: Math.min(items.length, 2)
  }

  function enter() {
    carousel.pause();
  }

  function leave() {
    carousel.resume();
  }

  onMount(async () => {
  })
</script>

<style lang="scss">

</style>

<Carousel bind:this={carousel} on:mouseenter={enter} on:mouseleave={leave}
          loop="true" startIndex="{startIndex}" perPage="{perPage}">
  <span class="control" slot="left-control">
      <Icon icon={faChevronCircleLeft} class="carousel-button"/>
  </span>
  {#each items as item}
    <div class="slide-content">
      <LazyImage
        src="{item.image.url}"
        alt="{item.image.alternativeText}"
        placeholder="{item.image.url}"
      />
    </div>
  {/each}
  <span class="control" slot="right-control">
    <Icon icon={faChevronCircleRight} class="carousel-button"/>
  </span>
</Carousel>
