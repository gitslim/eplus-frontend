<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import HeaderLanding from '$lib/components/HeaderLanding.svelte'
    import TitleLanding from '$lib/components/TitleLanding.svelte'
    import PurposeCard from '$lib/components/PurposeCard.svelte'
    import BtnZayavka from '$lib/components/BtnZayavka.svelte'
    import QuizArea from '$lib/components/quiz/QuizArea.svelte'
    import Modal from '$lib/components/Modal.svelte'
    import {onMount} from 'svelte'
    import { browser } from '$app/env';
    import Icon from 'fa-svelte'
    import {faDownload} from '@fortawesome/free-solid-svg-icons'

    let title = 'Теплотехнический расчёт'

    //белый цвет текста
    let white = true

    const headerCaption = {
        caption: 'Расчет потребности в тепле и топливе',
        subtitle: 'Максимальный часовой расчет газа',
    }

    const footerCaption = {
        caption: 'Оставьте заявку на теплотехнический расчет до конца недели и получите скидку 30%',
        order: true,
    }

    const functionsCard = [
        {
            id: 1,
            text: 'Определение потребности объекта в тепловой энергии (Гкал) на нужды отопления, вентиляции, горячего водоснабжения, технологические нужды(максимально-часовые и годовые нагрузки)',
            alt: 'image-card',
            src: '/images/teplotehnicheskijRaschet/target__img1.png',
        },
        {
            id: 2,
            text: 'Определение количества природного газа (м3), необходимого для выработки тепловой энергии и технологические нужды (максимально-часовой и годовой расход газа)',
            alt: 'image-card',
            src: '/images/teplotehnicheskijRaschet/target__img2.png',
        },
        {
            id: 3,
            text: 'Подбор газоиспользующего оборудования для выработки тепловой энергии',
            alt: 'image-card',
            src: '/images/teplotehnicheskijRaschet/target__img3.png',
        },
    ]
    
    let isActiveForm = false
    function activeForm() {
      isActiveForm = !isActiveForm
    }

    onMount(async () => {

    })
</script>


