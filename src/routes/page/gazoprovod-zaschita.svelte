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

 let title = 'Устройство защитных мероприятий'

    const meta = {
        title: "Устройство защитных мероприятий. Газопроводы. Проектная документация. Согласования и экспертиза",
        description: "Разработка проектной документации. Защитные мероприятия для газопроводов. Согласование ПД. Допуски СРО. Аттестация ПАО «ГАЗПРОМ»",
        h1: "Разработка проекта. Устройство защитных мероприятий на действующих магистральных газопроводах. Сотрудничаем с ПАО «Газпром». Аккредитация и допуски СРО на проектные работы. Расчет стоимости"
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
                    <h2 style="font-size: 40px" class="has-text-white has-text-weight-medium title titlefor">Устройство защитных мероприятий на действующих магистральных газопроводах</h2>
                    <h2 class="has-text-white has-text-weight-medium is-uppercase titleb">(установка защитных футляров (кожухов))</h2>
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
                        <img src="\images\gazoprovodi\zaschita-gaza.jpeg" alt="Защита газопровода"/>
                    </div>
                    <div class="column">
                        <span>
                            <p class="is-size-5 has-text-justified">На переходах действующих магистральных газопроводов <b>через автомобильные дороги 3-5 категории</b> 
                                при необходимости установки защитных футляров <b>без остановки транспорта</b> газа возможно использование конструкции 
                                футляра из 2-х половин трубы.</p>
                            <p class="is-size-5 has-text-justified">Такая необходимость может возникнуть при капитальном ремонте газопроводов, 
                                реконструкции автомобильной дороги.</p>                           
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="section voprosi">
        <div class="container">
            <div class="content text-center">
                <h3 class="is-uppercase titlefor has-text-centered">
                    Пример разреза установки разрезного футляра на действующий газопровод-отвод:
                </h3>
                <div style="max-width: 956px; margin:0 auto;">
                    <Lightbox   noScroll="false"
                                    modalClasses = "pipu">
                        <img class="is-block img-center" src="\images\gazoprovodi\gazoprovod-futlyar.png" >
                    </Lightbox>
                </div>
            </div>
        </div>
    </section>

    <section class="section vramku-columns-y">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-6 vramku-column">
                    <img  src="\images\gazoprovodi\gazoprovod-zapros.jpg"/>
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

