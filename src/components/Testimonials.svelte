<script>
  import Carousel from '@beyonk/svelte-carousel'
  import {ChevronLeftIcon, ChevronRightIcon} from 'svelte-feather-icons'
  import {onMount} from 'svelte'
  import LazyImage from 'svelte-lazy-image'

  let carousel
  export let testimonials

  onMount(async () => {
    // console.log(carousel)
    // const module = await import('bulma-carousel/dist/js/bulma-carousel.min')
    // const bulmaCarousel = module.attach(carousel, {
    //   breakpoints:[],
    //   slidesToShow: 1
    // })
    // new module.default(carousel)
  })
</script>

<style lang="scss">
  .control :global(svg) {
    width: 100%;
    height: 100%;
    color: orangered;
    //border: 2px solid black;
    //border-radius: 32px;
  }
</style>

<Carousel loop="false" startIndex="2" perPage={{ 800: 6, 500: 3 }}>
  <span class="control" slot="left-control">
    <ChevronLeftIcon />
  </span>
  {#each testimonials as testimonial}
    <div class="slide-content">
        <LazyImage
          src="{testimonial.image.url}"
          alt="{testimonial.image.alternativeText}"
        />
    </div>
  {/each}
  <span class="control" slot="right-control">
    <ChevronRightIcon />
  </span>
</Carousel>
