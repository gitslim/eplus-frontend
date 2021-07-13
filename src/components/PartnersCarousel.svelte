<script>
  import Carousel from "@beyonk/svelte-carousel";
  import Icon from "fa-svelte";
  import {
    faChevronCircleLeft,
    faChevronCircleRight,
  } from "@fortawesome/free-solid-svg-icons";

  // export let startIndex;
  let carousel;

  // const perPage = {
  //   800: Math.min(4),
  //   500: Math.min(2),
  // };

  function enter() {
    carousel.pause();
  }

  function leave() {
    carousel.resume();
  }
</script>

<style>
  /* your styles go here */
</style>

<Carousel
  bind:this={carousel}
  on:mouseenter={enter}
  on:mouseleave={leave}
  loop="true">
  <span class="control" slot="left-control">
    <Icon icon={faChevronCircleLeft} class="carousel-button" />
  </span>

  <slot />

  <span class="control" slot="right-control">
    <Icon icon={faChevronCircleRight} class="carousel-button" />
  </span>
</Carousel>
