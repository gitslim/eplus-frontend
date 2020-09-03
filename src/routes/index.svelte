<script>
  import VideoHero from "../components/VideoHero.svelte";
  import FullEngineering from "../components/FullEngineering.svelte";
  import MobileHero from "../components/MobileHero.svelte";
  import ServiceCard from "../components/ServiceCard.svelte";

  export let segment
</script>

<style>
</style>

<MobileHero>
  <div slot="head" class="video-head container has-text-centered py-4">
    <p class="title has-text-white">
      Проектирование и строительство объектов энергетики
    </p>
    <br/>
    <p class="subtitle">
      <button class="button is-white">Получить консультацию</button>
    </p>
  </div>
</MobileHero>

<VideoHero video="/video/hero-video.mp4">
  <div slot="head" class="video-head container has-text-centered py-4">
    <p class="title has-text-white">
      Проектирование и строительство объектов энергетики
    </p>
    <br/>
    <p class="subtitle">
      <button class="button is-primary">Получить консультацию</button>
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
        <ServiceCard title="Магистральные газопроводы" image="/images/Магистральные газопроводы.jpg"/>
      </div>
      <div class="column">
        <ServiceCard title="Газораспределительные системы" image="/images/Газораспределительные системы.jpg"/>
      </div>
      <div class="column">
        <ServiceCard title="Теплоэнергетика" image="/images/Теплоэнергетика.jpg"/>
      </div>
    </div>

    <br/>

    <FullEngineering/>
  </div>
</section>
