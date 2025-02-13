<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import {onMount} from 'svelte'
    import LazyImage from 'svelte-lazy-image'
    import {Lightbox, LightboxImage, LightboxGallery} from 'svelte-lightbox'
    import {browser} from '$app/env'
    import BtnZayavka from '$lib/components/BtnZayavka.svelte'
    import ContactFormButton from '$lib/components/ContactFormButton.svelte'
    import Icon from 'fa-svelte'
    import {faPhone,
            faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
    import Carousel from '$lib/components/Carousel.svelte'
    import CalcTabs from '$lib/components/calc/CalcTabs.svelte'


        let carousel;


    let title = 'Проектирование автономных котельных'

    onMount(async () => {

        let containerElement = document.getElementsByClassName('btn__zayavka');
        for(var i = 0; i < containerElement.length; i++) {
            containerElement[i].style.padding = '0';
            containerElement[i].style.fontSize = '1.25rem';
            containerElement[i].style.fontWeight = '400';
            console.log(containerElement + ' Onmount');
        }

        let buttonraunded = document.getElementsByClassName('button-raunded');
        for(var i = 0; i < buttonraunded.length; i++) {
            buttonraunded[i].style.borderRadius = '30px';
        }


        let right = document.getElementsByClassName('right');
        for(var i = 0; i < right.length; i++) {
            // right[i].style.borderRadius = '50%';
            // right[i].style.backgroundColor = '#f86923';
            right[i].style.right = '2vw';
            right[i].style.color = '#f86923';
            right[i].style.top = '-4%';
        }
        if (document.documentElement.clientWidth < 500) {
            right[2].style.top = '-3%';
        }


        let left = document.getElementsByClassName('left');
        for(var i = 0; i < left.length; i++) {
            // left[i].style.borderRadius = '50%';
            // left[i].style.backgroundColor = '#f86923';
            left[i].style.left = '';
            left[i].style.right = '6vw';
            left[i].style.color = '#f86923';
            left[i].style.top = '-4%';
        }
        if (document.documentElement.clientWidth < 500) {
            left[2].style.top = '-3%';
        }


    })
</script>

<style lang="scss">

    /*section {*/
    /*    padding: 50px 60px;*/
    /*}*/

    .hero1{
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: multiply;
        background-image: url(/images/kotel/bg/bg_2.jpg),
        linear-gradient(0deg, grey, transparent),
        linear-gradient(45deg, grey, transparent),
        linear-gradient(80deg, grey, transparent),
        linear-gradient(100deg, grey, transparent);
    }

    /*ContactFormButton.button {*/
    /*    border-radius: 30px;*/
    /*}*/


    .calculation {
        background-image: url("/images/tehnicheskoePerevooruzhenie/form-bg.jpg");
        text-align: center;
        color: #fff;
        padding: 100px 0 70px;
        background-size: cover;
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

    /*.button {*/
    /*    font-size: 15px;*/
    /*}*/

    .text-white {
        color: #fff;
    }

    h1 {
        font-size: 40px;
    }

    h2 {
        font-size: 34px;
            font-weight: 500;
    }

    .content h2 {
        font-weight: 500;
    }

    h4 {
        /*text-transform: uppercase;*/
        font-weight: normal;
    }

    h5 {
        line-height: 1.4em;
    }

    p {
        font-size: 18px;
    }

    .content ul {
        margin-left: 0;
        padding-left: 0;
        list-style-type: none;
    }



    ul li {
        display: table;
        width: 100%;
    }

    ul li div{
        margin-bottom: 30px;
        display: table;
    }

    ul li div:not(:first-child) {
        padding-left: 30px;
    }

    ul li div:first-child {
        float: left;
    }

    ul li h4 {
        text-transform: none;
    }

    .is-raunded {
        border-radius: 30px;
    }

    /*ContactFormButton .is-raunded {*/
    /*    border-radius: 30px;*/
    /*}*/

    .icon1 {
        width: 45px;
    }

    .icon2 {
        width: 25px;
        margin-top: 3px;
    }

    .has-text-justified.titlefor:before {
        left:auto;
        position: relative;
    }

    .text-center .titlefor:before {
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
    }

    /*.is_flex {*/
    /*    display: flex;*/
    /*}*/

    .box2 {
        position:relative;
    }

    .box2 .box2__item {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        padding-right: 20px;
    }

    .logic__icon.svelte-rgyqg6 {
        height: 56px;
    }

    .logic__item.svelte-rgyqg6 {
        position: relative
    }

    .logic__item.svelte-rgyqg6:last-child::after {
        display: none
    }

    .logic__item.svelte-rgyqg6::before {
        content: "";
        display: block;
        position: absolute;
        top: 96px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #fff;
        border: 4px solid #f60
    }

    .logic__item.svelte-rgyqg6::after {
        content: "";
        display: block;
        position: absolute;
        top: 101px;
        left: 52%;
        width: 96%;
        height: 4px;
        border-bottom: 2px dashed #383838;
        opacity: 0.5
    }

    #testimonial-section .slide-content {
        background-color: #fbfbfb;
        border: 1px solid #ededed;
        margin: 0 10px;
    }

    .testimonial-boxed {
        padding: 30px 40px;
    }

    .person-comment p{
        font-size: 15px;
    }

    .person-comment p:first-child{
        padding-top: 20px;
    }

    /*.fix-button .btn__zayavka {*/
    /*    padding: 0px;*/
    /*}*/

    /**************************/
    /*Стиль текста карусели НАШИ ПРОЕКТЫ - start*/
    .image .item-content-2 {
        top: 50%;
        left: 0px;
        right: 0px;
        z-index: 2;
        padding: 0px 30px;
        text-align: center;
        position: absolute;
        transform: translateY(-50%);
    }

    .image .item-content-2 .item-title {
        opacity: 0;
        width: 100%;
        display: block;
        color: white;
        line-height: 1.4;
        transform: translateY(8px);
        transition: all 0.3s ease-in-out;
    }

    .image .item-content-2 .item-title {
        font-size: 21px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .image:hover .item-content-2 .item-title {
        opacity: 1;
        transform: translateY(0px);
    }
    .image:hover .item-content-2 .item-title {
        transition-delay: 0.3s;
    }

    .proect-carousel-item {
        padding: 0 10px;
    }

    .partners{
      .slide-content {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 210px;
        height: 210px;
      }
    }

    /*Стиль текста карусели НАШИ ПРОЕКТЫ - end*/
    /*******************************/

    /*Экран меньше 1023px*/

    @media screen and (max-width: 1023px) {
        .logic__icon.svelte-rgyqg6 {
            height: 56px;
        }

        .logic__item.svelte-rgyqg6 {
            position: relative
        }

        .logic__item.svelte-rgyqg6:last-child::after {
            display: block;
        }

        .logic__item.svelte-rgyqg6::before {
            content: "";
            display: block;
            position: absolute;
            top: 96px;
            left: 50%;
            -webkit-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            transform: translateX(-50%);
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #fff;
            border: 4px solid #f60
        }

        .logic__item.svelte-rgyqg6::after {
            content: "";
            display: block;
            position: absolute;
            top: 101px;
            left: 20%;
            width: 60%;
            height: 4px;
            border-bottom: 2px dashed #383838;
            opacity: 0.5
        }

        .fix-column-row {
            flex-direction: column;
        }

        .calculation {
            overflow:hidden;
        }

        .fix-section{
            padding: 0 10px;
            margin: 40px 0;
        }
    }


    /*Экран меньше 768px*/

    @media screen and (max-width: 768px) {
        .fix-column-row {
            padding-bottom: 20px;
        }

        .box2 .box2__item {
            position: static;
            transform: translateY(0);
            padding-right: 0;
        }

        .columns {
            margin: -20px 0;
        }

        .fix-column-p:first-child {
            padding-top: 20px;
        }

        .fix-column-p {
            padding-top: 0;
            padding-bottom: 0;
        }

        h1 {
            font-size: 32px;
        }

        h2 {
            font-size: 30px;
        }


    }


</style>

<SvelteSeo {title}/>


<main>
    <section class="hero is-medium hero1">
        <div class="hero-body">
            <div class="columns">
                <div class="column is-7">
                    <h1 class="has-text-white has-text-weight-normal title titlefor">Проектирование водогрейных и паровых котельных</h1>
                    <ContactFormButton class="button is-primary is-large is-raunded button-raunded">
                        <div slot="button">Заказать проект</div>
                    </ContactFormButton>
                    <div class="subtitle py-6">
                        <a rel="external"
                           class="has-text-white zphone"
                           href="tel:+74957907697">
                            <Icon icon={faPhone}/>
                                <span class="callibri_phone zphone">+7 (495) 790-76-97</span>
                                <br/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section class="hero is-medium">
        <div class="hero-body">
            <div class="columns is-vcentered">
                <div class="column is-6">
                    <img alt="" src="/images/kotel/u-bmk-image_01.png">
                </div>
                <div class="column is-6">
                    <h1 class="title has-text-weight-normal titlefor">Проектирование промышленных газовых котельных</h1>
                    <p class="has-text-justified">
                        Наша компания выполняет полный комплекс проектно-изыскательских работ и разрабатывает
                        проектную документацию в полном соответствии с ПП РФ №87, начиная с подготовки Задания на
                        проектирование до получения положительного заключения государственной либо негосударственной
                        экспертизы, а также всех необходимых согласований для строительства любого типа котельной.
                    </p>
                    <ContactFormButton class="button is-raunded is-primary is-medium mt-6 is-fullwidth button-raunded">
                        <div slot="button">Заказать проект</div>
                    </ContactFormButton>
                </div>
            </div>
        </div>
    </section>

    <section class="hero is-half" style="background-color:#353535">
        <div class="hero-body">
            <div class="conteiner">
                <div class="columns is-vcentered">
                    <div class="column ">

                        <p class="text-white has-text-justified">
                            Автономная газовая котельная – здание или помещение, в котором расположен комплекс
                            устройств для выработки пара или горячей воды, используемых для энергоснабжения
                            объекта. Кроме того, в современных котельных существует <a href="/articles/kombinirovannoe-proizvodstvo-teplovoj-elektricheskoj-i-holodilnoj-energii-kogeneraciya-i-trigeneraciya-dlya-promyshlennogo-obuekta">опция
                            использования технологии когенерации</a> (единовременной генерации тепловой и
                            электрической энергии).</p>
                        <h4 class="item-title text-white is-uppercase is-size-4 mt-6 mb-5 ">Мы предлагаем услуги по проектированию следующих видов
                            промышленных газовых котельных:</h4>
                        <div class="columns">
                            <div class="column fix-column-p">
                                <ul>
                                    <li>
                                        <div class="">
                                            <img class="icon1" alt="" src="/images/kotel/icons/icon_3.png">
                                        </div>
                                        <div class="">
                                            <h4 class="has-text-white has-text-weight-medium pt-3">Крышная</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="">
                                            <img class="icon1" alt="" src="/images/kotel/icons/icon_3.png">
                                        </div>
                                        <div class="">
                                            <h4 class="has-text-white has-text-weight-medium pt-3">Отдельностоящая</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="column fix-column-p">
                                <ul class="">
                                    <li>
                                        <div class="">
                                            <img class="icon1" alt="" src="/images/kotel/icons/icon_3.png">
                                        </div>
                                        <div class="">
                                            <h4 class="has-text-white has-text-weight-medium pt-3">Пристроенная</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="">
                                            <img class="icon1" alt="" src="/images/kotel/icons/icon_3.png">
                                        </div>
                                        <div class="">
                                            <h4 class="has-text-white has-text-weight-medium pt-3">Встроенная</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="column ">
                        <img alt="" src="/images/kotel/bmk_image_003.png">
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="section pt-6 pb-6 has-background-light" align="center">
        <div class="button is-primary is-medium is-raunded ">
            <a target="_blank" class="has-text-white" href="/docs/Опросный лист котельная.xls">Получить опросный лист</a>
        </div>
    </section>


    <section class="section pt-6 pb-6 fix-section">
        <div class="container">
            <div class="content">
                <h2 class="title titlefor pb-6 mb-1">
                    Преимущества индивидуальной котельной:
                </h2>
                <ul class="">
                    <li>
                        <div>
                            <img class="icon2" alt="" src="/images/kotel/icons/bmk_check_006.png">
                        </div>
                        <div class="pl-3">
                            <p>
                                Получение тепловой энергии по себестоимости, т.е. без переплат теплоснабжающим
                                организациям за тепло по завышенным тарифам;
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="">
                            <img class="icon2" alt="" src="/images/kotel/icons/bmk_check_006.png">
                        </div>
                        <div class="pl-3">
                            <p class="mb-0">
                                Возможность эффективного регулирования объёма теплопотребления по погода-зависимому
                                графику и экономии на расходе топлива;
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="service-icon">
                            <img class="icon2" alt="" src="/images/kotel/icons/bmk_check_006.png">
                        </div>
                        <div class="pl-3">
                            <p class="">
                                Возможность использования когенерации и тригенерации, повышающих КПД объекта
                                генерации;
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="service-icon">
                            <img class="icon2" alt="" src="/images/kotel/icons/bmk_check_006.png">
                        </div>
                        <div class="pl-3">
                            <p class="mb-0">
                                Возможность сбыта тепловой и электрической энергии сторонним потребителям (при
                                условии получении статуса ресурсоснабжающей организации);
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="service-icon">
                            <img class="icon2" alt="" src="/images/kotel/icons/bmk_check_006.png">
                        </div>
                        <div class="pl-3 mb-0">
                            <p>
                                Инвестиционная льгота, позволяющая снижать налог на прибыль.
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    </section>


    <section class="section partners" >
        <div class="container">
            <div class="content text-center">
                <h2 class="title titlefor has-text-centered">
                    Наши партнёры
                </h2>
                 <Carousel  perPage={{800:4, 500:3, 400:2}}
                            dots={false}
                            autoplay={8000}
                            duration={3000}>
                        <span class="control" slot="left-control">
                            <Icon icon={faChevronLeft}/>
                        </span>

                        <div class="slide-content">
                            <img alt="" class="before-image" src="/images/kotel/partners/Ветна.jpg">
                        </div>
                        <div class="slide-content">
                            <img alt="" class="before-image" src="/images/kotel/partners/Зиосаб.jpg">
                        </div>
                        <div class="slide-content">
                            <img alt="" class="before-image" src="/images/kotel/partners/Лаварт.png">
                        </div>
                        <div class="slide-content">
                            <img alt="" class="before-image" src="/images/kotel/partners/НОРД.png">
                        </div>
                        <div class="slide-content">
                            <img alt="" class="before-image" src="/images/kotel/partners/БМК.jpg">
                        </div>
                         <div class="slide-content">
                             <img alt="" class="before-image" src="/images/kotel/partners/Теплорос.jpg">
                         </div>
                         <div class="slide-content">
                             <img alt="" class="before-image" src="/images/kotel/partners/Этра.jpg">
                         </div>
                         <div class="slide-content">
                             <img alt="" class="before-image" src="/images/kotel/partners/Ютермо.jpg">
                         </div>

                        <span class="control" slot="right-control">
                            <Icon icon={faChevronRight}/>
                        </span>
                 </Carousel>
            </div>
        </div>
    </section>


    <section class="section fix-section py-6">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-6 is-offset-3">
                    <div class="banner-content">
                        <h4 class="is-uppercase has-text-justified titlefor mb-6">В необходимых ситуациях специалисты «Энергия
                            Плюс» готовы выполнить проект и обеспечить изготовление и поставку блочно-модульных
                            котельных <a href="/page/stroitelno-montazhnye-raboty">(БМК)
                                мощностью от 0,3-8 МВт</a></h4>
                    </div>
                    <div class="columns fix-column-row">
                        <div class="column">
                            <a target="_blank" class="button is-primary is-medium is-raunded is-fullwidth" href="/docs/Опросный лист БМК.xlsx">Скачать опросный лист</a>
                        </div>
                        <div class="column fix-button">
                            <BtnZayavka radius btnText="Оставить заявку"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="section pt-6 pb-6 mb-6" style="background-color:#f2f2f2">
        <div class="container">
            <div class="columns is-align-items-stretch">
                <div class="column is-6">
                    <div class="box">
                        <img alt="" src="/images/kotel/projects/01.jpg">
                    </div>
                </div>
                <div class="column is-6 is-flex">
                    <div class="box">
                            <h4 class="pt-6 mb-6 has-text-centered is-size-5 has-text-weight-medium">
                                ООО «Энергия Плюс» осуществляет комплекс <a
                                    href="/page/stroitelno-montazhnye-raboty">строительно-монтажных
                                работ</a> по разработанным проектам в соответствии с требованиями СНиП.
                            </h4>
                            <BtnZayavka radius btnText="Оставить заявку"/>
                    </div>
                </div>
            </div>
        </div>
    </section>


     <section class="section py-6">
        <div class="container text-center">

            <div class="title titlefor has-text-centered ">
                <h2 class="">Наши проекты</h2>
            </div>

            <Carousel perPage={{1000:4, 800:3, 500:2, 400:1}}
                      dots={false}
                      loop={false}>

                        
                <span class="control" slot="left-control">
                            <Icon icon={faChevronLeft}/>
                </span>

                <div class="slide-content proect-carousel-item">
                    <Lightbox   noScroll="false"
                                modalClasses = "pipu">
                        <figure class="image">
                            <LazyImage
                                    src={'/images/kotel/projects/02.jpg'}
                                    alt={'Проект 2'}/>
                            <span class="item-content-2">
                                <strong class="item-title">Проект 2</strong>
                            </span>
                        </figure>
                    </Lightbox>
                </div>
                <div class="slide-content proect-carousel-item">
                    <Lightbox   noScroll="false"
                                modalClasses = "pipu">
                        <figure class="image">
                            <LazyImage
                                    src={'/images/kotel/projects/03.jpg'}
                                    alt={'Проект 3'}/>
                <span class="item-content-2">
					<strong class="item-title">Проект 3</strong>
                </span>
                        </figure>
                    </Lightbox>
                </div>
                <div class="slide-content proect-carousel-item">
                    <Lightbox   noScroll="false"
                                modalClasses = "pipu">
                        <figure class="image">
                            <LazyImage
                                    src={'/images/kotel/projects/04.jpg'}
                                    alt={'Проект 4'}/>
                <span class="item-content-2">
					<strong class="item-title">Проект 4</strong>
                </span>
                        </figure>
                    </Lightbox>
                </div>
                <div class="slide-content proect-carousel-item">
                    <Lightbox   noScroll="false"
                                modalClasses = "pipu">
                        <figure class="image">
                            <LazyImage
                                    src={'/images/kotel/projects/05.jpg'}
                                    alt={'Проект 5'}/>
                <span class="item-content-2">
					<strong class="item-title">Проект 5</strong>
                </span>
                        </figure>
                    </Lightbox>
                </div>
                <div class="slide-content proect-carousel-item">
                    <Lightbox   noScroll="false"
                                modalClasses = "pipu">
                        <figure class="image">
                            <LazyImage
                                    src={'/images/kotel/projects/06.jpg'}
                                    alt={'Проект 6'}/>
                <span class="item-content-2">
					<strong class="item-title">Проект 6</strong>
                </span>
                        </figure>
                    </Lightbox>
                </div>
                <div class="slide-content proect-carousel-item">
                    <Lightbox   noScroll="false"
                                modalClasses = "pipu">
                        <figure class="image">
                            <LazyImage
                                    src={'/images/kotel/projects/07.jpg'}
                                    alt={'Проект 7'}/>
                <span class="item-content-2">
					<strong class="item-title">Проект 7</strong>
                </span>
                        </figure>
                    </Lightbox>
                </div>
                <span class="control" slot="right-control">
                            <Icon icon={faChevronRight}/>
                </span>

            </Carousel>
        </div>
        <div align="center" class="pt-4">
            <a class="button is-primary is-medium is-raunded" href="/page/referens-list/#object_teplo">Наши проекты</a>
        </div>
    </section>


     <section class="section py-6 has-text-centered">
        <div class="container text-center">
            <div class="title titlefor">
                <h2 class="">Этапы работы</h2>
            </div>
            <p class="mb-5">Алгоритм проектирования автономной котельной вместе с «Энергией Плюс»</p>
            <div class="columns is-desktop ">
                <div class="column logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6 mb-6"
                                                                        src="/images/kotel/icons/bmk_icon_01.png">
                    <p class="logic__text svelte-rgyqg6">Оставляете заявку / заполняете опросный лист</p>
                </div>
                <div class="column logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6 mb-6"
                                                                        src="/images/kotel/icons/bmk_icon_04.png">
                    <p class="logic__text svelte-rgyqg6">Получаете на рассмотрение технико-коммерческое предложение
                        (ТКП)</p>
                </div>
                <div class="column logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6 mb-6"
                                                                        src="/images/kotel/icons/bmk_icon_02.png">
                    <p class="logic__text svelte-rgyqg6">Утверждаем задание на проектирование</p>
                </div>
            </div>
            <div class="columns is-desktop">
                <div class="column logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6 mb-6"
                                                                        src="/images/kotel/icons/bmk_icon_09.png">
                    <p class="logic__text svelte-rgyqg6">Заключаем договор</p>
                </div>
                <div class="column logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6 mb-6"
                                                                        src="/images/kotel/icons/bmk_icon_06.png">
                    <p class="logic__text svelte-rgyqg6">Утверждаем принципиальные технические решения</p>
                </div>
                <div class="column logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6 mb-6"
                                                                        src="/images/kotel/icons/bmk_icon_03.png">
                    <p class="logic__text svelte-rgyqg6">Разрабатываем проектную и рабочую документацию</p>
                </div>
            </div>
            <div class="columns is-desktop">
                <div class="column logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6 mb-6"
                                                                        src="/images/kotel/icons/bmk_icon_07.png">
                    <p class="logic__text svelte-rgyqg6">Получаем необходимые согласования и экспертизы</p>
                </div>
                <div class="column logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6 mb-6"
                                                                        src="/images/kotel/icons/bmk_icon_05.png">
                    <p class="logic__text svelte-rgyqg6">Выдаём проект в производство работ</p>
                </div>
            </div>
        </div>

        <div class="section p-4">
            <div class="box">
                <h5 class="title mb-15">
                    ТАКЖЕ «ЭНЕРГИЯ ПЛЮС» ОСУЩЕСТВЛЯЕТ<br> <a
                        href="/page/funkcii-generalnogo-proektirovshika">ФУНКЦИИ
                    ГЕНЕРАЛЬНОГО ПРОЕКТИРОВЩИКА</a> И<br> <a
                        href="/page/funkcii-tehnicheskogo-zakazchika">ФУНКЦИИ
                    ТЕХНИЧЕСКОГО ЗАКАЗЧИКА</a>
                </h5>
            </div>
        </div>
    </section>


    <section class="testimonial-section sec-ptb-100 clearfix py-6" id="testimonial-section">
        <div class="container">
            <div class="section mb-60">
                <h2 class="title pb-6 titlefor">Отзывы</h2>
            </div>

            <Carousel   perPage={{1000:2, 700:1}}
                        dots={false}>
                           
                        <span class="control" slot="left-control">
                            <Icon icon={faChevronLeft}/>
                        </span>

                <div class="slide-content">
                    <div class="testimonial-boxed">
                        <h4 class="has-text-weight-medium">Бабин В.Н.</h4>
                        <span class="person-title is-size-7">Главный энергетик АО "Салют"</span>
                        <div class="person-comment has-text-justified">
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
                <div class="slide-content">
                    <div class="testimonial-boxed">
                        <h4 class="has-text-weight-medium">Лукомский В.В.</h4>
                        <span class="person-title is-size-7">Генеральный директор ЗАО «Сити-Арх»</span>
                        <div class="person-comment has-text-justified">
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
                <div class="slide-content">
                    <div class="testimonial-boxed">
                        <h4 class="has-text-weight-medium">МГТУ им. Н.Э. Баумана</h4>
                        <span class="person-title is-size-7">Шахдеров О.Л.</span>
                        <div class="person-comment has-text-justified">
                            <p>МГТУ им. Н.Э. Баумана выражает благодарность Вашей организации за профессиональное и
                                надежное исполнение работ по проектированию технического перевооружения котельной.</p>
                            <p>Работы были выполнены в срок и в строгом соответствии с требованиями заказчика. Мы
                                довольны сотрудничеством с Вами, и при необходимости обратимся к Вам еще.</p>
                        </div>
                    </div>
                </div>
                <div class="slide-content">
                    <div class="testimonial-boxed">
                        <h4 class="has-text-weight-medium">ООО "Альтэра"</h4>
                        <span class="person-title is-size-7">Директор Трошин В.И.</span>
                        <div class="person-comment has-text-justified">
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

                <div class="slide-content">
                    <div class="testimonial-boxed">
                        <h4 class="has-text-weight-medium">ООО "ВТМ дорпроект СТОЛИЦА"</h4>
                        <span class="person-title is-size-7">Описание</span>
                        <div class="person-comment has-text-justified">
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
                <div class="slide-content">
                    <div class="testimonial-boxed">
                        <h4 class="has-text-weight-medium">ООО "Перспектива"</h4>
                        <span class="person-title is-size-7">Управляющий директор Ополько М.В.</span>
                        <div class="person-comment has-text-justified">
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

                <span class="control" slot="right-control">
                    <Icon icon={faChevronRight}/>
                </span>

            </Carousel>
        </div>
        <div align="center">
            <a class="button is-primary is-medium is-raunded has-text-white" href="/company/otzyvy-klientov">Читать рекомендации</a>
        </div>
    </section>


<!--    <section class="section calculation">-->
<!--        <div class="container is-max-widescreen">-->
<!--            <CalculationBlock/>-->
<!--        </div>-->
<!--    </section>-->
    <section class="section">
        <div class="title has-text-centered has-text-weight-bold">РАСЧЕТ СТОИМОСТИ</div>
        <div class="container is-max-widescreen">
            <CalcTabs/>
        </div>
    </section>

</main>