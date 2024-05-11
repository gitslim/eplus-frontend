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

 let title = 'Индивидуальные и центральные тепловые пункты'

    onMount(async () => {

        let right = document.getElementsByClassName('right');
        for(var i = 0; i < right.length; i++) {
            right[i].style.right = '0.8vw';
            right[i].style.cursor = 'pointer';
        }
        if (document.documentElement.clientWidth < 500) {
        }

        let left = document.getElementsByClassName('left');
        for(var i = 0; i < left.length; i++) {
            left[i].style.left = '';
            left[i].style.left = '0.2vw';
            left[i].style.cursor = 'pointer';
        }

        //Скрипт активной панели START ********
        let shema = document.querySelector('svg');
        let svg_s_overlay = document.querySelector('.svg_s_overlay');
        let karta = document.querySelectorAll('.circle_svg');
        let tx = document.querySelector('.te');
        let svg_i_block = document.querySelector('.modelITP__svg_i_block');
        let svg_i_block_img = document.querySelector('.svg_i_block_img');
        let svg_i_block_h3 = document.querySelector('.svg_i_block_h3');
        let svg_i_block_p = document.querySelector('.svg_i_block_p');
        let svg_i_close = document.querySelector('.svg_i_close');
        let svg_i_prev = document.querySelector('.svg_i_prev');
        let svg_i_next = document.querySelector('.svg_i_next');
        let svg_s_text = document.querySelector('.svg_s_text');

        let block_in = [
          {
            img: '/images/itc_ctp/shema/itp_6.jpg',
            head: 'Модуль ввода и учета тепла',
            text: '<p class="svg_i_block_p-p">Основное назначение модуля ввода и учета тепла - учет тепловой энергии, которую потребитель забрал на свои нужды. Также он, как правило, комплектуется регуляторами перепада давления для Кроме того, модуль отвечает за поддержание заданных параметров по давлению в обратной ветке теплосети.</p><p>Сам модуль ввода и учёта тепла конструктивно достаточно прост: запорная арматура (как правило - в виде шаровых кранов), по две на каждую линию; фильтры и контрольно-измерительные приборы (термометры и монометры). Также модуль в своём составе имеет фильтры на каждой линии и КИП - термометры и манометры, установленные через кран и импульсную трубку.</p><p>В состав модуля обязательно входит система учёта тепла — это преобразователи расхода, вычислители количества теплоты, блоки управления и расчета, а также требуемые датчики давления и температуры.</p>',
          },
          {
            img: '/images/itc_ctp/shema/itp_4.jpg',
            head: 'Модуль горячего водоснабжения',
            text: '<p>Основная функция - обеспечение потребителей горячей водой, поддержание заданной температуры при изменяющемся расходе.</p><p>Модуль состоит из теплообменника, запорной арматуры, двухходового клапана для регулирования расхода теплоносителя на теплообменник, насосов и контрольно-измерительных приборов.</p>',
          },
          {
            img: '/images/itc_ctp/shema/itp_5.jpg',
            head: 'Модуль подпитки',
            text: '<p>Если к тепловому пункту необходимо подключить и систему вентиляции, то он оснащается еще одним пластинчатым теплообменником - это и есть модуль подпитки. Контур вентиляции подключается аналогично отопительному с добавлением необходимых контрольно-измерительных приборов.</p>',
          },
          {
            img: '/images/itc_ctp/shema/itp_2.jpg',
            head: 'Модуль отопления',
            text: '<p>Предназначен для подключения системы отопления здания к теплосети. Регулирование качества теплоносителя обеспечивается c помощью регулирующего клапана. Использование датчика наружного воздуха позволяет осуществлять погодозависимое регулирование: температура теплоносителя зависит от температуры наружного воздуха, что обеспечивает значительную экономию тепловой энергии.</p>',
          },
          {
            img: '/images/itc_ctp/shema/itp_7.jpg',
            head: 'Модуль компенсации температурных расширений',
            text: '<p>Предназначен для поддержания заданных эксплуатационных показателей. А именно, для компенсации температурного расширения теплоносителя в закрытых (изолированных от атмосферы) водяных системах.</p>',
          },
        ];

        [].forEach.call(karta, function (el) {
          //вешаем событие
          el.onclick = function (e) {
            svg_s_overlay.classList.add('active');

            karta.forEach((i) => {
              if (i.classList.contains('active')) {
                i.classList.remove('active');
              }
            });

            el.classList.add('active');
            svg_i_block.classList.add('active');
            if (el.dataset.id == 'data1') {
              svg_i_block_add(0);
            } else if (el.dataset.id == 'data2') {
              svg_i_block_add(1);
            } else if (el.dataset.id == 'data3') {
              svg_i_block_add(2);
            } else if (el.dataset.id == 'data4') {
              svg_i_block_add(3);
            } else if (el.dataset.id == 'data5') {
              svg_i_block_add(4);
              
            }
          };

          el.onmouseenter = function (e) {
            karta.forEach((i) => {
              if (i.classList.contains('active')) {
                if (el != karta[i]) {
                  karta[i].classList.remove('active');
                  el.classList.add('active');
                }
              }
            });

            if (el.dataset.id == 'data1') {
              svg_i_block_add(0);
            } else if (el.dataset.id == 'data2') {
              svg_i_block_add(1);
            } else if (el.dataset.id == 'data3') {
              svg_i_block_add(2);
            } else if (el.dataset.id == 'data4') {
              svg_i_block_add(3);
            } else if (el.dataset.id == 'data5') {
              svg_i_block_add(4);
            }
            svg_s_text.style.visibility = 'visible';
            svg_s_overlay.classList.add('active');
          };

          el.onmouseleave = function () {
            let z=0;
            karta.forEach((i) => {
              if (i.classList.contains('active')) {
                z=1;
                if (el != karta[i]) {
                  svg_s_text.style.visibility = 'visible';
                  svg_s_overlay.classList.add('active');
                } else {
                  svg_s_text.style.visibility = 'hidden';
                  
                }
              } else if (z==0) {
                svg_s_overlay.classList.remove('active');
                svg_s_text.style.visibility = 'hidden';
              } else if (z==1) {
                svg_s_overlay.classList.add('active');
              }
            });
          };
        });

        svg_i_next.onclick = () => {
          let k;
          karta.forEach((i) => {
            if (i.classList.contains('active')) {
              if (i.dataset.id == 'data1') {
                svg_i_block_add(1);
                k = 1;
              } else if (i.dataset.id == 'data2') {
                svg_i_block_add(2);
                k = 2;
            } else if (i.dataset.id == 'data3') {
                svg_i_block_add(3);
                k = 3;
            } else if (i.dataset.id == 'data4') {
                svg_i_block_add(4);
                k = 4;
              } else if (i.dataset.id == 'data5') {
                svg_i_block_add(0);
                k = 0;
              }
              i.classList.remove('active');
            }
          });
          karta[k++].classList.add('active');
        };

        svg_i_prev.onclick = () => {
          let k;
          karta.forEach((i) => {
            if (i.classList.contains('active')) {
              if (i.dataset.id == 'data1') {
                svg_i_block_add(4);
                k = 4;
              } else if (i.dataset.id == 'data2') {
                svg_i_block_add(0);
                k = 0;
            } else if (i.dataset.id == 'data3') {
                svg_i_block_add(1);
                k = 1;
            } else if (i.dataset.id == 'data4') {
                svg_i_block_add(2);
                k = 2;
              } else if (i.dataset.id == 'data5') {
                svg_i_block_add(3);
                k = 3;
              }
              i.classList.remove('active');
            }
          });
          karta[k--].classList.add('active');
        };


        svg_s_overlay.onclick = close_svg_i;
        svg_i_close.onclick = close_svg_i;

        function svg_i_block_add(i) {
          svg_i_block_img.src = block_in[i].img;
          svg_i_block_h3.innerHTML = block_in[i].head;
          svg_i_block_p.innerHTML = block_in[i].text;
          svg_s_text.innerHTML = block_in[i].head;
            svg_s_text.style.left = karta[i].getBoundingClientRect().left - 90 + 'px';
          svg_s_text.style.top = karta[i].getBoundingClientRect().top + 30 + 'px';
          svg_s_text.style.visibility = 'visible';
         }

        function close_svg_i() {
          svg_s_overlay.classList.remove('active');
          svg_i_block.classList.remove('active');
          karta.forEach((i) => {
            i.classList.remove('active');
          });
          svg_s_text.style.visibility = 'hidden';
        }
        //Скрипт активной панели END ********
    })
