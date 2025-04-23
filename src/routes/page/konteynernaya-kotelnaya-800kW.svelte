<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import {onMount} from 'svelte'
    import ContactFormButton from '$lib/components/ContactFormButton.svelte'
    import ContactFormFullButton from '$lib/components/ContactFormFullButton.svelte'
    import Icon from 'fa-svelte'
    import {
        faPhone,
        faChevronLeft, faChevronRight
    } from '@fortawesome/free-solid-svg-icons'
    import Carousel from '$lib/components/Carousel.svelte'
    import {Lightbox, LightboxImage, LightboxGallery} from 'svelte-lightbox'
    import LazyImage from 'svelte-lazy-image'

    let title = 'Контейнерная котельная 800 кВт'
    let lead

    // Логика табов
    let numa = 1
    let num = 1
    let active = 1
    let activeB = false
    let count = 0
    const toggleVissible = (numa) => () => {
        if (active == numa && count == 0) {
            activeB = true
            count = 1
        } else {
            activeB = false
            count = 0
        }
        num = numa
        active = numa
    }

    onMount(async () => {
    })
</script>

<svelte:head>
    <meta name="description"
          content="В НАЛИЧИИ. Комбинированный вид топлива: газ / дизель. Комплект проектной документации. Срок поставки по РФ: до 7 дней. Автоматизированная блочно-модульная котельная, полной заводской готовности.">
    <meta property="og:locale" content="ru_RU">
    <meta property="og:type" content="article">
    <meta property="og:title" content={title}>
    <meta property="og:description"
          content="В НАЛИЧИИ. Комбинированный вид топлива: газ / дизель. Комплект проектной документации. Срок поставки по РФ: до 7 дней. Автоматизированная блочно-модульная котельная, полной заводской готовности.">
    <meta property="og:url" content="https://xn--c1adkmgpem4hrai.xn--p1ai/page/konteynernaya-kotelnaya-800kW">
    <meta property="og:site_name" content="ООО Энергия Плюс">
    <meta property="og:image" content="https://xn--c1adkmgpem4hrai.xn--p1ai/images/bmk/bmk_og.png">
    <meta property="og:image:secure_url" content="https://xn--c1adkmgpem4hrai.xn--p1ai/images/bmk/bmk_og.png">
    <meta property="og:image:width" content="800">
    <meta property="og:image:height" content="533">
    <meta property="og:image:alt" content="Контейнерная котельная">
    <meta property="og:image:type" content="image/png">
    <meta name="twitter:card" content="summary_large_image"/>
</svelte:head>

