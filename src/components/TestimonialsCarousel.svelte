<script>
  import Carousel from "@beyonk/svelte-carousel";
  import { onMount } from "svelte";
  import LazyImage from "svelte-lazy-image";
  import Icon from "fa-svelte";
  import {
    faChevronCircleLeft,
    faChevronCircleRight,
  } from "@fortawesome/free-solid-svg-icons";
  import * as svelteImages from "svelte-images";
  const { Modal, open, close } = svelteImages.Carousel;

  export let items,
    startIndex = 4;
  let carousel;

  const popModal = (idx) =>
    setTimeout(() => {
      open(
        items.map(function (o) {
          return { src: o.image.url };
        }),
        idx
      );
    }, 0);

  const perPage = {
    800: Math.min(items.length, 4),
    500: Math.min(items.length, 2),
  };

  function enter() {
    carousel.pause();
  }

  function leave() {
    carousel.resume();
  }

  // onMount(async () => {
  //   console.log("photo ===> ", items);
  // });
</script>

<style lang="scss">
  :global(.window-wrap .container) {
    margin: 0 !important;
  }
</style>

<Modal />

<Carousel
  bind:this={carousel}
  on:mouseenter={enter}
  on:mouseleave={leave}
  loop="true"
  {startIndex}
  {perPage}>
  <span class="control" slot="left-control">
    <Icon icon={faChevronCircleLeft} class="carousel-button" />
  </span>

  {#each items as item, i}
    <div class="slide-content">
      <figure class="image" on:click={() => popModal(i)}>
        <LazyImage
          src={item.image.url}
          alt={item.image.alternativeText}
          placeholder="/white-200.png" />
      </figure>
    </div>
  {/each}

  <span class="control" slot="right-control">
    <Icon icon={faChevronCircleRight} class="carousel-button" />
  </span>
</Carousel>