</script>

<svelte:head>
    <meta name="description" content="ИНДИВИДУАЛЬНЫЕ И ЦЕНТРАЛЬНЫЕ ТЕПЛОВЫЕ ПУНКТЫ (ИТП И ЦТП). Обследование тепловых пунктов, Получение ТУ в ПАО «МОЭК», Проектирование ИТП, ЦТП, тепловых сетей, Согласование ПД в ПАО «МОЭК», Поставка оборудования и комплектация материалами, Монтажные работы, Пуско-наладочные работы, Сдача объекта в ПАО «МОЭК», Ростехнадзор.">
    <meta property="og:locale" content="ru_RU">
    <meta property="og:type" content="article">
    <meta property="og:title" content={title}>
    <meta property="og:description" content="ИНДИВИДУАЛЬНЫЕ И ЦЕНТРАЛЬНЫЕ ТЕПЛОВЫЕ ПУНКТЫ (ИТП И ЦТП). Обследование тепловых пунктов, Получение ТУ в ПАО «МОЭК», Проектирование ИТП, ЦТП, тепловых сетей, Согласование ПД в ПАО «МОЭК», Поставка оборудования и комплектация материалами, Монтажные работы, Пуско-наладочные работы, Сдача объекта в ПАО «МОЭК», Ростехнадзор.">
    <meta property="og:url" content="https://xn--c1adkmgpem4hrai.xn--p1ai/page/individualnye-i-centralnye-teplovye-punkty">
    <meta property="og:site_name" content="ООО Энергия Плюс">
    <meta property="og:image" content="https://xn--c1adkmgpem4hrai.xn--p1ai/images/itc_ctp/teplovoy_punkt-og.png">
    <meta property="og:image:secure_url" content="https://xn--c1adkmgpem4hrai.xn--p1ai/images/itc_ctp/teplovoy_punkt-og.png">
    <meta property="og:image:width" content="800">
    <meta property="og:image:height" content="533">
    <meta property="og:image:alt" content="Тепловой пункт">
    <meta property="og:image:type" content="image/png">
