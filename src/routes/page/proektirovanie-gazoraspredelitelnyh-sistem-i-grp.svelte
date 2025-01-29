<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>


<script>
    import BtnZayavka from '$lib/components/BtnZayavka.svelte';
    import CalcTabs from '$lib/components/calc/CalcTabs.svelte';
    import ContactForm from '$lib/components/ContactForm.svelte'
    import HeaderLanding from '$lib/components/HeaderLanding.svelte';
    import InfoBlock from '$lib/components/InfoBlock.svelte';
    import TitleLanding from '$lib/components/TitleLanding.svelte';
    import LazyImage from 'svelte-lazy-image';
    import {Lightbox} from 'svelte-lightbox';

    let title = 'ПРОЕКТИРОВАНИЕ ГАЗОПРОВОДОВ И ГРП'

    const headerCaption = {
        caption: title,
    }
</script>


<style lang="scss">
  main {
    --text-light: white;
    --bg-dark: #353535;
    --gray: #f2f2f2;
    --orange: #ff6600;

    .text-light {
      color: var(--text-light);

      * {
        color: var(--text-light);
      }
    }

    .text-22 {
      font-size: 22px;
    }

    .bg-dark {
      background: var(--bg-dark);
    }

    .bg-gray {
      background: var(--bg-gray);
    }

    .orange-block {
      //border-top: 4px solid var(--orange);

      padding: 30px 0 0 0;

      //background: var(--bg-orange);
      //color: var(--bg-orange);

      //font-weight: bold;

      //text-align: left;
    }

    .section__wrap {
      position: relative;
      top: -100px;
      margin-bottom: -300px;

      padding: 100px 30px;

      border-radius: 10px;
      background-color: #fff;
      box-shadow: 0 19px 46px 25px rgba(0, 0, 0, 0.15);

      font-size: 18px;
    }

    .section__wrap-v2 {
      top: 12px;
      background-color: #fff;
      box-shadow: 0 19px 46px 30px rgba(0, 0, 0, 0.15);
      padding: 40px 80px;
    }

    section {
      padding: 80px 0;
    }

    .hero {
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      background-blend-mode: multiply;
      background-image: url(/images/gazoprovodi/gazoprovod_grp.jpg),
      linear-gradient(0deg, grey, transparent);
      //linear-gradient(45deg, grey, transparent),
      //linear-gradient(80deg, grey, transparent),
      //linear-gradient(100deg, grey, transparent)

      .hero-body {
        margin-top: 50px;
      }
    }

    .title:before {
      content: "";
      display: block;
      position: absolute;
      width: 100px;
      height: 5px;
      top: -30px;
      left: 0;
      background-color: #f60;
    }

    .about {
      padding: 80px 0;

      :global(.info__text) {
        margin: 0;
      }

      :global(.info__subtext) {
        font-style: normal;
        font-size: 20px;

      }
    }

    .about, .docs {
      .content {
        font-size: 18px;
        text-align: justify;
      }
    }


    .objects-section {
      padding: 100px 0 150px;
      margin: auto 0;

      background: #ededed;

      .title {
        margin-bottom: 40px;

        text-align: center;
      }

      .title:before {
        left: 50%;
        transform: translateX(-50%);
      }


    }

    .tech-section {
      padding: 100px 0 250px;

      font-size: 22px;

      .tech__content {
        display: flex;
        flex-direction: column;
        gap: 40px;
      }
    }

    .objects-map {
      display: flex;
      flex-wrap: wrap;

      .objects-map__row {
        width: 100%;

        display: flex;
        justify-content: start;
        flex-wrap: wrap;
        gap: 40px;


        .objects-map__item {
          :global(figure) {
            margin: 0;
          }

          :global(.image img) {
            object-fit: cover;
            width: 600px;
            height: 386px;
          }
        }
      }
    }

    .list {
      //margin-bottom: 50px;

      &__item {
        list-style: none;
        margin: 10px 0;
        position: relative;
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

    .calc {
      padding: 0;
      padding-bottom: 150px;

      .container {
        z-index: 1;
      }

      .section__wrap {
        @media screen and (min-width: 900px) {
          padding: 80px 100px 50px;
          max-width: 1300px;
        }
      }

      .columns {
        justify-content: center;
      }

      :global(.content .container),
      :global( .content li) {
        font-size: 22px;
      }

      :global(.calc__tabs + .section .box) {
        box-shadow: unset;
      }

      :global(.calc__tabs ul) {
        margin-left: 0;
      }
    }

    .order-form {
      background: linear-gradient(180deg, #252429, transparent),
      linear-gradient(0deg, #252429, transparent);

      .container .columns {
        align-items: center;
        gap: 80px;
      }

      .order-form__img-container {
        padding: 2%;
        background-color: #c2c2c2;
      }

      .order-form__img-container img {
        display: block;
      }
    }


    .solution {
      //position: relative;

      //top: -300px;
      color: #fff;
      background: url("/images/bmk/form-bg22.jpg") center no-repeat;
      padding: 200px 0px 130px;
      background-size: cover;

      font-size: 1.5rem;

      p {
        //text-align: justify;
      }

      .columns {
        gap: 30px;
      }

      &__list {
        margin: 0;
        padding-left: 30px;
        list-style: none;
      }

      &__item {
        margin-bottom: 24px;
        position: relative;

        padding: 0 0 0 10px;

        //font-size: 18px;
        //text-align: justify;
        font-weight: bold;
        color: #fff;

        &::before {
          content: "";
          display: block;
          position: absolute;
          background: url("/images/bmk/bmk_check_006.png") center no-repeat;
          background-size: contain;
          width: 23px;
          height: 100%;
          left: -30px;

          margin: auto 0;
        }
      }
    }

    .flex-row {
      display: flex;
      gap: 40px;

      img {
        width: 50px;
        height: 50px;
      }
    }


    .docs {
      p, li {
        font-size: 22px;
      }

      .content .px-6 {
        display: flex;
        flex-direction: column;
        gap: 40px;
      }


      .objects-map .objects-map__row {
        justify-content: start;
      }

      .list__item {
        margin-bottom: 24px;
        position: relative;

        padding: 0 0 0 10px;

        //font-size: 18px;

        &::before {
          content: "";
          display: block;
          position: absolute;
          background: url("/images/bmk/bmk-dignity.png") center no-repeat;
          background-size: contain;
          width: 23px;
          height: 100%;
          left: -30px;

          margin: auto 0;
        }
      }
    }

    .quality {
      padding: 100px 0;

      p {
        font-size: 22px;
      }

      .flex-row {
        img {
          width: auto;
          height: 150px;
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
    </section>

    <section class="section about">
        <div class="container content">
            <div class="columns">
                <div class="column is-7">
                    <img alt="" src="/images/gazoprovodi/gazoprovod_grp2.jpg">
                </div>
                <div class="column is-5 text-22">
                    <p>Проектный отдел ООО «Энергия Плюс», уже более двух десятилетий успешно выполняет
                        полный спектр работ по проектированию линейных объектов для всех видов строительства
                        (новое строительство, реконструкция, капитальный ремонт, техническое перевооружение,
                        консервация, ликвидация)
                    </p>
                </div>
            </div>
            <!--            <div class="column is-11">-->
            <InfoBlock text="" subText="За годы работы мы накопили значительный опыт технических решений по переустройству
                        (выносу, перекладке) действующих газопроводов, которые попадают в зону строительства
                        автомобильных дорог и других объектов капитального строительства. В нашем портфолио
                        также есть многочисленные примеры технических решений по устройству защитных
                        мероприятий (футляров) на действующих газопроводах.">
            </InfoBlock>
            <!--            </div>-->
        </div>
    </section>
    <section class="section tech-section bg-dark ">
        <div class="container text-light ">
            <div class="columns">
                <div class="content column">
                    <div class="container ">
                        <div class="px-6">
                            <TitleLanding left white titleText="В раздел технологических решений входят"/>

                            <div class="tech__content">
                                <ul class="mb-5 list">
                                    <li class="list__item">
                                        расчет схемы газоснабжения, подбор газового оборудования
                                    </li>
                                    <li class="list__item">
                                        разработка планов и профилей М1:1000, М1:500, М1:100
                                    </li>
                                    <li class="list__item">
                                        разработка проектов организации строительства
                                    </li>
                                    <li class="list__item">
                                        разработка ППР для закрытых переходов (методами ГНБ, микротоннелирования,
                                        шнекового
                                        бурения)
                                    </li>
                                    <li class="list__item">разработка проектов внутреннего газоснабжения</li>
                                    <li class="list__item">подбор ГРП, ГРУ, ШРП заводской готовности</li>
                                    <li class="list__item">выбор и расчет узлов учета газа</li>
                                    <li class="list__item">антикоррозионая защита (СКЗ, протекторы)</li>
                                    <li class="list__item">проект системы контроля загазованности</li>
                                    <li class="list__item">проект системы диспетчеризации и телеметрии</li>
                                </ul>
                                <p>Для проектирования используется специализированное программное обеспечение,
                                    позволяющее
                                    создавать как двухмерные чертежи, так и визуализировать их трёхмерные модели.
                                    Использование 3D-моделирования позволяет нам создавать более точные и функциональные
                                    проекты, а также существенно сокращает время на согласование и реализацию проекта.
                                </p>
                                <div class="objects-map ">
                                    <div class="objects-map__row">
                                        <div class="objects-map__item">
                                            <Lightbox noScroll="false"
                                                      modalClasses="pipu">
                                                <figure class="image">
                                                    <LazyImage
                                                        class="objects-map__img"
                                                        src={'/images/map/object-map2.jpg'}
                                                        alt={'Проект 2'}/>
                                                </figure>
                                            </Lightbox>
                                        </div>
                                        <div class="objects-map__item">
                                            <Lightbox noScroll="false"
                                                      modalClasses="pipu">
                                                <figure class="image">
                                                    <LazyImage
                                                        class="objects-map__img"
                                                        src={'/images/gazoprovodi/gazoprovod_grp3.jpg'}
                                                        alt={'Проект 3'}/>
                                                </figure>
                                            </Lightbox>
                                        </div>
                                        <div class="objects-map__item">
                                            <Lightbox noScroll="false"
                                                      modalClasses="pipu">
                                                <figure class="image">
                                                    <LazyImage
                                                        class="objects-map__img"
                                                        src={'/images/map/object-map5.jpg'}
                                                        alt={'Проект 2'}/>
                                                </figure>
                                            </Lightbox>
                                        </div>

                                        <div class="objects-map__item">
                                            <Lightbox noScroll="false"
                                                      modalClasses="pipu">
                                                <figure class="image">
                                                    <LazyImage
                                                        class="objects-map__img"
                                                        src={'/images/map/object-map3.jpg'}
                                                        alt={'Проект 3'}/>
                                                </figure>
                                            </Lightbox>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="section calc ">
        <div class="container section__wrap ">
            <div class="columns ">
                <div class="content column is-10">
                    <div class="">
                        <TitleLanding titleText="Калькуляторы расчета стоимости"/>
                        <CalcTabs selected="gaz" classes="calc__tabs"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section solution px-4">
        <div class="container ">
            <div class="columns px-6">
                <div class="column is-8">
                    <TitleLanding left titleText="Наши услуги включают в себя" white/>
                    <ul class="solution__list">
                        <li class="solution__item">
                            сбор всей необходимой исходно-разрешительной документации;
                        </li>
                        <li class="solution__item">
                            проведение инженерных изысканий;
                        </li>
                        <li class="solution__item">
                            разработку и согласование проектной документации в
                            надзорных органах, таких как АО "Мосгаз", АО "Мособлгаз", ПАО "Газпром" и других ГРО
                        </li>
                    </ul>
                </div>


            </div>
            <div class="columns px-6 pt-2">
                <div class="column is-1 is-align-content-center">
                    <img width="80px" src="/images/kotel/icons/icon_3.png"/>
                </div>
                <div class="column is-11">
                    <p class="text-light ">
                        Проектная документация выполняется в строгом соответствии с Заданием на проектирование,
                        требованиями Постановления Правительства РФ №87, включая техническое сопровождение в органах
                        экспертизы до получения положительного заключения.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="section docs">
        <div class="container">
            <div class="columns">
                <div class="content column">
                    <div class="px-6">
                        <div class="flex-row">
                            <img width="100px" src="/images/bmk/bmk_icon_02.png"/>

                            <p class=""> Рабочая документация и авторский надзор выполняются в объеме,
                                необходимом для
                                качественного
                                производства строительно-монтажных работ. </p>
                        </div>
                        <div class="flex-row ">
                            <img width="100px" src="/images/bmk/bmk_icon_04.png"/>

                            <div>
                                <p>По желанию Заказчика мы выполняем функции
                                    Генерального проектировщика или Технического заказчика строительства и обеспечиваем
                                    выполнение вспомогательных разделов :</p>

                                <ul class="mb-5 list">
                                    <li class="list__item"> Мероприятия по охране окружающей среды</li>
                                    <li class="list__item"> Мероприятия по пожарной безопасности</li>
                                    <li class="list__item"> Мероприятия по ГО и ЧС</li>
                                    <li class="list__item"> Требования к безопасной эксплуатации объекта капитального
                                        строительства
                                    </li>
                                    <li class="list__item"> Промышленная безопасность</li>
                                    <li class="list__item"> Обеспечение сохранности объектов археологического и
                                        культурного
                                        наследия
                                    </li>
                                    <li class="list__item"> Проект организации дорожного движения</li>
                                    <li class="list__item"> Сметная документация</li>
                                </ul>
                            </div>
                        </div>
                        <!--                        <div class="objects-map ">-->
                        <!--                            <div class="objects-map__row">-->
                        <!--                                <div class="objects-map__item">-->
                        <!--                                    <Lightbox noScroll="false"-->
                        <!--                                              modalClasses="pipu">-->
                        <!--                                        <figure class="image">-->
                        <!--                                            <LazyImage-->
                        <!--                                                class="objects-map__img"-->
                        <!--                                                src={'/images/map/object-map.png'}-->
                        <!--                                                alt={'Проект 2'}/>-->
                        <!--                                        </figure>-->
                        <!--                                    </Lightbox>-->
                        <!--                                </div>-->
                        <!--                                <div class="objects-map__item">-->
                        <!--                                    <Lightbox noScroll="false"-->
                        <!--                                              modalClasses="pipu">-->
                        <!--                                        <figure class="image">-->
                        <!--                                            <LazyImage-->
                        <!--                                                class="objects-map__img"-->
                        <!--                                                src={'/images/map/object-map4.png'}-->
                        <!--                                                alt={'Проект 2'}/>-->
                        <!--                                        </figure>-->
                        <!--                                    </Lightbox>-->
                        <!--                                </div>-->
                        <!--                            </div>-->
                        <!--                        </div>-->
                    </div>
                </div>
            </div>
        </div>
        <div class="quality">
            <div class="container section__wrap-v2">
                <div class="columns">
                    <div class="content column">
                        <div class="px-6  ">
                            <div class="flex-row">
                                <img src="/images/itc_ctp/i_bezopasnost128.png"/>
                                <p>Наш подход позволяет нам гарантировать качество и
                                    надежность
                                    проектных решений, а также
                                    своевременное и эффективное выполнение всех работ. <br>Мы гордимся нашим опытом и
                                    репутацией, и
                                    всегда рады помочь нашим клиентам в реализации проектов по газораспределению и
                                    газопотреблению.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section order-form">
        <div class="container">
            <div class="columns">
                <div class="column is-6 order-form__img-container">
                    <img src="\images\gazoprovodi\gazoprovod-build.jpg"/>
                </div>
                <div class="column">
                    <h4 class="title has-text-white">Отправить заявку</h4>
                    <ContactForm/>
                    <p class="is-size-7 has-text-white pt-3">Нажимая кнопку "Отправить", я даю свое
                        согласие на обработку моих персональных данных</p>
                </div>
            </div>
        </div>
    </section>

</main>

