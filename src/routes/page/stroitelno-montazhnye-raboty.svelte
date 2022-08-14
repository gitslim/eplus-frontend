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

 let title = 'Строительно-монтажные работы'

    onMount(async () => {

        let buttonraunded = document.getElementsByClassName('button-raunded');
        for(var i = 0; i < buttonraunded.length; i++) {
            buttonraunded[i].style.borderRadius = '30px';
            buttonraunded[i].style.lineHeight = '1em';
        }
        buttonraunded[1].style.height = '100px';
        buttonraunded[1].style.borderRadius = '50px';
        buttonraunded[1].style.minWidth = '50px';
        buttonraunded[1].style.whiteSpace = 'normal';

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
</script>


<style lang="scss">

    .section {
        margin: 50px 20px;
        @media (max-width: 420px) {
            margin: 30px 10px;
        }
    }

    .hero1{
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

    /**************************/
    /*Стиль текста карусели НАШИ ПРОЕКТЫ - start*/
    .project {
        background: #ededed;
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

    .shtora {
        opacity: 0;
        position: absolute;
        background: rgba(0, 0, 0, 0.7);
        width: 100%;
        height: 100%;
    }

    .image:hover .shtora {
        opacity: 1;
        transition: 0.8s;
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

    .spisok1 {
        .spisok1__icon {
            position: relative;
            top: 3px;
        }
        .spisok1_img {
            border: 15px solid #cbcbcb;
            height: 100%;
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
        &__footer {
            background-color: #ffebcd;
            padding: 25px 0;
            .vstavka {
                padding: 0 20px;
                max-width: 700px;
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
        .columns {
            text-align: center;
        }
        &__image {
            width: 150px;
            height: 150px;
            border: 3px solid #f60;
            border-radius: 50%;            
        }
        &__text {
            font-weight: 500;
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
                line-height: 1.5em;
                font-weight: 700;
                text-transform: uppercase;
            }

            :nth-child(2) {
                line-height: 1.5em;
                font-weight: 600;                
            }
        }
    }


</style>

<SvelteSeo {title}/>

<main>
    <section class="hero is-small hero1">
        <div class="hero-body">
            <div class="columns">
                <div class="column is-7">
                    <h1 class="has-text-white has-text-weight-medium title titlefor">Строительно-монтажные работы</h1>
                    <h2 class="block has-text-white has-text-weight-medium has-text-justified titleb">ООО «Энергия Плюс» выполняет полный комплекс строительства систем газо- 
                        и теплоснабжения для объектов ЖКХ, промышленного и социально-культурного назначения, в т.ч. внутренние и наружные газопроводы, котельные, 
                        мини-ТЭС, ЦТП, Индивидуальные тепловые пункты. </h2>
                    <ContactFormButton class="button is-primary is-large is-raunded button-raunded">
                        <div slot="button">Заказать услугу СМР</div>
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
        <div class="container pt-3 text-center spisok1">
            <h2 class="title titlefor has-text-centered has-text-weight-bold mb-2">
                Строительно-монтажные работы (СМР) включают в себя:
            </h2>
            <div class="content">
                <div class="columns is-vcentered">
                    <div class="column is-half">
                
                        <ul class="has-text-weight-medium">
                       
                            <li>
                                <div>
                                    <img class="spisok1__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        Оформление разрешительной документации (разрешение на строительство, ордер на земляные работы, договора на строительный, 
                                        технический и авторский надзоры и пр.)
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img class="spisok1__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        Комплектация и поставка оборудования, материалов в соответствии с заказной спецификацией проекта.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img class="spisok1__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        Монтаж наружных и внутренних инженерных систем (тепломеханика, дымоудаление, отопление, вентиляция, водоснабжение, 
                                        канализование, электрика, автоматика, сигнализация) для объектов генерации тепла/электричества.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img class="spisok1__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        Проведение испытаний и пуско-наладочных работ.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img class="spisok1__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        Оформление исполнительной документации.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img class="spisok1__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        Сдача работ надзорным органам.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="column is-half">
                        <img class="spisok1_img" alt="" src="/images/smr/foto-smr1.jpg">
                    </div>
                   
                </div>
            </div>
                
        </div>
    </section>

    <section class="section py-6 project">
        <div class="container text-center">

            <div class="title titlefor has-text-centered">
                <h2 class="has-text-weight-bold mb-2">Реализованные проекты</h2>
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
                            <div class="shtora"></div>
                            <LazyImage
                                    src={'/images/interGazoprovod/projects/01.jpg'}
                                    alt={'Проект 1'}/>
                            <span class="item-content-2">
                                <strong class="item-title">Проект 1</strong>
                            </span>
                        </figure>
                    </Lightbox>
                </div>
                <div class="slide-content proect-carousel-item">
                    <Lightbox   noScroll="false"
                                modalClasses = "pipu">
                        <figure class="image">
                            <div class="shtora"></div>
                            <LazyImage
                                    src={'/images/interGazoprovod/projects/02.jpg'}
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
                            <div class="shtora"></div>
                            <LazyImage
                                    src={'/images/kotel/projects/04.jpg'}
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
                            <div class="shtora"></div>
                            <LazyImage
                                    src={'/images/interGazoprovod/projects/04.jpg'}
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
                            <div class="shtora"></div>
                            <LazyImage
                                    src={'/images/interGazoprovod/projects/05.jpg'}
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
                            <div class="shtora"></div>
                            <LazyImage
                                    src={'/images/kotel/projects/07.jpg'}
                                    alt={'Проект 6'}/>
                <span class="item-content-2">
					<strong class="item-title">Проект 6</strong>
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

    <section class="section">
        <div class="container lister">            
            <div class="columns is-gapless is-centered lister__columns">
                <div class="column is-4 lister__column">
                    <h3>Рассчитать стоимость строительства газопровода можно <a href="/page/kalkulyator-rascheta-stoimosti-gazoprovoda">здесь.</a></h3>
                </div>
                <div class="column is-4 lister__column">
                    <h3>Стоимость СМР для котельной - <a href="/page/kalkulyator-rascheta-stoimosti-kotelnoj">здесь.</a></h3>
                </div>
            </div>
            <p class="lister__text">Комплексный подход к строительству позволяет экономить до 20% от общей стоимости затрат за счет экономии на имеющихся у ООО Энергия Плюс 
                партнерских программах с производителями и поставщиками оборудования, а также позволяет сократить сроки ввода в эксплуатацию за счет 
                отлаженных алгоритмов взаимодействия с надзорными государственными органами.
            </p>
            <div class="is-flex is-justify-content-center lister__footer">
                <p class="vstavka">Еще большей оптимизации стоимости и сроков реализации  ООО «Энергия Плюс» позволяет получить, выполняя 
                    <a href="/page/funkcii-generalnogo-proektirovshika">функции генерального проектировщика</a>  и 
                    <a href="/page/funkcii-tehnicheskogo-zakazchika">функции технического заказчика</a>
                </p>
            </div>
        </div>
    </section>

    <section class="section grafik">
        <div class="container text-center">
            <div class="title titlefor has-text-centered">
                <h2 class="has-text-weight-bold mb-2">Экономика проекта в сравнении</h2>
            </div>
            <div class="columns ">
                <div class="column is-flex blockGrafik">
                    <p class="blockGrafik__head">Стоимость реализации проекта</p>
                    <div class="columns is-vcentered">
                        <div class="column">
                            <ul>
                                <li>
                                    <div class="blockGrafik__grafColor c1"></div>
                                    <div>
                                        <p class="blockGrafik__history">
                                            Оборудование
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div class="blockGrafik__grafColor c2"></div>
                                    <div>
                                        <p class="blockGrafik__history">
                                            ИРД и ПИР
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div class="blockGrafik__grafColor c3"></div>
                                    <div>
                                        <p class="blockGrafik__history">
                                            СМР
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div class="blockGrafik__grafColor c4"></div>
                                    <div>
                                        <p class="blockGrafik__history">
                                            Прочие расходы
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="column">
                            <div>
                                <img class="" alt="график СМР" src="/images/smr/grafikSMR.png">
                                    <p class="column blockGrafik__history2">Энергия Плюс &nbsp; &nbsp; &nbsp; Конкуренты</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p class="blockGrafik__footer"> Итоговая экономия:</p>
                        <p class="blockGrafik__footerNumber">38%</p>
                        <p class="blockGrafik__footer">стоимости договора</p>
                    </div>                
                </div>
                <div class="column textGrafik">
                    <div class="block">
                        <p><span class="textGrafik__lid">Поставка оборудования:</span> ООО "Энергия Плюс" поставляет котельное оборудование "ЗИОСАБ", "RIELLO", "BOSCH", "ASTEBO" по партнерским программам 
                        с производителями
                        </p>
                        <p><b>ЭКОНОМИЯ:</b> 10-15% стоимости оборудования за счет наших наработанных контактов с крупнейшими производителями</p>
                    </div> 
                    <div class="block">
                        <p><span class="textGrafik__lid">Функции технического заказчика, Генерального проектировщика и Генерального подрядчика:</span> собственная ERP-система 
                            (система управления проектом) + инженерным составом узкой и широкой специализации
                        </p>
                        <p><b>ЭКОНОМИЯ:</b> 7-8% средств за счет сокращения сроков выполнения работ</p>
                    </div>
                    <div class="block">
                        <p><span class="textGrafik__lid">Строительно-монтажные работы:</span> собственный департамент строительно-монтажных работ + большой опыт
                        </p>
                        <p><b>ЭКОНОМИЯ:</b> 10% за счет наших компетенция и опыта</p>
                    </div>
                    <div class="block">
                        <p><span class="textGrafik__lid">Прочие издержки:</span> полное соответствие итоговой стоимости работ заявленной в тексте заключенного с заказчиком договора
                        </p>
                        <p><b>ЭКОНОМИЯ:</b> 5% за счет отсутствия неучтенных издержек, которые выявляются в процессе выполнения работ</p>
                    </div>       
                </div>

            </div>
        </div>
    </section>

    <section class="section ">
        <div class="container">
            <div class="container consult">
            <ContactFormButton class="button is-primary is-large is-raunded button-raunded">
                <div slot="button">Остались вопросы? <br>Получите консультацию специалиста </div>
            </ContactFormButton>
        </div>
        </div>
    </section> 

    <section class="section command">
        <div class="container text-center">
            <div class="title titlefor has-text-centered">
                <h2 class="has-text-weight-bold mb-2">Наша команда</h2>
            </div>
            <div class="columns is-multiline is-centered">
                <div class="column is-narrow is-3">
                    <img class="command__image" src="/images/smr/icon-men.png">
                    <p class="command__text">Яблоков</p>
                </div>
                <div class="column is-narrow is-3">
                    <img class="command__image" src="/images/smr/icon-men.png">
                    <p class="command__text">Харитонов</p>
                </div>
                <div class="column is-narrow is-3">
                    <img class="command__image" src="/images/smr/icon-men.png">
                    <p class="command__text">Зайков</p>
                </div>
                <div class="column is-narrow is-3">
                    <img class="command__image" src="/images/smr/icon-men.png">
                    <p class="command__text">ГИП по котельным?</p>
                </div>
            </div>
        </div>
    </section> 
    
    <section class="section plus">
        <div class="container text-center">
            <div class="title titlefor has-text-centered">
                <h2 class="has-text-weight-bold mb-2">Плюсы работы с нами</h2>
            </div>
            <div class="plus__store">
                <div class="plus__block">
                    <div class="plus__image c1">
                        <img class="" src="/images/smr/plus3.png">
                    </div>
                    <div class="plus__text">
                        <p>«Время-деньги»</p>
                        <p>Лучшие условия по срокам исполнения работ</p>
                    </div>
                </div>
                <div class="plus__block">
                    <div class="plus__image c1">
                        <!-- <img class="" src="/images/smr/plus2.png"> -->
                    </div>
                    <div class="plus__text">
                        <p>«Ничего лишнего»</p>
                        <p>Гарантия выполнения ПИР в объеме необходимом для строительства без навязанных и неучтенных работ</p>
                    </div>
                </div>
                <div class="plus__block">
                    <div class="plus__image c1">
                        <img class="" src="/images/smr/plus4.png">
                    </div>
                    <div class="plus__text">
                        <p>«Цена-качество»</p>
                        <p>Лучшее предложение на рынке инжиниринговых услуг</p>
                    </div>
                </div>
                <div class="plus__block">
                    <div class="plus__image c1">
                        <img class="" src="/images/smr/plus2.png">
                    </div>
                    <div class="plus__text">
                        <p>«100% Гарантия»</p>
                        <p>Гарантия получения положительного заключения Мосгосэкспертиза, Мособлэкспертиза, Главгосэкспертиз и пр.</p>
                    </div>
                </div>
                <div class="plus__block">
                    <div class="plus__image c1">
                        <img class="" src="/images/smr/plus1.png">
                    </div>
                    <div class="plus__text">
                        <p>«Снимаем головную боль»</p>
                        <p>Решение технических и юридических вопросов с газоснабжающей организацией</p>
                    </div>
                </div>
                <div class="plus__block">
                    <div class="plus__image c1">
                        <img class="" src="/images/smr/plus5.png">
                    </div>
                    <div class="plus__text">
                        <p>«Работаем как часы»</p>
                        <p>Экономия до 20% от стоимости строительства за счет выверенных действий на каждом этапе подготовительных работ</p>
                    </div>
                </div>
            </div>                       
        </div>
    </section> 
    
    <section class="section ">
        <div class="container">
            <div class="container consult">
            <ContactFormButton class="button is-primary is-large is-raunded button-raunded">
                <div slot="button">Заказать услугу «СМР»</div>
            </ContactFormButton>
        </div>
        </div>
    </section> 
    
</main>