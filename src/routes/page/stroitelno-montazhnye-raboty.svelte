<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import {onMount} from 'svelte'
    import ContactFormButton from '$lib/components/ContactFormButton.svelte'
    import Icon from 'fa-svelte'
    import {faPhone,
            faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
    import Carousel from '$lib/components/Carousel.svelte'
    import {Lightbox, LightboxImage, LightboxGallery} from 'svelte-lightbox'
    import LazyImage from 'svelte-lazy-image'
    import HiddenH1 from "$lib/components/HiddenH1.svelte"
    import {t} from 'svelte-i18n'
    import {session} from '$app/stores'

    $: currentLocale = $session.locale || 'ru'
    $: p = currentLocale === 'en' ? '/en' : ''

    $: meta = currentLocale === 'en' ? {
        title: "Construction and Installation Works | SRO Permits | Boiler Plant Installation",
        description: "Full range of construction and installation works for energy facilities. Industrial gas boiler houses for manufacturing.",
        h1: "Construction and Installation Works for Industrial Boiler Houses and Power Centers. Modular Boilers Supply & Installation."
    } : {
        title: "Строительно-монтажные работы. Допуски СРО. Монтаж котельной",
        description: "Выполнение полного комплекса строительно-монтажных работ для объектов энергетики. Газовая промышленная котельная для производства",
        h1: "Строительно-монтажные работы для промышленных котельных и энергоцентров. Поставка и монтаж БМК. Газовые котельные. Дизельные котельные."
    }

    $: title = currentLocale === 'en' ? 'Construction and Installation Works' : 'Строительно-монтажные работы'

    onMount(async () => {

        let right = document.getElementsByClassName('right');
        for(var i = 0; i < right.length; i++) {
            right[i].style.right = '0.8vw';
            right[i].style.color = '#ffffff';
            right[i].style.cursor = 'pointer';
        }
        if (document.documentElement.clientWidth < 500) {
        }

        let left = document.getElementsByClassName('left');
        for(var i = 0; i < left.length; i++) {
            left[i].style.left = '';
            left[i].style.left = '0.2vw';
            left[i].style.color = '#ffffff';
            left[i].style.cursor = 'pointer';
        }
    })

    function onContactButtonClick() {
        window.ym(54841009,'reachGoal','Click SMR button');
    }
</script>


<style lang="scss">

    .section {
        margin: 50px 20px;
        @media (max-width: 420px) {
            margin: 30px 10px;
        }
    }

    .hero {
        &.hero1{
        background-position: 90% 0;
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: multiply;
        background-image: url(/images/smr/herosmr.png),
        linear-gradient(0deg, grey, transparent),
        linear-gradient(45deg, grey, transparent),
        linear-gradient(80deg, grey, transparent),
        linear-gradient(100deg, grey, transparent);
            .hero-body {
                margin-top: 50px;
            }
        }       
        &__text {
            h2{
                max-width: 854px;
                @media (max-width: 1588px) {
                    max-width: 643px;
                }
                @media (max-width: 1237px) {
                    max-width: 455px;
                }
                @media (max-width: 768px) {
                    max-width: 100%;
                }
            }
            @media (max-width: 768px) {
                display: flex;
                flex-direction: column-reverse;
            }
        }
        &__spisok{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        position: relative;
        top: -65px;
        @media (max-width: 768px) {
            margin: 0 auto;
            top: 0px;
            align-items: flex-start;
        }
            >div{
                display: flex;
                @media (max-width: 768px) {
                    flex-direction: row-reverse;
                }
            }
            p{
                color: #fff;
                font-size: 1.5em;
                font-weight: 600;
                text-transform: uppercase;
                text-shadow: 3px 3px 4px #000;
            }
            img{
                width: 35px;
                height: 35px;
                top: 4px;
                position: relative;
                margin-left: 10px;
                -webkit-filter: drop-shadow( 2px 2px 1px #000 );
                filter: drop-shadow( 2px 2px 1px #000 );
                @media (max-width: 768px) {
                        margin-right: 10px;
                }
            }
        }
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
    
    .text-center .titlefor:before{
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);      
    }

    h1 {
        font-size: 60px;
        @media (max-width: 868px) {
            font-size: 50px;
        }
        @media (max-width: 450px) {
            font-size: 40px;
        }
    }

    h2 {
        font-size: 30px;
        font-weight: 500;
        
        &.titleb {
            line-height: initial;
            padding-bottom: 30px;
            font-size: 20px;
        }
        @media (max-width: 420px) {
            font-size: 30px;
        }
    }

    h3 {
        font-size: 20px;
        font-weight: 500;
    }
   
    ul {
        margin-left: 0;
        padding-left: 0;
        list-style-type: none;

        li {
            div:first-child{
                float: left;
                padding-right: 10px;
            }
            div p {
                text-align: justify;
                margin-left: 22px;
            }           
        }
    }

    .button3 {
        display: flex;
        :first-child{
            cursor: pointer;
            display: flex;
            justify-content: center;
            padding-bottom: calc(0.5em - 1px);
            padding-left: 1em;
            padding-right: 1em;
            padding-top: calc(0.5em - 1px);
            text-align: center;
            border-radius: 30px;
            max-width: 300px;
            background: #f86923;
            color: #fff;
            font-size: 1.5rem;
            transition: 0.5s;
            border: 1px solid #f86923;

            &:hover {
               background: #fff;
                color: #f86923;
            }
            &:active {
                transform: translateY(3px);
            }
        }
        @media (max-width: 450px) {
            justify-content: center;
        }
        &.btn2 {
            :first-child{
                line-height: 1.3;
                padding: 20px 10px;
                max-width: 400px;
                }
            }
    }

    /**************************/
    /*Стиль текста карусели НАШИ ПРОЕКТЫ - start*/
    .project {
        background: #ededed;
        margin: auto 0;
    }

    .image {
        position: relative;
    }

    .control {
        font-size: 2rem;
    }

    .slide-content {
        padding: 0 10px;
    }
    /*Стиль текста карусели НАШИ ПРОЕКТЫ - end*/
    /*******************************/

    .spisok1 {
        .spisok1__icon {
            position: relative;
            top: 3px;
        }
        .spisok1_img {
            border: 15px solid #cbcbcb;
            height: 100%;
            object-fit: cover;
        }
    }

    .lister {
        &__columns {
            :nth-child(1) {
                margin-right: 20px;
                @media (max-width: 769px) {
                    margin: 20px 0;
                }
            }
        }
        &__column {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            box-shadow: 7px 7px 20px 5px #cbcbcb;
            border-left: 20px solid #f86923;           
            h3{
                padding: 20px;
                line-height: 1.4em;
            }                        
        }
        &__text {
            line-height: 1.5em;
            text-align: center;
            font-size: 1.3em;
            font-weight: 500;
            margin: 30px 30px 20px 30px;
        }
        &__intext {
            color:#f60;
            font-weight: 600;
            text-decoration: underline;
        }
        &__footer {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #ffebcd;
            padding: 25px 0;
            h2 {
                text-align: center;
                padding: 10px 0;
                line-height: 1.5em;
                font-weight: 700;
            }
            .vstavka {
                padding: 0 20px;
                // max-width: 700px;
                text-align: center;
                font-size: 20px;
                font-weight: 700;
                line-height: 1.4em;
                text-transform: uppercase;
            }
        }        
    }

    .grafik {
        @media (max-width: 420px) {
            margin-top: 70px;
        }
    }

    .blockGrafik {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;        
        &__head {
            font-size: 25px;
            font-weight: 500;
            line-height: 1.3em;
            padding-bottom: 1.5em;
            text-align: center;
        }
        &__grafColor {
            width: 10px;
            height: 10px;
            margin-top: 5px;
            &.c1 {
                background-color: #6ce5e8;
            }
            &.c2 {
                background-color: #41b8d5;
            }
            &.c3 {
                background-color: #2d8bba;
            }
            &.c4 {
                background-color: #2e5f98;
            }           
        }
        &__history {
            font-size: 11px;
        }
        &__img {
            min-width: 260px;
        }
        &__history2 {
            font-size: 8px;
            top: 15px;
            transform: translateY(-50%);
            text-align: right;
            padding: 0 12px;
            @media (max-width: 768px) {
                font-size: 10px;
            }
        }
        &__footer {
            text-align: center;
            font-size: 2em;
        }
        &__footerNumber {
            text-align: center;
            font-size: 5em;
            font-weight: 700;
            line-height: 1em;
            color:#f60;
        }
    }

    .textGrafik {
        text-align: justify;
        &__lid {
            text-transform: uppercase;
            color: #f60;
            font-weight: 700;
        }
    }

    .command {
        background-color: #dddddd;
        margin: 50px 0;
        padding-top: 70px;
        padding-bottom: 35px;
        overflow: hidden;
        .columns {
            text-align: center;
            .column {
                @media (max-width: 530px) {
                    pading: 12px 0;
                }
            }
        }
        &__image {
            width: 150px;
            height: 150px;
            border: 3px solid #f60;
            border-radius: 50%;            
        }
        &__text {
            font-weight: 700;
            text-transform: uppercase;
        }
        &__text2 {
            font-weight: 500;
            color: #646464;
        }
    }

    .acreditac{
        &__columns {
            max-width: 80%;
            margin: 0 auto;
            .column {
                padding: 2rem;
                border: 30px solid transparent;
                border-image-source: url('/images/smr/ramka2.png');
                border-image-slice: 20% 25%;
                border-image-width: 6;
                border-image-repeat: round;
                @media (max-width: 530px) {
                    border-image-width: 4;
                }
                >h3 {
                    font-size: 25px;
                    line-height: 1.5em;
                    color: #f60;
                    text-align: center;
                    text-transform: uppercase;
                    padding-bottom: 20px;
                }
            }
            .column:first-child {
                margin-right: 20px;
                @media (max-width: 769px) {
                    margin: 20px 0;
                }
            }
            @media (max-width: 1220px) {
                max-width: 100%;
            }
            @media (max-width: 769px) {
                max-width: 80%;
            }
            @media (max-width: 530px) {
                max-width: 100%;
            }
        }
        &__image {
            text-align: center;
            margin-bottom: 10px;
            >img{
                width: 70%;
            }
        }
        &__icon {
            padding-top: 3px;
        }
        &__li {
            margin-bottom: 10px;
        }
        @media (max-width: 769px) {
                margin-bottom: 60px;;
            }
    }

    .consult {
        display: flex;
        justify-content: center;
    }

    .plus {
        &__store {
            max-width: 60%;
            margin: 0 auto;
            @media (max-width: 850px) {
                max-width: 90%;
            }
        }
        &__block {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-wrap: nowrap;
            margin-bottom: 40px;
        }
        &__image {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 5px solid red;
            border-radius: 5px;
            transform: rotate(45deg);
            width: 70px;
            min-width: 70px;
            height: 70px;            
            img {
                display: flex;
                width: 50px;
                height: 50px;
                transform: rotate(-45deg);
            }
            &.c1 {
                border-color: #929292;
            }
        }
        &__text {
            padding-left: 30px;
            
            :nth-child(1) {
                color: #f60;
                font-size: 1.5em;
                line-height: 1.4em;
                font-weight: 700;
                text-transform: uppercase;
                padding-bottom: 5px;
            }

            :nth-child(2) {
                line-height: 1.5em;
                font-weight: 600;                
            }
        }
    }
</style>

<SvelteSeo title="{$t('construction_installation_page.meta_title')}" description="{$t('construction_installation_page.meta_description')}"/>
<HiddenH1>{$t('construction_installation_page.meta_h1')}</HiddenH1>

<main>
    <section class="hero hero1">
        <div class="hero-body">
            <div class="columns">
                <div class="column is-7">
                    <h2 style="font-size: 60px" class="has-text-white has-text-weight-medium title titlefor">{$t('construction_installation_page.hero_title')}</h2>
                </div>
            </div>
            <div class="columns hero__text">
                <div class="column is-7">
                    <h2 class="block has-text-white has-text-weight-medium has-text-justified titleb">{$t('construction_installation_page.hero_sub')}</h2>
                </div>
                <div class="column is-5 hero__spisok">
                    <div>
                        <p>{$t('construction_installation_page.item_boilers')}</p>
                        <img class="img_right" alt="" src="/images/smr/i_kotel.svg">
                    </div>
                    <div>
                        <p>{$t('construction_installation_page.item_energy_centers')}</p>
                        <img class="img_right" alt="" src="/images/smr/i_energy.svg">
                    </div>
                    <div>
                        <p>{$t('construction_installation_page.item_substations')}</p>
                        <img class="img_right" alt="" src="/images/smr/i_teplo.svg">
                    </div>
                    <div>
                        <p>{$t('construction_installation_page.item_pipelines')}</p>
                        <img class="img_right" alt="" src="/images/smr/i_gas.svg">
                    </div>
                </div>
            </div>
            <div class="button3" >
                <ContactFormButton onClick={onContactButtonClick}>
                    <div slot="button">{$t('construction_installation_page.order_smr')}</div>
                </ContactFormButton>
            </div>
            <div class="subtitle py-6">
                <a rel="external"
                   class="has-text-white zphone"
                   href="tel:+74957907697">
                    <Icon icon={faPhone}/>
                        <span class="callibri_phone zphone">+7 (495) 790-76-97</span>
                </a>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container pt-3 text-center spisok1">
            <h2 class="title titlefor has-text-centered has-text-weight-bold mb-2">
                {$t('construction_installation_page.scope_title')}
            </h2>
            <div class="content">
                <div class="columns is-align-items-stretch">
                    <div class="column is-half">                
                        <ul class="has-text-weight-medium">                       
                            <li>
                                <div>
                                    <img class="spisok1__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        {$t('construction_installation_page.scope1')}
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img class="spisok1__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        {$t('construction_installation_page.scope2')}
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img class="spisok1__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        {$t('construction_installation_page.scope3')}
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img class="spisok1__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        {$t('construction_installation_page.scope4')}
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img class="spisok1__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        {$t('construction_installation_page.scope5')}
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img class="spisok1__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        {$t('construction_installation_page.scope6')}
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="column is-half">
                        <img class="is-fullwidth" alt="" src="/images/pages/stroitelno-montazhnye-raboty/Рисунок9.jpg">
                    </div>                   
                </div>
            </div>                
        </div>
    </section>

    <section class="section py-6 project">
        <div class="container text-center">
            <div class="title titlefor has-text-centered">
                <h2 class="has-text-weight-bold mb-2">{$t('construction_installation_page.projects_title')}</h2>
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
                                    src={'/images/smr/projects/03.jpg'}
                                    alt={$t('construction_installation_page.proj1_alt')}/>
                        </figure>
                    </Lightbox>
                </div>
                <div class="slide-content proect-carousel-item">
                    <Lightbox   noScroll="false"
                                modalClasses = "pipu">
                        <figure class="image">
                            <LazyImage
                                    style="aspect-ratio: 316/209; object-fit: cover"
                                    src="/images/pages/stroitelno-montazhnye-raboty/Рисунок8.jpg"
                                    alt={$t('construction_installation_page.proj2_alt')}/>
                        </figure>
                    </Lightbox>
                </div>
                <div class="slide-content proect-carousel-item">
                    <Lightbox   noScroll="false"
                                modalClasses = "pipu">
                        <figure class="image">
                            <LazyImage
                                    src={'/images/smr/projects/05.jpg'}
                                    alt={$t('construction_installation_page.proj3_alt')}/>
                        </figure>
                    </Lightbox>
                </div>
                <div class="slide-content proect-carousel-item">
                    <Lightbox   noScroll="false"
                                modalClasses = "pipu">
                        <figure class="image">
                            <LazyImage
                                    src={'/images/smr/projects/06.jpg'}
                                    alt={$t('construction_installation_page.proj4_alt')}/>
                        </figure>
                    </Lightbox>
                </div>              
                <div class="slide-content proect-carousel-item">
                    <Lightbox   noScroll="false"
                                modalClasses = "pipu">
                        <figure class="image">
                            <LazyImage
                                    src={'/images/smr/projects/07.jpg'}
                                    alt={$t('construction_installation_page.proj5_alt')}/>
                        </figure>
                    </Lightbox>
                </div>
                <span class="control" slot="right-control">
                            <Icon icon={faChevronRight}/>
                </span>
            </Carousel>
        </div>
    </section>

    <section class="section">
        <div class="container lister">            
            <div class="columns is-gapless is-centered lister__columns">
                <div class="column is-4 lister__column">
                    <h3>{@html $t('construction_installation_page.calc_pipeline', {values: {p}})}</h3>
                </div>
                <div class="column is-4 lister__column">
                    <h3>{@html $t('construction_installation_page.calc_boiler', {values: {p}})}</h3>
                </div>
            </div>
            <p class="lister__text">{@html $t('construction_installation_page.savings_desc')}
            </p>
            <div class="lister__footer">
                <h2 >{$t('construction_installation_page.how_optimize_title')}</h2> 
                <p class="vstavka">{$t('construction_installation_page.how_optimize_text')}
                </p>
                <h2>{$t('construction_installation_page.company_title')}</h2>
            </div>
        </div>
    </section>

    <section class="section grafik">
        <div class="container text-center">
            <div class="title titlefor has-text-centered">
                <h2 class="has-text-weight-bold mb-2">{$t('construction_installation_page.chart_title')}</h2>
            </div>
            <div class="columns is-vcentered">
                <div class="column is-flex blockGrafik">
                    <p class="blockGrafik__head">{$t('construction_installation_page.chart_project_cost')}</p>
                    <div class="columns is-vcentered">
                        <div class="column">
                            <ul>
                                <li>
                                    <div class="blockGrafik__grafColor c1"></div>
                                    <div>
                                        <p class="blockGrafik__history">
                                            {$t('construction_installation_page.chart_equipment')}
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div class="blockGrafik__grafColor c2"></div>
                                    <div>
                                        <p class="blockGrafik__history">
                                            {$t('construction_installation_page.chart_ird_pir')}
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div class="blockGrafik__grafColor c3"></div>
                                    <div>
                                        <p class="blockGrafik__history">
                                            {$t('construction_installation_page.chart_smr')}
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div class="blockGrafik__grafColor c4"></div>
                                    <div>
                                        <p class="blockGrafik__history">
                                            {$t('construction_installation_page.chart_other')}
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="column">
                            <div>
                                <img class="blockGrafik__img" alt="{currentLocale === 'en' ? 'Construction and installation schedule' : 'график СМР'}" src="/images/smr/grafikSMR.svg">
                            </div>
                        </div>
                    </div>
                    <div>
                        <p class="blockGrafik__footer"> {$t('construction_installation_page.total_savings')}</p>
                        <p class="blockGrafik__footerNumber">38%</p>
                    </div>                
                </div>
                <div class="column textGrafik">
                    <div class="block">
                        <p><span class="textGrafik__lid">{$t('construction_installation_page.fact1_title')}</span> {$t('construction_installation_page.fact1_desc')}
                        </p>
                        <p>{@html $t('construction_installation_page.fact1_save')}</p>
                    </div> 
                    <div class="block">
                        <p><span class="textGrafik__lid">{$t('construction_installation_page.fact2_title')}</span> {$t('construction_installation_page.fact2_desc')}
                        </p>
                        <p>{@html $t('construction_installation_page.fact2_save')}</p>
                    </div>
                    <div class="block">
                        <p><span class="textGrafik__lid">{$t('construction_installation_page.fact3_title')}</span> {$t('construction_installation_page.fact3_desc')}
                        </p>
                        <p>{@html $t('construction_installation_page.fact3_save')}</p>
                    </div>
                    <div class="block">
                        <p><span class="textGrafik__lid">{$t('construction_installation_page.fact4_title')}</span> {$t('construction_installation_page.fact4_desc')}
                        </p>
                        <p>{@html $t('construction_installation_page.fact4_save')}</p>
                    </div>       
                </div>
            </div>
        </div>
    </section>

    <section class="section ">
        <div class="container">
            <div class="container consult">
                <div class="button3 btn2">
                    <ContactFormButton onClick={onContactButtonClick} class="">
                        <div slot="button">{@html $t('construction_installation_page.questions_cta')}</div>
                    </ContactFormButton>
                </div>
            </div>
        </div>
    </section> 

    <section class="section command">
        <div class="container text-center">
            <div class="title titlefor has-text-centered">
                <h2 class="has-text-weight-bold mb-2">{$t('construction_installation_page.team_title')}</h2>
            </div>
            <div class="columns is-multiline is-centered">
                <div class="column is-narrow is-3">
                    <img class="command__image" src="/images/command/Харитонов.png">
                    <p class="command__text">{$t('construction_installation_page.team_member1_name')}</p>
                    <p class="command__text2">{$t('construction_installation_page.team_member1_role')}</p>
                </div>
                <div class="column is-narrow is-3">
                    <img class="command__image" src="/images/command/Зайков.png">
                    <p class="command__text">{$t('construction_installation_page.team_member2_name')}</p>
                    <p class="command__text2">{$t('construction_installation_page.team_member2_role')}</p>
                </div>
                <div class="column is-narrow is-3">
                    <img class="command__image" src="/images/command/Бачинин.png">
                    <p class="command__text">{$t('construction_installation_page.team_member3_name')}</p>
                    <p class="command__text2">{$t('construction_installation_page.team_member3_role')}</p>
                </div>
                <div class="column is-narrow is-3">
                    <img class="command__image" src="/images/command/Петров.png">
                    <p class="command__text">{$t('construction_installation_page.team_member4_name')}</p>
                    <p class="command__text2">{$t('construction_installation_page.team_member4_role')}</p>
                </div>
            </div>
        </div>
    </section> 

    <section class="section acreditac">
        <div class="container text-center">
            <div class="title titlefor has-text-centered">
                <h2 class="has-text-weight-bold mb-2">{$t('construction_installation_page.accreditations_title')}</h2>
            </div>
            <div class="columns acreditac__columns">
                <div class="column">
                    <h3>{$t('construction_installation_page.acc_pir_title')}</h3>
                    <div class="acreditac__image">
                        <img alt="" src="/images/smr/acreditac1.png">
                    </div>
                    <ul class="has-text-weight-medium">                      
                        <li class="acreditac__li">
                            <div>
                                <img class="acreditac__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                            </div>
                            <div class="pl-3">
                                <p>
                                    {$t('construction_installation_page.acc_pir_sro')}
                                </p>
                            </div>
                        </li>
                        <li class="acreditac__li">
                            <div>
                                <img class="acreditac__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                            </div>
                            <div class="pl-3">
                                <p>
                                    А.1
                                </p>
                            </div>
                        </li>
                        <li class="acreditac__li">
                            <div>
                                <img class="acreditac__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                            </div>
                            <div class="pl-3">
                                <p>
                                    Б.7.3
                                </p>
                            </div>
                        </li>
                        <li class="acreditac__li">
                            <div>
                                <img class="acreditac__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                            </div>
                            <div class="pl-3">
                                <p>
                                    Б.2.8
                                </p>
                            </div>
                        </li>
                        <li class="acreditac__li">
                            <div>
                                <img class="acreditac__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                            </div>
                            <div class="pl-3">
                                <p>
                                    Б.8.6
                                </p>
                            </div>
                        </li>
                        <li class="acreditac__li">
                            <div>
                                <img class="acreditac__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                            </div>
                            <div class="pl-3">
                                <p>
                                    {$t('construction_installation_page.acc_pir_doc')}
                                </p>
                            </div>
                        </li>
                        <li class="acreditac__li">
                            <div>
                                <img class="acreditac__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                            </div>
                            <div class="pl-3">
                                <p>
                                    {$t('construction_installation_page.acc_pir_gazprom')}
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="column">
                    <h3>{$t('construction_installation_page.acc_smr_title')}</h3>
                    <div class="acreditac__image">
                        <img alt="" src="/images/smr/acreditac2.png">
                    </div>
                    <div class="acreditac__image">
                        <img alt="" src="/images/smr/acreditac3.png">
                    </div>
                    <ul class="has-text-weight-medium">                      
                        <li class="acreditac__li">
                            <div>
                                <img class="acreditac__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                            </div>
                            <div class="pl-3">
                                <p>
                                    {$t('construction_installation_page.acc_smr_sro')}
                                </p>
                            </div>
                        </li>
                        <li class="acreditac__li">
                            <div>
                                <img class="acreditac__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                            </div>
                            <div class="pl-3">
                                <p>
                                    А.1
                                </p>
                            </div>
                        </li>
                        <li class="acreditac__li">
                            <div>
                                <img class="acreditac__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                            </div>
                            <div class="pl-3">
                                <p>
                                    Б.7.3
                                </p>
                            </div>
                        </li>
                        <li class="acreditac__li">
                            <div>
                                <img class="acreditac__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                            </div>
                            <div class="pl-3">
                                <p>
                                    Б.8.6
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>            
        </div>
    </section>            
   
    <section class="section plus">
        <div class="container text-center">
            <div class="title titlefor has-text-centered">
                <h2 class="has-text-weight-bold mb-2">{$t('construction_installation_page.advantages_title')}</h2>
            </div>
            <div class="plus__store">
                <div class="plus__block">
                    <div class="plus__image c1">
                        <img class="" src="/images/smr/plus3.png">
                    </div>
                    <div class="plus__text">
                        <p>{$t('construction_installation_page.adv1_title')}</p>
                        <p>{$t('construction_installation_page.adv1_desc')}</p>
                    </div>
                </div>
                <div class="plus__block">
                    <div class="plus__image c1">
                    </div>
                    <div class="plus__text">
                        <p>{$t('construction_installation_page.adv2_title')}</p>
                        <p>{$t('construction_installation_page.adv2_desc')}</p>
                    </div>
                </div>
                <div class="plus__block">
                    <div class="plus__image c1">
                        <img class="" src="/images/smr/plus6.png">
                    </div>
                    <div class="plus__text">
                        <p>{$t('construction_installation_page.adv3_title')}</p>
                        <p>{$t('construction_installation_page.adv3_desc')}</p>
                    </div>
                </div>
                <div class="plus__block">
                    <div class="plus__image c1">
                        <img class="" src="/images/smr/plus2.png">
                    </div>
                    <div class="plus__text">
                        <p>{$t('construction_installation_page.adv4_title')}</p>
                        <p>{$t('construction_installation_page.adv4_desc')}</p>
                    </div>
                </div>
                <div class="plus__block">
                    <div class="plus__image c1">
                        <img class="" src="/images/smr/plus1.png">
                    </div>
                    <div class="plus__text">
                        <p>{$t('construction_installation_page.adv5_title')}</p>
                        <p>{$t('construction_installation_page.adv5_desc')}</p>
                    </div>
                </div>
                <div class="plus__block">
                    <div class="plus__image c1">
                        <img class="" src="/images/smr/plus5.png">
                    </div>
                    <div class="plus__text">
                        <p>{$t('construction_installation_page.adv6_title')}</p>
                        <p>{$t('construction_installation_page.adv6_desc')}</p>
                    </div>
                </div>
            </div>                       
        </div>
    </section> 
    
    <section class="section ">
        <div class="container">
            <div class="container consult">
                <div class="button3">
                    <ContactFormButton onClick={onContactButtonClick} class="">
                        <div slot="button">{$t('construction_installation_page.order_smr_btn')}</div>
                    </ContactFormButton>
                </div>
            </div>
        </div>
    </section> 
    
</main>