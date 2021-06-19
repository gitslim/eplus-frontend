<script context="module">
  import SvelteSeo from "svelte-seo";

</script>

<script>
  import Carousel from "@beyonk/svelte-carousel";
  import {
    faChevronCircleLeft,
    faChevronCircleRight,
  } from "@fortawesome/free-solid-svg-icons";
  import LazyImage from "svelte-lazy-image";
  import Icon from "fa-svelte";

  let title = "Отзывы клиентов";

  const reviewImges = [
    {
      id: 1,
      src: "/images/reviews/1.png",
      alt: "otziv-image",
    },
    {
      id: 2,
      src: "/images/reviews/1111123.png",
      alt: "otziv-image",
    },
    {
      id: 3,
      src: "/images/reviews/2.png",
      alt: "otziv-image",
    },
    {
      id: 4,
      src: "/images/reviews/3.jpg",
      alt: "otziv-image",
    },
    {
      id: 5,
      src: "/images/reviews/aga.png",
      alt: "otziv-image",
    },
    {
      id: 6,
      src: "/images/reviews//blagodarstvennoe_pismo_agrostroy.jpg",
      alt: "otziv-image",
    },
    {
      id: 7,
      src: "/images/reviews/city_arh_0.jpg",
      alt: "otziv-image",
    },
    {
      id: 8,
      src: "/images/reviews/review.png",
      alt: "otziv-image",
    },
    {
      id: 9,
      src: "/images/reviews/Альтэра.jpg",
      alt: "otziv-image",
    },
    {
      id: 10,
      src: "/images/reviews/АРС_Эстейт.jpg",
      alt: "otziv-image",
    },
    {
      id: 11,
      src: "/images/reviews/благодарственное-письмо-Салют.jpg",
      alt: "otziv-image",
    },
    {
      id: 12,
      src: "/images/reviews/Голифакс.jpg",
      alt: "otziv-image",
    },
    {
      id: 13,
      src: "/images/reviews/Керама-Марацци.png",
      alt: "otziv-image",
    },
    {
      id: 14,
      src: "/images/reviews/КМТ-Девелопмент-Благодарственное-письмо.jpg",
      alt: "otziv-image",
    },
    {
      id: 15,
      src: "/images/reviews/Отзыв-Cоюздорпроект-ЦКАД.jpg",
      alt: "otziv-image",
    },
    {
      id: 16,
      src: "/images/reviews/Отзыв-Интер-РАО.jpg",
      alt: "otziv-image",
    },
    {
      id: 17,
      src: "/images/reviews/Отзыв.png",
      alt: "otziv-image",
    },
    {
      id: 18,
      src: "/images/reviews/Письмо-СК-Перспектива.jpg",
      alt: "otziv-image",
    },
  ];

  export let startIndex = 0;

  function enter() {
    carousel.pause();
  }

  function leave() {
    carousel.resume();
  }

</script>

<style lang="scss">
  .section {
    margin-top: 30px;
  }

</style>

<SvelteSeo {title} />

<main class="container is-max-desktop">
  <section class="section">
    <div class="widget">
      <h2 class="title"><span>{title} </span><span class="heading-line" /></h2>
    </div>
  </section>
  <section class="section carusel-wrap">
    <Carousel
      on:mouseenter={enter}
      on:mouseleave={leave}
      loop="true"
      {startIndex}>
      <span class="control" slot="left-control">
        <Icon icon={faChevronCircleLeft} class="carousel-button" />
      </span>
      {#each reviewImges as item}
        <div class="slide slide-content">
          <div class="columns is-vcentered">
            <div class="column is-6">
              <figure class="slide__image">
                <LazyImage src={item.src} alt={item.alt} />
              </figure>
            </div>
          </div>
        </div>
      {/each}
      <span class="control" slot="right-control">
        <Icon icon={faChevronCircleRight} class="carousel-button" />
      </span>
    </Carousel>
  </section>
</main>
