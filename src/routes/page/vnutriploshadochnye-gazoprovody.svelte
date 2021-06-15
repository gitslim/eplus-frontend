<script context="module">
  import SvelteSeo from "svelte-seo";

</script>

<script>
  import BtnZayavka from "../../components/BtnZayavka.svelte";
  import HeaderLanding from "../../components/HeaderLanding.svelte";
  import InfoBlock from "../../components/InfoBlock.svelte";
  import TitleLanding from "../../components/TitleLanding.svelte";
  import PurposeCard from "../../components/PurposeCard.svelte";
  import CalculationBlock from "../../components/CalculationBlock.svelte";

  let title = "Внутреплощадочные и внутренние газопроводы";

  const headerCaption = {
    caption: title,
  };

  const info = {
    text: "Исходя из новых Правил подключения, все обязанности и ответственность по подключению в пределах границ участка ложатся на заказчика-застройщика, а не на газораспределительную организацию.",
    subText:
      "С утверждением Правил подключения (технологического присоединения) объектов капитального строительства к газораспределительным сетям (Постановления РФ от 30.12.13 № 1314) следует особо отметить, что мероприятия по подключению в пределах границ земельного участка осуществляются заявителем (заказчиком-застройщиком), а мероприятия по подключению до границы земельного участка осуществляются исполнителем (газораспределительной организацией).",
  };

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

    &__desc {
      max-width: 893px;
      margin: 0 auto 50px;
      font-size: 18px;
      font-weight: 300;
      line-height: 30px;
    }

    &__help {
    }
    &__icon {
      padding-top: 10px;
      position: relative;
      display: flex;
      justify-content: center;
    }

    &__step {
      //width: 17%;
      // display: flex;
      // justify-content: center;
      // flex-direction: column;
      padding: 0 15px;

      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 20px;
        left: 50%;
        -webkit-transform: translateX(-50%);
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
        left: 20px;
        top: 20px;
        height: 100%;
        width: 2px;
        border-right: 2px dashed #3838387a;
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
    <div class="container is-widescreen">
      <TitleLanding
        titleText="Что включают в себя мероприятия по подключению в пределах границ земельного участка для заявителя?" />
      <p class="functions__desc">
        Мероприятия подразумевают проектирование и строительство заявителем
        внутриплощадочных газопроводов, средств антикоррозионной защиты,
        газорегуляторных пунктов (ПРГ), узлов учета, внутренних газопроводов,
        газорегуляторных устройств (ГРУ), систем автоматики безопасности и
        регулирования процесса сжигания газа.
      </p>

      <div class="functions__help">
        <p class="functions__desc">
          Наряду с оперативным выполнением работ, мы окажем всестороннюю
          экспертную поддержку:
        </p>
        <div class="functions__icon is-half">
          <div class="functions__step is-1">
            <img
              src="/images/gazoprovodi/events-help__icon1.png"
              alt="help-icon"
              class="functions__step-img" />
            <p class="functions__step-text">Техническое сопровождение</p>
          </div>
          <div class="functions__step is-one-fifth">
            <img
              src="/images/gazoprovodi/events-help__icon2.png"
              alt="help-icon"
              class="functions__step-img" />
            <p class="functions__step-text">Юридическое сопровождение</p>
          </div>
          <div class="functions__step is-1">
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
</main>
