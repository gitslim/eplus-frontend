<script context="module">
  import SvelteSeo from 'svelte-seo'
</script>

<script>
    import {showModal} from '$lib/stores'
    import CalculationBlock from '$lib/components/CalculationBlock.svelte'
    import { onMount } from 'svelte'
    import { browser } from '$app/env'
    // import jQuery from 'jquery'
    // import owlCarousel from 'owl.carousel'
    // import magnificPopup from 'magnific-popup'

    let title = 'Проектирование автономных котельных'

    function handlerClick() {
        showModal.set(true)
        window.ym(54841009, 'reachGoal', 'lidformsiteyagtm')
    }

    // onMount(async () => {
        if (browser)
            window.document.addEventListener("DOMContentLoaded", function (){my(window.jQuery)})
        // my(jQuery)
    // })

    function my($) {
        "use strict";

        // back to top - start
        // --------------------------------------------------
        $(window).scroll(function() {
            if ($(this).scrollTop() > 200) {
                $('#backtotop:hidden').stop(true, true).fadeIn();
            } else {
                $('#backtotop').stop(true, true).fadeOut();
            }
        });
        $(function() {
            $("#scroll").on('click', function() {
                $("html,body").animate({
                    scrollTop: $("#thetop").offset().top
                }, "slow");
                return false
            })
        });
        // back to top - end
        // --------------------------------------------------

        // background image - start
        // --------------------------------------------------
        $('[data-background]').each(function() {
            $(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
        });
        // background image - end
        // --------------------------------------------------

        // collapse sidebar - start
        // --------------------------------------------------
        $(document).ready(function () {
            $('.close-btn, .overlay').on('click', function () {
                $('.sidebar-menu').removeClass('active');
                $('.cart-sidebar').removeClass('active');
                $('.overlay').removeClass('active');
            });

            $('.menu-btn').on('click', function () {
                $('.sidebar-menu').addClass('active');
                $('.overlay').addClass('active');
            });

            $('.cart-btn').on('click', function () {
                $('.cart-sidebar').addClass('active');
                $('.overlay').addClass('active');
            });
        });
        // collapse sidebar - end
        // --------------------------------------------------

        // sticky header - start
        // --------------------------------------------------
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 300) {
                $('.sticky-header').addClass("stuck")
            } else {
                $('.sticky-header').removeClass("stuck")
            }
        });

        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 300) {
                $(".header-section.text-white .brand-logo > a > img").attr("src", "assets/images/logo/logo_1.png");
            } else {
                $(".header-section.text-white .brand-logo > a > img").attr("src", "assets/images/logo/logo_2.png");
            }
        });
        // sticky header - end
        // --------------------------------------------------

        // hanging header - start
        // --------------------------------------------------
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 300) {
                $('.hanging-header').addClass("active")
            } else {
                $('.hanging-header').removeClass("active")
            }
        });
        // hanging header - end
        // --------------------------------------------------

        // secondary header - start
        // --------------------------------------------------
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 300) {
                $('.secondary-header').addClass("active")
            } else {
                $('.secondary-header').removeClass("active")
            }
        });
        // secondary header - end
        // --------------------------------------------------

        // contact form - start
        // --------------------------------------------------
        if($('#contact_form').length){
            $('#contact_form').validate({
                rules: {
                    name: {
                        required: true
                    },
                    email: {
                        required: true
                    },
                    website: {
                        required: true
                    },
                    message: {
                        required: true
                    }
                }
            });
        }
        // contact form - end
        // --------------------------------------------------

        // popup image / video - start
        // --------------------------------------------------
        $('.zoom-gallery').magnificPopup({
            delegate: '.popup-image',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true,
                titleSrc: function(item) {
                    return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">Подробности</a>';
                }
            },
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function(element) {
                    return element.find('img');
                }
            }
        });

        $('.popup-video').magnificPopup({
            // disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
        // popup image / video - end

        // home page sliders - start
        // --------------------------------------------------
        $('#agency-default-carousel').owlCarousel({
            items:1,
            margin:0,
            nav:false,
            loop:true,
            autoplay:true,
            smartSpeed:1000,
            autoplayTimeout:6000,
            autoplayHoverPause:true
        });
        // home page sliders - start
        // --------------------------------------------------

        // partners carousel - start
        // --------------------------------------------------
        $('#partners-carousel').owlCarousel({
            nav:true,
            margin:0,
            loop:true,
            dots:false,
            autoplay:true,
            smartSpeed:1000,
            autoplayTimeout:6000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                380:{
                    items:2
                },
                480:{
                    items:3
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        });
        // partners carousel - end
        // --------------------------------------------------

        // testimonial carousel - start
        // --------------------------------------------------
        $('.testimonial-carousel-1').owlCarousel({
            items:1,
            nav:false,
            loop:true,
            margin:50,
            autoplay:true,
            smartSpeed:1000,
            autoplayTimeout:6000,
            autoplayHoverPause:true
        });
        $('#testimonial-carousel-2').owlCarousel({
            items:1,
            nav:true,
            loop:true,
            margin:30,
            dots:false,
            autoplay:true,
            smartSpeed:1000,
            autoplayTimeout:6000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                767:{
                    items:1
                },
                800:{
                    items:2
                },
                991:{
                    items:2
                },
                1000:{
                    items:2
                }
            }
        });
        // testimonial carousel - end
        // --------------------------------------------------

        // portfolio carousel - start
        // --------------------------------------------------
        $('#portfolio-carousel').owlCarousel({
            nav:true,
            margin:0,
            loop:true,
            dots:false,
            smartSpeed:700,
            responsive:{
                0:{
                    items:1
                },
                380:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                },
                1920:{
                    items:4
                }
            }
        });

        $('#portfolio-carousel-2').owlCarousel({
            nav:true,
            margin:30,
            loop:false,
            dots:false,
            smartSpeed:700,
            responsive:{
                0:{
                    items:1
                },
                550:{
                    items:2
                },
                767:{
                    items:2
                },
                880:{
                    items:3
                },
                1000:{
                    items:3
                },
                1920:{
                    items:3
                }
            }
        });

        $('#portfolio-carousel-3').owlCarousel({
            items:1,
            nav:true,
            margin:0,
            loop:true,
            dots:false,
            autoplay:true,
            smartSpeed:1000,
            autoplayTimeout:6000,
            autoplayHoverPause:true,
        });

        $('#details-image-carousel').owlCarousel({
            items:1,
            margin:0,
            nav:false,
            loop:true,
            autoplay:true,
            smartSpeed:1000,
            // animateIn:'fadeIn',
            autoplayTimeout:6000,
            autoplayHoverPause:true
        });
        // portfolio carousel - end
        // --------------------------------------------------

        // shop carousel - start
        // --------------------------------------------------
        $('#shop-carousel').owlCarousel({
            nav:true,
            margin:0,
            loop:true,
            margin:30,
            dots:false,
            smartSpeed:700,
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                580:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                },
                1920:{
                    items:4
                }
            }
        });
        // shop carousel - end
        // --------------------------------------------------


        // team carousel - start
        // --------------------------------------------------
        $('#team-carousel').owlCarousel({
            nav:true,
            loop:true,
            margin:30,
            dots:false,
            smartSpeed:1000,
            responsive:{
                0:{
                    items:1
                },
                680:{
                    items:2
                },
                767:{
                    items:3
                },
                1000:{
                    items:3
                }
            }
        });
        // team carousel - end
        // --------------------------------------------------


        // property carousel - start
        // --------------------------------------------------
        $('#property-carousel').owlCarousel({
            nav:true,
            margin:30,
            loop:true,
            dots:false,
            autoplay:true,
            smartSpeed:1000,
            autoplayTimeout:6000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                580:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:3
                }
            }
        });
        // property carousel - end
        // --------------------------------------------------

        $(".form").submit(function(){return $.ajax({type:"POST",url:"https://pravoliga.ru/test_05/form.php",data:$(this).serialize()}).done(function(){$(this).find("input").val(""),alert("Спасибо за заявку! Скоро свяжемся."),$(".form").trigger("reset")}),!1});

        $('.check1').on('change', function() {
            $('#checker1, #checker3').toggleClass('show', !!$(this).find(':checked').length);
        });
        $('.check2').on('change', function() {
            $('#checker2, #checker4').toggleClass('show', !!$(this).find(':checked').length);
        });

    }


