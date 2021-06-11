<script context="module">
  import SvelteSeo from "svelte-seo";

</script>

<script>
  import HeaderLanding from "../../components/HeaderLanding.svelte";
  import TitleLanding from "../../components/TitleLanding.svelte";
  import PurposeCard from "../../components/PurposeCard.svelte";

  let title = "Теплотехнический расчёт";
  let white = true;

  const headerCaption = {
    caption: "Расчет потребности в тепле и топливе",
    subtitle: "Максимальный часовой расчет газа",
  };

  const footerCaption = {
    caption: "Закажите теплотехнический расчет всего за 20 000 р. до 15 марта",
    order: true,
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

    background: url("../../../static/images/teplotehnicheskijRaschet/mainBanner.jpg")
      no-repeat center;
    background-color: rgba(0, 0, 0, 0.3);

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
      padding-top: 30px;
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

    &__card {
      display: flex;
      justify-content: space-around;
    }
  }

  .steps {
    position: relative;
    padding: 100px 0;
    &__icon::before {
      content: "";
      display: block;
      position: absolute;
      top: 247px;
      left: 0;
      width: 100vw;
      height: 4px;
      border-bottom: 2px dashed #383838;
      opacity: 0.5;
    }
    &__all {
      display: flex;
      justify-content: space-around;
    }

    &__elem {
      width: 15%;
      padding-left: 15px;
      padding-right: 15px;
    }

    &__img {
      height: 56px;
      margin-bottom: 75px;
    }

    &__info {
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      position: relative;

      &::before {
        content: "";
        display: block;
        position: absolute;
        top: -45px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #fff;
        border: 4px solid #f60;
      }
    }
  }

  .documentation {
    background-image: url("../../../static/images/teplotehnicheskijRaschet/documentationBg.jpg");
    background-color: rgba(0, 0, 0, 0.616);
    background-position: center;
    background-repeat: no-repeat;
    color: #fff;

    &__desc {
      max-width: 790px;
      margin: 0 auto 50px;
      font-size: 18px;
      font-weight: 300;
      line-height: 30px;
    }

    &__wrap {
      display: flex;
      justify-content: space-around;
    }
    &__item {
      color: #fff;
      width: 24%;
      padding-left: 15px;
      padding-right: 15px;
    }
    &__num {
      text-shadow: 0 3px 37px rgba(255, 102, 0, 0.24);
      color: #f60;
      font-size: 50px;
      font-weight: 700;
      text-transform: uppercase;
    }
    &__title {
      font-size: 25px;
      font-weight: 700;
      text-transform: uppercase;
    }
    &__info {
      min-height: 120px;
      font-size: 16px;
      font-weight: 300;
      line-height: 24px;
    }
  }
  .order {
    background-image: url("../../../static/images/teplotehnicheskijRaschet/formBg.jpg");
    background-color: rgba(66, 56, 102, 0.651);
    background-position: center;
    background-repeat: no-repeat;

    &__row {
      display: flex;
      justify-content: flex-end;
    }
    &__wrap {
      width: 50%;
    }

    &__desc {
      text-align: left;
      margin-top: 30px;
      max-width: 893px;
      margin: 30px auto 20px;
      font-size: 18px;
      font-weight: 300;
      line-height: 30px;
    }

    &__btn {
      display: inline-flex;
      align-items: center;
      padding-top: 10px;
      text-decoration: none;
      margin-bottom: 30px;
      vertical-align: text-bottom;
      height: 51px;
      background-color: #f60;
      padding: 0 60px;
      color: #fefefe;
      font-size: 16px;
      font-weight: 700;
      border: none;
      cursor: pointer;
      transition: 0.3s all;

      &-wrap {
        display: flex;
      }

      &:hover {
        background-color: #ff7d27;
        box-shadow: 0 3px 37px rgba(255, 102, 0, 0.4);
      }
    }
  }

</style>

<SvelteSeo {title} />