</svelte:head>

<style lang="scss">

    .section {
        margin: 50px 20px;
        @media (max-width: 420px) {
            margin: 30px 10px;
        }
    }

    .hero {
        &.hero1{
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: multiply;
        background-image: url(/images/itc_ctp/itc_main.png),
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
            @media (max-width: 420px) {
                top: -25px;
        }
    }
    
    .text-center .titlefor:before{
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);      
    }

    h1 {
        font-size: 60px;
        max-width: 900px;
        @media (max-width: 868px) {
            font-size: 50px;
        }
        @media (max-width: 535px) {
            font-size: 40px;
        }
        @media (max-width: 450px) {
            font-size: 30px;
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
            font-size: 25px;
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
            line-height: 1.3em;
            border-radius: 30px;
            max-width: 320px;
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
    }

    /**************************/
    /*Стиль текста карусели НАШИ ПРОЕКТЫ - start*/
    .project {
        background: #ededed;
        margin-bottom: 70px;
        @media (max-width: 450px) {
            margin: 30px 0;
        }

        h2 {
            @media (max-width: 450px) {
            margin: 20px 10px;
            }
        }
    }

    .control {
        font-size: 2rem;
    }

    .slide-content {
        padding: 0 10px;
    }
    /*Стиль текста карусели НАШИ ПРОЕКТЫ - end*/
    /*******************************/

    .section2 {
        margin-bottom: 0;
        &__text {
            font-size: 1.3em;
            line-height: 1.5em;
            span {
                color: #f60;
                font-weight: 650;
            }
        }
        &__icon {
            height: 100px;
            ~p {
                font-size: 1.1em;
                line-height: 1.3em;
            }
        }
    }

    //Стиль активной панели START*****
    .modelITP {
        background: #ededed;
        h2 {
            position: relative;
            top: 80px;
        }
        .titlefor::before {
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%); 
        }

        &__shema {
            position: relative;
            overflow:hidden;
            svg{
                width: 100%;
                height: auto;
                max-height: 85vh;
                overflow: visible;
            }
        }
        &__svg_i_block {
            position: absolute;
            top:0;
            right: -250px;
            visibility: hidden;
            float: right;
            width: 25%;
            height: 100%;
            background-color: rgb(255, 255, 255);
            transition: all 0.3s ease-out;
                @media (max-width: 768px) {
                    width: 35%;
                }
        }
    }

    .svg_s_overlay {
    opacity: 0;
    fill: black;
    transition: 1s;
        &:global(.active) {
            opacity: 0.5;
        }
    }

    .svg_s_text {
    position: fixed;
    font-size: 1.4em;
    color: white;
    font-weight: 600;
    width: 200px;
    line-height: 1.2em;
    text-align: center;
        @media (max-width: 768px) {
            font-size: 1em;
            width: 150px;
        }
    }

    .circle_svg {
    fill: rgb(255, 130, 28);
    stroke: white;
    stroke-width: 7px;
        @media (max-width: 768px) {
            r: 20;
            stroke-width: 14px;
        }
    }

    .circle_svg:global(.active) {
    fill: rgb(70, 70, 70);
    }
    .circle_svg:hover {
    cursor: pointer;
    }

    .shadows circle {
    fill: white;
    opacity: 0.5;
    animation: polet 2s ease-in-out infinite;
        @media (max-width: 768px) {
            animation: polet2 2s ease-in-out infinite;
        }
    }

    .svg_i_close {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 15px;
    height: 15px;
    cursor: pointer;
        @media (max-width: 768px) {
            width: 10px;
            height: 10px;
        }
    }

    .svg_i_close:after,
    .svg_i_close:before {
    content: '';
    display: block;
    width: 21px;
    height: 1px;
    position: absolute;
    left: 0;
    top: 0;
    background: #adacac;
    -webkit-transform-origin: left;
    -ms-transform-origin: left;
    -o-transform-origin: left;
    transform-origin: left;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
        @media (max-width: 768px) {
                width: 15px;
            }
    }

    .svg_i_close:after {
    left: unset;
    right: 0;
    -webkit-transform-origin: right;
    -ms-transform-origin: right;
    -o-transform-origin: right;
    transform-origin: right;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    }

    .svg_i_close:hover {
        transform: scale(1.1);
        &::after,
        &::before {
            background: #000;
        }
    }

    .svg_i_full {
    padding: 20px;
        @media (max-width: 768px) {
            padding: 5px;
        }
    }

    .svg_i_block_img {
    width: 100%;
    max-height: 31vh;
    margin: 0 auto;
    display: block;
    }

    .svg_i_control {
        position: relative;
    }

    .svg_i_block_h3 {
    text-align: center;
    line-height: 1.3em;
    margin: 40px 0;
    padding: 20px 0;
    border-top: 0.0625rem solid #ff821c;
    border-bottom: 0.0625rem solid #ff821c;
        @media (max-width: 768px) {
            margin: 10px 0 0 0;
            padding: 5px 0;
            font-size: 1em;
        }
    }

    .svg_i_block_p {
        position: absolute;
        height: 40%;
        overflow-y: auto;
        padding-right: 20px;
        line-height: 1.5em;
        :global(p) {
            margin-bottom: 1.2em;
        }
        @media (max-width: 768px) {
            
        }
        @media (max-width: 620px) {
            display: none;
        }
        
    }

    .svg_i_prev {
    background: url(/images/itc_ctp/shema/prev.png);
    height: 30px;
    width: 15px;
    padding: 0;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    border: 0;
    font-size: 0;
    position: absolute;
    left: 10px;
    outline: 0;
    cursor: pointer;
        @media (max-width: 768px) {
            width: 6px;
            height: 12px;
            top: -15px
        }
    }

    .svg_i_next {
    background: url(/images/itc_ctp/shema/next.png);
    height: 30px;
    width: 15px;
    padding: 0;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    border: 0;
    font-size: 0;
    position: absolute;
    right: 10px;
    outline: 0;
    cursor: pointer;
        @media (max-width: 768px) {
            width: 6px;
            height: 12px;
            top: -15px
        }
    }

    .svg_i_prev:hover,.svg_i_next:hover{
        transform: scale(1.1);
    }

    .modelITP__svg_i_block:global(.active) {
        visibility: visible;
        right: 0;
    }

    @keyframes polet {
        0% {
            r: 10;
        }
        70% {
            r: 20;
        }
        100% {
            r: 10;
        }
    }

    @keyframes polet2{
        0% {
            r: 20;
        }
        70% {
            r: 40;
        }
        100% {
            r: 20;
        }
    }
