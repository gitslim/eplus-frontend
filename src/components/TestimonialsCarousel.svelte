<script>
  import Carousel from '@beyonk/svelte-carousel'
  // import LazyImage from 'svelte-lazy-image'
  import Icon from 'fa-svelte'
  import {faChevronCircleLeft, faChevronCircleRight} from "@fortawesome/free-solid-svg-icons"
  import {Modal} from 'svelma'
  import LazyImage from "./LazyImage.svelte";

  export let items, startIndex = 0
  let carousel, modalOpen = false, modalImage

  const perPage = {
    800: Math.min(items.length, 5),
    500: Math.min(items.length, 2)
  }

  function enter() {
    carousel.pause();
  }

  function leave() {
    carousel.resume();
  }

  function toggleModal(itemIdx) {
    modalImage = items[itemIdx].image
    modalOpen = !modalOpen;
  }

  const options = {
    // root: carousel,
    // rootMargin: '20px',
    // threshold: 0.1
  }
  // console.log(items)
</script>

<style lang="scss">
    :global(.slide-content img:hover) {
    opacity: 0.5;
    filter: grayscale(0.5) blur(1px);
    cursor: pointer;
  }
</style>

<Carousel bind:this={carousel} on:mouseenter={enter} on:mouseleave={leave}
                loop="false" startIndex="{startIndex}" perPage="{perPage}">

  <span class="control" slot="left-control" class:is-hidden={modalOpen}>
      <Icon icon={faChevronCircleLeft} class="carousel-button"/>
  </span>

  {#each items as item, i}
    <div class="slide-content columns">
      <figure class="image" on:click={() => toggleModal(i)}>
      <LazyImage
        options={options}
        src="{item.image.url}"
        alt="{item.image.alternativeText}"
        placeholder=""
      />
      </figure>
      </div>
  {/each}

  <span class="control" slot="right-control" class:is-hidden={modalOpen}>
    <Icon icon={faChevronCircleRight} class="carousel-button"/>
  </span>
</Carousel>

{#if modalOpen}
  <Modal bind:active={modalOpen}>
    <p class="image is-fullheight">
      <img src="{modalImage.url}"/>
    </p>
  </Modal>
{/if}