<main class="container-fluid">
  <section class="section caption">
    <HeaderLanding {...headerCaption} />
  </section>
  <section class="section">
    <TitleLanding titleText="Назначение" />
    <div class="container functions">
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
          <PurposeCard text={item.text} alt={item.alt} src={item.src} />
        {/each}
      </div>
    </div>
    <p class="functions__desc">
      ТТР является основанием для обращения в газоснабжающую организацию (АО
      «Мосгаз», АО «Мособлгаз», ПАО «Газпром») при технологическом присоединении
      к газовым сетям или реконструкции существующих сетей газопотребления.
    </p>
  </section>
  <section class="section steps">
    <TitleLanding titleText="Этапы работы" />
    <div class="steps__icon">
      <div class="container">
        <div class="steps__all">
          <div class="steps__elem">
            <img
              src="/static/images/teplotehnicheskijRaschet/steps-icon1.png"
              alt="icon1.png"
              class="steps__img" />
            <p class="steps__info">
              Оставляете заявку на сайте или по телефону
            </p>
          </div>
          <div class="steps__elem">
            <img
              src="/static/images/teplotehnicheskijRaschet/steps-icon2.png"
              alt="icon2.png"
              class="steps__img" />
            <p class="steps__info">
              Высылаем опросный лист в зависимости от типа здания
            </p>
          </div>
          <div class="steps__elem">
            <img
              src="/static/images/teplotehnicheskijRaschet/steps-icon3.png"
              alt="icon3.png"
              class="steps__img" />
            <p class="steps__info">Направляем типовой договор</p>
          </div>
          <div class="steps__elem">
            <img
              src="/static/images/teplotehnicheskijRaschet/steps-icon4.png"
              alt="icon4.png"
              class="steps__img" />
            <p class="steps__info">Выполняем теплотехнический рассчет</p>
          </div>
          <div class="steps__elem">
            <img
              src="/static/images/teplotehnicheskijRaschet/steps-icon5.png"
              alt="icon5.png"
              class="steps__img" />
            <p class="steps__info">
              Направляем 2 экземпляра расчета вместе с актами и счетом на оплату
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section documentation">
    <TitleLanding titleText="Нормативная документация" white />
    <p class="documentation__desc">
      Расчет потребности в тепле и топливе выполняется по определенной методике
      и в соответствии с требованиями нормативной документациb:
    </p>
    <div class="container">
      <div class="documentation__wrap">
        <div class="documentation__item">
          <p class="documentation__num">1</p>
          <p class="documentation__title">МДК 4-05.2004</p>
          <p class="documentation__info">
            «Методика определения потребности в топливе, электрической энергии и
            воде при производстве и передаче тепловой энергии и теплоносителей в
            системах коммунального теплоснабжения» (Госстрой РФ 2004 год)
          </p>
        </div>
        <div class="documentation__item">
          <p class="documentation__num">2</p>
          <p class="documentation__title">СП 131.13330.2012</p>
          <p class="documentation__info">
            «Строительная климатология» (Актуализированная редакция СНиП
            23-01-99*)
          </p>
        </div>
        <div class="documentation__item">
          <p class="documentation__num">3</p>
          <p class="documentation__title">СП 60.13330.2012</p>
          <p class="documentation__info">
            «Отопление, вентиляция и кондиционирование воздуха»
            (Актуализированная редакция СНиП 41-01-2003)
          </p>
        </div>
        <div class="documentation__item">
          <p class="documentation__num">4</p>
          <p class="documentation__title">СП 30.13330.2012</p>
          <p class="documentation__info">
            «Внутренний водопровод и канализация зданий» (Актуализированная
            редакция СНиП 2.04.01-85*).
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="section order">
    <div class="container">
      <div class="order__row">
        <div class="order__wrap">
          <HeaderLanding {...footerCaption} />
          <p class="order__desc">
            Оставьте заявку и мы свяжемся с вами для уточнения деталей, вышлем
            опросный лист и произведем расчет. Оплата производится после
            получения расчета.
          </p>
          <div class="order__btn-wrap">
            <a class="order__btn" data-dialog-type="modal" href="/#/">Оставить
              заявку</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
