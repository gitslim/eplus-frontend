<script context="module">
    import {fetchEndpoint} from '$lib/utils'
    import SvelteSeo from 'svelte-seo'

    export const load = async ({fetch}) => {
        return await fetchEndpoint(fetch, '/ep/list-partners.json', {})
    }
</script>

<script>
    import BtnZayavka from '$lib/components/BtnZayavka.svelte'
    import HeaderLanding from '$lib/components/HeaderLanding.svelte'
    import PartnersCarousel from '$lib/components/PartnersCarousel.svelte'
    import TitleLanding from '$lib/components/TitleLanding.svelte'
    import Carousel from '$lib/components/Carousel.svelte'
    import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
    import Icon from 'fa-svelte'

    let title = 'Изготовление блочно-модульных котельных'

    const headerCaption = {
        caption: title,
    }

    export let data
</script>

<style lang="scss">
  .section {
    padding-top: 60px;
  }

  .caption {
    display: block;
    padding-top: 180px !important;
    padding-bottom: 130px;
    // background: url("/images/bmk/bmk_background2.jpg") no-repeat center;
    background-position: center;
    background-blend-mode: multiply;
    background-image: url(/images/bmk/bmk_background2.jpg),
    linear-gradient(45deg, grey, transparent),
    linear-gradient(90deg, grey, transparent);
    background-size: cover;
    overflow: hidden;
    color: #fff;
    width: 100vw;
    @media (max-width: 768px) {
      background-position: 73% 0;
    }
  }

  .desc {
    padding: 150px 0 100px;
    //background: url("/images/bmk/u-bmk-bg_01.png") bottom no-repeat;
    background: darkgray;

    &__wrap {
      margin-bottom: 50px;
    }

    &__text {
      text-align: justify;
      font-size: 22px;
      font-weight: 300;
      line-height: 1.8;
      color: #202020;
    }

    &__img {
      //position: absolute;
      z-index: 1;
      max-width: 100%;
      top: 0;
      left: -115px;
    }
  }

  .info {
    // padding-bottom: 120px;
    margin-top: 95px;

    &__content {
      padding-top: 60px;
    }

    &__text {
      text-align: justify;
      color: #fff;
      font-size: 18px;
      font-weight: 300;
      margin-bottom: 10px;
    }
  }

  .bmk-video {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 700px;
    height: 400px;
    border-radius: 15px;
    background-position: center center;
    background-size: cover;
    margin-bottom: 80px;
  }

  ul {
    margin: 0;
    padding-left: 30px;
    text-align: justify;
    list-style: none;
  }

  .left-side {
  }

  .right-side {
    &::before {
      content: "";
      position: absolute;
      top: -45px;
      bottom: -45px;
      left: 50%;
      transform: translate(-50%, 0);
      content: "";
      display: block;
      border-left: 2px dashed #3838387a;
      @media (max-width: 768px) {
        margin-bottom: 60px;
        border-left: none;
        border-top: 2px dashed #3838387a;
        transform: none;
        position: relative;
        top: 0;
        bottom: 0;
        left: 0;
      }
    }
  }

  .dignity {
    margin-bottom: 90px !important;

    &__item {
      position: relative;
      margin-bottom: 15px;
      font-size: 18px;

      &::before {
        content: "";
        display: block;
        position: absolute;
        background: url("/images/bmk/bmk-dignity.png") center no-repeat;
        background-size: contain;
        width: 23px;
        height: 23px;
        left: -30px;
        top: 7px;
      }
    }
  }

  .block__inner {
    &_wrap {
      position: relative;
      top: -130px;
      padding: 60px 30px;
      background-color: #fff;
      box-shadow: 0 19px 46px 25px rgba(0, 0, 0, 0.15);
    }
  }

  .limitations {
    &__item {
      position: relative;
      margin-bottom: 15px;
      font-size: 18px;

      &::before {
        content: "";
        display: block;
        position: absolute;
        background: url("/images/bmk/bmk-limitations.png") center no-repeat;
        background-size: contain;
        width: 23px;
        height: 23px;
        left: -30px;
        top: 7px;
      }
    }
  }

  .seo {
    &__text {
      font-size: 18px;
      line-height: 1.8;
    }

    &__item {
      list-style: none;
      margin: 20px 0;
      position: relative;
      font-size: 18px;
      line-height: 1.6;

      &::before {
        content: "";
        display: block;
        position: absolute;
        left: -20px;
        top: 50%;
        transform: translate(0, -50%);
        width: 6px;
        height: 6px;
        border-radius: 999rem;
        background-color: #ff6600;
      }
    }
  }

  .solution {
    color: #fff;
    background: url("/images/bmk/form-bg22.jpg") center no-repeat;
    padding: 100px 0px;
    background-size: cover;

    &__text {
      text-align: justify;
      color: #fff;
      font-size: 18px;
    }

    &__list {
      margin: 0;
      padding-left: 30px;
      list-style: none;
    }

    &__item {
      text-align: justify;
      margin-bottom: 24px;
      position: relative;
      font-size: 18px;
      font-weight: bold;
      color: #fff;

      &::before {
        content: "";
        display: block;
        position: absolute;
        background: url("/images/bmk/bmk_check_006.png") center no-repeat;
        background-size: contain;
        width: 23px;
        height: 23px;
        left: -30px;
        top: 4px;
      }
    }
  }

  .logic {
    &__item {
      position: relative;

      &:last-child::after {
        display: none;
      }

      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 96px;
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
        display: block;
        position: absolute;
        top: 101px;
        left: 52%;
        width: 96%;
        height: 4px;
        border-bottom: 2px dashed #383838;
        opacity: 0.5;
        @media (max-width: 768px) {
          left: 20%;
          width: 60%;
        }
      }
    }

    &__icon {
      display: block;
      height: 56px;
      margin: 0 auto 75px;
    }

    &__column {
      position: relative;
    }

    &__text {
      text-align: center;
    }

    &__wrap {
      //position: absolute;
      top: 12px;
      background-color: #fff;
      //padding: 40px 30px;
      box-shadow: 0 19px 46px 30px rgba(0, 0, 0, 0.15);
      padding: 40px 80px;
    }

    &__info {
      text-align: center;
      font-size: 18px;
      font-weight: 300;
      line-height: 1.6;
      margin-bottom: 10px;
    }
  }

  .advice {
    padding-top: 238px;

    &__bg {
      background: url("/images/bmk/pryamougolnik_11_kopiya_2.jpg") center no-repeat;
      background-size: cover;
      padding: 0px 0 150px;
      margin-top: -50px;
    }

    &__img {
      img {
        margin: 0 auto;
        width: 90%;
      }
    }

    &__text {
      font-size: 18px;
      line-height: 1.6;
      font-weight: 300;
    }

    &__phone {
      color: #202020;

      &:hover {
        color: #f86923;
      }
    }
  }

  .container-types-kotelny {
    padding-top: 30px;

    .content {
      color: white;
      padding: 40px 0 0 0;

      h2 {
        color: white;

        &::before {
          content: "";
          display: block;
          position: absolute;
          width: 150px;
          height: 10px;
          background-color: #f60;
          top: 30px;
        }
      }

      .table-types-kotelny {
        display: flex;
        flex-wrap: wrap;
        padding: 15px 0;
        font-size: 18px;
        line-height: 1.6;
        font-weight: 300;

        .row {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          border-bottom: 1px solid white;

          > div {
            width: 220px;
            padding: 25px;

            &:first-child{
              font-weight: bold;
              background: #f86923;
            }
          }
        }
      }
    }
   }