<style lang="scss">
  .section {
    margin: 50px 20px;
  }

  .hero1{
    min-height: 650px;
    position: relative;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: multiply;
    background-image: url(/images/teplotehnicheskijRaschet/mainBanner.jpg),
    linear-gradient(0deg, grey, transparent),
    linear-gradient(45deg, grey, transparent),
    linear-gradient(80deg, grey, transparent),
    linear-gradient(100deg, grey, transparent);
    
    @media screen and (max-width: 900px) {
      min-height: auto;
    }
    .subtitle{
      color: #c1ad60;
    }
    h3{
      margin-bottom: 24px;
    }
  }

  .hero-table {
    // margin: 0 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 344px;
    max-height: 216px;
    padding: 2rem 1rem;
    background-color: #facf18;
    background-image: url('/images/teplotehnicheskijRaschet/fon_block_calc.jpg');
    position: relative;
    // left: 60px;
    // bottom: 50px;
    border: 1rem solid #000;
		border-image: repeating-linear-gradient(130deg, transparent, transparent 2px, #000 3px, #000 15px, transparent 16px, transparent 30px) 20/1rem;
    animation-delay: 1s;
    animation: 1.3s ease-out 3s blockup;

    h3 {
      margin-bottom: 10px;
      font-size: 23px;
      line-height: 1.3em;
      font-weight: 700;
      text-align: center;
      text-transform: uppercase;
      text-shadow: 1px 1px 0px #fff, -1px -1px #fff, -1px 1px #fff, 1px -1px #fff;

      @media screen and (max-width: 400px) {
        font-size: 20px;
        line-height: 1.1em;
      }

    }

    .button {
      color:#fff;
      background-color: #000;
      max-height: 50px;
      border: 2px solid #4e4b4b;
      box-shadow: 2px 4px 5px #979797;

      &:hover {
        color: #000;
        background-color: #fff;
      }
    }

    @media screen and (max-width: 900px) {
      // position: inherit;
    }

    @keyframes blockup {
        0% {
          left: 0px;
        }
        25% {
          left: 20px;
        }
        50% {
          left: -20px;
        }
        100% {
          left: 0px;
        }

    }
  }

  .titlefor:before {
    content: "";
    display: block;
    position: absolute;
    width: 100px;
    height: 5px;
    top: -30px;
    left: 0;
    background-color: #f60;
  }

  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 30px;
    font-weight: 500;
  }

  //.caption {
  //  display: block;
  //  padding-top: 180px !important;
  //  padding-bottom: 130px;
  //  background: url("/images/teplotehnicheskijRaschet/mainBanner.jpg") no-repeat center;
  //  background-size: cover;
  //  overflow: hidden;
  //  color: #fff;
  //  width: 100vw;
  //}

  //.section {
  //  text-align: center;
  //  padding-top: 115px;
  //}

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
      @media screen and (max-width: 600px) {
        &.first-desc{
          margin-top: -45px;
        }
      }
    }

    &__title {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 50px;
    }

    &__card {
      display: flex;
      justify-content: space-around;
      @media screen and (max-width: 600px) {
        flex-wrap: wrap;
        flex-direction: column;
      }
    }
  }

  .steps {
    position: relative;
    padding: 100px 0;
    @media screen and (max-width: 600px) {
      padding: 0px;
      margin-top: 70px;
    }

    &__icon::before {
      content: "";
      display: block;
      position: absolute;
      top: 281px;
      left: 0;
      width: 100vw;
      height: 4px;
      border-bottom: 2px dashed #383838;
      opacity: 0.5;
      @media screen and (max-width: 600px) {
        display: none;
      }
    }

    &__all {
      display: flex;
      justify-content: space-around;
      @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
      }
    }

    &__elem {
      width: 15%;
      padding-left: 15px;
      padding-right: 15px;
      position: relative;
      @media screen and (max-width: 600px) {
        width: auto;
        &:not(:first-child){
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
          &::after{
            content: "";
            display: block;
            position: absolute;
            top: -40px;
            left: 50%;
            transform: translateX(-50%);
            width: 40vw;
            height: 4px;
            border-bottom: 2px dashed #383838;
            opacity: 0.5;
          }
        }
        
      }
    }

    &__img {
      height: 56px;
      margin-bottom: 75px;
      position: relative;
      @media screen and (max-width: 600px) {
        margin-bottom: 12px;
      }
    }

    &__info {
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      position: relative;
      @media screen and (max-width: 600px) {
        margin-bottom: 75px;
      }

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
        @media screen and (max-width: 600px) {
          display: none;
        }
      }
    }
  }

  .documentation {
    background-image: url("/images/teplotehnicheskijRaschet/documentationBg.jpg");
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    position: relative;
    padding-top: 70px;

    &__button {
      position: absolute;
      top: -25px;
      left: 60px;
      width: 230px;
      height: 70px;
      background: #f60;
      display: flex;
      align-items: center;
      font-size: 1.2em;
      font-weight: 600;
      line-height: 1.3em;
      justify-content: center;
      text-align: center;
      border-radius: 10px;
      z-index: 3;
      transition: 1.1s;
      box-shadow: 4px 5px 7px rgba(0, 0, 0, 0.7);
      &:hover {
        cursor: pointer;
        box-shadow: 4px 5px 7px rgba(255, 255, 255, 0.7);
      }
      @media screen and (max-width: 600px) {
        top: -60px;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    &__icon {
      position: relative;
      right: 13px;
      animation: 1.3s ease-out 3s infinite download;
      
      @keyframes download {
        0% {
          top: 0px;
        }
        25% {
          top: 5px;
        }
        50% {
          top: 7px;
        }
        100% {
          top: 0px;
        }
      }
    }

    &__form {
      width: 320px;
      position: absolute;
      top: -90px;
      left: 30px;
      z-index: 5;
      visibility: hidden;
      border-top: 1px solid #f86923;
      border-left: 1px solid #f86923;
      border-radius: 10px;
      box-shadow: 3px 2px 1px #f86923;
      @media screen and (max-width: 600px) {
        left: 50%;
        transform: translateX(-50%);
      }
      &.isActive {
        visibility: visible;
      }
      button {
        position: absolute;
        z-index: 20;
        right: 4px;
        top: 2px;
      }
    }

    &__desc {
      max-width: 790px;
      margin: 0 auto 50px;
      padding: 10px;
      font-size: 18px;
      font-weight: 300;
      line-height: 30px;
      @media screen and (max-width: 600px) {
        margin-bottom: 10px;
      }
    }

    &__wrap {
      display: flex;
      justify-content: space-around;
      @media screen and (max-width: 600px) {
        flex-direction: column;
        padding-bottom: 25px;
      }
    }

    &__item {
      color: #fff;
      width: 24%;
      padding-left: 15px;
      padding-right: 15px;
      margin-bottom: 50px;
      @media screen and (max-width: 600px) {
        width: auto;
        margin-bottom: 10px;
      }
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
      @media screen and (max-width: 600px) {
        min-height: auto;
      }
    }
  }

  .order {
    background-image: url("/images/teplotehnicheskijRaschet/formBg.jpg");
    background-color: rgba(66, 56, 102, 0.651);
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    @media screen and (max-width: 600px) {
      background-size: cover;
      &::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: #fff;
        opacity: 0.5;
        top: 0;
      }
    }

    &__row {
      display: flex;
      justify-content: flex-end;
      @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
      }
    }

    &__wrap {
      width: 50%;
      margin-top: 45px;
      @media screen and (max-width: 600px) {
        line-height: 2.1em;
        width: 90%;
        z-index: 2;
      }
    }

    &__desc {
      text-align: left;
      margin-top: 30px;
      max-width: 893px;
      margin: 30px auto 20px;
      font-size: 18px;
      font-weight: 300;
      line-height: 30px;
      @media screen and (max-width: 600px) {
        font-weight: 500;
        line-height: 1.5em;
      }
    }
  }

</style>

<SvelteSeo {title}/>

