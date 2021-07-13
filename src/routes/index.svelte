<script context="module">
  import { client, TESTIMONIALS } from "../apollo";

  export async function preload(page, session) {
    let cache = await client.query({
      query: TESTIMONIALS,
      variables: {},
    });
    return { testimonials: cache.data.testimonials };
  }
</script>

<script>
  import VideoHero from "../components/VideoHero.svelte";
  import FullEngineering from "../components/FullEngineering.svelte";
  import MobileHero from "../components/MobileHero.svelte";
  import ServiceCard from "../components/ServiceCard.svelte";
  import Testimonials from "../components/TestimonialsCarousel.svelte";
  import TestimonialsCarousel from "../components/TestimonialsCarousel.svelte";
  import ProjectsCarousel from "../components/ProjectsCarousel.svelte";
  import PortfolioCounters from "../components/PortfolioCounters.svelte";
  import { showModal } from "./stores.js";

  let modal;
  export let segment, testimonials;
</script>

<style>

</style>

<MobileHero>
  <div slot="head" class="video-head container has-text-centered py-4">
    <p class="title has-text-white">
      Проектирование и строительство объектов энергетики
    </p>
    <br />
    <p class="subtitle">
      <button
        class="button is-white"
        on:click={() => showModal.set(true)}>Получить консультацию</button>
    </p>
  </div>
</MobileHero>

<VideoHero video="/video/hero-video.mp4">
  <div slot="head" class="video-head container has-text-centered py-4">
    <p class="title has-text-white">
      Проектирование и строительство объектов энергетики
    </p>
    <br />
    <p class="subtitle">
      <button
        class="button is-primary"
        on:click={() => showModal.set(true)}>Получить консультацию</button>
    </p>
  </div>
  <!--  <div slot="footer">-->
  <!--    <nav class="tabs is-boxed is-fullwidth">-->
  <!--      <div class="container">-->
  <!--        <ul>-->
  <!--          <li class="is-active">-->
  <!--            <a>Overview</a>-->
  <!--          </li>-->
  <!--          <li>-->
  <!--            <a>Modifiers</a>-->
  <!--          </li>-->
  <!--          <li>-->
  <!--            <a>Grid</a>-->
  <!--          </li>-->
  <!--          <li>-->
  <!--            <a>Elements</a>-->
  <!--          </li>-->
  <!--          <li>-->
  <!--            <a>Components</a>-->
  <!--          </li>-->
  <!--          <li>-->
  <!--            <a>Layout</a>-->
  <!--          </li>-->
  <!--        </ul>-->
  <!--      </div>-->
  <!--    </nav>-->
  <!--  </div>-->
</VideoHero>

<section class="section">
  <div class="container">
    <div class="columns">
      <div class="column">
        <ServiceCard
          title="Магистральные газопроводы"
          image="/images/Магистральные газопроводы.jpg"
          path="page"
          slug="proektirovanie-magistralnyh-gazoprovodov-i-grs" />
      </div>
      <div class="column">
        <ServiceCard
          title="Газораспределительные системы"
          image="/images/Газораспределительные системы.jpg"
          path="page"
          slug="proektirovanie-gazoraspredelitelnyh-sistem-i-grp" />
      </div>
      <div class="column">
        <ServiceCard
          title="Теплоэнергетика"
          image="/images/Теплоэнергетика.jpg"
          path="page"
          slug="teplovye-punkty" />
      </div>
    </div>

    <div class="is-divider" data-content="Комплексный подход" />
    <FullEngineering />
    <div class="is-divider" data-content="Примеры выполненных проектов" />
    <ProjectsCarousel />
    <div class="is-divider" data-content="Цифры" />
    <PortfolioCounters />
    <div class="is-divider" data-content="Отзывы клиентов" />
    <TestimonialsCarousel items={testimonials} />
  </div>
</section>