</script>

<style lang="scss">
  .calculation {
    background-image: url("/images/tehnicheskoePerevooruzhenie/form-bg.jpg");
    text-align: center;
    color: #fff;
    padding: 100px 0 70px;
    background-size: cover;
  }

  :global(.modal-content) {
    background-color: transparent !important;
  }

  :global(body) {
    font-size: 16px !important;
    padding-top: 0 !important;
    line-height: 1.6 !important;
  }
</style>

<SvelteSeo {title}/>

<svelte:head>
    <link href="/land1/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="/land1/assets/css/owl.carousel.min.css" rel="stylesheet" type="text/css">
    <link href="/land1/assets/css/owl.theme.default.min.css" rel="stylesheet" type="text/css">
    <link href="/land1/assets/css/magnific-popup.css" rel="stylesheet" type="text/css">
    <link href="/land1/assets/css/style.css" rel="stylesheet" type="text/css">
    <link href="/land1/assets/css/main.2532584882.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&display=swap" rel="stylesheet">

    <script src="/land1/assets/js/jquery-1.10.1.min.js"></script>
    <script src="/land1/assets/js/bootstrap.min.js"></script>
    <script src="/land1/assets/js/owl.carousel.min.js"></script>
    <script src="/land1/assets/js/magnific-popup.min.js"></script>