<main>
    <section class="hero is-medium hero1">
        <div class="hero-body">
            <div class="columns">
                <div class="column is-7">
                    <h1 class="has-text-white has-text-weight-medium title titlefor">Расчет потребности в тепле и топливе</h1>
                    <div>
                      <h2 class="subtitle">Максимальный часовой расход газа-МЧРГ (м<sup>3</sup>/ч)</h2>
                      <h3 class="subtitle">Для получения ТУ ПАО «Газпром», АО «Мосгаз», АО «Мособлгаз»</h3>
                    </div>
                </div>
            </div>
            <div class="hero-table">
              <h3>Онлайн калькулятор теплотехнического расчета</h3>
              <Modal>
                <div class="has-text-left" slot="trigger" let:open>
                    <button class="button is-large " on:click={()=>{open()}}>
                        Рассчитать
                    </button>
                </div>
                <div slot="content" class="modal-content" let:store={{close}}>
                    <QuizArea title="Онлайн калькулятор расчёта стоимости ТТР" quizId={2}/>
                </div>
            </Modal>

            </div>
        </div>
    </section>


    <section class="section">
        <div class="container is-widescreen functions">
            <TitleLanding titleText="Назначение"/>
            <p class="functions__desc first-desc has-text-centered">
                Расчет потребности в тепле и топливе (ТТР) требуется для объектов, на
                которых предполагается использование природного газа в качестве топлива
                и/или на технологические нужды, а также в случаях реконструкции или
                технического перевооружения действующих объектов, при которых
                производится замена газоиспользующего оборудования.
            </p>
            <h3 class="functions__title has-text-centered">Цель расчета:</h3>
            <div class="functions__card has-text-centered columns">
                {#each functionsCard as item}
                    <PurposeCard text={item.text} alt={item.alt} src={item.src}/>
                {/each}
            </div>
        </div>
        <p class="functions__desc has-text-centered">
            ТТР является основанием для обращения в газоснабжающую организацию (АО
            «Мосгаз», АО «Мособлгаз», ПАО «Газпром») при технологическом присоединении
            к газовым сетям или реконструкции существующих сетей газопотребления.
        </p>
    </section>
    <section class="section steps">
        <div class="steps__icon">
            <div class="container is-max-widescreen has-text-centered">
                <TitleLanding titleText="Этапы работы"/>
                <div class="steps__all">
                    <div class="steps__elem">
                        <img
                                alt="icon1.png"
                                class="steps__img"
                                src="/images/teplotehnicheskijRaschet/steps-icon1.png"/>
                        <p class="steps__info">
                            Оставляете заявку на сайте или по телефону
                        </p>
                    </div>
                    <div class="steps__elem">
                        <img
                                alt="icon2.png"
                                class="steps__img"
                                src="/images/teplotehnicheskijRaschet/steps-icon2.png"/>
                        <p class="steps__info">
                            Высылаем опросный лист в зависимости от типа здания
                        </p>
                    </div>
                    <div class="steps__elem">
                        <img
                                alt="icon3.png"
                                class="steps__img"
                                src="/images/teplotehnicheskijRaschet/steps-icon3.png"/>
                        <p class="steps__info">Направляем типовой договор</p>
                    </div>
                    <div class="steps__elem">
                        <img
                                alt="icon4.png"
                                class="steps__img"
                                src="/images/teplotehnicheskijRaschet/steps-icon4.png"/>
                        <p class="steps__info">Выполняем теплотехнический рассчет</p>
                    </div>
                    <div class="steps__elem">
                        <img
                                alt="icon5.png"
                                class="steps__img"
                                src="/images/teplotehnicheskijRaschet/steps-icon5.png"/>
                        <p class="steps__info">
                            Направляем 2 экземпляра расчета вместе с актами и счетом на оплату
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section documentation">
      <div class="documentation__button" on:click={activeForm}>
        <p>Скачать методику выполнения ТТР<p>
        <span class="documentation__icon"><Icon icon="{faDownload}"/></span>       
      </div>
      <div class="documentation__form" class:isActive={isActiveForm}>
        <button class="delete" on:click={activeForm}></button>
      <script data-b24-form="inline/20/7g4prs" data-skip-moving="true">(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn-ru.bitrix24.ru/b9447275/crm/form/loader_20.js');</script>
      </div>
        <TitleLanding titleText="Нормативная документация" white/>
        <p class="documentation__desc has-text-centered">
            Расчет потребности в тепле и топливе выполняется по определенной методике
            и в соответствии с требованиями нормативной документациb:
        </p>
        <div class="container has-text-centered">
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
    <section class="section order py-6">
        <div class="container is-max-widescreen">
            <div class="order__row">
                <div class="order__wrap">
                    <HeaderLanding {...footerCaption}/>
                    <p class="order__desc">
                        Оставьте заявку и мы свяжемся с вами для уточнения деталей, вышлем
                        опросный лист и произведем расчет. Оплата производится после
                        получения расчета.
                    </p>
                    <BtnZayavka btnText="Оставить заявку"/>
                </div>
            </div>
        </div>
    </section>

    {#if browser}
<!--        <script src="https://cdn-ru.bitrix24.ru/b9447275/crm/site_button/loader_6_4lvqj1.js"></script>-->
    {/if}

</main>