<style lang="scss">

  .section {
    margin: 50px 20px;
    @media (max-width: 420px) {
      margin: 30px 10px;
    }
  }

  .hero {
    &.hero1 {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-blend-mode: multiply;
      background-image: url(/images/bmk/bmk_background.jpg),
      linear-gradient(0deg, grey, transparent),
      linear-gradient(45deg, grey, transparent),
      linear-gradient(80deg, grey, transparent);

      .hero-body {
        margin-top: 50px;
      }
    }

    &__text {
      h2 {
        line-height: initial;
        font-size: 20px;
        margin-bottom: 20px;

        max-width: 854px;
        @media (max-width: 1588px) {
          max-width: 643px;
        }
        @media (max-width: 1237px) {
          max-width: 455px;
        }
        @media (max-width: 768px) {
          max-width: 100%;
        }
      }

      @media (max-width: 768px) {
        display: flex;
        flex-direction: column-reverse;
      }
    }

    &__spisok {
      display: flex;
      max-width: 620px;
      gap: 15px;
      color: #fff;
      @media (max-width: 1090px) {
        flex-direction: column;
      }

      li {
        border-left: 2px #f60 solid;
        margin-bottom: 15px;
        padding-left: 15px;
        width: calc(100% / 3);
        @media (max-width: 1090px) {
          width: 100%;
          margin-bottom: 0px;
        }
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
    @media (max-width: 420px) {
      top: -25px;
    }
  }

  .text-center .titlefor:before {
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  h1 {
    font-size: 60px;
    max-width: 900px;
    @media (max-width: 868px) {
      font-size: 50px;
    }
    @media (max-width: 535px) {
      font-size: 40px;
    }
    @media (max-width: 450px) {
      font-size: 30px;
      font-weight: 600 !important;
    }
  }

  h2 {
    font-size: 30px;
    font-weight: 500;
    @media (max-width: 420px) {
      font-size: 25px;
    }
  }

  h3 {
    font-size: 20px;
    font-weight: 500;
  }

  ul {
    margin-left: 0;
    padding-left: 0;
    list-style-type: none;

    li {
      div:first-child {
        float: left;
        padding-right: 10px;
      }

      div p {
        text-align: justify;
        margin-left: 22px;
      }
    }
  }

  .button3 {
    display: flex;

    :first-child {
      cursor: pointer;
      display: flex;
      justify-content: center;
      padding-bottom: calc(0.5em - 1px);
      padding-left: 1em;
      padding-right: 1em;
      padding-top: calc(0.5em - 1px);
      text-align: center;
      line-height: 1.3em;
      border-radius: 30px;
      background: #f86923;
      color: #fff;
      font-size: 1.5rem;
      transition: 0.5s;
      border: 1px solid #f86923;

      &:hover {
        background: #fff;
        color: #f86923;
      }

      &:active {
        transform: translateY(3px);
      }
    }

    @media (max-width: 450px) {
      justify-content: center;
    }
  }

  .section2 {
    margin-top: 70px;
    margin-bottom: 70px;

    .navItem {
      display: flex;
      justify-content: center;
      margin-bottom: 25px;
      @media (max-width: 560px) {
        position: relative;
        height: 40px;
        overflow: hidden;
      }

      &.activeB {
        @media (max-width: 560px) {
          overflow: visible;
          transition: 0.5s;
          ul {
            top: 0 !important;
            background: white;
            padding: 0 20px 20px 20px;
            border-radius: 10px;
            box-shadow: 0px 2px 3px 0px #f60;

            div {
              display: none;
            }
          }
        }
      }

      ul {
        display: flex;
        gap: 40px;
        position: relative;
        font-weight: 500;

        div {
          display: none;
        }

        @media (max-width: 560px) {
          position: absolute;
          flex-wrap: wrap;
          flex-direction: column;
          transition: 0.5s;
          div {
            display: block;
            position: absolute;
            right: -5px;

            span:nth-child(1) {
              position: absolute;
              color: #5b5b5b;
            }

            span:nth-child(2) {
              position: absolute;
              top: 15px;
              color: #5b5b5b;
            }
          }
          &.action1 {
            top: 0;

            div {
              top: 0;

              span:nth-child(1) {
                color: #c1c1c1;
              }
            }
          }
          &.action2 {
            top: -70px;

            div {
              top: 70px;
            }
          }
          &.action3 {
            top: -140px;

            div {
              top: 140px;

              span:nth-child(2) {
                color: #c1c1c1;
              }
            }
          }
        }

        &::after {
          content: '';
          position: absolute;
          width: 100%;
          top: 120%;
          border-bottom: 1px solid gray;
          @media (max-width: 560px) {
            border-bottom: none;
          }
        }

        li {
          position: relative;

          &:hover {
            cursor: pointer;
            color: #f60;
          }

          &.active {
            color: #f60;

            &::after {
              content: '';
              position: absolute;
              width: 100%;
              left: 0;
              top: 120%;
              border-bottom: 2px solid #f60;
              z-index: 2;
            }
          }
        }
      }
    }

    .info-slider__item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;

      .description-item {
        padding: 10px 0 0 0;

        display: flex;
        //align-items: center;
        margin: 0 40px;
        max-width: 1080px;

        @media (max-width: 900px) {
          flex-wrap: wrap;
          flex-direction: column-reverse;
        }

        .description-item__left-side {
          min-width: 300px;
          display: flex;
          align-items: center;
          justify-content: end;
          flex-direction: column;

          @media (max-width: 660px) {
            padding: 25px 0 0 0;
          }
        }

        .description-item__center-side {
          min-width: 350px;
          margin-left: 30px;
          margin-right: 30px;
          text-align: justify;
          flex: 2 1 100%;

          @media (max-width: 900px) {
            margin-right: 0px;
          }
          @media (max-width: 660px) {
            font-size: 0.9em;
            width: 100%;
            margin-right: 0px;
          }
        }

        .description-item__right-side {
          min-width: 550px;
          height: 100%;

          display: flex;
          align-items: end;
          justify-content: center;
          flex-direction: column;
          // @media (max-width: 1400px) {
          //     flex-direction: column;
          // }
          @media (max-width: 900px) {
            flex-direction: row;
          }
          @media (max-width: 720px) {
            flex-direction: column;
          }
        }

        .description-item__image-container {
          flex: 1 1 50%;
          margin: 0 30px;

          img {
            width: 1000px;
            // @media (max-width: 870px) {
            //     max-height: 200px;
            // }
          }
        }

        .description-item__price {
          // p:first-child{
          //     color: black;
          //     font-size: 1.7rem;
          //     line-height: 0.6em;
          // }
          p {
            text-align: center;
            font-size: 2.5rem;
            font-weight: 600;
            color: #ff6600;
            white-space: nowrap;
          }
        }
      }

      table {
        @media (max-width: 500px) {
          font-size: 0.8em;
        }

        tbody {
          tr:nth-child(2n) {
            background-color: rgb(255, 243, 234);
          }
        }
      }
    }
  }

  .section.cert-video {
    display: flex;
    justify-content: center;

    .content {
      max-width: 1200px;

      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      @media screen and (min-width: 900px){
        margin-left: 100px;
      }

      .cert-video__img {
        max-width: 400px;
      }

      .cert-video__video {
        max-width: 800px;
      }
    }
  }

  .section3 {
    margin-bottom: 60px;
    background-color: #ffebcd;
    padding-top: 70px;
    margin: 50px 0 60px 0;

    .container3 {
      display: flex;
      gap: 30px;
      max-width: 1400px;
      margin: 0 auto;
      padding: 30px 30px 40px 30px;
      @media (max-width: 1200px) {
        flex: 0 1 45%;
        flex-wrap: wrap;
        justify-content: center;
      }
    }

    .carta {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: white;
      border-radius: 5px;
      border: 1px solid #ff6600;
      overflow: hidden;
      text-align: center;
      flex-basis: 25%;
      flex-grow: 1;
      @media (max-width: 1200px) {
        flex: 0 1 45%;
        max-width: 360px;
      }
      @media (max-width: 750px) {
        flex: 1 100%;
        max-width: 350px;
      }

      &:nth-child(1) {
        .carta__image {
          background-color: rgb(230 230 230);
          background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(230, 230, 230) 100%);
        }
      }

      &:nth-child(2) {
        .carta__image {
          background-color: rgb(200 200 200);
          background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(200, 200, 200) 100%);
        }
      }

      &:nth-child(3) {
        .carta__image {
          background-color: rgb(170 170 170);
          background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(170, 170, 170) 100%);
        }
      }

      &:nth-child(4) {
        .carta__image {
          background-color: rgb(150 150 150);
          background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(150, 150, 150) 100%);
        }
      }

      &__image {
        width: 100%;
        padding: 30px;

        img {
          height: 57px;
        }
      }

      &__title {
        padding: 20px 10px 0 10px;
        min-height: 100px;
        line-height: 1.6em;
        color: #f60;
      }

      &__content {
        text-align: justify;
        padding: 10px 20px 20px 20px;
        line-height: 1.6em;
      }
    }
  }

  .section4 {
    margin-bottom: 70px;

    .button3 {
      align-items: center;
      justify-content: center;
    }
  }

  .section5 {
    .container {
      max-width: 1200px;

      .columns {
        .column {
          &.column1 {
            p:nth-child(1) {
              margin-bottom: 20px;
            }

            p {
              text-align: justify;

              span {
                font-weight: 500;
              }
            }
          }

          &.column2 {
            figure {
              border-radius: 20px;
              overflow: hidden;
              border: 2px solid #f60;
            }
          }
        }
      }
    }
  }
