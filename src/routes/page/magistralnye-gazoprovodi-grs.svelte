<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>


<script>
    import CalculationBlock from '$lib/components/CalculationBlock.svelte'
    import {onMount} from 'svelte'
    import {browser} from '$app/env'
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
        display: flex;
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
                            <p class="is-size-5">Магистральные газопроводы (МГ) и ответвления от них (газопроводы-отводы)
                                номинальным диаметром до 1400мм включительно, с избыточным давлением среды свыше 1,2 до 10 МПа 
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
                            <p class="is-size-5">Газораспределительная станция (ГРС)  служит для понижения давления газа
                                из магистрального газопровода до уровня, необходимого для безопасного 
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
                        <a  href="referens-list" class="ssilka">
                            <div class="tile is-child box">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-64x64">
                                            <img src="\images\gazoprovodi\construction_engineer.svg" alt="">
                                        </figure>
                                    </div>
                                    <div class="media-content">
                                        <span>
                                            <p  class="has-text-weight-medium p-color" >Строительство магистрального газопровода (МГ) или газопровода-отвода
                                                к газораспре&shy;делительной станции (ГРС) с возможностью дальнейшего
                                                подключения потребителей различного назначения.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="tile is-parent">
                        <a  href="referens-list" class="ssilka">
                            <div class="tile is-child box">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-64x64">
                                            <img src="\images\gazoprovodi\security.svg" alt="">
                                        </figure>
                                    </div>
                                    <div class="media-content">
                                        <span>
                                            <p  class="has-text-weight-medium" href="page/referens-list">Устройство защитных мероприятий на действующих магистральных
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
                        <a  href="referens-list" class="ssilka">
                            <div class="tile is-child box">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-64x64">
                                            <img src="\images\gazoprovodi\construction_project.svg" alt="" class="icon-vopros">
                                        </figure>
                                    </div>
                                    <div class="media-content">
                                        <span>
                                            <p  class="has-text-weight-medium" href="#">Переустройство (вынос) участков магистральных
                                                газопроводов в связи со строительством новых объектов
                                                в зоне минимально-допустимых расстояний.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="tile is-parent">
                        <a  href="referens-list" class="ssilka">
                            <div class="tile is-child box">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-64x64">
                                            <img src="\images\gazoprovodi\fixing.svg" alt="">
                                        </figure>
                                    </div>
                                    <div class="media-content">
                                        <span>
                                            <p  class="has-text-weight-medium" href="#">Реконструкция, модернизация или техническое
                                                перевооружение ГРС, крановых узлов, участков магистральных
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

