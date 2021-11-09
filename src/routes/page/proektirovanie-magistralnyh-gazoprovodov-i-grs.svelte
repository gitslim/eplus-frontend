<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>


<script>
    import {onMount} from 'svelte'
    import {browser} from '$app/env'
    import {Lightbox, LightboxImage, LightboxGallery} from 'svelte-lightbox'
    import BtnZayavka from '$lib/components/BtnZayavka.svelte'
    import ContactFormButton from '$lib/components/ContactFormButton.svelte'
    import ContactForm from '$lib/components/ContactForm.svelte'
    import Icon from 'fa-svelte'
    import {faPhone,
            faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
    import Carousel from '$lib/components/Carousel.svelte'

 let title = 'Проектирование магистральных газопроводов и ГРС'

    onMount(async () => {

        let buttonraunded = document.getElementsByClassName('button-raunded');
        for(var i = 0; i < buttonraunded.length; i++) {
            buttonraunded[i].style.borderRadius = '30px';
        }

        let right = document.getElementsByClassName('right');
        for(var i = 0; i < right.length; i++) {
            right[i].style.borderRadius = '50%';
            right[i].style.backgroundColor = '#f86923';
            right[i].style.right = '2vw';
            right[i].style.color = '#ffffff';
            right[i].style.cursor = 'pointer';
        }
        if (document.documentElement.clientWidth < 500) {
            right[2].style.top = '-3%';
        }


        let left = document.getElementsByClassName('left');
        for(var i = 0; i < left.length; i++) {
            left[i].style.borderRadius = '50%';
            left[i].style.backgroundColor = '#f86923';
            left[i].style.left = '';
            left[i].style.right = '6vw';
            left[i].style.color = '#ffffff';
            left[i].style.cursor = 'pointer';
        }      

    })

</script>


<style lang="scss">

    .section {
        margin: 50px 20px;
    }

    .hero1{
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: multiply;
        background-image: url(/images/gazoprovodi/gazoprovod_grs.jpg),
        linear-gradient(0deg, grey, transparent),
        linear-gradient(45deg, grey, transparent),
        linear-gradient(80deg, grey, transparent),
        linear-gradient(100deg, grey, transparent);
    }

    .hero1 .hero-body {
        margin-top: 50px;
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

    .vramku-columns-right {
        background: linear-gradient(90deg, #252429, transparent);
    }

    .vramku-columns-left {
        background: linear-gradient(270deg, #252429, transparent);
    }

    .vramku-column {
        padding: 2%;
        background-color: #c2c2c2;
    }

    .column {
        margin: 2%;
    }

    .column span h2 {
        margin-top: 30px;
    }

    .voprosi {
        margin: 80px 15%;
    }

    .vramku-columns-y {
        background: linear-gradient(180deg, #252429, transparent),
                    linear-gradient(0deg, #252429, transparent);
    }

   .box {
       box-shadow:  0 0.5em 1em -0.125em rgb(10 10 10 / 67%),
                    0 0px 0 1px rgb(10 10 10 / 2%);
   }

    .text-center .titlefor:before {
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
    }

    .is-parent .is-child{
        color: #f86923;
    }

    icon-vopros {
        fill: #4a4a4a;
    }

    .is-parent:hover {
        transform: scale(1.1);
        cursor: pointer;
        transition: 0.5s;
    }

    .is-parent:hover .is-child{
        color: #4a4a4a;
    }

    .ssilka {
        display: flex;
    }

    .tile .is-child {
        display: flex;
    }

    .media {
        align-items: center;
    }

    .media-left {
        font-size: 48px;
    }

    figure.image {
        margin: 0 10px;
    }

    .hiden1 {
        display: none;
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
        width: 110%;
        height: 4px;
        border-bottom: 2px dashed #383838;
        opacity: 0.5
    }
   
    .logic__item.svelte-rgyqg6.rgyqg7::before {
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

    .logic__item.svelte-rgyqg6.rgyqg7::after {
        content: "";
        display: block;
        position: absolute;
        top: 101px;
        left: 51%;
        width: 108%;
        height: 4px;
        border-bottom: 2px dashed #383838;
        opacity: 0.5
    }

    /**************************/
    /*Стиль текста карусели НАШИ ПРОЕКТЫ - start*/
    .project {
        background: #ededed;
        margin: 50px 0px;
    }

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
        // color: white;
        color:#ffffff;
        text-shadow: 2px 0 2px #f95d10, 
                     0 2px 2px #f95d10, 
                     -2px 0 2px #f95d10, 
                     0 -2px 2px #f95d10;       
        line-height: 1.4;
        transform: translateY(8px);
        transition: all 0.3s ease-in-out;
        font-size: 21px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    // .image .item-content-2 .item-title {
    //     font-size: 21px;
    //     font-weight: 600;
    //     margin-bottom: 10px;
    // }

    .image:hover .item-content-2 .item-title {
        opacity: 1;
        transform: translateY(0px);
        transition-delay: 0.3s;
    }

    // .image:hover .item-content-2 .item-title {
    //     transition-delay: 0.3s;
    // }

    // .proect-carousel-item {
    //     padding: 0 10px;
    // }

    /*Стиль текста карусели НАШИ ПРОЕКТЫ - end*/
    /*******************************/


    /**************************************/
    /*Экран меньше 1220px START*/
    @media screen and (max-width: 1220px) {
        .voprosi {
            margin: 80px 5%;
        }
    }
    /*Экран меньше 1220px END*/
    /**************************************/

     /**************************************/
    /*Экран меньше 1023px START*/

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

        .logic__item.svelte-rgyqg6.rgyqg7::before {
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

        .logic__item.svelte-rgyqg6.rgyqg7::after {
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
    }
        /*Экран меньше 1023px START*/
    /**************************************/

    /**************************************/
    /*Экран меньше 769px START*/
    @media screen and (max-width: 768px) {

        .section {
            margin: 50px 10px;
        }

        h1 {
            font-size: 30px;
        }

        h2 {
            font-size: 25px;
            margin-bottom: 15px;
        }

        .voprosi {
            margin: 70px 2% 50px 2%;
        }

        .is-ancestor {
            margin-left: 0;
            margin-right: 0;
        }

        .vramku-columns-right,
        .vramku-columns-left {
            background: linear-gradient(180deg, #252429, transparent 60%);
            /*border-radius: 10px;*/
        }

        .columns {
            margin-right: 0;
            margin-left: 0;
        }

        .hiden1 {
            display: block;
        }

        .hiden2 {
            display: none;
        }

        .zayvka {
            padding-top: 40px;
        }
      
    }

    /*Экран меньше 769px STOP*/
    /**************************************/

</style>


<SvelteSeo {title}/>

<main>
    
    <section class="hero is-medium hero1">
        <div class="hero-body">
            <div class="columns">
                <div class="column is-7">
                    <h1 class="has-text-white has-text-weight-medium title titlefor">Проектирование магистральных газопроводов и ГРС</h1>
                    <ContactFormButton class="button is-primary is-large is-raunded button-raunded">
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
            </div>
        </div>
    </section>

    
    <section class="section">
        <div class="container">
            <div class="content">               
                <div class="columns is-vcentered vramku-columns-right">
                    <div class="column vramku-column">
                        <img src="\images\gazoprovodi\gazoprovod.jpg" alt="Магистральный газопровод"/>
                    </div>
                    <div class="column">
                        <span>
                            <h2 class="title titlefor">
                                Магистральные газопроводы (МГ)
                            </h2>
                            <p class="is-size-5 has-text-weight-medium">Магистральные газопроводы (МГ) и ответвления от них (газопроводы-отводы)
                                номинальным диаметром <b>до 1400мм</b> включительно, с избыточным давлением среды <b>свыше 1,2 до 10 МПа</b> 
                                включительно (при одиночной прокладке и прокладке в технических коридорах) для транспортирования 
                                природного газа.</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="section">
        <div class="container">
            <div class="content">              
                <div class="columns is-vcentered vramku-columns-left">
                    <div class="column vramku-column hiden1">
                        <img src="\images\gazoprovodi\grs.jpg" alt="Газораспределительная станция"/>
                    </div>
                    <div class="column">
                        <span>
                            <h2 class="title titlefor">
                                Газораспреде&shy;литель&shy;ная станция (ГРС)
                            </h2>
                            <p class="is-size-5 has-text-weight-medium">Газораспределительная станция (ГРС)  <b>служит для понижения давления газа
                                из магистрального газопровода</b> до уровня, необходимого для безопасного 
                                потребления, т.е. до давления1,2 МПа и ниже.</p>
                        </span>
                    </div>
                    <div class="column vramku-column hiden2">
                        <img src="\images\gazoprovodi\grs.jpg" alt="Газораспределительная станция"/>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <section class="section voprosi">
        <div class="container">
            <div class="content text-center">
                <h3 class="is-uppercase titlefor has-text-centered">
                    Как показывает практика, наши Заказчики все чаще сталкиваются со&nbsp;<b>следующими задачами:</b>
                </h3>
                <div class="tile is-ancestor">
                    <div class="tile is-parent">
                        <a  href="stroitelsvo-gazoprovoda" class="ssilka">
                            <div class="tile is-child box">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-64x64">
                                            <img src="\images\gazoprovodi\construction_engineer.svg" alt="">
                                        </figure>
                                    </div>
                                    <div class="media-content">
                                        <span>
                                            <p  class="has-text-weight-medium p-color" ><b><u>Строительство магистрального газопровода (МГ)</u></b> или газопровода-отвода
                                                к газораспре&shy;делительной станции (ГРС) с возможностью дальнейшего
                                                подключения потребителей различного назначения.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="tile is-parent">
                        <a  href="gazoprovod-zaschita" class="ssilka">
                            <div class="tile is-child box">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-64x64">
                                            <img src="\images\gazoprovodi\security.svg" alt="">
                                        </figure>
                                    </div>
                                    <div class="media-content">
                                        <span>
                                            <p  class="has-text-weight-medium" href="page/referens-list"><b><u>Устройство защитных мероприятий</u></b> на действующих магистральных
                                                газопроводах (установка защитных футляров (кожухов)).</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="tile is-ancestor">
                    <div class="tile is-parent">
                        <a  href="gazoprovod-pereustroistvo" class="ssilka">
                            <div class="tile is-child box">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-64x64">
                                            <img src="\images\gazoprovodi\construction_project.svg" alt="" class="icon-vopros">
                                        </figure>
                                    </div>
                                    <div class="media-content">
                                        <span>
                                            <p  class="has-text-weight-medium" href="#"><b><u>Переустройство (вынос) участков магистральных
                                                газопроводов</u></b> в связи со строительством новых объектов
                                                в зоне минимально-допустимых расстояний.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="tile is-parent">
                        <a  href="gazoprovod-rekonstrukciya" class="ssilka">
                            <div class="tile is-child box">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-64x64">
                                            <img src="\images\gazoprovodi\fixing.svg" alt="">
                                        </figure>
                                    </div>
                                    <div class="media-content">
                                        <span>
                                            <p  class="has-text-weight-medium" href="#"><b><u>Реконструкция, модернизация или техническое
                                                перевооружение ГРС</u></b>, крановых узлов, участков магистральных
                                                газопроводов в связи с истечением нормативного
                                                срока эксплуатации.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>           
        </div>
    </section>

    <style>
        .proect-carousel-item {
            max-heigt: 200px;
        }
    </style>

    <section class="section py-6 project">
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
                    <figure class="image"> 
                        <span class="item-content-2">
                            <strong class="item-title">Проект 1</strong>
                        </span>
                    <Lightbox   noScroll="false"
                                modalClasses = "pipu"
                                thumbnail>
                        <img slot="thumbnail" src="/images/gazoprovodi/project-1t.png" alt="Thumbnail">
                        <img slot="image" src="/images/gazoprovodi/project-1.png" alt="Lightbox image">
                    </Lightbox>
                </figure>
                </div>

                <div class="slide-content proect-carousel-item">
                    <figure class="image"> 
                        <span class="item-content-2">
                            <strong class="item-title">Проект 2</strong>
                        </span>
                    <Lightbox   noScroll="false"
                                modalClasses = "pipu"
                                thumbnail>
                        <img slot="thumbnail" src="/images/gazoprovodi/project-2t.png" alt="Thumbnail">
                        <img slot="image" src="/images/gazoprovodi/project-2.png" alt="Lightbox image">
                    </Lightbox>
                </figure>
                </div>

                <div class="slide-content proect-carousel-item">
                    <figure class="image"> 
                        <span class="item-content-2">
                            <strong class="item-title">Проект 3</strong>
                        </span>
                    <Lightbox   noScroll="false"
                                modalClasses = "pipu"
                                thumbnail>
                        <img slot="thumbnail" src="/images/gazoprovodi/project-3t.png" alt="Thumbnail">
                        <img slot="image" src="/images/gazoprovodi/project-3.png" alt="Lightbox image">
                    </Lightbox>
                </figure>
                </div>

                <div class="slide-content proect-carousel-item">
                    <figure class="image"> 
                        <span class="item-content-2">
                            <strong class="item-title">Проект 4</strong>
                        </span>
                    <Lightbox   noScroll="false"
                                modalClasses = "pipu"
                                thumbnail>
                        <img slot="thumbnail" src="/images/gazoprovodi/project-4t.png" alt="Thumbnail">
                        <img slot="image" src="/images/gazoprovodi/project-4.png" alt="Lightbox image">
                    </Lightbox>
                </figure>
                </div>

                <div class="slide-content proect-carousel-item">
                    <figure class="image"> 
                        <span class="item-content-2">
                            <strong class="item-title">Общий вид на АГРС</strong>
                        </span>
                    <Lightbox   noScroll="false"
                                modalClasses = "pipu"
                                thumbnail>
                        <img slot="thumbnail" src="/images/gazoprovodi/project-5t.png" alt="Thumbnail">
                        <img slot="image" src="/images/gazoprovodi/project-5.jpg" alt="Lightbox image">
                    </Lightbox>
                </figure>
                </div>

                <div class="slide-content proect-carousel-item">
                    <figure class="image"> 
                        <span class="item-content-2">
                            <strong class="item-title">Оборудование</strong>
                        </span>
                    <Lightbox   noScroll="false"
                                modalClasses = "pipu"
                                thumbnail>
                        <img slot="thumbnail" src="/images/gazoprovodi/project-6t.png" alt="Thumbnail">
                        <img slot="image" src="/images/gazoprovodi/project-6.jpg" alt="Lightbox image">
                    </Lightbox>
                </figure>
                </div>

                <div class="slide-content proect-carousel-item">
                    <figure class="image"> 
                        <span class="item-content-2">
                            <strong class="item-title">Стартовый котлован под прокол</strong>
                        </span>
                    <Lightbox   noScroll="false"
                                modalClasses = "pipu"
                                thumbnail>
                        <img slot="thumbnail" src="/images/gazoprovodi/project-7t.png" alt="Thumbnail">
                        <img slot="image" src="/images/gazoprovodi/project-7.jpg" alt="Lightbox image">
                    </Lightbox>
                </figure>
                </div>

                <span class="control" slot="right-control">
                            <Icon icon={faChevronRight}/>
                </span>

            </Carousel>
        </div>
        <div align="center" class="pt-4">
            <a class="button is-primary is-medium is-raunded" href="/page/referens-list">Наши проекты</a>
        </div>
    </section>


     <section class="section py-6 has-text-centered">
        <div class="container text-center">
            <div class="title titlefor">
                <h2 class="">Этапы работы</h2>
            </div>
            <p class="mb-5">Алгоритм проектирования магистральных газопроводов и ГРС вместе с «Энергией Плюс»</p>
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
                <div class="column logic__item svelte-rgyqg6 rgyqg7"><img alt=""
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
     </section>

    <section class="section vramku-columns-y">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-6 vramku-column">
                    <img src="\images\gazoprovodi\gazoprovod-zapros.jpg"/>
                </div>
                <div class="column zayvka">
                    <h4 class="title titlefor has-text-white">Отправить заявку</h4>
                    <ContactForm/>
                    <p class="is-size-7 has-text-centered has-text-white pt-3">Нажимая кнопку "Отправить", я даю свое согласие на обработку моих персональных данных</p>
                </div>
            </div>
        </div>    
    </section>

</main>

