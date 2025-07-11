<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>


<script>
    import {onMount} from 'svelte'
    import {browser} from '$app/env'
    import BtnZayavka from '$lib/components/BtnZayavka.svelte'
    import ContactFormButton from '$lib/components/ContactFormButton.svelte'
    import ContactForm from '$lib/components/ContactForm.svelte'
    import Icon from 'fa-svelte'
    import {faPhone,
            faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
    import Carousel from '$lib/components/Carousel.svelte'
    import {Lightbox, LightboxImage, LightboxGallery} from 'svelte-lightbox'
    import HiddenH1 from "$lib/components/HiddenH1.svelte"

 let title = 'Реконструкция, модернизация или техническое перевооружение ГРС'

    const meta = {
        title: "Реконструкция, модернизация или техническое перевооружение ГРС",
        description: "Проектная и рабочая документация. Проектирование. Строительство ГРС. Реконструкция газораспределительной станции. Техническое перевооружение газораспределительной станции",
        h1: "Полный комплекс работ по реконструкции ГРС. Модернизация ГРС. Подбор оборудования. Составление смет. Экспертиза документации. ПД и РД. Техническое перевооружение ГРС"
    }


    onMount(async () => {

        let buttonraunded = document.getElementsByClassName('button-raunded');
        for(var i = 0; i < buttonraunded.length; i++) {
            buttonraunded[i].style.borderRadius = '30px';
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
        margin-bottom: 10px;
        display: table;
    }

    ul li div:not(:first-child) {
        padding-left: 30px;
    }

    ul li div:first-child {
        float: left;
    }

    .icon2 {
        width: 25px;
        margin-top: 7px;
    }

    .titleb {
        line-height: initial;
        padding-bottom: 30px;
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

    .vramku-column img{
        display: block;
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

    .img-center {
        margin: 0 auto;
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

    .columns-projekt {
        display: flex;
    }

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
            left: 52%;
            width: 110%;
            height: 4px;
            border-bottom: 2px dashed #383838;
            opacity: 0.5
        }

        .logic__item.vert::after {
            content: "";
            display: block;
            position: absolute;
            top: 226px;
            left: 86px;
            width: 232px;
            height: 4px;
            border-bottom: 2px dashed #383838;
            opacity: 0.5;
            transform: rotate(90deg);
        }

        .logic__item.left-item::after {
            content: "";
            display: block;
            position: absolute;
            top: 101px;
            left: -62%;
            width: 110%;
            height: 4px;
            border-bottom: 2px dashed #383838;
            opacity: 0.5
        }

        .logic__item.item-hide::after {            
            width: 0;
        }

        /**************************************/
        /*Экран меньше 1407px START*/
        @media screen and (max-width: 1407px) {
        .logic__item.vert::after {
            content: "";
            display: block;
            position: absolute;
            top: 226px;
            left: 59px;
            width: 232px;
            height: 4px;
            border-bottom: 2px dashed #383838;
            opacity: 0.5;
            transform: rotate(90deg);
        }
        }

        /*Экран меньше 1407px END*/
        /**************************************/

    /**************************************/
    /*Экран меньше 1215px START*/

    @media screen and (max-width: 1215px) {
        .logic__item.vert::after {
            content: "";
            display: block;
            position: absolute;
            top: 237px;
            left: 21px;
            width: 249px;
            height: 4px;
            border-bottom: 2px dashed #383838;
            opacity: 0.5;
            transform: rotate(90deg);
        }
        }
     /*Экран меньше 1215px END*/
    /**************************************/

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

        .logic__item.vert::after {
            content: "";
            display: block;
            position: absolute;
            top: 101px;
            left: 20%;
            width: 60%;
            height: 4px;
            border-bottom: 2px dashed #383838;
            opacity: 0.5;
            transform: rotate(0deg);
        }
    }
     /*Экран меньше 1023px END*/
    /**************************************/


    /**************************************/
    /*Экран меньше 769px START*/
    @media screen and (max-width: 768px) {

        .hero1{
            background-position: 33% center;
        }

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

        .columns-projekt {
        display: block;
    }
    }

    /*Экран меньше 769px STOP*/
    /**************************************/

</style>



<SvelteSeo title="{meta.title}" description="{meta.description}"/>
<HiddenH1>{meta.h1}</HiddenH1>


<main>

    <section class="hero is-small hero1">
        <div class="hero-body">
            <div class="columns">
                <div class="column is-7">
                    <h2 style="font-size: 40px" class="has-text-white has-text-weight-medium title titlefor">Реконструкция, модернизация или техническое перевооружение ГРС, крановых узлов,
                        участков магистральных газопроводов</h2>
                    <h2 class="has-text-white has-text-weight-medium is-uppercase titleb">в связи с истечением нормативного срока эксплуатации</h2>
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

    <section class="section">
        <div class="container">
            <div class="content">
                <div class="columns is-vcentered vramku-columns-right">
                    <div class="column vramku-column">
                        <img src="\images\gazoprovodi\burenie.jpg" alt="Магистральный газопровод"/>
                    </div>
                    <div class="column">
                        <span>
                            <p class="is-size-5 has-text-weight-medium has-text-justified">Рассчетный срок службы газопроводов принимается не менее <b>40 лет</b>, срок эксплуатации кранов составляет 
                                не менее <b>30 лет</b>. По истечении нормативного срока эксплуатации проводится <b>замена участков газопроводов и оборудования</b> 
                                в рамках капитального ремонта.</p>                            
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="section voprosi">
        <div class="container">
            <div class="content text-center">
                <h3 class="is-uppercase titlefor has-text-centered has-text-weight-bold">
                    Наши проекты:
                </h3>
                <ul class="is-size-5 has-text-weight-medium">

                    <li>
                        <div class="service-icon">
                            <img class="icon2" alt="" src="/images/kotel/icons/bmk_check_006.png">
                        </div>
                        <div class="pl-3">
                            <p class="has-text-justified">
                                По заданию филиала ООО «Волготрансгаз» ОАО «Газпром» в 2003-2004 г. были выполнены проектно-изыскательские 
                                работы по капитальному ремонту газораспределительных станций:
                            </p>
                        </div>                                                                 
                    </li>
                    <li>
                        <div class="columns is-vcentered columns-projekt">
                            <div class="column hiden1">
                                <img src="\images\gazoprovodi\projekt.jpg" alt="Газораспределительная станция"/>
                            </div>
                            <div class="column">
                                <span>
                                    <ul class="is-size-6 has-text-weight-medium" style="line-height: initial;">
        
                                        <li>
                                            <div class="service-icon">
                                                <img alt="" src="/images/form-checkbox.png">
                                            </div>
                                            <div class="pl-3">
                                                <p class="">
                                                    ГРС «Восход» производительностью 3200м3/час
                                                </p>
                                            </div>                                                                 
                                        </li>
                                        <li>
                                            <div class="service-icon">
                                                <img alt="" src="/images/form-checkbox.png">
                                            </div>
                                            <div class="pl-3">
                                                <p class="">
                                                    ГРС «Зарубино» производительностью 130250 м3/час
                                                </p>
                                            </div>                                                                 
                                        </li>
                                        <li>
                                            <div class="service-icon">
                                                <img alt="" src="/images/form-checkbox.png">
                                            </div>
                                            <div class="pl-3">
                                                <p class="">
                                                    ГРС «Козьмодемьянск» производительностью 25000 м3/час
                                                </p>
                                            </div>                                                                 
                                        </li>
                                        <li>
                                            <div class="service-icon">
                                                <img alt="" src="/images/form-checkbox.png">
                                            </div>
                                            <div class="pl-3">
                                                <p class="">
                                                    ГРС «Марпосад» производительностью 16500 м3/час
                                                </p>
                                            </div>                                                                 
                                        </li>
                                        <li>
                                            <div class="service-icon">
                                                <img alt="" src="/images/form-checkbox.png">
                                            </div>
                                            <div class="pl-3">
                                                <p class="">
                                                    ГРС «Хлебниково» производительностью 7400 м3/час
                                                </p>
                                            </div>                                                                 
                                        </li>
                                        <li>
                                            <div class="service-icon">
                                                <img alt="" src="/images/form-checkbox.png">
                                            </div>
                                            <div class="pl-3">
                                                <p class="">
                                                    ГРС «Большие Поляны» производительностью 11200 м3/час
                                                </p>
                                            </div>                                                                 
                                        </li>
                                        <li>
                                            <div class="service-icon">
                                                <img alt="" src="/images/form-checkbox.png">
                                            </div>
                                            <div class="pl-3">
                                                <p class="">
                                                    ГРС «Советский» производительностью 50000 м3/час
                                                </p>
                                            </div>                                                                 
                                        </li>
                                        <li>
                                            <div class="service-icon">
                                                <img alt="" src="/images/form-checkbox.png">
                                            </div>
                                            <div class="pl-3">
                                                <p class="">
                                                    ГРС «Шоршелы» производительностью 19400 м3/час
                                                </p>
                                            </div>                                                                 
                                        </li>
                                        <li>
                                            <div class="service-icon">
                                                <img alt="" src="/images/form-checkbox.png">
                                            </div>
                                            <div class="pl-3">
                                                <p class="">
                                                    ГРС «Чебоксары ТЭЦ-2» производительностью 404000 м3/час
                                                </p>
                                            </div>                                                                 
                                        </li>
                                                                      
                                    </ul>
                                </span>
                            </div>
                            <div class="column hiden2">
                                <img src="\images\gazoprovodi\projekt.jpg" alt="Газораспределительная станция"/>
                            </div>
        
                        </div>

                    </li>
                    <li>
                        <div class="service-icon">
                            <img class="icon2" alt="" src="/images/kotel/icons/bmk_check_006.png">
                        </div>
                        <div class="pl-3">
                            <p class="has-text-justified">
                                По заданию филиала ООО «Мострансгаз» ОАО «Газпром» в 2005 г. выполнены проектные работы для строительства 
                                газораспределительной станции АГРС «Суханово» производительностью 20000 м3/час.
                            </p>
                        </div>                                                                 
                    </li>
                    <li>
                        <div class="service-icon">
                            <img class="icon2" alt="" src="/images/kotel/icons/bmk_check_006.png">
                        </div>
                        <div class="pl-3">
                            <p class="has-text-justified">
                                В рамках государственных программ по реконструкции федеральных трасс М5 «Урал», М7 «Волга», М9 «Балтия», 
                                ЦКАД МО выполнены десятки проектов по переустройству и защите магистральных газопроводов, кабелей связи.
                            </p>
                        </div>                                                                 
                    </li>
                    <li>
                        <div class="service-icon">
                            <img class="icon2" alt="" src="/images/kotel/icons/bmk_check_006.png">
                        </div>
                        <div class="pl-3">
                            <p class="has-text-justified">
                                В рамках Федеральной целевой программы «Развитие транспортной системы России (2010-2020 годы)» и Программой подготовки 
                                к проведению в 2018 году в Российской Федерации чемпионата мира по футболу ООО «Энергия Плюс» выступала генеральной 
                                проектной организацией по разработке проектно-сметной документации на вынос магистральных и распределительных 
                                газопроводов, попадающих в зону строительства новой взлетно-посадочной полосы аэропорта «Шереметьево».
                            </p>
                        </div>                                                                 
                    </li>                              
                </ul>
            </div>
        </div>
    </section>

    <div style="text-align: center;">
        <ContactFormButton class="hiden2 button is-primary is-medium is-raunded button-raunded">
            <div slot="button">Заказать проект</div>
        </ContactFormButton>
    </div>


    <section class="section py-6 has-text-centered">
        <div class="container text-center">
            <div class="title titlefor">
                <h2 class="">Алгоритм работы</h2>
            </div>
            <div class="columns is-desktop ">
                <div class="column logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6 mb-6"
                                                                        src="/images/kotel/icons/bmk_icon_01.png">
                    <p class="logic__text svelte-rgyqg6">Бесплатная консультация</p>
                </div>
                <div class="column logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6 mb-6"
                                                                        src="/images/kotel/icons/bmk_icon_04.png">
                    <p class="logic__text svelte-rgyqg6">Направляем коммерческое предложение в ответ на техническое задание</p>
                </div>
                <div class="column logic__item svelte-rgyqg6 vert"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6 mb-6"
                                                                        src="/images/kotel/icons/bmk_icon_02.png">
                    <p class="logic__text svelte-rgyqg6">Сбор исходно-разрешительной документации</p>
                </div>
            </div>
            <div class="columns is-desktop">
                <div class="column logic__item svelte-rgyqg6 vert"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6 mb-6"
                                                                        src="/images/gazoprovodi/podpis_icon.png">
                    <p class="logic__text svelte-rgyqg6">Прохождение государственной экспертизы проектной документации</p>
                </div>
                <div class="column logic__item svelte-rgyqg6 left-item"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6 mb-6"
                                                                        src="/images/kotel/icons/bmk_icon_09.png">
                    <p class="logic__text svelte-rgyqg6">Получение необходимых согласований со всеми заинтересованными сторонами</p>
                </div>
                <div class="column logic__item svelte-rgyqg6 left-item"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6 mb-6"
                                                                        src="/images/gazoprovodi/formirovanie_icon1.png"
                                                                        style="background: white;">
                    <p class="logic__text svelte-rgyqg6">Формирование пакета проектной документации</p>
                </div>
            </div>
            <div class="columns is-desktop">
                <div class="column logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6 mb-6"
                                                                        src="/images/gazoprovodi/formirovanie_icon2.png"
                                                                        style="background: white;">
                    <p class="logic__text svelte-rgyqg6">Формирование пакета рабочей документации</p>
                </div>
                <div class="column logic__item svelte-rgyqg6 item-hide"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6 mb-6"
                                                                        src="/images/kotel/icons/bmk_icon_05.png">
                    <p class="logic__text svelte-rgyqg6">Сдача ПД и РД в производство работ</p>
                </div>
                <div class="column ">
                    
                </div>
            </div>
        </div>
    </section>

    <section class="section vramku-columns-y">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-6 vramku-column">
                    <img alt="Газопровод станция" src="\images\gazoprovodi\gazoprovod-zapros.jpg"/>
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

