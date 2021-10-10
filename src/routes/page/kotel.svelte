<svelte:head>
    <meta name="robots" content="noindex">
</svelte:head>

<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import CalculationBlock from '$lib/components/CalculationBlock.svelte'
    import {onMount} from 'svelte'
    import {browser} from '$app/env'
    import BtnZayavka from '$lib/components/BtnZayavka.svelte'
    import ContactFormButton from '$lib/components/ContactFormButton.svelte'
    import Icon from 'fa-svelte'
    import {faPhone} from '@fortawesome/free-solid-svg-icons'

    let title = 'Проектирование автономных котельных'

    onMount(async () => {
    })
</script>

<style lang="scss">
  .hero {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: multiply;
    background-image: url(/land1/assets/img/bg/bg_2.jpg),
    linear-gradient(0deg, grey, transparent),
    linear-gradient(45deg, grey, transparent),
    linear-gradient(80deg, grey, transparent),
    linear-gradient(100deg, grey, transparent);
  }

  .calculation {
    background-image: url("/images/tehnicheskoePerevooruzhenie/form-bg.jpg");
    text-align: center;
    color: #fff;
    padding: 100px 0 70px;
    background-size: cover;
  }
</style>

<SvelteSeo {title}/>

<div id="thetop"></div>

<main>
    <section class="hero is-medium">
        <div class="hero-body">
            <h1 class="has-text-white has-text-weight-light title is-size-2">Проектирование водогрейных и паровых
                котельных</h1>
            <ContactFormButton class="button is-radiusless is-primary is-large">
                <div slot="button">Заказать проект</div>
            </ContactFormButton>
            <div class="subtitle py-6">
                <a rel="external"
                   class="has-text-white"
                   href="tel:+74957907697">
                    <Icon icon={faPhone}/>
                    <span class="callibri_phone">+7 (495) 790-76-97</span>
                    <br/>
                </a>
            </div>
        </div>
    </section>

    <section class="banner-section agency-creative-banner d-flex align-items-center clearfix">
        <div class="container">
            <div class="columns">
                <div class="column is-6">
                    <img alt="" src="/land1/assets/img/u-bmk-image_01.png">
                </div>
                <div class="column is-6">
                    <h2 class="">Проектирование промышленных газовых котельных</h2>
                    <p class="">
                        Наша компания выполняет полный комплекс проектно-изыскательских работ и разрабатывает
                        проектную документацию в полном соответствии с ПП РФ №87, начиная с подготовки Задания на
                        проектирование до получения положительного заключения государственной либо негосударственной
                        экспертизы, а также всех необходимых согласований для строительства любого типа котельной.
                    </p>
                    <ContactFormButton class="button is-radiusless is-primary is-large">
                        <div slot="button">Заказать проект</div>
                    </ContactFormButton>
                </div>
            </div>
        </div>
        <svg class="separ03" clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality"
             shape-rendering="geometricPrecision" text-rendering="geometricPrecision" version="1.1"
             viewBox="0 0 6096 1693" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink">
      <polygon fill="#353535" points="0,0 6096,1693 0,1693 "/>
    </svg>
    </section>

    <section class="about-section sec-ptb-100 bg-default-gray text-white clearfix">
        <div class="container">
            <div class="row align-items-center justify-content-lg-between justify-content-md-between justify-content-sm-center">
                <div class="col-lg-6 col-md-6 col-sm-7 col-xs-12">
                    <div class="about-content">
                        <div class="row">
                            <div class="child-item">
                                <p class="mb-60 text-white justify-text">
                                    Автономная газовая котельная – здание или помещение, в котором расположен комплекс
                                    устройств для выработки пара или горячей воды, используемых для энергоснабжения
                                    объекта. Кроме того, в современных котельных существует <a href="#">опция
                                    использования технологии когенерации</a> (единовременной генерации тепловой и
                                    электрической энергии).</p>
                            </div>
                            <h4 class="item-title text-white">Мы предлагаем услуги по проектированию следующих видов
                                промышленных газовых котельных:</h4>
                            <div class="col-lg-6 col-md-6 col-sm-7 col-xs-12">
                                <div class="row">
                                    <div class="about-service ul-li-block clearfix">
                                        <ul class="clearfix">
                                            <li>
                                                <div class="service-icon">
                                                    <img alt="" src="/land1/assets/img/icons/icon_3.png">
                                                </div>
                                                <div class="service-content">
                                                    <h4 class="service-title text-white">Крышная</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="service-icon">
                                                    <img alt="" src="/land1/assets/img/icons/icon_3.png">
                                                </div>
                                                <div class="service-content">
                                                    <h4 class="service-title text-white">Отдельностоящая</h4>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-7 col-xs-12">
                                <div class="about-service ul-li-block clearfix">
                                    <ul class="clearfix">
                                        <li>
                                            <div class="service-icon">
                                                <img alt="" src="/land1/assets/img/icons/icon_3.png">
                                            </div>
                                            <div class="service-content">
                                                <h4 class="service-title text-white">Пристроенная</h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="service-icon">
                                                <img alt="" src="/land1/assets/img/icons/icon_3.png">
                                            </div>
                                            <div class="service-content">
                                                <h4 class="service-title text-white">Встроенная</h4>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-7 col-xs-12">
                    <img alt="" src="/land1/assets/img/bmk_image_003.png">
                </div>
            </div>
        </div>
    </section>

    <section class="about-section bg-light-gray sec-ptb-100 clearfix">
        <div class="btn-wrap text-center clearfix">
            <a target="_blank" class="btn" href="/docs/Опросный лист котельная.xls">Получить опросный лист</a>
        </div>
    </section>

    <section class="about-section sec-ptb-100 relative clearfix">
        <svg class="separ02" clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality"
             shape-rendering="geometricPrecision" text-rendering="geometricPrecision" version="1.1"
             viewBox="0 0 6096 1693" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink">
      <polygon fill="#F2F2F2" points="0,1693 6096,0 0,0 "/>
    </svg>
        <div class="container">
            <div class="about-content">
                <h2 class="item-title mb-60 titlefor">
                    Преимущества индивидуальной котельной:
                </h2>
                <div class="about-service list ul-li-block clearfix">
                    <ul class="clearfix">
                        <li>
                            <div class="service-icon">
                                <img alt="" src="/land1/assets/img/icons/bmk_check_006.png">
                            </div>
                            <div class="service-content">
                                <p class="mb-0">
                                    Получение тепловой энергии по себестоимости, т.е. без переплат теплоснабжающим
                                    организациям за тепло по завышенным тарифам;
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="service-icon">
                                <img alt="" src="/land1/assets/img/icons/bmk_check_006.png">
                            </div>
                            <div class="service-content">
                                <p class="mb-0">
                                    Возможность эффективного регулирования объёма теплопотребления по погода-зависимому
                                    графику и экономии на расходе топлива;
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="service-icon">
                                <img alt="" src="/land1/assets/img/icons/bmk_check_006.png">
                            </div>
                            <div class="service-content">
                                <p class="mb-0">
                                    Возможность использования когенерации и тригенерации, повышающих КПД объекта
                                    генерации;
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="service-icon">
                                <img alt="" src="/land1/assets/img/icons/bmk_check_006.png">
                            </div>
                            <div class="service-content">
                                <p class="mb-0">
                                    Возможность сбыта тепловой и электрической энергии сторонним потребителям (при
                                    условии получении статуса ресурсоснабжающей организации);
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="service-icon">
                                <img alt="" src="/land1/assets/img/icons/bmk_check_006.png">
                            </div>
                            <div class="service-content">
                                <p class="mb-0">
                                    Инвестиционная льгота, позволяющая снижать налог на прибыль.
                                </p>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="partners-section sec-ptb-100 clearfix">
        <div class="container">

            <div class="section-title text-center mb-60">
                <h2 class="title-text mb-15 titlefor">Наши партнёры</h2>
            </div>

            <div class="partners-carousel arrow-left-right owl-carousel owl-theme" id="partners-carousel">
                <div class="item">
                    <div class="partner-logo">
                        <img alt="" class="before-image" src="/land1/assets/img/partners/01.jpg">
                    </div>
                </div>
                <div class="item">
                    <div class="partner-logo">
                        <img alt="" class="before-image" src="/land1/assets/img/partners/02.jpg">
                    </div>
                </div>
                <div class="item">
                    <div class="partner-logo">
                        <img alt="" class="before-image" src="/land1/assets/img/partners/03.jpg">
                    </div>
                </div>
                <div class="item">
                    <div class="partner-logo">
                        <img alt="" class="before-image" src="/land1/assets/img/partners/04.jpg">
                    </div>
                </div>
                <div class="item">
                    <div class="partner-logo">
                        <img alt="" class="before-image" src="/land1/assets/img/partners/05.jpg">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="agency-creative-banner d-flex align-items-center sec-ptb-100 relative clearfix">
        <div class="container">
            <div class="row justify-content-lg-start align-items-center justify-content-lg-between">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <img alt="" src="/land1/assets/img/640801199_w640_h640_dizelnaya-blochno-modulnaya-kotelnaya.png">
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="banner-content">
                        <h5 class="title-text mb-50 titlefor justify-text">В необходимых ситуациях специалисты «Энергия
                            Плюс» готовы выполнить проект и обеспечить изготовление и поставку блочно-модульных
                            котельных <a href="/page/stroitelno-montazhnye-raboty">(БМК)
                                мощностью от 0,3-8 МВт</a></h5>
                    </div>
                    <div class="butbl row">
                        <div class="col-md-6">
                            <a target="_blank" class="btn" href="/docs/Опросный лист БМК.xlsx">Скачать опросный лист</a>
                            <!--                        <a class="btn" href="#" on:click|preventDefault={handlerClick}>Оставить заявку</a>-->
                        </div>
                        <div class="col-md-6">
                            <BtnZayavka radius btnText="Оставить заявку"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <svg class="separ03" clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality"
             shape-rendering="geometricPrecision" text-rendering="geometricPrecision" version="1.1"
             viewBox="0 0 6096 1693" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink">
      <polygon fill="#f2f2f2" points="0,0 6096,1693 0,1693 "/></svg>
    </section>

    <section class="sec-ptb-100 pb-60 relative bg-light-gray clearfix">
        <div class="container">
            <div class="masoney-grid agency-marketing-grid">
                <div class="grid-sizer"></div>
                <div class="grid-item hidden">
                    <div class="portfolio-fullimage has-content">
                        <div class="content-wrap">
                            <img alt="" src="/land1/assets/img/projects/01.jpg">
                        </div>
                    </div>
                </div>
                <div class="grid-item">
                    <div class="portfolio-fullimage has-content bg-light-gray">
                        <div class="content-wrap">
                            <h4 class="item-title mb-50">
                                ООО «Энергия Плюс» осуществляет комплекс <a
                                    href="/page/stroitelno-montazhnye-raboty">строительно-монтажных
                                работ</a> по разработанным проектам в соответствии с требованиями СНиП.
                            </h4>
                            <div class="butbl" style="text-align: center;">
                                <!--                                <a class="btn" href="#" on:click|preventDefault={handlerClick}>Оставить заявку</a>-->
                                <BtnZayavka radius btnText="Оставить заявку"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="portfolio-section clearfix">
        <div class="container">

            <div class="section-title mb-30">
                <h2 class="title-text mb-15 titlefor">Наши проекты</h2>
            </div>

            <div class="zoom-gallery portfolio-carousel-2 owl-arrow owl-carousel owl-theme" id="portfolio-carousel-2">
                <div class="item">
                    <a class="popup-image portfolio-fullimage add-effect" data-source="#"
                       href="/land1/assets/img/projects/02.jpg"
                       title="Проект 2">
                        <img alt="" src="/land1/assets/img/projects/02.jpg">
                        <span class="item-content-2">
							<strong class="item-title">Проект 2</strong>
							<small class="item-brand">Просмотр</small>
						</span>
                    </a>
                </div>
                <div class="item">
                    <a class="popup-image portfolio-fullimage add-effect" data-source="#"
                       href="/land1/assets/img/projects/03.jpg"
                       title="Проект 3">
                        <img alt="" src="/land1/assets/img/projects/03.jpg">
                        <span class="item-content-2">
							<strong class="item-title">Проект 3</strong>
							<small class="item-brand">Просмотр</small>
						</span>
                    </a>
                </div>
                <div class="item">
                    <a class="popup-image portfolio-fullimage add-effect" data-source="#"
                       href="/land1/assets/img/projects/04.jpg"
                       title="Проект 4">
                        <img alt="" src="/land1/assets/img/projects/04.jpg">
                        <span class="item-content-2">
							<strong class="item-title">Проект 4</strong>
							<small class="item-brand">Просмотр</small>
						</span>
                    </a>
                </div>
                <div class="item">
                    <a class="popup-image portfolio-fullimage add-effect" data-source="#"
                       href="/land1/assets/img/projects/05.jpg"
                       title="Проект 5">
                        <img alt="" src="/land1/assets/img/projects/05.jpg">
                        <span class="item-content-2">
							<strong class="item-title">Проект 5</strong>
							<small class="item-brand">Просмотр</small>
						</span>
                    </a>
                </div>
                <div class="item">
                    <a class="popup-image portfolio-fullimage add-effect" data-source="#"
                       href="/land1/assets/img/projects/06.jpg"
                       title="Проект 6">
                        <img alt="" src="/land1/assets/img/projects/06.jpg">
                        <span class="item-content-2">
							<strong class="item-title">Проект 6</strong>
							<small class="item-brand">Просмотр</small>
						</span>
                    </a>
                </div>
                <div class="item">
                    <a class="popup-image portfolio-fullimage add-effect" data-source="#"
                       href="/land1/assets/img/projects/07.jpg"
                       title="Проект 7">
                        <img alt="" src="/land1/assets/img/projects/07.jpg">
                        <span class="item-content-2">
							<strong class="item-title">Проект 7</strong>
							<small class="item-brand">Просмотр</small>
						</span>
                    </a>
                </div>
            </div>
        </div>

        <div class="btn-wrap text-center clearfix">
            <a class="btn" href="/page/referens-list">Наши проекты</a>
        </div>

    </section>

    <style type="text/css">
        .checkers {
            display: none;
        }

        .checkers.show {
            display: block;
        }
    </style>

    <section class="about-section clearfix section logic svelte-rgyqg6">
        <div class="container">
            <div class="section-title text-center mb-30">
                <h2 class="title-text mb-15 titlefor">Этапы работы</h2>
                <p class="mb-0">Алгоритм проектирования автономной котельной вместе с «Энергией Плюс»</p>
            </div>
            <div class="columns is-desktop">
                <div class="column is-4 logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6"
                                                                        src="/land1/assets/img/icons/bmk_icon_01.png">
                    <p class="logic__text svelte-rgyqg6">Оставляете заявку / заполняете опросный лист</p>
                </div>
                <div class="column is-4 logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6"
                                                                        src="/land1/assets/img/icons/bmk_icon_04.png">
                    <p class="logic__text svelte-rgyqg6">Получаете на рассмотрение технико-коммерческое предложение
                        (ТКП)</p>
                </div>
                <div class="column is-4 logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6"
                                                                        src="/land1/assets/img/icons/bmk_icon_02.png">
                    <p class="logic__text svelte-rgyqg6">Утверждаем задание на проектирование</p>
                </div>
            </div>
            <div class="columns is-desktop">
                <div class="column is-4 logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6"
                                                                        src="/land1/assets/img/icons/bmk_icon_09.png">
                    <p class="logic__text svelte-rgyqg6">Заключаем договор</p>
                </div>
                <div class="column is-4 logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6"
                                                                        src="/land1/assets/img/icons/bmk_icon_06.png">
                    <p class="logic__text svelte-rgyqg6">Утверждаем принципиальные технические решения</p>
                </div>
                <div class="column is-4 logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6"
                                                                        src="/land1/assets/img/icons/bmk_icon_03.png">
                    <p class="logic__text svelte-rgyqg6">Разрабатываем проектную и рабочую документацию</p>
                </div>
            </div>
            <div class="columns is-desktop">
                <div class="column is-6 logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6"
                                                                        src="/land1/assets/img/icons/bmk_icon_07.png">
                    <p class="logic__text svelte-rgyqg6">Получаем необходимые согласования и экспертизы</p>
                </div>
                <div class="column is-6 logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6"
                                                                        src="/land1/assets/img/icons/bmk_icon_05.png">
                    <p class="logic__text svelte-rgyqg6">Выдаём проект в производство работ</p>
                </div>
            </div>
        </div>

        <div class="container mt-30 pb-90">
            <div class="section-title size-increase shad">
                <h5 class="title-text mb-15">
                    ТАКЖЕ «ЭНЕРГИЯ ПЛЮС» ОСУЩЕСТВЛЯЕТ<br> <a
                        href="/page/funkcii-generalnogo-proektirovshika">ФУНКЦИИ
                    ГЕНЕРАЛЬНОГО ПРОЕКТИРОВЩИКА</a> И<br> <a
                        href="/page/funkcii-tehnicheskogo-zakazchika">ФУНКЦИИ
                    ТЕХНИЧЕСКОГО ЗАКАЗЧИКА</a>
                </h5>
            </div>
        </div>
        <img alt="" class="separ02" src="/land1/assets/img/separ03.svg">
    </section>

    <section class="testimonial-section sec-ptb-100 clearfix" id="testimonial-section">
        <div class="container">
            <div class="section-title mb-60">
                <h2 class="title-text mb-15 titlefor">Отзывы</h2>
            </div>
            <div class="testimonial-carousel-2 arrow-top-right owl-carousel owl-theme" id="testimonial-carousel-2">
                <div class="item">
                    <div class="testimonial-boxed">
                        <h4 class="person-name">Бабин В.Н.</h4>
                        <span class="person-title">Главный энергетик АО "Салют"</span>
                        <div class="person-comment justify-text">
                            <p>Выражаем благодарность руководству и коллективу Общества с ограниченной ответственностью
                                «Энергия Плюс» за успешное выполнение проектных работ по техническому перевооружению
                                котельной АО «НПЦ газотурбостроения «Салют» по адресу: г. Москва, проспект Буденного, 16
                                корп.2.</p>
                            <p>Работы были проведены своевременно, с учетом пожеланий Заказчика. Разработка проектной
                                документации произведена в строгом соответствии с требованиями законодательства, что
                                позволило получить положительное заключение экспертизы Проекта и перейти к этапу
                                строительства объекта.</p>
                            <p>Хочется отметить слаженность и оперативность в работе коллектива, нацеленность на
                                результат, высокую квалификацию специалистов, аккуратность исполнения работ.</p>
                            <p>Надеемся на дальнейшее взаимовыгодное и плодотворное сотрудничество.</p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="testimonial-boxed">
                        <h4 class="person-name">Лукомский В.В.</h4>
                        <span class="person-title">Генеральный директор ЗАО «Сити-Арх»</span>
                        <div class="person-comment justify-text">
                            <p>Настоящим письмом выражаем благодарность коллективу ООО «Энергия Плюс» за оперативное и
                                качественное исполнение работ по проектированию газовой котельной для объекта:
                                «Многофункциональный торгово-развлекательный центр с зоной отдыха выходного дня по
                                адресу: Московская обл., г.Жуковский, ул. Гудкова, к юго-западу от микрорайона №
                                5А».</p>
                            <p>Коллектив ООО «Энергия Плюс» отличает высокий профессионализм, умелое взаимодействие с
                                экспертными организациями, внимательное отношение к пожеланиям Заказчика при
                                неукоснительном соблюдении требований нормативных актов Российской Федерации и
                                Московской области. Все это позволило своевременно получить положительное заключение
                                негосударственной экспертизы по объекту строительства.</p>
                            <p>Надеемся на дальнейшее плодотворное сотрудничество.</p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="testimonial-boxed">
                        <h4 class="person-name">МГТУ им. Н.Э. Баумана</h4>
                        <span class="person-title">Шахдеров О.Л.</span>
                        <div class="person-comment justify-text">
                            <p>МГТУ им. Н.Э. Баумана выражает благодарность Вашей организации за профессиональное и
                                надежное исполнение работ по проектированию технического перевооружения котельной.</p>
                            <p>Работы были выполнены в срок и в строгом соответствии с требованиями заказчика. Мы
                                довольны сотрудничеством с Вами, и при необходимости обратимся к Вам еще.</p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="testimonial-boxed">
                        <h4 class="person-name">ООО "Альтэра"</h4>
                        <span class="person-title">Директор Трошин В.И.</span>
                        <div class="person-comment justify-text">
                            <p>Выражаем коллективу ООО «Энергия Плюс» благодарность за успешное сотрудничество в
                                реализации проекта строительства газовой котельной для теплоснабжения складского
                                комплекса ООО «Альтэра».</p>
                            <p>В рамках Договора подряда, компанией ООО «Энергия Плюс», выполнен комплекс проектных и
                                строительно-монтажных работ. При разработке проекта котельной и газопровода учтены все
                                пожелания и замечания Заказчика, требования согласующих организаций и инстанций.</p>
                            <p>Работу ООО «Энергия Плюс» отличает детальный и всесторонний подход к поставленной задаче,
                                быстрое решение возникающих вопросов на основе глубокого знания законодательства и
                                нормативных документов, а также четкое взаимодействие всех подразделений, аккуратность
                                исполнения и ориентированность на конечный резулыат. Специалисты проектной группы и
                                строительно-монтажного отдела компании, работали с высоким профессионализмом и
                                ответственностью.</p>
                            <p>Выражаем уверенность в развитии сложившихся дружественных отношений и надеемся на
                                дальнейшее взаимовыгодное и плодотворное сотрудничество.</p>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="testimonial-boxed">
                        <h4 class="person-name">ООО "ВТМ дорпроект СТОЛИЦА"</h4>
                        <span class="person-title">Описание</span>
                        <div class="person-comment justify-text">
                            <p>Выражаем коллективу ООО «Энергия Плюс» благодарность за профессиональный документации на
                                газовую котельную мощностью 17,2 МВт в составе проекта: «Строительство комплекса
                                общественно-административных зданий по адресу: Московская область, г.о. Красногорск,
                                65-66 км МКАД».</p>
                            <p>В рамках государственного контракта специалистами ООО «Энергия Плюс» был выполнен
                                комплекс проектно-изыскательских работ, который позволил своевременно получить
                                положительное заключение ГАУ МО «Мособлгосэкспертиза».</p>
                            <p>Проектная документация выполнены с надлежащим качеством и с соблюдением треоований
                                законодательства в области проектирования и строительства.</p>
                            <p>Желаем дальнейших успехов в работе, будем рады сотрудничеству на новых объектах.</p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="testimonial-boxed">
                        <h4 class="person-name">ООО "Перспектива"</h4>
                        <span class="person-title">Управляющий директор Ополько М.В.</span>
                        <div class="person-comment justify-text">
                            <p>Компанией ООО «Энергия Плюс» были выполнены работы по разработке проектной документации
                                на техническое перевооружение системы внутреннего газоснабжения котельной. Проект
                                выполнен в установленный срок и в полном соответствии с технических заданием.</p>
                            <p>В ходе исполнения договорных обязательств компания показала себя как надежный деловой
                                партнер. Профессиональный подход сотрудников способствовал оперативному решению
                                вопросов,
                                связанных с исполнением договора. Завершение работ 8 установленный срок позволило
                                своевременно приступить к строительно-монтажным работам.</p>
                            <p>Мы можем рекомендовать ООО «Энергия Плюс» как надежного и ответственного исполнителя по
                                проектированию объектов газоснабжения.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="btn-wrap text-center clearfix">
            <a class="btn" href="/company/otzyvy-klientov">Читать рекомендации</a>
        </div>
    </section>

    <section class="section calculation">
        <div class="container is-max-widescreen">
            <CalculationBlock/>
        </div>
    </section>

    <!--  <section class="contact-section sec-ptb-100 bg-default-gray bg-deep-gray clearfix">-->
    <!--    <div class="container">-->
    <!--      <div class="form-wrap">-->
    <!--        <form class="form" action="#">-->
    <!--          <div class="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">-->
    <!--            <div class="col-lg-4 col-md-5 col-sm-8 col-xs-12">-->
    <!--              <div class="section-title mb-30">-->
    <!--                <h2 class="title-text mb-0 titlefor">-->
    <!--                  Обратная связь-->
    <!--                </h2>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">-->
    <!--              <div class="row">-->
    <!--                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">-->
    <!--                  <div class="form-item">-->
    <!--                    <input type="text" name="name" placeholder="Ваше имя">-->
    <!--                  </div>-->
    <!--                </div>-->

    <!--                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">-->
    <!--                  <div class="form-item">-->
    <!--                    <input type="tel" name="telephone" placeholder="Ваш email">-->
    <!--                  </div>-->
    <!--                </div>-->

    <!--                <div class="col-12">-->
    <!--                  <div class="form-item">-->
    <!--                    <textarea name="text" placeholder="Текст"></textarea>-->
    <!--                  </div>-->
    <!--                </div>-->

    <!--              </div>-->
    <!--            </div>-->
    <!--            <div class="col-lg-1 col-md-12 col-sm-12 col-xs-12">-->
    <!--              <button type="submit" class="submit-btn-icon">-->
    <!--                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 448 448" fill="currentColor" style="enable-background:new 0 0 448 448;" xml:space="preserve">-->
    <!--                  <polygon points="0.213,32 0,181.333 320,224 0,266.667 0.213,416 448,224"/></svg>-->
    <!--              </button>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </form>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--  </section>-->

</main>

<div id="backtotop">
    <a href="#" id="scroll">
        <svg fill="none" fit="" focusable="false" height="100%" preserveAspectRatio="xMidYMid meet"
             stroke="currentColor" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 15l7-7 7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
        </svg>
    </a>
</div>
