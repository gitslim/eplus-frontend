<script>
    import Carousel from '$lib/components/Carousel.svelte'
    import LazyImage from 'svelte-lazy-image'
    import Icon from 'fa-svelte'
    import {faChevronCircleLeft, faChevronCircleRight,} from '@fortawesome/free-solid-svg-icons'

    export let items,
        startIndex = 0
    let carousel

    const perPage = {
        800: Math.min(items.length, 5),
        500: Math.min(items.length, 2),
    }

    function enter() {
        carousel.pause()
    }

    function leave() {
        carousel.resume()
    }

    // onMount(async () => {
    //   console.log("photo ===> ", items);
    // });
</script>

<style lang="scss">
  //:global(.window-wrap .container) {
  //  margin: 0 !important;
  //}

  .slide-content {
    width: 300px;
  }
</style>


<Carousel
        bind:this={carousel}
        loop="true"
        on:mouseenter={enter}
        on:mouseleave={leave}
        {perPage}
        {startIndex}>
  <span class="control" slot="left-control">
    <Icon class="carousel-button" icon={faChevronCircleLeft}/>
  </span>

    {#each items as item, i}
        <div class="slide-content">
            <figure class="image">
                <LazyImage
                        src={item.image.url}
                        alt={item.image.alternativeText}
                        placeholder="/white-200.png"/>
            </figure>
        </div>
    {/each}

    <span class="control" slot="right-control">
    <Icon class="carousel-button" icon={faChevronCircleRight}/>
  </span>
</Carousel>
