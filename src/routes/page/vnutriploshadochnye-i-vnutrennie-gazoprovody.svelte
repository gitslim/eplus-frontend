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
    import {faPhone, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
    import QuizArea from '$lib/components/quiz/QuizArea.svelte'
    import Modal from '$lib/components/Modal.svelte'
    import Carousel from '$lib/components/Carousel.svelte'
    import LazyImage from 'svelte-lazy-image'
    import {Lightbox} from 'svelte-lightbox'

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
        background-image: url(/images/interGazoprovod/wp_gazoprovod.jpg),
        linear-gradient(0deg, grey, transparent),
        linear-gradient(45deg, grey, transparent),
        linear-gradient(80deg, grey, transparent),
        linear-gradient(100deg, grey, transparent);
    }

    .hero1 .hero-body {
        margin-top: 50px;
    }

    .hero2 {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: multiply;
        background-color: rgba(0, 0, 0, 0.7);
        background-image: url(/images/interGazoprovod/gas.jpeg);
    }

    .hero2 .hero-body {
        margin-top: 20px;
    }

    .hero2__text {
        padding: 20px 30px;
        background: white;
        border-radius: 20px;
        margin-bottom: 30px;
        border-left: 5px solid rgb(248, 105, 35);
        border-right: 5px solid rgb(248, 105, 35);
    }

    .hero2__text2 {
        font-size: 20px;
        line-height: 1.5em;
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

    .titleb {
        line-height: initial;
        padding-bottom: 30px;
    }

    .button-ssilka {
        background: #f86923;
        color: white;
        border: 0;
        border-radius: 50px;
        line-height: 1.3em;
        padding: 10px 20px;
        font-size: 20px;
        width: 280px;
    }

    .button-ssilka:hover {
        background: #e74c00;
        transform: scale(1.05);
        cursor: pointer;
        transition: 1s;
    }

    img .__image {
        max-height: 478px;
        max-width: 318px;
    }

    .buttonHead {
        line-height: 1.1em;
    }

    .line-image {
        position: absolute;
        top: -70px;
        background: #f86923;
        text-align: center;
        color: white;
        line-height: 1.5em;
        padding: 5px 10px;
        border-radius: 0 0 10px 0;
    }

    .content.pad {
        padding: 0 4%;
    }

    .columns.box-line1 .column img {
        border-radius: 10px 0;
        box-shadow: 2px 2px 10px 1px black;
        border-left: 3px solid #f86923;
        border-bottom: 3px solid #a1a1a1;
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
        padding: 0;
        box-shadow:  0 0.5em 1em -0.125em rgb(255 225 255 / 67%),
                    0 0px 0 1px rgb(255 255 255 / 2%);
        border-top: 1px solid rgb(248, 105, 35);
        border-right: 1px solid rgb(248, 105, 35);
        overflow: hidden;
        border-radius: 30px;
   }

   .box .image {
       margin: 0;
   }

   .box .content {
       padding: 0 15px 10px 15px;
       line-height: 1.5em;
   }

   .box2 {
    box-shadow:  0 0 8px 3px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    margin: 20px;
    border-top: 2px solid rgba(248, 105, 35, 0.5);
   }

   .box2 ul {
        margin-left: 0;
        padding-left: 0;
        list-style-type: none;
    }

    .box2 ul li div p {
        margin-left: 22px;
    }

    .tile .content ul {
        margin-left: 0;
        padding-left: 0;
        list-style-type: none;
    }

    .tile .content ul li p {
        margin-left: 25px;
    }

    ul li div:not(:first-child) {
        padding-left: 30px;
    }

    ul li div:first-child {
        float: left;
        padding-left: 10px;
    }

   .box2 img {
       display: block;
       margin: 0 auto 50px auto;
   }

   .__image {
        position: relative;
   }

   .image-box {
        overflow: hidden;
        position: relative;

       &__item {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translateY(-50%) translateX(-50%);
            -webkit-transform: translateY(-50%) translateX(-50%);

       }
   }

   .px-7 {
            font-size: 20px;
            line-height: 1.5em;
            color:rgb(195, 83, 28);
            padding-left: 4em;
            padding-right: 4em;
        }

   .__image:before {
        content: "";
        display: block;
        position: absolute;
        top: 84px;
        left: 10%;
        width: 80%;
        height: 4px;
        border-bottom: 1px solid #383838;
        opacity: 0.5
    }

    .icon {
       margin: 4px 10px 0 0 !important;
       width: 16px;
       height: 16px;
   }

   .icon2 {
       margin: 8px 10px 0 0 !important;
       width: 12px;
       height: 12px;
   }

    .text-center .titlefor:before {
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
    }

    .is-parent .is-child{
        color: #ffffff;
    }

    icon-vopros {
        fill: #4a4a4a;
    }

    .ssilka {
        display: flex;
    }

    .tile .is-child {
        display: flex;
        background: rgba(0, 0, 0, 0.5);
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

    .logic__item.svelte-rgyqg6::after {
        content: "";
        display: block;
        position: absolute;
        top: 37px;
        left: 97%;
        width: 99%;
        height: 20px;
        background-image: url(/images/interGazoprovod/strelka.svg);
        background-repeat: no-repeat;
    }

    .line_item {
        width: 80%;
        height: 10px;
        margin: 25px auto 40px auto;
        border-top-width: 1px;
        border-top-style: solid;
        border-top-color: #f86923;
        border-left-width: 1px;
        border-left-style: solid;
        border-left-color: #f86923;
        position: relative;
    }

    .line_item::after {
            content: "";
            position: absolute;
            left: -10px;
            top: 4px;
            height: 20px;
            width: 19px;
            background-image: url(/images/interGazoprovod/strelka2.svg);
            background-repeat: no-repeat;
        }

    .hiden3 {
            display: none;
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

        .logic__item.svelte-rgyqg6::after {
            display: none;
        }

        .hiden3 {
            display: block;
        }

        .line_item {
            display: none;
        }

    }
        /*Экран меньше 1023px START*/
    /**************************************/

    /**************************************/
    /*Экран меньше 769px START*/
    @media screen and (max-width: 768px) {

        .hero1{
            background-position: 27% center;
        }

        .hero-body {
            padding: 48px 5px;
        }

        .section {
            margin: 50px 10px;
        }

        h1 {
            font-size: 29px;
        }

        h2 {
            font-size: 25px;
            margin-bottom: 15px;
        }

        .box2 {
            max-width: 300px;
        }

        .box2.column {
            margin: 20px auto;
        }
        .content.pad {
            padding: 0 4%;
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

        .px-7 {
            padding-left: 5px;
            padding-right: 5px;
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
                <div class="column is-7 udal text-center">
                    <h1 class="has-text-white has-text-centered has-text-weight-medium title titlefor">
                        Газоснабжение
                    </h1>
                    <h2 class="has-text-white has-text-centered has-text-weight-medium is-uppercase titleb">
                        ПРОМЫШЛЕННЫХ и ГРАЖДАНСКИХ ОБЪЕКТОВ <br/>ПОД КЛЮЧ по РФ
                    </h2>
                    <div align="center">

                        <Modal>
                            <div class="has-text-centered" slot="trigger" let:open >
                                <button class="button-ssilka" on:click={()=>{open()}}>
                                    Онлайн расчет стоимости газоснабжения объекта
                                </button>
                            </div>
                            <div slot="content" class="modal-content" let:store={{close}}>
                                <QuizArea title="Онлайн расчет стоимости газоснабжения объекта" quizId={0}/>
                            </div>
                        </Modal>
                    </div>
                    <div class="subtitle has-text-centered py-6">
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
        <div class="container pt-3 text-center">
            <h2 class="title titlefor has-text-centered has-text-weight-bold mb-2">
                ПОДКЛЮЧЕНИЕ ОБЪЕКТА К ГАЗОВЫМ СЕТЯМ
            </h2>
            <span>
                <p class="px-7 has-text-centered has-text-weight-bold">
                    Если перед Вами встала задача подключения газа в строящийся или уже существующий объект Компания энергия плюс организует 
                    весь процесс газоснабжения под ключ и возьмет на себя функции технического Заказчика или Генерального проектировщика.
                </p>
            </span>
            <div class="columns is-vcentered pt-5">
                <div class="column is-4">
                    <div class="image-box" style="height: 250px;">
                        <img class="image-box__item" src="/images/interGazoprovod/gazsnab.jpg" alt="Промышленные" style="max-width:450px;"/>
                    </div>
                </div>
                <div class="column has-text-justified has-text-weight-semibold">
                    <span>
                        <p>
                            Процесс <b>газоснабжения</b> подразумевает собой комплекс мероприятий по подключению Заявителя к газораспределительным сетям, 
                            а также строительство <b>внутренних и внутриплощадочных газопроводов</b>. Согласно Правил подключения (технологического присоединения) 
                            объектов капитального строительства к газораспределительным сетям (Постановления РФ от 13.09.21 № 1547)  мероприятия 
                            по подключению в пределах границ земельного участка осуществляются заявителем (заказчиком-застройщиком). Компания «Энергия плюс» 
                            оказывает полный комплекс работ по получению исходно- разрешительной документации, проектированию, монтажу, наладке и сдаче 
                            в эксплуатацию систем газоснабжения.
                        </p>
                    </span>
                </div>
            </div>
            <div class="columns is-vcentered py-5">
                <div class="column is-4 hiden1">
                    <div class="image-box" style="height: 250px;">
                        <img class="image-box__item" src="/images/interGazoprovod/soglas.jpg" alt="Промышленные" style="max-width:450px;"/>
                    </div>
                </div>
                <div class="column has-text-justified has-text-weight-semibold">
                    <span>
                        <p>
                            Помимо решения главных технических, технологических и конструктивных 
                            <b><span style="color: rgb(195, 83, 28);">задач по проектированию и строительству</span></b> не менее важную 
                            роль в процессе газоснабжения объекта имеет процесс согласования проектной документации с заинтересованными организациям, 
                            среди которых ГРО («Газпром», «Мосгаз», «Мосооблгаз»), Фонды (Лесхоз, речной фонд, фонд культурного и исторического наследия 
                            и прочие), сетевые компании (Росавтодор, Россети, МОЭК и МОЭСК и прочие), региональные и федеральные органы власти. Компания 
                            Энергия Плюс успешно проходит согласования на всех уровнях.
                        </p>
                    </span>
                </div>
                <div class="column is-4 hiden2">
                    <div class="image-box" style="height: 250px;">
                        <img class="image-box__item" src="/images/interGazoprovod/soglas.jpg" alt="Промышленные" style="max-width:450px;"/>
                    </div>
                </div>
            </div>  
        </div>
    </section>


    <section class="hero hero2">
        <div class="hero-body">
            <div class="container pad text-center">
                <h2 class="title titlefor has-text-centered has-text-white">
                    Объекты которые мы газифицируем
                </h2>
                <div class="hero2__text">
                    <p class="has-text-justified has-text-weight-medium">
                        Процесс <b>газоснабжения</b> подразумевает собой комплекс мероприятий по подключению Заявителя 
                        к газораспределительным сетям, а также строительство <b>внутренних и внутриплощадочных 
                        газопроводов.</b> Согласно Правил подключения (технологического присоединения) объектов 
                        капитального строительства к газораспределительным сетям (Постановления 
                        РФ от 13.09.21 №1547) мероприятия по подключению в пределах границ земельного 
                        участка осуществляются заявителем (заказчиком-застройщиком). Компания «Энергия плюс» 
                        оказывает <b>полный комплекс работ</b> по получению исходно-разрешительной документации, 
                        проектированию, монтажу, наладке и сдаче в эксплуатацию систем газоснабжения.
                    </p>
                </div>                
                <div class="tile is-ancestor">
                    <div class="tile is-parent">
                            <div class="tile is-child is-vertical box">
                                <figure class="image">
                                    <img src="/images/interGazoprovod/objekt1.jpg" alt="Энергетические"/>
                                        <div style="position:relative">
                                            <div class="line-image">
                                                <p class="has-text-weight-medium">ЭНЕРГЕТИЧЕСКИЕ </p>
                                            </div>
                                        </div>
                                </figure>

                                <div class="content">
                                    <ul class="has-text-weight-medium">
                                        <li>
                                            <div>
                                                <img class="icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                            </div>
                                            <div class="pl-3">
                                                <p>
                                                    Жилые комплексы
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <img class="icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                            </div>
                                            <div class="pl-3">
                                                <p>
                                                    Общежития, HoReCa
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <img class="icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                            </div>
                                            <div class="pl-3">
                                                <p>
                                                    Общественные (ФОКи, рестораны, ТРЦ)
                                                </p>
                                            </div>
                                        </li>                                       
                                    </ul>
                                </div>
                            </div>
                    </div>
                    <div class="tile is-parent">
                        <div class="tile is-child is-vertical box">
                            <figure class="image">
                                <img src="/images/interGazoprovod/objekt2.jpg" alt="Промышленные"/>
                                    <div style="position:relative">
                                        <div class="line-image">
                                            <p class="has-text-weight-medium">ПРОМЫШЛЕННЫЕ </p>
                                        </div>
                                    </div>
                            </figure>

                                    <div class="content">
                                        <ul class="has-text-weight-medium">
                                            <li>
                                                <div>
                                                    <img class="icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                                </div>
                                                <div class="pl-3">
                                                    <p>
                                                        Производственные
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <img class="icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                                </div>
                                                <div class="pl-3">
                                                    <p>
                                                        Энергетические (котельные, ЦТП, ИТП, энергоцентры)
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <img class="icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                                </div>
                                                <div class="pl-3">
                                                    <p>
                                                        Складские, логистические комплексы
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <div class="tile is-child is-vertical box">
                            <figure class="image">
                                <img src="/images/interGazoprovod/objekt3.jpg" alt="Сельскохозяйственные"/>
                                    <div style="position:relative">
                                        <div class="line-image">
                                            <p class="has-text-weight-medium">СЕЛЬСКОХОЗЯЙСТВЕННЫЕ </p>
                                        </div>
                                    </div>
                            </figure>

                            <div class="content">
                                <ul class="has-text-weight-medium">
                                    <li>
                                        <div>
                                            <img class="icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                        </div>
                                        <div class="pl-3">
                                            <p>
                                                Агро фабрики
                                            </p>
                                        </div>
                                    </li> 
                                    <li>
                                        <div>
                                            <img class="icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                        </div>
                                        <div class="pl-3">
                                            <p>
                                                Фермы
                                            </p>
                                        </div>
                                    </li> 
                                    <li>
                                        <div>
                                            <img class="icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                        </div>
                                        <div class="pl-3">
                                            <p>
                                                Тепличные комплексы
                                            </p>
                                        </div>
                                    </li> 
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="hero2__text2 has-text-white has-text-centered has-text-weight-medium">
                    По каждому из видов объектов нашей Компанией наработан <span style="color: rgb(195, 83, 28);">значительный опыт</span> проведения 
                    работ по газификации. Наш опыт и знания помогают нам подобрать индивидуальный и наиболее 
                    оптимальный путь газификации с целью снижения затрат Заказчика и сокращения сроков 
                    проведения работ.
                </p>
            </div>
        </div>
    </section>
    


    <section class="section">
        <div class="container">
            <div class="content text-center">
                <h2 class="title titlefor has-text-centered has-text-weight-bold">
                    Оказываемые услуги
                </h2>               
                <div class="columns is-3">
                    <div class="column box2 ">
                        <h4 class="title has-text-centered">Предпроектные работы</h4>
                        <div class="__image">
                            <img src="/images/interGazoprovod/icons1.svg" alt=""/>
                        </div>
                        <ul>
                            <li>
                                <div>
                                    <img class="icon2" alt="" src="/images/form-checkbox.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        ТТР
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img class="icon2" alt="" src="/images/form-checkbox.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        ТУ
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img class="icon2" alt="" src="/images/form-checkbox.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        Изыскания
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img class="icon2" alt="" src="/images/form-checkbox.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        ТЭО
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="column box2 ">
                        <h4 class="title has-text-centered">Проектные работы</h4>
                        <div class="__image">
                            <img src="/images/interGazoprovod/icons2.svg" alt=""/>
                        </div>                        
                        <ul>
                            <li>
                                <div>
                                    <img class="icon2" alt="" src="/images/form-checkbox.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        Разработка стадии "П"
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img class="icon2" alt="" src="/images/form-checkbox.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        Разработка стадии "Р"
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img class="icon2" alt="" src="/images/form-checkbox.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        Согласовании ПД
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img class="icon2" alt="" src="/images/form-checkbox.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        Прохождение экспертизы ПД
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="column box2 ">
                        <h4 class="title has-text-centered">
                            Строительно-монтажные работы
                        </h4>
                        <div class="__image">
                            <img src="/images/interGazoprovod/icons3.png" alt=""/>
                        </div>                        <ul>
                            <li>
                                <div>
                                    <img class="icon2" alt="" src="/images/form-checkbox.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        Функции технического заказчика
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img class="icon2" alt="" src="/images/form-checkbox.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        Функции генерального подрядчика
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img class="icon2" alt="" src="/images/form-checkbox.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        Функции генерального проектировщика
                                    </p>
                                </div>
                            </li>                          
                        </ul>
                    </div>
                </div>              
            </div>
        </div>
    </section>

    <section class="section mx-0" style="background: rgb(225, 225, 225);">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column py-0">
                    <div class="image-box" style="height: 350px;">
                        <img class="image-box__item" src="/images/interGazoprovod/kaska.jpeg" alt="Промышленные" style="max-width: 700px;"/>
                    </div>
                </div>
                <div class="column">
                    <span class="is-size-5 has-text-centered is-uppercase has-text-weight-bold">
                        <p class="pr-2">
                            ООО «Энергия Плюс» осуществляет <span style="color: rgb(195, 83, 28);">комплекс проектно – изыскательских работ</span> 
                            и <span style="color: rgb(195, 83, 28);">строительно – монтажных работ по газоснабжению</span> капитальных объектов 
                            по всей территории РФ.
                        </p>
                    </span>

                    <div class="section" style="max-width: 300px; margin: 40px auto 0 auto;">        
                        <ContactFormButton class="hiden2 button is-primary is-medium is-fullwidth is-raunded button-raunded">
                            <div slot="button">Заказать консультацию</div>
                        </ContactFormButton>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="section has-text-centered">
        <div class="container pt-4 text-center">
            <div class="title titlefor">
                <h2 class="has-text-weight-bold">Этапы выполнения работ</h2>
            </div>
            <p class="mb-5">Алгоритм газоснабжения предприятий вместе с «Энергией Плюс»</p>
            <div class="columns is-desktop ">
                <div class="column logic__item svelte-rgyqg6">
                    <img alt="" class="logic__icon svelte-rgyqg6 mb-3" src="/images/kotel/icons/bmk_icon_01.png">
                    <p class="logic__text svelte-rgyqg6">Оставляете заявку / заполняете опросный лист</p>
                </div>
                <div class="hiden3">
                    <img alt="" class="" src="/images/interGazoprovod/strelka2.svg">
                </div>
                <div class="column logic__item svelte-rgyqg6">
                    <img alt="" class="logic__icon svelte-rgyqg6 mb-3" src="/images/kotel/icons/bmk_icon_04.png">
                    <p class="logic__text svelte-rgyqg6">Получаете на рассмотрение технико-коммерческое предложение
                        (ТКП)</p>
                </div>
                <div class="hiden3">
                    <img alt="" class="" src="/images/interGazoprovod/strelka2.svg">
                </div>
                <div class="column logic__item svelte-rgyqg6">
                    <img alt="" class="logic__icon svelte-rgyqg6 mb-3" src="/images/kotel/icons/bmk_icon_02.png">
                    <p class="logic__text svelte-rgyqg6">Утверждаем задание на проектирование</p>
                </div>
                <div class="hiden3">
                    <img alt="" class="" src="/images/interGazoprovod/strelka2.svg">
                </div>
                <div class="column logic__item svelte-rgyqg6">
                    <img alt="" class="logic__icon svelte-rgyqg6 mb-3" src="/images/kotel/icons/bmk_icon_09.png">
                    <p class="logic__text svelte-rgyqg6">Заключаем договор</p>
                </div>
            </div>

            <div class="line_item"></div>

            <div class="hiden3 pb-2">
                <img alt="" class="" src="/images/interGazoprovod/strelka2.svg">
            </div>

            <div class="columns is-desktop">
                <div class="column logic__item svelte-rgyqg6">
                    <img alt="" class="logic__icon svelte-rgyqg6 mb-3" src="/images/kotel/icons/bmk_icon_06.png">
                    <p class="logic__text svelte-rgyqg6">Утверждаем принципиальные технические решения</p>
                </div>
                <div class="hiden3">
                    <img alt="" class="" src="/images/interGazoprovod/strelka2.svg">
                </div>
                <div class="column logic__item svelte-rgyqg6">
                    <img alt="" class="logic__icon svelte-rgyqg6 mb-3" src="/images/kotel/icons/bmk_icon_03.png">
                    <p class="logic__text svelte-rgyqg6">Разрабатываем проектную и рабочую документацию</p>
                </div>
                <div class="hiden3">
                    <img alt="" class="" src="/images/interGazoprovod/strelka2.svg">
                </div>
                <div class="column logic__item svelte-rgyqg6">
                    <img alt="" class="logic__icon svelte-rgyqg6 mb-3" src="/images/kotel/icons/bmk_icon_07.png">
                    <p class="logic__text svelte-rgyqg6">Получаем необходимые согласования и экспертизы</p>
                </div>
                <div class="hiden3">
                    <img alt="" class="" src="/images/interGazoprovod/strelka2.svg">
                </div>
                <div class="column logic__item svelte-rgyqg6">
                    <img alt="" class="logic__icon svelte-rgyqg6 mb-3" src="/images/kotel/icons/bmk_icon_05.png">
                    <p class="logic__text svelte-rgyqg6">Выдаём проект в производство работ</p>
                </div>
                <div class="hiden3">
                    <img alt="" class="" src="/images/interGazoprovod/strelka2.svg">
                </div>
                <div class="column logic__item svelte-rgyqg6">
                    <img alt="" class="logic__icon svelte-rgyqg6 mb-3" src="/images/kotel/icons/bmk_icon_09.png">
                    <p class="logic__text svelte-rgyqg6">Заключаем договор на СМР</p>
                </div>
            </div>

            <div class="line_item" style="width: 77%;"></div>

            <div class="hiden3 pb-2">
                <img alt="" class="" src="/images/interGazoprovod/strelka2.svg">
            </div>

            <div class="columns is-desktop">
                <div class="column logic__item svelte-rgyqg6 rgyqg7">
                    <img alt="" class="logic__icon svelte-rgyqg6 mb-3" src="/images/interGazoprovod/bmk_icon_10.png">
                    <p class="logic__text svelte-rgyqg6">Комплектуем объекта материалами и оборудованием</p>
                </div>
                <div class="hiden3">
                    <img alt="" class="" src="/images/interGazoprovod/strelka2.svg">
                </div>
                <div class="column logic__item svelte-rgyqg6">
                    <img alt="" class="logic__icon svelte-rgyqg6 mb-3" src="/images/interGazoprovod/bmk_icon_11.png">
                    <p class="logic__text svelte-rgyqg6">Выполнение комплекса СМР</p>
                </div>
                <div class="hiden3">
                    <img alt="" class="" src="/images/interGazoprovod/strelka2.svg">
                </div>
                <div class="column logic__item svelte-rgyqg6">
                    <img alt="" class="logic__icon svelte-rgyqg6 mb-3" src="/images/interGazoprovod/bmk_icon_12.png">
                    <p class="logic__text svelte-rgyqg6">Оформление исполнительной, сдача надзорным органам</p>
                </div>
                <div class="hiden3">
                    <img alt="" class="" src="/images/interGazoprovod/strelka2.svg">
                </div>
                <div class="column logic__item svelte-rgyqg6">
                    <img alt="" class="logic__icon svelte-rgyqg6 mb-3" src="/images/interGazoprovod/bmk_icon_13.png">
                    <p class="logic__text svelte-rgyqg6">ПНР и ввод в эксплуатацию</p>
                </div>
            </div>
        </div>
    </section>

    <section class="section py-6 project">
        <div class="container text-center">

            <div class="title titlefor has-text-centered ">
                <h2 class="">Выполенные объекты</h2>
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
    </section>


    <section class="section vramku-columns-y">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-6 vramku-column">
                    <img src="/images/interGazoprovod/wp_gazoprovod2.jpg"/>
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