//Стиль активной панели END*****

    .section3 {
        padding: 30px 10%;
        margin-bottom: 60px;
        background-color: #ffebcd;
        p {
            font-size: 1.3em;
            line-height: 1.2em;
            font-weight: 500;
            text-align: center;
            span {
                color:#f60;
                font-weight: 650;
            }
        }
    }

    .section4 {
        margin-bottom: 50px;
        &__column1 {
            padding-left: 3rem;
            @media (max-width: 1280px) {
                padding-left: 0.75rem;
            }
        }


    }

    .section5 {
        .container {
            max-width: 800px;
            .content {
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                align-items: center;
                gap: 30px;
            }

        }
    }

    .section6 {
        margin-bottom: 60px;
        h2 {
            max-width: 900px;
            margin: 0 auto;
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
            @media screen and (max-width: 1023px) {
                display: none;
            }
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

        .logic__icon.svelte-rgyqg6 {
        height: 56px;
        }

        .logic__item.svelte-rgyqg6 {
            position: relative;
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
                @media screen and (max-width: 1023px) {
                    display: none;
                }
        }
        .hiden3 {
                display: none;
                @media screen and (max-width: 1023px) {
                    display: block;
                }
            }
    }

    .spisok1 {
        .spisok1__icon {
            position: relative;
            top: 3px;
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

</style>

<SvelteSeo {title}/>

<main>
    <section class="hero hero1">
        <div class="hero-body">
            <div class="columns">
                <div class="column is-10">
                    <h1 class="has-text-white has-text-weight-normal title titlefor">ИНДИВИДУАЛЬНЫЕ И ЦЕНТРАЛЬНЫЕ ТЕПЛОВЫЕ ПУНКТЫ (ИТП и ЦТП)</h1>                   
                </div>
            </div>
            <div class="columns hero__text">
                <div class="column is-7">
                    <h2 class="block has-text-white has-text-weight-medium has-text-left titleb">ПРОЕКТИРОВАНИЕ, ПОСТАВКА,
                        МОНТАЖ, НАЛАДКА
                         </h2>
                </div>
            </div>
            <div class="button3">
                <ContactFormButton>
                    <div slot="button">Заказать консультацию</div>
                </ContactFormButton>
            </div>
            <div class="subtitle py-6">
                <a rel="external"
                   class="has-text-white"
                   href="tel:+74957907697">
                    <Icon icon={faPhone}/>
                        <span class="callibri_phone">+7 (495) 790-76-97</span>
                </a>
            </div>
        </div>
    </section>

    <section class="section section2">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-half">
                    <p class="has-text-weight-medium has-text-justified section2__text">
                        <span>Тепловой пункт</span> - это узел подключения потребителей тепловой энергии к тепловым сетям, предназначенный для подготовки теплоносителя, 
                        регулирования его параметров перед подачей в местные системы, а также для учета потребления тепла
                    <p>
                        <h3 class="has-text-weight-bold has-text-centered pt-4">ВИДЫ СТРОИТЕЛЬСТВА</h3>
                        <div class="columns is-align-items-stretch has-text-centered pt-2 has-text-weight-medium">
                            <div class="column">
                                <img class="section2__icon" alt="" src="/images/itc_ctp/i_techpere_c.png">
                                <p>Техническое присоединение</p>
                            </div>
                            <div class="column">
                                <img class="section2__icon" alt="" src="/images/itc_ctp/i_rekonstrukt_c2.png">
                                <p>Реконструкция</p>
                            </div>
                            <div class="column">
                                <img class="section2__icon" alt="" src="/images/itc_ctp/i_tehras_c.png">
                                <p>Техническое перевооружение</p>
                            </div>
                        </div>
                </div>
                <div class="column is-half">
                    <img class="spisok1_img" alt="" src="/images/itc_ctp/teplovoy_punkt.png">
                    
                </div> 
        </div>        
        </div>
    </section>


    <section class="modelITP">
        <h2 class="title titlefor has-text-centered has-text-weight-bold mb-2">
            Схема ИТП
        </h2>
            <div class="modelITP__shema">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="1920px" height="1080px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 1920 1080">
                <g>
                <image x="0" y="0" width="1920" height="1080" xlink:href="/images/itc_ctp/shema/itp_bg.png"></image>
                </g>
                <rect height="1080" class="svg_s_overlay" width="10000" x="-5000"></rect>
                <g>
                  <g class="shadows">
                    <circle r="10" cx="410" cy="470" />
                    <circle r="10" cx="970" cy="730" />
                    <circle r="10" cx="1160.17" cy="730" />
                    <circle r="10" cx="1368.37" cy="670" />
                    <circle r="10" cx="1681.49" cy="718.434" />
                  </g>
                  <circle class="circle_svg" data-id="data1" r="10" cx="410" cy="470" />
                  <circle class="circle_svg" data-id="data2" r="10" cx="970" cy="730" />
                  <circle class="circle_svg" data-id="data3" r="10" cx="1160.17" cy="730" />
                  <circle class="circle_svg" data-id="data4" r="10" cx="1368.37" cy="670" />
                  <circle class="circle_svg" data-id="data5" r="10" cx="1681.49" cy="718.434" />
                </g>
              </svg>
              <div class="svg_s_text">kz kz kz</div>
    
              <div class="modelITP__svg_i_block">
                <div class="svg_i_close"></div>
                <div class="svg_i_full">
                  <img class="svg_i_block_img" />
                  <div class="svg_i_control">
                    <div class="svg_i_prev"></div>
                    <div class="svg_i_next"></div>
                  </div>
                  <h3 class="svg_i_block_h3"></h3>
                    <div class="svg_i_block_p"></div>
                </div>
                <div class="te"></div>
              </div>
            </div>

    </section>


    <section class="section3"> 
        <p>
            Компания <span>«Энергия Плюс»</span> является партером ПАО «МОЭК» и имеет все необходимые допуски к работе 
            с опасными производственными объектами (ОПО) по этому мы успешно работаем, в том числе, 
            с оборудованием, работающим под давлением и с теплоносителями в тепловых пунктах температурой свыше 115<sup>o</sup>С.
        </p>
    </section>


    <section class=" section section4">
        <div class="container pt-3 text-center spisok1">
            <h2 class="title titlefor has-text-centered has-text-weight-bold mb-2">
                НАШИ УСЛУГИ
            </h2>
            <div class="content">
                <div class="columns is-vcentered">
                    <div class="column is-half section4__column1">                
                        <ul class="has-text-weight-medium">                       
                            <li>
                                <div>
                                    <img class="spisok1__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        Обследование тепловых пунктов
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img class="spisok1__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        Получение ТУ в ПАО «МОЭК»
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img class="spisok1__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        Проектирование ИТП, ЦТП, тепловых сетей
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img class="spisok1__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        Согласование ПД в ПАО «МОЭК»
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img class="spisok1__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        Поставка оборудования и комплектация материалами
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img class="spisok1__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        Монтажные работы
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img class="spisok1__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        Пуско-наладочные работы
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img class="spisok1__icon" alt="" src="/images/kotel/icons/bmk_check_006.png">
                                </div>
                                <div class="pl-3">
                                    <p>
                                        Сдача объекта в ПАО «МОЭК», Ростехнадзор
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="column is-half">
                        <img class="" alt="" src="/images/itc_ctp/uslugi_itc.png">
                    </div>                   
                </div>
                <div class="button3 is-justify-content-center">
                    <ContactFormButton class="">
                        <div slot="button">Заказать ИПТ / ИТЦ</div>
                    </ContactFormButton>
                </div>
            </div>                
        </div>
    </section>


    <section class="section py-6 project">
        <div class="container text-center">
            <div class="title titlefor has-text-centered">
                <h2 class="has-text-weight-bold mt-4 mb-2">Реализованные проекты</h2>
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
                                    src={'/images/itc_ctp/plan1.jpg'}
                                    alt={'Проект 1'}/>                          
                        </figure>
                    </Lightbox>
                </div>
                <div class="slide-content proect-carousel-item">
                    <Lightbox   noScroll="false"
                                modalClasses = "pipu">
                        <figure class="image">
                            <LazyImage
                                    src={'/images/itc_ctp/plan2.jpg'}
                                    alt={'Проект 2'}/>
                        </figure>
                    </Lightbox>
                </div>
                <div class="slide-content proect-carousel-item">
                    <Lightbox   noScroll="false"
                                modalClasses = "pipu">
                        <figure class="image">
                            <LazyImage
                                    src={'/images/itc_ctp/plan3.jpg'}
                                    alt={'Проект 3'}/>
                        </figure>
                    </Lightbox>
                </div>
                <div class="slide-content proect-carousel-item">
                    <Lightbox   noScroll="false"
                                modalClasses = "pipu">
                        <figure class="image">
                            <LazyImage
                                    src={'/images/itc_ctp/plan4.jpg'}
                                    alt={'Проект 4'}/>
                        </figure>
                    </Lightbox>
                </div>              
                <div class="slide-content proect-carousel-item">
                    <Lightbox   noScroll="false"
                                modalClasses = "pipu">
                        <figure class="image">
                            <LazyImage
                                    src={'/images/itc_ctp/plan5.jpg'}
                                    alt={'Проект 6'}/>
                        </figure>
                    </Lightbox>
                </div>
                <div class="slide-content proect-carousel-item">
                    <Lightbox   noScroll="false"
                                modalClasses = "pipu">
                        <figure class="image">
                            <LazyImage
                                    src={'/images/itc_ctp/plan6.jpg'}
                                    alt={'Проект 7'}/>
                        </figure>
                    </Lightbox>
                </div>
                <div class="slide-content proect-carousel-item">
                    <Lightbox   noScroll="false"
                                modalClasses = "pipu">
                        <figure class="image">
                            <LazyImage
                                    src={'/images/itc_ctp/plan7.jpg'}
                                    alt={'Проект 8'}/>
                        </figure>
                    </Lightbox>
                </div>
                <div class="slide-content proect-carousel-item">
                    <Lightbox   noScroll="false"
                                modalClasses = "pipu">
                        <figure class="image">
                            <LazyImage
                                    src={'/images/itc_ctp/plan8.jpg'}
                                    alt={'Проект 9'}/>
                        </figure>
                    </Lightbox>
                </div>
                <span class="control" slot="right-control">
                            <Icon icon={faChevronRight}/>
                </span>
            </Carousel>
        </div>
    </section>


    <section class="section5">
        <div class="container pt-3 text-center spisok1">
            <div class="content">
                <img class="" alt="" src="/images/itc_ctp/difference.jpg">
                <div class="button3 is-justify-content-center py-4">
                    <ContactFormButton class="">
                        <div slot="button">Заказать звонок</div>
                    </ContactFormButton>
                </div>
            </div>                
        </div>
    </section>


    <section class="section has-text-centered section6">
        <div class="container pt-4 text-center">
            <div class="title titlefor">
                <h2 class="has-text-weight-bold">ЭТАПЫ РАБОТ</h2>
            </div>
            <div class="columns is-desktop ">
                <div class="column logic__item svelte-rgyqg6">
                    <img alt="" class="logic__icon svelte-rgyqg6 mb-3" src="/images/itc_ctp/i_poisk.png">
                    <p class="logic__text svelte-rgyqg6">Обследование объекта. Расчет нагрузок</p>
                </div>
                <div class="hiden3">
                    <img alt="" class="" src="/images/interGazoprovod/strelka2.svg">
                </div>
                <div class="column logic__item svelte-rgyqg6">
                    <img alt="" class="logic__icon svelte-rgyqg6 mb-3" src="/images/kotel/icons/bmk_icon_04.png">
                    <p class="logic__text svelte-rgyqg6">Разработка технического задания</p>
                </div>
                <div class="hiden3">
                    <img alt="" class="" src="/images/interGazoprovod/strelka2.svg">
                </div>
                <div class="column logic__item svelte-rgyqg6">
                    <img alt="" class="logic__icon svelte-rgyqg6 mb-3" src="/images/kotel/icons/bmk_icon_02.png">
                    <p class="logic__text svelte-rgyqg6">Получение технических условий ресурсоснабжающих организаций</p>
                </div>
            </div>

            <div class="line_item" style="width: 67%;"></div>

            <div class="hiden3 pb-2">
                <img alt="" class="" src="/images/interGazoprovod/strelka2.svg">
            </div>

            <div class="columns is-desktop">
                <div class="column logic__item svelte-rgyqg6">
                    <img alt="" class="logic__icon svelte-rgyqg6 mb-3" src="/images/itc_ctp/bmk_icon_05-3.png">
                    <p class="logic__text svelte-rgyqg6">Разработка проектной документации</p>
                </div>
                <div class="hiden3">
                    <img alt="" class="" src="/images/interGazoprovod/strelka2.svg">
                </div>
                <div class="column logic__item svelte-rgyqg6">
                    <img alt="" class="logic__icon svelte-rgyqg6 mb-3" src="/images/itc_ctp/bmk_icon_09-2.png">
                    <p class="logic__text svelte-rgyqg6">Согласование проектной документации в ресурсоснабжающих организациях</p>
                </div>
                <div class="hiden3">
                    <img alt="" class="" src="/images/interGazoprovod/strelka2.svg">
                </div>
                <div class="column logic__item svelte-rgyqg6">
                    <img alt="" class="logic__icon svelte-rgyqg6 mb-3" src="/images/itc_ctp/i_bezopasnost.png">
                    <p class="logic__text svelte-rgyqg6">Экспертиза промышленной безопасности c регистрацией в Ростехнадзор (при необходимости)</p>
                </div>
            </div>
        </div>
        <div align="center" class="pt-5">
            <a class="button is-primary is-medium is-raunded" href="/page/referens-list">Наши проекты</a>
        </div>
    </section>


    <section class="section grafik">
        <div class="container text-center">
            <div class="title titlefor has-text-centered">
                <h2 class="has-text-weight-bold mb-2">РАСЧЕТ ЭКОНОМИИ В ЦИФРАХ</h2>
            </div>
            <div class="columns is-vcentered">
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
                                <img class="blockGrafik__img" alt="график СМР" src="/images/smr/grafikSMR.svg">
                            </div>
                        </div>
                    </div>
                    <div>
                        <p class="blockGrafik__footer"> Итоговая экономия:</p>
                        <p class="blockGrafik__footerNumber">38%</p>
                    </div>                
                </div>
                <div class="column textGrafik">
                    <div class="block">
                        <p><span class="textGrafik__lid">Поставка оборудования:</span> ООО "Энергия Плюс" имеет широкий спектр компаний-производителей оборудования для тепловых пунктов, 
                            готовых предоставить продукцию с максимальными скидками
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
                        <p><b>ЭКОНОМИЯ:</b> 10% за счет наших компетенций</p>
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
</main>