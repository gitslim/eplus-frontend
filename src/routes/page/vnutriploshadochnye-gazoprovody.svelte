<script context="module">
  import SvelteSeo from "svelte-seo";
</script>

<script>
  import BtnZayavka from "../../components/BtnZayavka.svelte";
  import HeaderLanding from "../../components/HeaderLanding.svelte";
  import InfoBlock from "../../components/InfoBlock.svelte";
  import TitleLanding from "../../components/TitleLanding.svelte";
  import CalculationBlock from "../../components/CalculationBlock.svelte";

  let title = "Внутреплощадочные и внутренние газопроводы";

  const headerCaption = {
    caption: title,
  };

  const info = {
    text:
      "Исходя из новых Правил подключения, все обязанности и ответственность по подключению в пределах границ участка ложатся на заказчика-застройщика, а не на газораспределительную организацию.",
    subText:
      "С утверждением Правил подключения (технологического присоединения) объектов капитального строительства к газораспределительным сетям (Постановления РФ от 30.12.13 № 1314) следует особо отметить, что мероприятия по подключению в пределах границ земельного участка осуществляются заявителем (заказчиком-застройщиком), а мероприятия по подключению до границы земельного участка осуществляются исполнителем (газораспределительной организацией).",
  };

  const functionsCard = [
    {
      id: 1,
      text:
        "Внутриплощадочный газопровод - участок распределительного газопровода (ввод), находящийся внутри производственной территории предприятия, обеспечивающий подачу газа к потребителю».",
      alt: "image-card",
      src: "/images/gazoprovodi/connecting-event__icon1.png",
    },
    {
      id: 2,
      text:
        "Внутренний газопровод - газопровод, проложенный внутри здания от вводного (внутриплощадочного) газопровода до места установки газоиспользующего оборудования..",
      alt: "image-card",
      src: "images/gazoprovodi/connecting-event__icon2.png",
    },
    {
      id: 3,
      text:
        "ПРГ (пункт редуцирования газа) - технологическое устройство сетей газораспределения и газопотребления, предназначенное для снижения давления газа и поддержания его в заданных пределах независимо от расхода газа.",
      alt: "image-card",
      src: "images/gazoprovodi/connecting-event__icon3.png",
    },
    {
      id: 4,
      text:
        "Узел учета газа - функционально объединенная совокупность средств измерительной техники, которая преобразует выходной сигнал средства измерений объема и расхода газа при рабочих условиях, измеряет все или некоторые необходимые параметры потока и среды и вычисляет объем и расход газа, приведенные к стандартным условиям.",
      alt: "image-card",
      src: "/images/gazoprovodi/connecting-event__icon4.png",
    },
  ];
</script>

<style lang="scss">
  .caption {
    display: block;
    padding-top: 180px !important;
    padding-bottom: 130px;
    background: url("/images/gazoprovodi/main-banner33.jpg") no-repeat center;
    background-size: cover;
    overflow: hidden;
    color: #fff;
    width: 100vw;
  }

  .main {
    &__info {
      &-block {
        position: relative;
        top: -35px;
      }
    }
  }

  .functions {
    padding-top: 80px;

    &__title {
      padding: 0 15px;
    }
    &__targets {
      display: flex;

      flex-wrap: wrap;
      justify-content: space-around;
    }
    &__target {
      display: flex;
      width: 45%;
      min-height: 255px;
      box-shadow: 0 19px 46px 3px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      background-color: #fff;
      margin-bottom: 30px;

      &-img {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
        min-height: 255px;
        min-width: 160px;
        &img {
          border: 0;
          vertical-align: top;
          max-width: 100%;
          height: auto;
        }
      }

      &-info {
        display: flex;
        align-items: center;
        padding: 0 50px;
        border-left: 2px dashed #3838387a;
        font-size: 14px;
        color: rgb(56, 56, 56);
        line-height: 1.286;
        text-align: left;
      }
    }

    &__desc {
      max-width: 893px;
      margin: 0 auto 50px;
      font-size: 18px;
      font-weight: 300;
      line-height: 30px;
    }

    &__help {
      text-align: center;
    }
    &__icon {
      padding-top: 10px;
      margin-bottom: 20px;
      position: relative;
      display: flex;
      justify-content: center;
    }

    &__step {
      text-align: center;
      padding: 0 15px;
      position: relative;
      width: 21%;

      &:last-child::after {
        display: none;
      }

      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 93px;
        left: 50%;
        transform: translateX(-50%);
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #fff;
        border: 4px solid #f60;
      }

      &::after {
        content: "";
        position: absolute;
        left: 287px;
        top: -34px;
        height: 270px;
        width: 2px;
        border-right: 2px dashed #3838387a;
        -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
      }
      &-img {
        width: 56px;
        height: 56px;
        margin-bottom: 75px;
      }
      &-text {
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        position: relative;
      }
    }
  }

  .calculation {
    background-image: url("/images/tehnicheskoePerevooruzhenie/form-bg.jpg");
    text-align: center;
    color: #fff;
    padding: 100px 0 70px;
    background-size: cover;
  }
</style>

<SvelteSeo {title} />

<main class="main container-fluid">
  <section class="section caption">
    <div class="container is-max-widescreen">
      <HeaderLanding {...headerCaption} />
      <BtnZayavka btnText="Заказать" radius="true" />
    </div>
  </section>

  <div class="container is-max-widescreen">
    <div class="main__info-block">
      <InfoBlock {...info} />
    </div>
  </div>

  <section class="section functions">
    <div class="container is-max-widescreen">
      <div class="functions__title">
        <TitleLanding
          titleText="Что включают в себя мероприятия по подключению в пределах границ земельного участка для заявителя?" />
      </div>

      <p class="functions__desc">
        Мероприятия подразумевают проектирование и строительство заявителем
        внутриплощадочных газопроводов, средств антикоррозионной защиты,
        газорегуляторных пунктов (ПРГ), узлов учета, внутренних газопроводов,
        газорегуляторных устройств (ГРУ), систем автоматики безопасности и
        регулирования процесса сжигания газа.
      </p>

      <div class="functions__targets columns is-desktop">
        {#each functionsCard as item}
          <div class="functions__target">
            <div class="functions__target-img">
              <img src={item.src} alt={item.alt} />
            </div>
            <div class="functions__target-info">
              <p>{item.text}</p>
            </div>
          </div>
        {/each}
      </div>

      <div class="functions__help">
        <p class="functions__desc">
          Наряду с оперативным выполнением работ, мы окажем всестороннюю
          экспертную поддержку:
        </p>
        <div class="functions__icon columns">
          <div class="functions__step column-gap is-2">
            <img
              src="/images/gazoprovodi/events-help__icon1.png"
              alt="help-icon"
              class="functions__step-img" />
            <p class="functions__step-text">Техническое сопровождение</p>
          </div>
          <div class="functions__step column-gap is-2">
            <img
              src="/images/gazoprovodi/events-help__icon2.png"
              alt="help-icon"
              class="functions__step-img" />
            <p class="functions__step-text">Юридическое сопровождение</p>
          </div>
          <div class="functions__step column-gap is-2">
            <img
              src="/images/gazoprovodi/events-help__icon3.png"
              alt="help-icon"
              class="functions__step-img" />
            <p class="functions__step-text">Авторский надзор</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section calculation">
    <div class="container is-max-widescreen">
      <CalculationBlock />
    </div>
  </section>
</main>
