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

 let title = 'Строительство газопровода или газопровода-отвода'
    const meta = {
        title: "Строительство газопровода или газопровода-отвода. Разработка проекта. Получение согласований и экспертизы",
        description: "Проект газопровода-отвода для промышленного потребления. Разработка проектно-сметной документации, согласование с ГРО. Аккредитация с «Газпроме», допуски СРО",
        h1: "Проектирование и строительство магистрального газопровода (МГ) или газопровода-отвода к газораспределительной станции (ГРС). Получение разрешительной документации. Изыскания. Технико-экономическое обоснование. Защита сметы в Главгосэкспертизе. Аккредитация в ПАО «Газпром»"
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
                    <h2 style="font-size: 40px" class="has-text-white has-text-weight-medium title titlefor">Строительство магистрального газопровода (МГ) или газопровода-отвода
                        к газораспределительной станции (ГРС)</h2>
                    <h2 class="has-text-white has-text-weight-medium is-uppercase titleb">с возможностью дальнейшего подключения потребителей различного назначения</h2>
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
                            <p class="is-size-5 has-text-justified">При решение данной задачи часто возникают сложности при прокладке магистральных газопроводов
                                на пересечении с автомобильными дорогами, водоемами, реками. Как правило в таких ситуациях проектом предусматривается
                                закрытый бестраншейный способ прокладки трубопроводов методом наклонно-направленного бурения,  микротоннелирования
                                или шнекового бурения. </p>
                            <p class="is-size-5 has-text-weight-medium has-text-centered">Также у нас есть опыт проектирования прокладки газопроводов по дну водной преграды (без заглубления)
                                методом протаскивания.</p>
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
                        <img src="\images\gazoprovodi\chertez.jpg" alt="Газораспределительная станция"/>
                    </div>
                    <div class="column">
                        <span>
                            <p class="is-size-5 has-text-centered"><b>На предпроектной стадии основными критериями при выборе трассы проектируемого газопровода является:</b></p>
                            <ul class="is-size-5 has-text-weight-medium">

                                <li>
                                    <div class="service-icon">
                                        <img class="icon2" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                    </div>
                                    <div class="pl-3">
                                        <p class="">
                                            обеспечение эксплуатационной надежности
                                        </p>
                                    </div>                                                                 
                                </li>
                                <li>
                                    <div class="service-icon">
                                        <img class="icon2" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                    </div>
                                    <div class="pl-3">
                                        <p class="">
                                            минимизации затрат на строительство и эксплуатацию
                                        </p>
                                    </div>                                                                 
                                </li>
                                <li>
                                    <div class="service-icon">
                                        <img class="icon2" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                    </div>
                                    <div class="pl-3">
                                        <p class="">
                                            минимизация ущерба окружающей природной среде
                                        </p>
                                    </div>                                                                 
                                </li>
                                <li>
                                    <div class="service-icon">
                                        <img class="icon2" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                    </div>
                                    <div class="pl-3">
                                        <p class="">
                                            обеспечение минимальных расстояний от ГРС и газопровода до существующих сооружений и границ населенных пунктов
                                        </p>
                                    </div>                                                                 
                                </li>                              
                            </ul>
                        </span>
                    </div>
                    <div class="column vramku-column hiden2">
                        <img src="\images\gazoprovodi\chertez.jpg" alt="Газораспределительная станция"/>
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
                        <img src="\images\gazoprovodi\prokladka-gazoprovoda.jpeg" alt="Магистральный газопровод"/>
                    </div>
                    <div class="column">
                        <span>
                            <p class="is-size-5 has-text-justified"> В процессе проектирования мы рассматриваем варианты прохождения газопровода <b>учитывая сложности размещения ГРС</b>,
                                наличие стесненных условий.</p>
                            <p class="is-size-5 has-text-justified"> Трасса газопровода выбирается с учетом <b>минимизации земельных работ</b> при прохождении косогорных участков,
                                с минимально возможной вырубкой леса.</p>
                            <ContactFormButton class="hiden2 button is-primary is-medium is-fullwidth is-raunded button-raunded">
                                <div slot="button">Заказать проект</div>
                            </ContactFormButton>
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
                    Пример сводного календарного плана строительства:
                </h3>
                <div style="max-width: 956px; margin:0 auto;">
                    <Lightbox   noScroll="false"
                                    modalClasses = "pipu">
                        <img class="is-block img-center" src="\images\gazoprovodi\kalendar-stroitel.png" >
                    </Lightbox>
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

