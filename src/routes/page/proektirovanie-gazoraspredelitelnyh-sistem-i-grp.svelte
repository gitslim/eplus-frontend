<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>


<script>
    import BtnZayavka from '$lib/components/BtnZayavka.svelte';
    import CalcTabs from '$lib/components/calc/CalcTabs.svelte';
    import ContactForm from '$lib/components/ContactForm.svelte'
    import HeaderLanding from '$lib/components/HeaderLanding.svelte';
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
    section {
      padding: 80px 0;
    }

    .hero {
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      background-blend-mode: multiply;
      background-image: url(/images/gazoprovodi/gazoprovod-proektirovanie.jpg),
      linear-gradient(0deg, grey, transparent),
      linear-gradient(45deg, grey, transparent),
      linear-gradient(80deg, grey, transparent),
      linear-gradient(100deg, grey, transparent);

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

    .about,.docs {
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

      .objects-map {
        display: flex;
        flex-wrap: wrap;
        gap: 40px;

        .objects-map__row {
          width: 100%;

          display: flex;
          justify-content: space-evenly;
          gap: 40px;
          flex-wrap: wrap;

          .objects-map__item {
            :global(.image img) {
              object-fit: cover;
              width: 323px;
              height: 186px;
            }
          }
        }
      }
    }

    .tech-section {
      &__wrap {
        position: relative;
        top: -130px;
        padding: 100px 30px;
        background-color: #fff;
        box-shadow: 0 19px 46px 25px rgba(0, 0, 0, 0.15);

        font-size: 18px;


      }
    }

    .list {
      &__item {
        list-style: none;
        margin: 20px 0;
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

      .columns {
        justify-content: center;
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
        <div class="container">
            <div class="columns">
                <div class="content column">
                    <div class="px-6">
                        <TitleLanding green left titleText="О нас"/>
                        <p>Проектный отдел ООО «Энергия Плюс», уже более двух десятилетий успешно выполняет
                            полный спектр работ по проектированию линейных объектов для всех видов строительства
                            (новое строительство, реконструкция, капитальный ремонт, техническое перевооружение,
                            консервация, ликвидация)
                        </p>
                        <p>За годы работы мы накопили значительный опыт технических решений по переустройству
                            (выносу, перекладке) действующих газопроводов, которые попадают в зону строительства
                            автомобильных дорог и других объектов капитального строительства. В нашем портфолио
                            также есть многочисленные примеры технических решений по устройству защитных
                            мероприятий (футляров) на действующих газопроводах.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section objects-section">
        <div class="container">
            <h2 class="title">Объекты по выносу и устройству защитных футляров</h2>
            <div class="objects-map ">
                <div class="objects-map__row">
                    <div class="objects-map__item">
                        <Lightbox noScroll="false"
                                  modalClasses="pipu">
                            <figure class="image">
                                <LazyImage
                                    class="objects-map__img"
                                    src={'/images/map/object-map.png'}
                                    alt={'Проект 1'}/>
                            </figure>
                        </Lightbox>
                    </div>
                    <div class="objects-map__item">
                        <Lightbox noScroll="false"
                                  modalClasses="pipu">
                            <figure class="image">
                                <LazyImage
                                    class="objects-map__img"
                                    src={'/images/map/object-map2.png'}
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
                                    src={'/images/map/object-map3.png'}
                                    alt={'Проект 3'}/>
                            </figure>
                        </Lightbox>
                    </div>
                </div>
                <div class="objects-map__row">
                    <div class="objects-map__item">
                        <Lightbox noScroll="false"
                                  modalClasses="pipu">
                            <figure class="image">
                                <LazyImage
                                    class="objects-map__img"
                                    src={'/images/map/object-map4.png'}
                                    alt={'Проект 1'}/>
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
                                    src={'/images/map/object-map6.jpg'}
                                    alt={'Проект 3'}/>
                            </figure>
                        </Lightbox>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section text-center">
        <div class="container tech-section">
            <div class="columns">
                <div class="content column tech-section__wrap">
                    <div class="container ">
                        <div class="px-6">
                            <TitleLanding left titleText="В раздел технологических решений входят"/>
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
                                    разработка ППР для закрытых переходов (методами ГНБ, микротоннелирования, шнекового
                                    бурения)
                                </li>
                                <li class="list__item">разработка проектов внутреннего газоснабжения</li>
                                <li class="list__item">подбор ГРП, ГРУ, ШРП заводской готовности</li>
                                <li class="list__item">выбор и расчет узлов учета газа</li>
                                <li class="list__item">антикоррозионая защита (СКЗ, протекторы)</li>
                                <li class="list__item">проект системы контроля загазованности</li>
                                <li class="list__item">проект системы диспетчеризации и телеметрии</li>
                            </ul>

                            <p>Для проектирования используется специализированное программное обеспечение, позволяющее
                                создавать как двухмерные чертежи, так и визуализировать их трёхмерные модели.
                                Использование 3D-моделирования позволяет нам создавать более точные и функциональные
                                проекты, а также существенно сокращает время на согласование и реализацию проекта. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="section calc">
        <div class="container">
            <div class="columns">
                <div class="content column is-8">
                        <TitleLanding titleText="Калькуляторы расчета стоимости"/>
                        <CalcTabs selected="gaz" classes="calc__tabs"/>
                </div>
            </div>
        </div>
    </section>
    <section class="section docs">
        <div class="container">
            <div class="columns">
                <div class="content column">
                    <div class="px-6">
                        <TitleLanding green left titleText="Документация"/>
                        <p>Наши услуги включают в себя сбор всей необходимой исходно-разрешительной документации,
                            проведение инженерных изысканий, разработку и согласование проектной документации в
                            надзорных органах, таких как АО "Мосгаз", АО "Мособлгаз", ПАО "Газпром" и других.</p>
                        <p>Проектная документация выполняется в строгом соответствии с Заданием на проектирование,
                            требованиями Постановления Правительства РФ №87, включая техническое сопровождение в органах
                            экспертизы до получения положительного заключения.</p>
                        <p>Рабочая документация и авторский надзор выполняются в объеме, необходимом для качественного
                            производства строительно-монтажных работ. По желанию Заказчика мы выполняем функции
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
                            <li class="list__item"> Обеспечение сохранности объектов археологического и культурного
                                наследия
                            </li>
                            <li class="list__item"> Проект организации дорожного движения</li>
                            <li class="list__item"> Сметная документация</li>
                        </ul>
                        <p>Наш подход позволяет нам гарантировать качество и надежность проектных решений, а также
                            своевременное и эффективное выполнение всех работ. Мы гордимся нашим опытом и репутацией, и
                            всегда рады помочь нашим клиентам в реализации проектов по газораспределению и
                            газопотреблению.
                        </p>
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

