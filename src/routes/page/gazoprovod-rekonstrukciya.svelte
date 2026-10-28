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
    import {t} from 'svelte-i18n'
    import {session} from '$app/stores'

    $: currentLocale = $session.locale || 'ru'

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



<SvelteSeo title="{$t('pipeline_reconstruction_page.meta_title')}" description="{$t('pipeline_reconstruction_page.meta_description')}"/>
<HiddenH1>{$t('pipeline_reconstruction_page.meta_h1')}</HiddenH1>


<main>

    <section class="hero is-small hero1">
        <div class="hero-body">
            <div class="columns">
                <div class="column is-7">
                    <h2 style="font-size: 40px" class="has-text-white has-text-weight-medium title titlefor">{$t('pipeline_reconstruction_page.hero_title')}</h2>
                    <h2 class="has-text-white has-text-weight-medium is-uppercase titleb">{$t('pipeline_reconstruction_page.hero_subtitle')}</h2>
                    <ContactFormButton class="button is-primary is-large is-raunded button-raunded">
                        <div slot="button">{$t('pipeline_reconstruction_page.order_project')}</div>
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
                        <img src="\images\gazoprovodi\burenie.jpg" alt="{currentLocale === 'en' ? 'Main gas pipeline' : 'Магистральный газопровод'}"/>
                    </div>
                    <div class="column">
                        <span>
                            <p class="is-size-5 has-text-weight-medium has-text-justified">{@html $t('pipeline_reconstruction_page.lifespan_desc')}</p>                            
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
                    {$t('pipeline_reconstruction_page.projects_title')}
                </h3>
                <ul class="is-size-5 has-text-weight-medium">

                    <li>
                        <div class="service-icon">
                            <img class="icon2" alt="" src="/images/kotel/icons/bmk_check_006.png">
                        </div>
                        <div class="pl-3">
                            <p class="has-text-justified">
                                {$t('pipeline_reconstruction_page.project1_intro')}
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
                                        {#each [
                                            { name: { ru: "Восход", en: "Voskhod" }, cap: "3 200" },
                                            { name: { ru: "Зарубино", en: "Zarubino" }, cap: "130 250" },
                                            { name: { ru: "Козьмодемьянск", en: "Kozmodemyansk" }, cap: "25 000" },
                                            { name: { ru: "Марпосад", en: "Marposad" }, cap: "16 500" },
                                            { name: { ru: "Хлебниково", en: "Khlebnikovo" }, cap: "7 400" },
                                            { name: { ru: "Большие Поляны", en: "Bolshie Polyany" }, cap: "11 200" },
                                            { name: { ru: "Советский", en: "Sovetsky" }, cap: "50 000" },
                                            { name: { ru: "Шоршелы", en: "Shorshely" }, cap: "19 400" },
                                            { name: { ru: "Чебоксары ТЭЦ-2", en: "Cheboksary CHP-2" }, cap: "404 000" }
                                        ] as grs}
                                            <li>
                                                <div class="service-icon">
                                                    <img alt="" src="/images/form-checkbox.png">
                                                </div>
                                                <div class="pl-3">
                                                    <p class="">
                                                        {currentLocale === 'en' 
                                                            ? `GRS "${grs.name.en}" capacity ${grs.cap} m³/h`
                                                            : `ГРС «${grs.name.ru}» производительностью ${grs.cap} м3/час`}
                                                    </p>
                                                </div>                                                                 
                                            </li>
                                        {/each}
                                    </ul>
                                </span>
                            </div>
                            <div class="column hiden2">
                                <img src="\images\gazoprovodi\projekt.jpg" alt="{currentLocale === 'en' ? 'Gas distribution station' : 'Газораспределительная станция'}"/>
                            </div>
        
                        </div>

                    </li>
                    <li>
                        <div class="service-icon">
                            <img class="icon2" alt="" src="/images/kotel/icons/bmk_check_006.png">
                        </div>
                        <div class="pl-3">
                            <p class="has-text-justified">
                                {$t('pipeline_reconstruction_page.project2_text')}
                            </p>
                        </div>                                                                 
                    </li>
                    <li>
                        <div class="service-icon">
                            <img class="icon2" alt="" src="/images/kotel/icons/bmk_check_006.png">
                        </div>
                        <div class="pl-3">
                            <p class="has-text-justified">
                                {$t('pipeline_reconstruction_page.project3_text')}
                            </p>
                        </div>                                                                 
                    </li>
                    <li>
                        <div class="service-icon">
                            <img class="icon2" alt="" src="/images/kotel/icons/bmk_check_006.png">
                        </div>
                        <div class="pl-3">
                            <p class="has-text-justified">
                                {$t('pipeline_reconstruction_page.project4_text')}
                            </p>
                        </div>                                                                 
                    </li>                              
                </ul>
            </div>
        </div>
    </section>

    <div style="text-align: center;">
        <ContactFormButton class="hiden2 button is-primary is-medium is-raunded button-raunded">
            <div slot="button">{$t('pipeline_reconstruction_page.order_project')}</div>
        </ContactFormButton>
    </div>


    <section class="section py-6 has-text-centered">
        <div class="container text-center">
            <div class="title titlefor">
                <h2 class="">{$t('pipeline_reconstruction_page.workflow_title')}</h2>
            </div>
            <div class="columns is-desktop ">
                <div class="column logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6 mb-6"
                                                                        src="/images/kotel/icons/bmk_icon_01.png">
                    <p class="logic__text svelte-rgyqg6">{$t('pipeline_reconstruction_page.step1')}</p>
                </div>
                <div class="column logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6 mb-6"
                                                                        src="/images/kotel/icons/bmk_icon_04.png">
                    <p class="logic__text svelte-rgyqg6">{$t('pipeline_reconstruction_page.step2')}</p>
                </div>
                <div class="column logic__item svelte-rgyqg6 vert"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6 mb-6"
                                                                        src="/images/kotel/icons/bmk_icon_02.png">
                    <p class="logic__text svelte-rgyqg6">{$t('pipeline_reconstruction_page.step3')}</p>
                </div>
            </div>
            <div class="columns is-desktop">
                <div class="column logic__item svelte-rgyqg6 vert"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6 mb-6"
                                                                        src="/images/gazoprovodi/podpis_icon.png">
                    <p class="logic__text svelte-rgyqg6">{$t('pipeline_reconstruction_page.step4')}</p>
                </div>
                <div class="column logic__item svelte-rgyqg6 left-item"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6 mb-6"
                                                                        src="/images/kotel/icons/bmk_icon_09.png">
                    <p class="logic__text svelte-rgyqg6">{$t('pipeline_reconstruction_page.step5')}</p>
                </div>
                <div class="column logic__item svelte-rgyqg6 left-item"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6 mb-6"
                                                                        src="/images/gazoprovodi/formirovanie_icon1.png"
                                                                        style="background: white;">
                    <p class="logic__text svelte-rgyqg6">{$t('pipeline_reconstruction_page.step6')}</p>
                </div>
            </div>
            <div class="columns is-desktop">
                <div class="column logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6 mb-6"
                                                                        src="/images/gazoprovodi/formirovanie_icon2.png"
                                                                        style="background: white;">
                    <p class="logic__text svelte-rgyqg6">{$t('pipeline_reconstruction_page.step7')}</p>
                </div>
                <div class="column logic__item svelte-rgyqg6 item-hide"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6 mb-6"
                                                                        src="/images/kotel/icons/bmk_icon_05.png">
                    <p class="logic__text svelte-rgyqg6">{$t('pipeline_reconstruction_page.step8')}</p>
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
                    <img alt="{currentLocale === 'en' ? 'Gas pipeline station' : 'Газопровод станция'}" src="\images\gazoprovodi\gazoprovod-zapros.jpg"/>
                </div>
                <div class="column zayvka">
                    <h4 class="title titlefor has-text-white">{$t('pipeline_reconstruction_page.form_title')}</h4>
                    <ContactForm/>
                    <p class="is-size-7 has-text-centered has-text-white pt-3">{$t('pipeline_reconstruction_page.form_privacy')}</p>
                </div>
            </div>
        </div>
    </section>
</main>