</style>

<SvelteSeo {title}/>

<main>
    <section class="section hero caption">
        <div class="column hero-body">
            <HeaderLanding {...headerCaption}>
                <div class="columns">
                    <div class="column is-half">
                        <BtnZayavka btnText="Заказать" radius/>
                    </div>
                </div>
            </HeaderLanding>
        </div>
        <div class="container container-types-kotelny">
            <div class="columns">
                <div class="column ">
                    <div class="content">
                        <h2>ВИДЫ КОТЕЛЬНЫХ</h2>
                        <div class="table-types-kotelny ">
                          <div class="row">
                              <div><p>Теплоноситель</p></div>
                              <div>
                                  <p>водогрейные</p>
                              </div>
                              <div>
                                  <p>паровые</p>
                              </div>
                              <div>
                                  <p>пароводогрейные</p>
                              </div>
                          </div>
                          <div class="row">
                              <div>Размещение</div>
                              <div>
                                  <p>крышные</p>
                              </div>
                              <div>
                                  <p>пристроенные</p>
                              </div>
                              <div>
                                  <p>отдельностоящие</p>
                              </div>
                          </div>
                          <div class="row">
                              <div>Исполнение</div>
                              <div>
                                  <p>контейнеры</p>
                              </div>
                              <div>
                                  <p>модульные</p>
                              </div>
                              <div>
                                  <p>быстровозводимые</p>
                              </div>
                          </div>
                          <div class="row">
                              <div>Топливо</div>
                              <div>
                                  <p>природный газ</p>
                              </div>
                              <div>
                                  <p>сжиженный газ</p>
                              </div>
                              <div>
                                  <p>дизельное топливо</p>
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section px-4">
      <div class="container">
        <div class="content text-center">
          <!--                <h2 class="title titlefor has-text-centered">-->
          <!--                    Наши партнёры-->
          <!--                </h2>-->
          <TitleLanding titleText="Виды котельных"/>
          <Carousel perPage={{800:4, 500:3, 400:2}}
                    dots={false}
                    autoplay={8000}
                    duration={3000}>
                          <span class="control" slot="left-control">
                              <Icon icon={faChevronLeft}/>
                          </span>

            <div class="slide-content">
              <img alt="" class="before-image" src="/images/bmk/kotelnay.png">
            </div>
            <div class="slide-content">
              <img alt="" class="before-image" src="/images/bmk/kotelnay.png">
            </div>
            <div class="slide-content">
              <img alt="" class="before-image" src="/images/bmk/kotelnay.png">
            </div>
            <div class="slide-content">
              <img alt="" class="before-image" src="/images/bmk/kotelnay.png">
            </div>
            <div class="slide-content">
              <img alt="" class="before-image" src="/images/bmk/kotelnay.png">
            </div>

            <span class="control" slot="right-control">
                              <Icon icon={faChevronRight}/>
                          </span>
          </Carousel>
        </div>
      </div>
    </section>

    <section class="section desc px-4">
        <div class="container is-widescreen desc__wrap">
            <div class="info">
                <div
                        class="container is-widescreen columns info__content"
                        style="justify-content: center;">
                    <div class="column is-6">
                        <TitleLanding
                                left
                                titleText="Является ли бмк обьектом капитального строительства?"
                                white/>
                        <p class="block info__text">
                            Не стоит забывать, что несмотря на то, что блочная котельная
                            доставляется транспортом, она является объектом капитального
                            строительства и требует получения разрешения на строительство после
                            прохождения экспертизы проекта. Без получения данных документов ввод
                            БМК в эксплуатацию невозможен.
                        </p>
                        <p class="block info__text">
                            Применяются блочно-модульные котельные для отопления, горячего
                            водоснабжения, производства пара для технологических нужд.
                            Обслуживать БМК может одно или нескольких зданий.
                        </p>
                        <p class="block info__text">
                            Блочно-модульные котельные также называют«транспортабельные
                            котельные установки ТКУ (БКУ)».
                        </p>
                    </div>
                    <div class="column is-6">
                        <TitleLanding
                                left
                                titleText="в каких случаях устанавливают бмк?"
                                white/>
                        <p class="block info__text">
                            Расположение объекта в удаленном или труднодоступном районе, где
                            нерационально возводить стационарную котельную в силу ряда факторов:
                            удаленность поставщиков строительных материалов, слабой развитости
                            инфраструктуры либо невозможности организации мест проживания
                            монтажников, отсутствие мест заправки баллонов кислородом и
                            пропаном, сложные погодные условия
                        </p>
                        <p class="block info__text">
                            Необходимость возведения котельной в крышном исполнении. Временное
                            теплоснабжение (как пример - строительство объектов в сжатые сроки).
                            В данном случае лучше всего подходит БМК на дизельном топливе
                        </p>
                        <p class="block info__text">
                            Невозможность строительства стационарной котельной непосредственно
                            на объекте заказчика (режимные предприятия и пр.)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container block__inner">
            <div class="columns">
                <div class="content column block__inner_wrap">
                    <div class="container columns">
                        <div
                                class="left-side column is-6 px-6 is-flex is-flex-direction-column
              is-justify-content-space-between">
                            <div class="block__wrap">
                                <TitleLanding green left titleText="Основные достоинства бмк"/>
                                <ul class="mb-5 dignity">
                                    <li class="dignity__item">
                                        максимальная готовность блочно-модульной котельной,
                                        поставленной на объект, к подключению к инженерным сетям и к
                                        вводу в эксплуатацию (БМК поставляется с завода вместе с
                                        пакетом необходимой технической документации, которая
                                        подтверждает готовность внутренних инженерных систем к
                                        эксплуатации);
                                    </li>
                                    <li class="dignity__item">
                                        минимальные сроки монтажа БМК на участке Заказчика;
                                    </li>
                                    <li class="dignity__item">
                                        котельная, хоть и относится к объектам капитального
                                        строительства, может быть демонтирована и перевезена в другую
                                        площадку (ТКУ);
                                    </li>
                                    <li class="dignity__item">
                                        блочно-модульная котельная, как правило – на дизельном
                                        топливе, может быть взята в аренду под конкретный проект.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="column is-6 px-6 right-side">
                            <TitleLanding left titleText="Основные недостатки бмк"/>
                            <ul class="limitations">
                                <li class="limitations__item">
                                    при наличии помещений в существующих зданиях или отдельных
                                    сооружений, соответствующих требованиям размещения котельного
                                    оборудования, блочно-модульные котельные, как правило, не
                                    используются в силу экономической нецелесообразности (стоимость
                                    БМК в таком случае выше на 25-30%, чем стационарной
                                    альтернативы);
                                </li>
                                <li class="limitations__item">
                                    ограничения в тепловой мощности котельной ввиду предельных
                                    габаритных размеров модулей, узлов и агрегатов (котлов, насосных
                                    станций и других элементов);
                                </li>
                                <li class="limitations__item">
                                    стесненные условия при обслуживании котельной, обусловленный
                                    компактностью расположения внутренних элементов;
                                </li>
                                <li class="limitations__item">
                                    ограниченность выбора материалов для ограждающих конструкций,
                                    БМК выполняется всего в двух видах: с использованием сендвич
                                    панелей или в металлическом контейнере. Тем самым, БМК менее
                                    долго вечны и более пожароопасны, чем стационарные котельные.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section pt-0 px-4">
        <div class="container seo">
            <p class="seo__text">
                Для оптимизации затрат на строительство котельной перед началом
                проектирования и строительства, необходимо провести теплотехнический
                расчет и технико-экономическое обоснование строительства котельной,
                которые позволят:
            </p>
            <div class="columns ">
                <div class="seo__info column is-6">
                    <ul class="seo__list mt-6">
                        <li class="seo__item">
                            определить необходимую мощность котельной;
                        </li>
                        <li class="seo__item mb-3">
                            определить есть ли преимущества блочно-модульной котельной над
                            стационарной в конкретном случае;
                        </li>
                        <li class="seo__item">
                            оптимально подобрать котлы и оборудование путем сравнения их
                            характеристик и стоимости;
                        </li>
                        <li class="seo__item">
                            определить стоимость капитальных и текущих затрат на выпуск 1 МВт
                            тепловой энергии;
                        </li>
                        <li class="seo__item">определить срок окупаемости котельной.</li>
                    </ul>
                    <p class="seo__text mt-6">
                        Так как котлы разных производителей имеют разные габариты, то до
                        проектирования и строительства немаловажно определить минимальные
                        габариты котельной без потери надежности и качества.
                    </p>
                </div>
                <div class="seo__img column is-6">
                    <img alt="bmk-img" src="/images/bmk/bmk_image_003.png"/>
                </div>
            </div>
        </div>
    </section>

    <section class="section solution px-4">
        <div class="container ">
            <div class="columns">
                <div class="column is-6">
                    <TitleLanding left titleText="ООО «Энергия Плюс»" white/>
                    <p class="solution__text">
                        Предлагает комплексное решение по подключению БМК, выполняя функции
                        технического заказчика строительства. В этом случае Заказчик получает:
                    </p>
                </div>
                <div class="column is-6">
                    <ul class="solution__list">
                        <li class="solution__item">
                            Полное техническое и юридическое сопровождение строительства;
                        </li>
                        <li class="solution__item">
                            Проектную документацию, получившую положительное заключение
                            экспертизы;
                        </li>
                        <li class="solution__item">
                            Рабочую документацию, согласованную в установленном порядке;
                        </li>
                        <li class="solution__item">
                            Введенную в эксплуатацию блочно-модульную котельную.
                        </li>
                    </ul>
                </div>
            </div>
          <div class="section solution">
            <div class="column ">
              <TitleLanding left titleText="Преимущества работы с нами" white />
            </div>

            <div class="columns ">
              <div class=" column is-6">
                <ul>
                  <li class="seo__item">
                    широкий модельный ряд блочно-модульных котельных различной мощности,
                    теплоносителя, исполнения, конфигурации оборудования и топлива;
                  </li>
                  <li class="seo__item">
                    компактные конструкторские решения, современная архитектура и дизайн;
                  </li>
                  <li class="seo__item">
                    собственное конструкторское бюро, проектный и строительно-монтажный департаменты;
                  </li>
                  <li class="seo__item">
                    полный цикл инженерно-строительных услуг: от технико-экономического обоснования
                    и получения разрешительной документации до ввода объекта в эксплуатацию;
                  </li>
                  <li class="seo__item">собственное производство, расположенное в Московской области;</li>
                  <li class="seo__item">многоступенчатый процесс контроля качества производимых БМК;</li>
                  <li class="seo__item">сроки изготовления и поставки, в среднем, ниже, чем у конкурентов
                    за счет собственной технологии и избыточных производственных мощностей.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section class="section px-4">
        <div class="container">
            <div class="content text-center">
                <!--                <h2 class="title titlefor has-text-centered">-->
                <!--                    Наши партнёры-->
                <!--                </h2>-->
                <TitleLanding titleText="Наши партнеры"/>
                <Carousel perPage={{800:4, 500:3, 400:2}}
                          dots={false}
                          autoplay={8000}
                          duration={3000}>
                        <span class="control" slot="left-control">
                            <Icon icon={faChevronLeft}/>
                        </span>

                    <div class="slide-content">
                        <img alt="" class="before-image" src="/images/kotel/partners/01.jpg">
                    </div>
                    <div class="slide-content">
                        <img alt="" class="before-image" src="/images/kotel/partners/02.jpg">
                    </div>
                    <div class="slide-content">
                        <img alt="" class="before-image" src="/images/kotel/partners/03.jpg">
                    </div>
                    <div class="slide-content">
                        <img alt="" class="before-image" src="/images/kotel/partners/04.jpg">
                    </div>
                    <div class="slide-content">
                        <img alt="" class="before-image" src="/images/kotel/partners/05.jpg">
                    </div>

                    <span class="control" slot="right-control">
                            <Icon icon={faChevronRight}/>
                        </span>
                </Carousel>
            </div>
        </div>
    </section>

    <section class="section logic px-4">
        <div class="container">
            <TitleLanding titleText="Алгоритм работы"/>
            <div class="columns ">
                <div class="column is-3 logic__item">
                    <img
                            alt="bmk-icon"
                            class="logic__icon"
                            src="/images/bmk/bmk_icon_01.png"/>
                    <p class="logic__text">
                        Звоните по телефону<br/>+7 (495) 790-76-97 <br/> Или оставьте заявку
                        на сайте
                    </p>
                </div>
                <div class="column is-3 logic__item">
                    <img
                            alt="bmk-icon"
                            class="logic__icon"
                            src="/images/bmk/bmk_icon_02.png"/>
                    <p class="logic__text">Составляем техническое задание</p>
                </div>
                <div class="column is-3 logic__item">
                    <img
                            alt="bmk-icon"
                            class="logic__icon"
                            src="/images/bmk/bmk_icon_03.png"/>
                    <p class="logic__text">Согласование и комплектация оборудования</p>
                </div>
                <div class="column is-3 logic__item">
                    <img
                            alt="bmk-icon"
                            class="logic__icon"
                            src="/images/bmk/bmk_icon_04.png"/>
                    <p class="logic__text">
                        Расчет стоимости работ и заключение договора
                    </p>
                </div>
            </div>
            <div class="columns ">
                <div class="column is-3 logic__item">
                    <img
                            alt="bmk-icon"
                            class="logic__icon"
                            src="/images/bmk/bmk_icon_05.png"/>
                    <p class="logic__text">
                        Проектирование и производство: согласование схем, закупка и
                        комплектация
                    </p>
                </div>
                <div class="column is-3 logic__item">
                    <img
                            alt="bmk-icon"
                            class="logic__icon"
                            src="/images/bmk/bmk_icon_06.png"/>
                    <p class="logic__text">Доставка на объект и монтаж БМК</p>
                </div>
                <div class="column is-3 logic__item">
                    <img
                            alt="bmk-icon"
                            class="logic__icon"
                            src="/images/bmk/bmk_icon_07.png"/>
                    <p class="logic__text">
                        Ввод в эксплуатацию: ПНР и обучение персонала
                    </p>
                </div>
                <div class="column is-3 logic__item">
                    <img
                            alt="bmk-icon"
                            class="logic__icon"
                            src="/images/bmk/bmk_icon_08.png"/>
                    <p class="logic__text">Сдача объекта</p>
                </div>
            </div>
            <div class="columns">
                <div class="column logic__column is-10 is-offset-1 mt-6">
                    <div class="logic__wrap">
                        <p class="logic__info">
                            ООО «Энергия Плюс» является техническим партнером интернет-ресурса <a
                                class="logic__link"
                                href="http://bmkrussia.ru/"
                                target="_blank">bmkrussia.ru</a>, на котором представлены все
                            основные заводы- изготовители блочно-модульных котельных. Это
                            позволяет осуществлять подбор котельных в максимально сжатые сроки и
                            получать максимально возможные дисконты на изготовление и поставку.
                        </p>
                        <p class="logic__info">
                            БМК позволит обеспечить производство энергией, необходимой для
                            постоянного прогресса. Оставьте заявку прямо сейчас и навсегда решите
                            вопрос с энергообеспечением своего объекта!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section advice">
        <div class="advice__bg">
            <div class="container px-4">
                <div class="columns is-align-items-center">
                    <div class="column is-7 py-6">
                        <figure class="image advice__img">
                            <img
                                    alt="modulnaya-kotelnaya"
                                    src="/images/bmk/kotelnay2.png"/>
                            <!-- src="/images/bmk/640801199_w640_h640_dizelnaya-blochno-modulnaya-kotelnaya.png"/> -->
                        </figure>
                    </div>
                    <div class="column is-5">
                        <TitleLanding left titleText="Нужна консультация"/>
                        <div class="">
                            Позвоните нам по телефону: <a
                                class="zphone"
                                href="tel:+74957907697">+7 (495) 790-76-97</a><br/> или воспользуйтесь
                            формой обратной связи
                        </div>
                        <div class="advice__btn column is-8 p-0 is-flex mt-6 is-size-5">
                            <BtnZayavka btnText="Отправить Запрос" radius/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