<!--    <script src="/land1/assets/js/script.js"></script>-->
</svelte:head>

<div id="thetop"></div>

<main>
    <section class="slider-section agency-default-carousel text-white clearfix"
             data-background="/land1/assets/img/bg/bg_2.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-7">
                    <div class="banner-content">
                        <h3 class="item-title titlefor">
                            Проектирование водогрейных и паровых котельных
                        </h3>
                        <a class="btn" href="#" on:click|preventDefault={handlerClick}>Заказать проект</a>
                    </div>
                    <div class="absolute-social-wrap">
                        <div class="social-links-text ul-li clearfix">
                            <ul class="clearfix">
                                <li><a href="tel:0074957907697">
                                    <svg fill="none" fit="" focusable="false"
                                         height="100%" preserveAspectRatio="xMidYMid meet" stroke="currentColor" viewBox="0 0 24 24"
                                         width="100%" xmlns="http:/www.w3.org/2000/svg">
                                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2"></path>
                                    </svg>
                                    +7 (495) 790-76-97</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-5">
                </div>
            </div>
        </div>
    </section>

    <section class="banner-section agency-creative-banner d-flex align-items-center clearfix">
        <div class="container">
            <div class="row justify-content-lg-start align-items-center justify-content-lg-between">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <img alt="" src="/land1/assets/img/u-bmk-image_01.png">
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="banner-content">
                        <h2 class="title-text mb-30 titlefor">Проектирование промышленных газовых котельных</h2>
                        <p class="mb-60 justify-text">
                            Наша компания выполняет полный комплекс проектно-изыскательских работ и разрабатывает
                            проектную документацию в полном соответствии с ПП РФ №87, начиная с подготовки Задания на
                            проектирование до получения положительного заключения государственной либо негосударственной
                            экспертизы, а также всех необходимых согласований для строительства любого типа котельной.
                        </p>
                        <a class="btn btn-border border-white" href="#" on:click|preventDefault={handlerClick}>Заказать
                            проект</a>
                    </div>
                </div>
            </div>
        </div>
        <svg class="separ03" clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality"
             shape-rendering="geometricPrecision" text-rendering="geometricPrecision" version="1.1"
             viewBox="0 0 6096 1693" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <polygon fill="#353535" points="0,0 6096,1693 0,1693 "/>
    </svg>
    </section>

    <section class="about-section sec-ptb-100 bg-default-gray text-white clearfix">
        <div class="container">
            <div class="row align-items-center justify-content-lg-between justify-content-md-between justify-content-sm-center">
                <div class="col-lg-6 col-md-6 col-sm-7 col-xs-12">
                    <div class="about-content">
                        <div class="row">
                            <div class="child-item">
                                <p class="mb-60 text-white justify-text">
                                    Автономная газовая котельная – здание или помещение, в котором расположен комплекс
                                    устройств для выработки пара или горячей воды, используемых для энергоснабжения
                                    объекта. Кроме того, в современных котельных существует <a href="#">опция
                                    использования технологии когенерации</a> (единовременной генерации тепловой и
                                    электрической энергии).</p>
                            </div>
                            <h4 class="item-title text-white">Мы предлагаем услуги по проектированию следующих видов
                                промышленных газовых котельных:</h4>
                            <div class="col-lg-6 col-md-6 col-sm-7 col-xs-12">
                                <div class="row">
                                    <div class="about-service ul-li-block clearfix">
                                        <ul class="clearfix">
                                            <li>
                                                <div class="service-icon">
                                                    <img alt="" src="/land1/assets/img/icons/icon_3.png">
                                                </div>
                                                <div class="service-content">
                                                    <h4 class="service-title text-white">Крышная</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="service-icon">
                                                    <img alt="" src="/land1/assets/img/icons/icon_3.png">
                                                </div>
                                                <div class="service-content">
                                                    <h4 class="service-title text-white">Отдельностоящая</h4>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-7 col-xs-12">
                                <div class="about-service ul-li-block clearfix">
                                    <ul class="clearfix">
                                        <li>
                                            <div class="service-icon">
                                                <img alt="" src="/land1/assets/img/icons/icon_3.png">
                                            </div>
                                            <div class="service-content">
                                                <h4 class="service-title text-white">Пристроенная</h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="service-icon">
                                                <img alt="" src="/land1/assets/img/icons/icon_3.png">
                                            </div>
                                            <div class="service-content">
                                                <h4 class="service-title text-white">Встроенная</h4>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-7 col-xs-12">
                    <img alt="" src="/land1/assets/img/bmk_image_003.png">
                </div>
            </div>
        </div>
    </section>

    <section class="about-section bg-light-gray sec-ptb-100 clearfix">
        <div class="btn-wrap text-center clearfix">
            <a class="btn" href="/docs/Опросный лист котельная.xls">Получить опросный лист</a>
        </div>
    </section>

    <section class="about-section sec-ptb-100 relative clearfix">
        <svg class="separ02" clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality"
             shape-rendering="geometricPrecision" text-rendering="geometricPrecision" version="1.1"
             viewBox="0 0 6096 1693" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <polygon fill="#F2F2F2" points="0,1693 6096,0 0,0 "/>
    </svg>
        <div class="container">
            <div class="about-content">
                <h2 class="item-title mb-60 titlefor">
                    Преимущества индивидуальной котельной:
                </h2>
                <div class="about-service list ul-li-block clearfix">
                    <ul class="clearfix">
                        <li>
                            <div class="service-icon">
                                <img alt="" src="/land1/assets/img/icons/bmk_check_006.png">
                            </div>
                            <div class="service-content">
                                <p class="mb-0">
                                    Получение тепловой энергии по себестоимости, т.е. без переплат теплоснабжающим
                                    организациям за тепло по завышенным тарифам;
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="service-icon">
                                <img alt="" src="/land1/assets/img/icons/bmk_check_006.png">
                            </div>
                            <div class="service-content">
                                <p class="mb-0">
                                    Возможность эффективного регулирования объёма теплопотребления по погода-зависимому
                                    графику и экономии на расходе топлива;
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="service-icon">
                                <img alt="" src="/land1/assets/img/icons/bmk_check_006.png">
                            </div>
                            <div class="service-content">
                                <p class="mb-0">
                                    Возможность использования когенерации и тригенерации, повышающих КПД объекта
                                    генерации;
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="service-icon">
                                <img alt="" src="/land1/assets/img/icons/bmk_check_006.png">
                            </div>
                            <div class="service-content">
                                <p class="mb-0">
                                    Возможность сбыта тепловой и электрической энергии сторонним потребителям (при
                                    условии получении статуса ресурсоснабжающей организации);
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="service-icon">
                                <img alt="" src="/land1/assets/img/icons/bmk_check_006.png">
                            </div>
                            <div class="service-content">
                                <p class="mb-0">
                                    Инвестиционная льгота, позволяющая снижать налог на прибыль.
                                </p>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="partners-section sec-ptb-100 clearfix">
        <div class="container">

            <div class="section-title text-center mb-60">
                <h2 class="title-text mb-15 titlefor">Наши партнёры</h2>
            </div>

            <div class="partners-carousel arrow-left-right owl-carousel owl-theme" id="partners-carousel">
                <div class="item">
                    <div class="partner-logo">
                        <img alt="" class="before-image" src="/land1/assets/img/partners/01.jpg">
                    </div>
                </div>
                <div class="item">
                    <div class="partner-logo">
                        <img alt="" class="before-image" src="/land1/assets/img/partners/02.jpg">
                    </div>
                </div>
                <div class="item">
                    <div class="partner-logo">
                        <img alt="" class="before-image" src="/land1/assets/img/partners/03.jpg">
                    </div>
                </div>
                <div class="item">
                    <div class="partner-logo">
                        <img alt="" class="before-image" src="/land1/assets/img/partners/04.jpg">
                    </div>
                </div>
                <div class="item">
                    <div class="partner-logo">
                        <img alt="" class="before-image" src="/land1/assets/img/partners/05.jpg">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="agency-creative-banner d-flex align-items-center sec-ptb-100 relative clearfix">
        <div class="container">
            <div class="row justify-content-lg-start align-items-center justify-content-lg-between">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <img alt="" src="/land1/assets/img/640801199_w640_h640_dizelnaya-blochno-modulnaya-kotelnaya.png">
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="banner-content">
                        <h5 class="title-text mb-50 titlefor justify-text">В необходимых ситуациях специалисты «Энергия
                            Плюс» готовы выполнить проект и обеспечить изготовление и поставку блочно-модульных
                            котельных <a href="https://xn--c1adkmgpem4hrai.xn--p1ai/page/stroitelno-montazhnye-raboty">(БМК)
                                мощностью от 0,3-8 МВт</a></h5>
                    </div>
                    <div class="butbl">
                        <a class="btn" href="/docs/Опросный лист БМК.xlsx">Скачать опросный лист</a>
                        <a class="btn" href="#" on:click|preventDefault={handlerClick}>Оставить заявку</a>
                    </div>
                </div>
            </div>
        </div>
        <svg class="separ03" clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality"
             shape-rendering="geometricPrecision" text-rendering="geometricPrecision" version="1.1"
             viewBox="0 0 6096 1693" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <polygon fill="#f2f2f2" points="0,0 6096,1693 0,1693 "/></svg>
    </section>

    <section class="sec-ptb-100 pb-60 relative bg-light-gray clearfix">
        <div class="container">
            <div class="masoney-grid agency-marketing-grid">
                <div class="grid-sizer"></div>
                <div class="grid-item hidden">
                    <div class="portfolio-fullimage has-content">
                        <div class="content-wrap">
                            <img alt="" src="/land1/assets/img/projects/01.jpg">
                        </div>
                    </div>
                </div>
                <div class="grid-item">
                    <div class="portfolio-fullimage has-content bg-light-gray">
                        <div class="content-wrap">
                            <h4 class="item-title mb-50">
                                ООО «Энергия Плюс» осуществляет комплекс <a
                                    href="https://new.xn--c1adkmgpem4hrai.xn--p1ai/page/stroitelno-montazhnye-raboty">строительно-монтажных
                                работ</a> по разработанным проектам в соответствии с требованиями СНиП.
                            </h4>
                            <div class="butbl" style="text-align: center;">
                                <a class="btn" href="#" on:click|preventDefault={handlerClick}>Оставить заявку</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="portfolio-section clearfix">
        <div class="container">

            <div class="section-title mb-30">
                <h2 class="title-text mb-15 titlefor">Наши проекты</h2>
            </div>

            <div class="zoom-gallery portfolio-carousel-2 owl-arrow owl-carousel owl-theme" id="portfolio-carousel-2">
                <div class="item">
                    <a class="popup-image portfolio-fullimage add-effect" data-source="#" href="/land1/assets/img/projects/02.jpg"
                       title="Проект 2">
                        <img alt="" src="/land1/assets/img/projects/02.jpg">
                        <span class="item-content-2">
							<strong class="item-title">Проект 2</strong>
							<small class="item-brand">Просмотр</small>
						</span>
                    </a>
                </div>
                <div class="item">
                    <a class="popup-image portfolio-fullimage add-effect" data-source="#" href="/land1/assets/img/projects/03.jpg"
                       title="Проект 3">
                        <img alt="" src="/land1/assets/img/projects/03.jpg">
                        <span class="item-content-2">
							<strong class="item-title">Проект 3</strong>
							<small class="item-brand">Просмотр</small>
						</span>
                    </a>
                </div>
                <div class="item">
                    <a class="popup-image portfolio-fullimage add-effect" data-source="#" href="/land1/assets/img/projects/04.jpg"
                       title="Проект 4">
                        <img alt="" src="/land1/assets/img/projects/04.jpg">
                        <span class="item-content-2">
							<strong class="item-title">Проект 4</strong>
							<small class="item-brand">Просмотр</small>
						</span>
                    </a>
                </div>
                <div class="item">
                    <a class="popup-image portfolio-fullimage add-effect" data-source="#" href="/land1/assets/img/projects/05.jpg"
                       title="Проект 5">
                        <img alt="" src="/land1/assets/img/projects/05.jpg">
                        <span class="item-content-2">
							<strong class="item-title">Проект 5</strong>
							<small class="item-brand">Просмотр</small>
						</span>
                    </a>
                </div>
                <div class="item">
                    <a class="popup-image portfolio-fullimage add-effect" data-source="#" href="/land1/assets/img/projects/06.jpg"
                       title="Проект 6">
                        <img alt="" src="/land1/assets/img/projects/06.jpg">
                        <span class="item-content-2">
							<strong class="item-title">Проект 6</strong>
							<small class="item-brand">Просмотр</small>
						</span>
                    </a>
                </div>
                <div class="item">
                    <a class="popup-image portfolio-fullimage add-effect" data-source="#" href="/land1/assets/img/projects/07.jpg"
                       title="Проект 7">
                        <img alt="" src="/land1/assets/img/projects/07.jpg">
                        <span class="item-content-2">
							<strong class="item-title">Проект 7</strong>
							<small class="item-brand">Просмотр</small>
						</span>
                    </a>
                </div>
            </div>
        </div>

        <div class="btn-wrap text-center clearfix">
            <a class="btn" href="/company/referens-list">Наши проекты</a>
        </div>

    </section>

    <style type="text/css">
        .checkers {
            display: none;
        }

        .checkers.show {
            display: block;
        }
    </style>

    <section class="about-section clearfix section logic svelte-rgyqg6">
        <div class="container">
            <div class="section-title text-center mb-30">
                <h2 class="title-text mb-15 titlefor">Этапы работы</h2>
                <p class="mb-0">Алгоритм проектирования автономной котельной вместе с «Энергией Плюс»</p>
            </div>
            <div class="columns is-desktop">
                <div class="column is-4 logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6"
                                                                        src="/land1/assets/img/icons/bmk_icon_01.png">
                    <p class="logic__text svelte-rgyqg6">Оставляете заявку / заполняете опросный лист</p>
                </div>
                <div class="column is-4 logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6"
                                                                        src="/land1/assets/img/icons/bmk_icon_04.png">
                    <p class="logic__text svelte-rgyqg6">Получаете на рассмотрение технико-коммерческое предложение
                        (ТКП)</p>
                </div>
                <div class="column is-4 logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6"
                                                                        src="/land1/assets/img/icons/bmk_icon_02.png">
                    <p class="logic__text svelte-rgyqg6">Утверждаем задание на проектирование</p>
                </div>
            </div>
            <div class="columns is-desktop">
                <div class="column is-4 logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6"
                                                                        src="/land1/assets/img/icons/bmk_icon_09.png">
                    <p class="logic__text svelte-rgyqg6">Заключаем договор</p>
                </div>
                <div class="column is-4 logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6"
                                                                        src="/land1/assets/img/icons/bmk_icon_06.png">
                    <p class="logic__text svelte-rgyqg6">Утверждаем принципиальные технические решения</p>
                </div>
                <div class="column is-4 logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6"
                                                                        src="/land1/assets/img/icons/bmk_icon_03.png">
                    <p class="logic__text svelte-rgyqg6">Разрабатываем проектную и рабочую документацию</p>
                </div>
            </div>
            <div class="columns is-desktop">
                <div class="column is-6 logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6"
                                                                        src="/land1/assets/img/icons/bmk_icon_07.png">
                    <p class="logic__text svelte-rgyqg6">Получаем необходимые согласования и экспертизы</p>
                </div>
                <div class="column is-6 logic__item svelte-rgyqg6"><img alt=""
                                                                        class="logic__icon svelte-rgyqg6"
                                                                        src="/land1/assets/img/icons/bmk_icon_05.png">
                    <p class="logic__text svelte-rgyqg6">Выдаём проект в производство работ</p>
                </div>
            </div>
        </div>

        <div class="container mt-30 pb-90">
            <div class="section-title size-increase shad">
                <h5 class="title-text mb-15">
                    ТАКЖЕ «ЭНЕРГИЯ ПЛЮС» ОСУЩЕСТВЛЯЕТ<br> <a
                        href="https://xn--c1adkmgpem4hrai.xn--p1ai/page/funkcii-generalnogo-proektirovshika">ФУНКЦИИ
                    ГЕНЕРАЛЬНОГО ПРОЕКТИРОВЩИКА</a> И<br> <a
                        href="https://new.xn--c1adkmgpem4hrai.xn--p1ai/page/funkcii-tehnicheskogo-zakazchika">ФУНКЦИИ
                    ТЕХНИЧЕСКОГО ЗАКАЗЧИКА</a>
                </h5>
            </div>
        </div>
        <img alt="" class="separ02" src="/land1/assets/img/separ03.svg">
    </section>

    <section class="testimonial-section sec-ptb-100 clearfix" id="testimonial-section">
        <div class="container">
            <div class="section-title mb-60">
                <h2 class="title-text mb-15 titlefor">Отзывы</h2>
            </div>
            <div class="testimonial-carousel-2 arrow-top-right owl-carousel owl-theme" id="testimonial-carousel-2">
                <div class="item">
                    <div class="testimonial-boxed">
                        <h4 class="person-name">Бабин В.Н.</h4>
                        <span class="person-title">Главный энергетик АО "Салют"</span>
                        <div class="person-comment justify-text">
                            <p>Выражаем благодарность руководству и коллективу Общества с ограниченной ответственностью
                                «Энергия Плюс» за успешное выполнение проектных работ по техническому перевооружению
                                котельной АО «НПЦ газотурбостроения «Салют» по адресу: г. Москва, проспект Буденного, 16
                                корп.2.</p>
                            <p>Работы были проведены своевременно, с учетом пожеланий Заказчика. Разработка проектной
                                документации произведена в строгом соответствии с требованиями законодательства, что
                                позволило получить положительное заключение экспертизы Проекта и перейти к этапу
                                строительства объекта.</p>
                            <p>Хочется отметить слаженность и оперативность в работе коллектива, нацеленность на
                                результат, высокую квалификацию специалистов, аккуратность исполнения работ.</p>
                            <p>Надеемся на дальнейшее взаимовыгодное и плодотворное сотрудничество.</p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="testimonial-boxed">
                        <h4 class="person-name">Лукомский В.В.</h4>
                        <span class="person-title">Генеральный директор ЗАО «Сити-Арх»</span>
                        <div class="person-comment justify-text">
                            <p>Настоящим письмом выражаем благодарность коллективу ООО «Энергия Плюс» за оперативное и
                                качественное исполнение работ по проектированию газовой котельной для объекта:
                                «Многофункциональный торгово-развлекательный центр с зоной отдыха выходного дня по
                                адресу: Московская обл., г.Жуковский, ул. Гудкова, к юго-западу от микрорайона №
                                5А».</p>
                            <p>Коллектив ООО «Энергия Плюс» отличает высокий профессионализм, умелое взаимодействие с
                                экспертными организациями, внимательное отношение к пожеланиям Заказчика при
                                неукоснительном соблюдении требований нормативных актов Российской Федерации и
                                Московской области. Все это позволило своевременно получить положительное заключение
                                негосударственной экспертизы по объекту строительства.</p>
                            <p>Надеемся на дальнейшее плодотворное сотрудничество.</p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="testimonial-boxed">
                        <h4 class="person-name">МГТУ им. Н.Э. Баумана</h4>
                        <span class="person-title">Шахдеров О.Л.</span>
                        <div class="person-comment justify-text">
                            <p>МГТУ им. Н.Э. Баумана выражает благодарность Вашей организации за профессиональное и
                                надежное исполнение работ по проектированию технического перевооружения котельной.</p>
                            <p>Работы были выполнены в срок и в строгом соответствии с требованиями заказчика. Мы
                                довольны сотрудничеством с Вами, и при необходимости обратимся к Вам еще.</p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="testimonial-boxed">
                        <h4 class="person-name">ООО "Альтэра"</h4>
                        <span class="person-title">Директор Трошин В.И.</span>
                        <div class="person-comment justify-text">
                            <p>Выражаем коллективу ООО «Энергия Плюс» благодарность за успешное сотрудничество в
                                реализации проекта строительства газовой котельной для теплоснабжения складского
                                комплекса ООО «Альтэра».</p>
                            <p>В рамках Договора подряда, компанией ООО «Энергия Плюс», выполнен комплекс проектных и
                                строительно-монтажных работ. При разработке проекта котельной и газопровода учтены все
                                пожелания и замечания Заказчика, требования согласующих организаций и инстанций.</p>
                            <p>Работу ООО «Энергия Плюс» отличает детальный и всесторонний подход к поставленной задаче,
                                быстрое решение возникающих вопросов на основе глубокого знания законодательства и
                                нормативных документов, а также четкое взаимодействие всех подразделений, аккуратность
                                исполнения и ориентированность на конечный резулыат. Специалисты проектной группы и
                                строительно-монтажного отдела компании, работали с высоким профессионализмом и
                                ответственностью.</p>
                            <p>Выражаем уверенность в развитии сложившихся дружественных отношений и надеемся на
                                дальнейшее взаимовыгодное и плодотворное сотрудничество.</p>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="testimonial-boxed">
                        <h4 class="person-name">ООО "ВТМ дорпроект СТОЛИЦА"</h4>
                        <span class="person-title">Описание</span>
                        <div class="person-comment justify-text">
                            <p>Выражаем коллективу ООО «Энергия Плюс» благодарность за профессиональный документации на
                                газовую котельную мощностью 17,2 МВт в составе проекта: «Строительство комплекса
                                общественно-административных зданий по адресу: Московская область, г.о. Красногорск,
                                65-66 км МКАД».</p>
                            <p>В рамках государственного контракта специалистами ООО «Энергия Плюс» был выполнен
                                комплекс проектно-изыскательских работ, который позволил своевременно получить
                                положительное заключение ГАУ МО «Мособлгосэкспертиза».</p>
                            <p>Проектная документация выполнены с надлежащим качеством и с соблюдением треоований
                                законодательства в области проектирования и строительства.</p>
                            <p>Желаем дальнейших успехов в работе, будем рады сотрудничеству на новых объектах.</p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="testimonial-boxed">
                        <h4 class="person-name">ООО "Перспектива"</h4>
                        <span class="person-title">Управляющий директор Ополько М.В.</span>
                        <div class="person-comment justify-text">
                            <p>Компанией ООО «Энергия Плюс» были выполнены работы по разработке проектной документации
                                на техническое перевооружение системы внутреннего газоснабжения котельной. Проект
                                выполнен в установленный срок и в полном соответствии с технических заданием.</p>
                            <p>В ходе исполнения договорных обязательств компания показала себя как надежный деловой
                                партнер. Профессиональный подход сотрудников способствовал оперативному решению
                                вопросов,
                                связанных с исполнением договора. Завершение работ 8 установленный срок позволило
                                своевременно приступить к строительно-монтажным работам.</p>
                            <p>Мы можем рекомендовать ООО «Энергия Плюс» как надежного и ответственного исполнителя по
                                проектированию объектов газоснабжения.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="btn-wrap text-center clearfix">
            <a class="btn" href="/company/otzyvy-klientov">Читать рекомендации</a>
        </div>
    </section>

    <section class="section calculation">
        <div class="container is-max-widescreen">
            <CalculationBlock/>
        </div>
    </section>

    <!--  <section class="contact-section sec-ptb-100 bg-default-gray bg-deep-gray clearfix">-->
    <!--    <div class="container">-->
    <!--      <div class="form-wrap">-->
    <!--        <form class="form" action="#">-->
    <!--          <div class="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">-->
    <!--            <div class="col-lg-4 col-md-5 col-sm-8 col-xs-12">-->
    <!--              <div class="section-title mb-30">-->
    <!--                <h2 class="title-text mb-0 titlefor">-->
    <!--                  Обратная связь-->
    <!--                </h2>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">-->
    <!--              <div class="row">-->
    <!--                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">-->
    <!--                  <div class="form-item">-->
    <!--                    <input type="text" name="name" placeholder="Ваше имя">-->
    <!--                  </div>-->
    <!--                </div>-->

    <!--                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">-->
    <!--                  <div class="form-item">-->
    <!--                    <input type="tel" name="telephone" placeholder="Ваш email">-->
    <!--                  </div>-->
    <!--                </div>-->

    <!--                <div class="col-12">-->
    <!--                  <div class="form-item">-->
    <!--                    <textarea name="text" placeholder="Текст"></textarea>-->
    <!--                  </div>-->
    <!--                </div>-->

    <!--              </div>-->
    <!--            </div>-->
    <!--            <div class="col-lg-1 col-md-12 col-sm-12 col-xs-12">-->
    <!--              <button type="submit" class="submit-btn-icon">-->
    <!--                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 448 448" fill="currentColor" style="enable-background:new 0 0 448 448;" xml:space="preserve">-->
    <!--                  <polygon points="0.213,32 0,181.333 320,224 0,266.667 0.213,416 448,224"/></svg>-->
    <!--              </button>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </form>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--  </section>-->

</main>

<div id="backtotop">
    <a href="#" id="scroll">
        <svg fill="none" fit="" focusable="false" height="100%" preserveAspectRatio="xMidYMid meet"
             stroke="currentColor" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 15l7-7 7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
        </svg>
    </a>
</div>