</style>

<SvelteSeo {title}/>

<main>
    <section class="hero hero1">
        <div class="hero-body">
            <div class="columns">
                <div class="column is-10">
                    <h1 class="has-text-white has-text-weight-normal title titlefor">Контейнерная котельная 800 кВт</h1>
                </div>
            </div>
            <div class="columns hero__text">
                <div class="column is-7">
                    <h2 class="block has-text-white has-text-weight-medium has-text-left titleb">В НАЛИЧИИ
                    </h2>
                    <ul class="hero__spisok">
                        <li>Комбинированный вид топлива: газ / дизель</li>
                        <li>Комплект проектной документации</li>
                        <li>Срок поставки по РФ: до 7 дней</li>
                    </ul>
                </div>
            </div>
            <div class="button3">
                <ContactFormButton>
                    <div slot="button">Купить котельную</div>
                </ContactFormButton>
            </div>
            <div class="subtitle py-6">
                <a rel="external"
                   class="has-text-white"
                   href="tel:+74957907697">
                    <Icon icon={faPhone}/>
                    <span class="callibri_phone">+7 (495) 790-76-97</span>
                </a>
            </div>
        </div>
    </section>

    <section class="section section2 text-center">
        <h2 class="title titlefor has-text-centered has-text-weight-bold mb-2">
            ОПИСАНИЕ КОТЕЛЬНОЙ
        </h2>
        <div class="">
            <div class="navItem" class:activeB={activeB}>
                <ul class:action1={num==1} class:action2={num==2} class:action3={num==3}>
                    <div><span>&#9650;</span><span>&#9660;</span></div>
                    <li class:active={active==1} on:click={toggleVissible(1)}>
                        Описание
                    </li>
                    <li class:active={active==2} on:click={toggleVissible(2)}>
                        Технические характеристики
                    </li>
                    <li class:active={active==3} on:click={toggleVissible(3)}>
                        Комплектация
                    </li>
                </ul>
            </div>
            <div class="info-slider__item">
                {#if num == 1}
                    <div class="description-item">
                        <div class="description-item__left-side">
                            <div class="description-item__image-container">
                                <img class="" alt="" src="/images/kotel/800kw/photo_2025-02-12_21-29-54.jpg">
                            </div>
                            <div class="description-item__image-container">
                                <img class="" alt="" src="/images/kotel/800kw/photo_2025-02-10_20-27-43%20(2).jpg">
                            </div>
                            <div class="description-item__image-container">
                                <img class="" alt="" src="/images/kotel/800kw/photo_2025-02-10_20-27-43.jpg">
                            </div>
                        </div>
                        <div class="description-item__center-side">
                            <p>Автоматизированная блочно-модульная котельная, полной заводской готовности. В
                                комплектации оборудования для работы, как на природном газе, так и на дизельном топливе
                                в соответствии с СП "Котельные установки" и СП "Газораспределительные системы" по
                                принципу "Включил и забыл". В комплекте поставки БМК предусмотрены дымовые трубы,
                                которые устанавливаются на кровлю котельной, что сокращает затраты по сравнению с
                                вариантом в отдельно стоящем исполнении. Управление котельной осуществляется с помощью
                                релейных схем и миниконтроллеров фирмы ОВЕН, не требующих программирования, обеспечивая
                                надежную работу всех исполнительных механизмов. Договором поставки предусмотрено
                                проведение пуско-наладочных работ, а также участие завода-изготовителя в сдаче котельной
                                в промышленную эксплуатацию.</p>
                        </div>
                        <div class="description-item__right-side">
                            <div>
                                <div class="description-item__image-container">
                                    <img class="" alt="" src="/images/bmk/kotelnay2.png">
                                </div>
                                <div class="description-item__price">
                                    <!-- <p>Цена</p> -->
                                    <p>16 900 000 &#8381</p>
                                </div>
                            </div>
                        </div>
                    </div>
                {/if}
                {#if num == 2}
                    <div>
                        <table class="table is-striped">
                            <thead>
                            <tr>
                                <th>
                                    ТЕХНИЧЕСКИЙ ПАРАМЕТР
                                </th>
                                <th>
                                    ПОКАЗАТЕЛЬ
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    Тепловая мощность
                                </td>
                                <td>
                                    от 800 кВт
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Температура теплоносителя
                                </td>
                                <td>
                                    95/70 ⁰С
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Расход топлива (max) / природный газ
                                </td>
                                <td>
                                    от 58 нм3/ч
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Расход топлива (max) / дизель
                                </td>
                                <td>
                                    49 кг/ч
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    КПД котлов
                                </td>
                                <td>
                                    92,17 %
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Габаритные размеры здания котельной (без наружных конструкций) LxBxH
                                </td>
                                <td>
                                    12,3х2,6х2,7 м
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Климатическое исполнение
                                </td>
                                <td>
                                    УХЛ-1
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Дымовая труба
                                </td>
                                <td>
                                    6,5 м
                                </td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                {/if}
                {#if num == 3}
                    <div>
                        <table class="table is-striped">
                            <thead>
                            <tr>
                                <th>
                                    БАЗОВАЯ КОМПЛЕКТАЦИЯ
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    Водогрейный жаротрубный котёл (2 х 400 кВт), двухходовой // "Teplofor Lex V2 – D400"
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Горелка вентиляторная, модуляционное регулирование // "Riello RS 50 Газ/Дизель"
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Аппарат теплообменный пластинчатый разборный ЭТ-007с, ЭТ-004с // НПО «ЭТРА»
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Насосное оборудование (насосы котлового контура, насосы внешнего контура отопления,
                                    насосы подпитки) // "CNP"
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Бак мембранный для отопления, бак мембранный для водоснабжения горизонтальный //
                                    "Wester"
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Автоматическая система ХВО // "Водеко"
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Бак дизельного топлива Т800ВК3 // "Анион"
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Гидравлический разделитель, Ду 125 // "Geffen"
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Запорная арматура // "ADL", "LD"
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Узлы учета газа, тепловой и электрической энергии
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                {/if}
            </div>
        </div>
    </section>
    <section class="section cert-video">
        <div class="content">
            <div class="cert-video__img">
                <Lightbox noScroll="false"
                          modalClasses="pipu">
                    <figure class="image">
                        <img
                                style="max-width: 800px"
                                src={'/images/company/Сертификат БМК800_page-0001.jpg'}
                                alt={'Сертификат'}/>
                    </figure>
                </Lightbox>
            </div>
            <div class="cert-video__video">
                <video autoplay loop muted playsinline controls>
                    <source src="{'/video/БМК 800.mp4'}" type="video/mp4"/>
                </video>
            </div>
        </div>
    </section>

    <section class="section section3 text-center">
        <h2 class="title titlefor has-text-centered has-text-weight-bold mb-2">
            ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ
        </h2>
        <div class="container3">
            <div class="carta">
                <div class="carta__image">
                    <img alt="" class="" src="/images/kotel/icons/bmk_icon_04.png">
                </div>
                <div class="carta__title">
                    <h3>Проект привязки<br>с экспертизой</h3>
                </div>
                <div class="carta__content">
                    <div class="">
                        Выполняем проект "привязки" котельной к генплану Заказчика, включая внутриплощадочные сети
                        газо-, тепло-, электро-, водоснабжения и канализации с получением положительного заключения
                        экспертизы.
                    </div>
                </div>
            </div>
            <div class="carta">
                <div class="carta__image">
                    <img alt="" class="" src="/images/kotel/icons/bmk_icon_02.png">
                </div>
                <div class="carta__title">
                    <h3>Проектирование внеплощадочного газопровода</h3>
                </div>
                <div class="carta__content">
                    <div class="">
                        Выполняем проект наружного газоснабжения от точки подключения к газопроводу-источнику до
                        котельной согласно технических условий газоснабжающей организации. Получаем необходимые
                        согласования и экспертизы.
                    </div>
                </div>
            </div>
            <div class="carta">
                <div class="carta__image">
                    <img alt="" class="" src="/images/kotel/icons/bmk_icon_06.png">
                </div>
                <div class="carta__title">
                    <h3>Монтаж котельной<br>на объекте</h3>
                </div>
                <div class="carta__content">
                    <div class="">
                        Выполняем строительно-монтажные работы по устройству внутриплощадочных сетей газо-, тепло-,
                        электро-, водоснабжения и канализации со сдачей в промышленную эксплуатацию.
                    </div>
                </div>
            </div>
            <div class="carta">
                <div class="carta__image">
                    <img alt="" class="" src="/images/interGazoprovod/bmk_icon_12.png">
                </div>
                <div class="carta__title">
                    <h3>Сдача в промышленную<br>эксплуатацию</h3>
                </div>
                <div class="carta__content">
                    <div class="">
                        Готовим комплект исполнительно-технической документации на законченный строительством объект.
                        Осуществляем сдачу надзорным органам: газоснабжающая организация, Ростехнадзор.
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="section section4">
        <div class="container">
            <div class="button3">
                <ContactFormFullButton lead={lead = {
                    title: 'Форма контактов из Контейнерная котельная 800 кВт',
                    comments: 'КНОПКА скачать договор поставки',
                    }}>
                    <div slot="button">Скачать договор поставки</div>
                </ContactFormFullButton>
            </div>
        </div>
    </section>


    <section class="section section5 text-center">
        <h2 class="title titlefor has-text-centered has-text-weight-bold mb-2">
            О НАС
        </h2>
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column column1">
                    <p>Инжиниринговая компания <span>«Энергия Плюс»</span> более двадцати лет <span>специализируется на проектировании и строительстве газовых котельных</span>,
                        в числе которых блочно-модульные, встроенные, пристроенные, крышные и отдельно стоящие
                        котельные, в том числе внутриплощадочные и внеплощадочные газопроводы.</p>
                    <p><span>Наша компания оказывает полный комплекс услуг в сфере теплогенерации</span>: от получения
                        исходно-разрешительной документации до ввода котельных в эксплуатацию.
                        <span>Мы обладаем собственным проектным бюро и производственной базой</span>, что позволяет нам
                        изготавливать котельные с оптимальным соотношением цена-качество.</p>
                </div>
                <div class="column column2">
                    <div class="p-3">
                        <a
                                href="/presentation/Буклет%20с%20услугами%20в%20области%20энергетики.pdf"
                                target="_blank"
                                title="Буклет с услугами в области энергетики"
                        >
                            <figure class="image">
                                <LazyImage
                                        alt="Буклет с услугами в области энергетики"
                                        src="/presentation/energy-cover.png"
                                />
                                <div class="is-overlay p-1">
                                    <span class="tag is-primary"
                                    >Энергетика</span
                                    >
                                </div>
                            </figure>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>