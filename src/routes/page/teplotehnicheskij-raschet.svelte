<script context="module">
  import SvelteSeo from "svelte-seo";

</script>

<script>
  import HeaderLanding from "../../components/HeaderLanding.svelte";
  import TitleLanding from "../../components/TitleLanding.svelte";
  import PurposeCard from "../../components/PurposeCard.svelte";

  let title = "Теплотехнический расчёт";
  let functionsTitle = "Назначение";

  const headerCaption = {
    caption: "Расчет потребности в тепле и топливе",
    subtitle: "Максимальный часовой расчет газа",
  };

  const functionsCard = [
    {
      id: 1,
      text: "Определение потребности объекта в тепловой энергии (Гкал) на нужды отопления, вентиляции, горячего водоснабжения, технологические нужды(максимально-часовые и годовые нагрузки)",
      alt: "image-card",
      src: "../../../static/images/teplotehnicheskijRaschet/target__img1.png",
    },
    {
      id: 2,
      text: "Определение количества природного газа (м3), необходимого для выработки тепловой энергии и технологические нужды (максимально-часовой и годовой расход газа)",
      alt: "image-card",
      src: "../../../static/images/teplotehnicheskijRaschet/target__img2.png",
    },
    {
      id: 3,
      text: "Подбор газоиспользующего оборудования для выработки тепловой энергии",
      alt: "image-card",
      src: "../../../static/images/teplotehnicheskijRaschet/target__img3.png",
    },
  ];

</script>

<style lang="scss">
  .caption {
    display: block;
    padding-top: 180px !important;
    padding-bottom: 130px;
    background-color: rgba(0, 0, 0, 0.3);
    background: url("../../../static/images/teplotehnicheskijRaschet/mainBanner.jpg")
      no-repeat center;

    overflow: hidden;
    color: #fff;
    width: 100vw;
    max-height: 530px;
  }

  .section {
    text-align: center;
    padding-top: 115px;
  }

  .functions {
    display: flex;
    justify-content: center;
    flex-direction: column;

    &__desc {
      max-width: 893px;
      margin: 0 auto 50px;
      font-size: 18px;
      font-weight: 300;
      line-height: 30px;
    }

    &__title {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 50px;
    }
  }

</style>

<SvelteSeo {title} />

<main class="container-fluid">
  <section class="section caption">
    <HeaderLanding {...headerCaption} />
  </section>
  <section class="section">
    <div class="container functions">
      <TitleLanding titleText={functionsTitle} />
      <p class="functions__desc">
        Расчет потребности в тепле и топливе (ТТР) требуется для объектов, на
        которых предполагается использование природного газа в качестве топлива
        и/или на технологические нужды, а также в случаях реконструкции или
        технического перевооружения действующих объектов, при которых
        производится замена газоиспользующего оборудования.
      </p>
      <h3 class="functions__title">Цель расчета:</h3>
      <div class="functions__card">
        {#each functionsCard as item}
          <PurposeCard test={item.text} alt={item.alt} src={item.src} />
        {/each}
      </div>
    </div>
    <p class="functions__desc">
      ТТР является основанием для обращения в газоснабжающую организацию (АО
      «Мосгаз», АО «Мособлгаз», ПАО «Газпром») при технологическом присоединении
      к газовым сетям или реконструкции существующих сетей газопотребления.
    </p>
  </section>
</main>
