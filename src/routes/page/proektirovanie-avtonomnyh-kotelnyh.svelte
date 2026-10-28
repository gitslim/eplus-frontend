<script context="module">
    import SvelteSeo from "svelte-seo";
</script>

<script>
    import { onMount } from "svelte";
    import LazyImage from "svelte-lazy-image";
    import { Lightbox, LightboxImage, LightboxGallery } from "svelte-lightbox";
    import { browser } from "$app/env";
    import BtnZayavka from "$lib/components/BtnZayavka.svelte";
    import ContactFormButton from "$lib/components/ContactFormButton.svelte";
    import Icon from "fa-svelte";
    import {
        faPhone,
        faChevronLeft,
        faChevronRight,
    } from "@fortawesome/free-solid-svg-icons";
    import Carousel from "$lib/components/Carousel.svelte";
    import CalcTabs from "$lib/components/calc/CalcTabs.svelte";
    import HiddenH1 from "$lib/components/HiddenH1.svelte";
    import { t } from "svelte-i18n";
    import { session } from "$app/stores";

    $: currentLocale = $session.locale || "ru";
    $: p = currentLocale === "en" ? "/en" : "";

    onMount(async () => {
        let containerElement = document.getElementsByClassName("btn__zayavka");
        for (var i = 0; i < containerElement.length; i++) {
            containerElement[i].style.padding = "0";
            containerElement[i].style.fontSize = "1.25rem";
            containerElement[i].style.fontWeight = "400";
        }

        let buttonraunded = document.getElementsByClassName("button-raunded");
        for (var i = 0; i < buttonraunded.length; i++) {
            buttonraunded[i].style.borderRadius = "30px";
        }

        let right = document.getElementsByClassName("right");
        for (var i = 0; i < right.length; i++) {
            right[i].style.right = "2vw";
            right[i].style.color = "#f86923";
            right[i].style.top = "-4%";
        }
        if (document.documentElement.clientWidth < 500) {
            right[2].style.top = "-3%";
        }

        let left = document.getElementsByClassName("left");
        for (var i = 0; i < left.length; i++) {
            left[i].style.left = "";
            left[i].style.right = "6vw";
            left[i].style.color = "#f86923";
            left[i].style.top = "-4%";
        }
        if (document.documentElement.clientWidth < 500) {
            left[2].style.top = "-3%";
        }
    });
</script>

<SvelteSeo title="{$t('autonomous_boiler_design_page.meta_title')}" description="{$t('autonomous_boiler_design_page.meta_description')}" />
<HiddenH1>{$t('autonomous_boiler_design_page.meta_h1')}</HiddenH1>

<main>
    <section class="hero is-medium hero1">
        <div class="hero-body">
            <div class="columns">
                <div class="column is-7">
                    <h2
                        style="font-size: 40px"
                        class="has-text-white has-text-weight-normal title titlefor"
                    >
                        {$t('autonomous_boiler_design_page.hero_title')}
                    </h2>
                    <ContactFormButton
                        class="button is-primary is-large is-raunded button-raunded"
                    >
                        <div slot="button">{$t('autonomous_boiler_design_page.order_project')}</div>
                    </ContactFormButton>
                    <div class="subtitle py-6">
                        <a
                            rel="external"
                            class="has-text-white zphone"
                            href="tel:+74957907697"
                        >
                            <Icon icon={faPhone} />
                            <span class="callibri_phone zphone"
                                >+7 (495) 790-76-97</span
                            >
                            <br />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="hero is-medium">
        <div class="hero-body">
            <div class="columns is-vcentered">
                <div class="column is-6">
                    <img
                        alt="{currentLocale === 'en' ? 'Boiler plant drawing' : 'Котельная рисунок'}"
                        src="/images/kotel/u-bmk-image_01.png"
                    />
                </div>
                <div class="column is-6">
                    <h1 class="title has-text-weight-normal titlefor">
                        {$t('autonomous_boiler_design_page.section1_h1')}
                    </h1>
                    <p class="has-text-justified">
                        {$t('autonomous_boiler_design_page.section1_text')}
                    </p>
                    <ContactFormButton
                        class="button is-raunded is-primary is-medium mt-6 is-fullwidth button-raunded"
                    >
                        <div slot="button">{$t('autonomous_boiler_design_page.order_project')}</div>
                    </ContactFormButton>
                </div>
            </div>
        </div>
    </section>

    <section class="hero is-half" style="background-color:#353535">
        <div class="hero-body">
            <div class="conteiner">
                <div class="columns is-vcentered">
                    <div class="column">
                        <p class="text-white has-text-justified">
                            {@html $t('autonomous_boiler_design_page.intro_definition', {values: {p}})}
                        </p>
                        <h4
                            class="item-title text-white is-uppercase is-size-4 mt-6 mb-5"
                        >
                            {$t('autonomous_boiler_design_page.types_intro')}
                        </h4>
                        <div class="columns">
                            <div class="column fix-column-p">
                                <ul>
                                    <li>
                                        <div class="">
                                            <img
                                                class="icon1"
                                                alt=""
                                                src="/images/kotel/icons/icon_3.png"
                                            />
                                        </div>
                                        <div class="">
                                            <h4
                                                class="has-text-white has-text-weight-medium pt-3"
                                            >
                                                {$t('autonomous_boiler_design_page.type_roof')}
                                            </h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="">
                                            <img
                                                class="icon1"
                                                alt=""
                                                src="/images/kotel/icons/icon_3.png"
                                            />
                                        </div>
                                        <div class="">
                                            <h4
                                                class="has-text-white has-text-weight-medium pt-3"
                                            >
                                                {$t('autonomous_boiler_design_page.type_standalone')}
                                            </h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="column fix-column-p">
                                <ul class="">
                                    <li>
                                        <div class="">
                                            <img
                                                class="icon1"
                                                alt=""
                                                src="/images/kotel/icons/icon_3.png"
                                            />
                                        </div>
                                        <div class="">
                                            <h4
                                                class="has-text-white has-text-weight-medium pt-3"
                                            >
                                                {$t('autonomous_boiler_design_page.type_attached')}
                                            </h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="">
                                            <img
                                                class="icon1"
                                                alt=""
                                                src="/images/kotel/icons/icon_3.png"
                                            />
                                        </div>
                                        <div class="">
                                            <h4
                                                class="has-text-white has-text-weight-medium pt-3"
                                            >
                                                {$t('autonomous_boiler_design_page.type_builtin')}
                                            </h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <img
                            alt="{currentLocale === 'en' ? 'Boiler plant picture' : 'Картинка котельная'}"
                            src="/images/kotel/bmk_image_003.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section pt-6 pb-6 has-background-light" align="center">
        <div class="button is-primary is-medium is-raunded">
            <a
                target="_blank"
                class="has-text-white"
                href="/docs/Опросный лист котельная.xls"
                >{$t('autonomous_boiler_design_page.get_questionnaire')}</a
            >
        </div>
    </section>

    <section class="section pt-6 pb-6 fix-section">
        <div class="container">
            <div class="content">
                <h2 class="title titlefor pb-6 mb-1">
                    {$t('autonomous_boiler_design_page.advantages_title')}
                </h2>
                <ul class="">
                    <li>
                        <div>
                            <img
                                class="icon2"
                                alt=""
                                src="/images/kotel/icons/bmk_check_006.png"
                            />
                        </div>
                        <div class="pl-3">
                            <p>
                                {$t('autonomous_boiler_design_page.adv1')}
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="">
                            <img
                                class="icon2"
                                alt=""
                                src="/images/kotel/icons/bmk_check_006.png"
                            />
                        </div>
                        <div class="pl-3">
                            <p class="mb-0">
                                {$t('autonomous_boiler_design_page.adv2')}
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="service-icon">
                            <img
                                class="icon2"
                                alt=""
                                src="/images/kotel/icons/bmk_check_006.png"
                            />
                        </div>
                        <div class="pl-3">
                            <p class="">
                                {$t('autonomous_boiler_design_page.adv3')}
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="service-icon">
                            <img
                                class="icon2"
                                alt=""
                                src="/images/kotel/icons/bmk_check_006.png"
                            />
                        </div>
                        <div class="pl-3">
                            <p class="mb-0">
                                {$t('autonomous_boiler_design_page.adv4')}
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="service-icon">
                            <img
                                class="icon2"
                                alt=""
                                src="/images/kotel/icons/bmk_check_006.png"
                            />
                        </div>
                        <div class="pl-3 mb-0">
                            <p>
                                {$t('autonomous_boiler_design_page.adv5')}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section class="section partners">
        <div class="container">
            <div class="content text-center">
                <h2 class="title titlefor has-text-centered">{$t('autonomous_boiler_design_page.partners_title')}</h2>
                <Carousel
                    perPage={{ 800: 4, 500: 3, 400: 2 }}
                    dots={false}
                    autoplay={8000}
                    duration={3000}
                >
                    <span class="control" slot="left-control">
                        <Icon icon={faChevronLeft} />
                    </span>

                    <div class="slide-content">
                        <img
                            alt=""
                            class="before-image"
                            src="/images/kotel/partners/Ветна.jpg"
                        />
                    </div>
                    <div class="slide-content">
                        <img
                            alt=""
                            class="before-image"
                            src="/images/kotel/partners/Зиосаб.jpg"
                        />
                    </div>
                    <div class="slide-content">
                        <img
                            alt=""
                            class="before-image"
                            src="/images/kotel/partners/Лаварт.png"
                        />
                    </div>
                    <div class="slide-content">
                        <img
                            alt=""
                            class="before-image"
                            src="/images/kotel/partners/НОРД.png"
                        />
                    </div>
                    <div class="slide-content">
                        <img
                            alt=""
                            class="before-image"
                            src="/images/kotel/partners/Теплорос.jpg"
                        />
                    </div>
                    <div class="slide-content">
                        <img
                            alt=""
                            class="before-image"
                            src="/images/kotel/partners/Этра.jpg"
                        />
                    </div>
                    <div class="slide-content">
                        <img
                            alt=""
                            class="before-image"
                            src="/images/kotel/partners/Ютермо.jpg"
                        />
                    </div>

                    <span class="control" slot="right-control">
                        <Icon icon={faChevronRight} />
                    </span>
                </Carousel>
            </div>
        </div>
    </section>

    <section class="section fix-section py-6">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-6 is-offset-3">
                    <div class="banner-content">
                        <h4
                            class="is-uppercase has-text-justified titlefor mb-6"
                        >
                            {@html $t('autonomous_boiler_design_page.bmk_banner_title', {values: {p}})}
                        </h4>
                    </div>
                    <div class="columns fix-column-row">
                        <div class="column">
                            <a
                                target="_blank"
                                class="button is-primary is-medium is-raunded is-fullwidth"
                                href="/docs/Опросный лист БМК.xlsx"
                                >{$t('autonomous_boiler_design_page.download_questionnaire_bmk')}</a
                            >
                        </div>
                        <div class="column fix-button">
                            <BtnZayavka radius btnText="{$t('autonomous_boiler_design_page.leave_request')}" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section pt-6 pb-6 mb-6" style="background-color:#f2f2f2">
        <div class="container">
            <div class="columns is-align-items-stretch">
                <div class="column is-6">
                    <div class="box">
                        <img
                            alt="{currentLocale === 'en' ? 'Boiler house interior' : 'Котельная изнутри'}"
                            src="/images/kotel/projects/01.jpg"
                        />
                    </div>
                </div>
                <div class="column is-6 is-flex">
                    <div class="box">
                        <h4
                            class="pt-6 mb-6 has-text-centered is-size-5 has-text-weight-medium"
                        >
                            {@html $t('autonomous_boiler_design_page.smr_box_text', {values: {p}})}
                        </h4>
                        <BtnZayavka radius btnText="{$t('autonomous_boiler_design_page.leave_request')}" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section py-6">
        <div class="container text-center">
            <div class="title titlefor has-text-centered">
                <h2 class="">{$t('autonomous_boiler_design_page.projects_title')}</h2>
            </div>

            <Carousel
                perPage={{ 1000: 4, 800: 3, 500: 2, 400: 1 }}
                dots={false}
                loop={false}
            >
                <span class="control" slot="left-control">
                    <Icon icon={faChevronLeft} />
                </span>

                <div class="slide-content proect-carousel-item">
                    <Lightbox noScroll="false" modalClasses="pipu">
                        <figure class="image">
                            <LazyImage
                                src={"/images/kotel/projects/02.jpg"}
                                alt={$t('autonomous_boiler_design_page.proj2_alt')}
                            />
                            <span class="item-content-2">
                                <strong class="item-title">{$t('autonomous_boiler_design_page.proj2_title')}</strong>
                            </span>
                        </figure>
                    </Lightbox>
                </div>
                <div class="slide-content proect-carousel-item">
                    <Lightbox noScroll="false" modalClasses="pipu">
                        <figure class="image">
                            <LazyImage
                                src={"/images/kotel/projects/03.jpg"}
                                alt={$t('autonomous_boiler_design_page.proj3_alt')}
                            />
                            <span class="item-content-2">
                                <strong class="item-title">{$t('autonomous_boiler_design_page.proj3_title')}</strong>
                            </span>
                        </figure>
                    </Lightbox>
                </div>
                <div class="slide-content proect-carousel-item">
                    <Lightbox noScroll="false" modalClasses="pipu">
                        <figure class="image">
                            <LazyImage
                                src={"/images/kotel/projects/04.jpg"}
                                alt={$t('autonomous_boiler_design_page.proj4_alt')}
                            />
                            <span class="item-content-2">
                                <strong class="item-title">{$t('autonomous_boiler_design_page.proj4_title')}</strong>
                            </span>
                        </figure>
                    </Lightbox>
                </div>
                <div class="slide-content proect-carousel-item">
                    <Lightbox noScroll="false" modalClasses="pipu">
                        <figure class="image">
                            <LazyImage
                                src={"/images/kotel/projects/05.jpg"}
                                alt={$t('autonomous_boiler_design_page.proj5_alt')}
                            />
                            <span class="item-content-2">
                                <strong class="item-title">{$t('autonomous_boiler_design_page.proj5_title')}</strong>
                            </span>
                        </figure>
                    </Lightbox>
                </div>
                <div class="slide-content proect-carousel-item">
                    <Lightbox noScroll="false" modalClasses="pipu">
                        <figure class="image">
                            <LazyImage
                                src={"/images/kotel/projects/06.jpg"}
                                alt={$t('autonomous_boiler_design_page.proj6_alt')}
                            />
                            <span class="item-content-2">
                                <strong class="item-title">{$t('autonomous_boiler_design_page.proj6_title')}</strong>
                            </span>
                        </figure>
                    </Lightbox>
                </div>
                <div class="slide-content proect-carousel-item">
                    <Lightbox noScroll="false" modalClasses="pipu">
                        <figure class="image">
                            <LazyImage
                                src={"/images/kotel/projects/07.jpg"}
                                alt={$t('autonomous_boiler_design_page.proj7_alt')}
                            />
                            <span class="item-content-2">
                                <strong class="item-title">{$t('autonomous_boiler_design_page.proj7_title')}</strong>
                            </span>
                        </figure>
                    </Lightbox>
                </div>
                <span class="control" slot="right-control">
                    <Icon icon={faChevronRight} />
                </span>
            </Carousel>
        </div>
        <div align="center" class="pt-4">
            <a
                class="button is-primary is-medium is-raunded"
                href="{p}/page/referens-list/#object_teplo">{$t('autonomous_boiler_design_page.projects_title')}</a
            >
        </div>
    </section>

    <section class="section py-6 has-text-centered">
        <div class="container text-center">
            <div class="title titlefor">
                <h2 class="">{$t('autonomous_boiler_design_page.work_stages_title')}</h2>
            </div>
            <p class="mb-5">
                {$t('autonomous_boiler_design_page.work_stages_subtitle')}
            </p>
            <div class="columns is-desktop">
                <div class="column logic__item svelte-rgyqg6">
                    <img
                        alt=""
                        class="logic__icon svelte-rgyqg6 mb-6"
                        src="/images/kotel/icons/bmk_icon_01.png"
                    />
                    <p class="logic__text svelte-rgyqg6">
                        {$t('autonomous_boiler_design_page.step1')}
                    </p>
                </div>
                <div class="column logic__item svelte-rgyqg6">
                    <img
                        alt=""
                        class="logic__icon svelte-rgyqg6 mb-6"
                        src="/images/kotel/icons/bmk_icon_04.png"
                    />
                    <p class="logic__text svelte-rgyqg6">
                        {$t('autonomous_boiler_design_page.step2')}
                    </p>
                </div>
                <div class="column logic__item svelte-rgyqg6">
                    <img
                        alt=""
                        class="logic__icon svelte-rgyqg6 mb-6"
                        src="/images/kotel/icons/bmk_icon_02.png"
                    />
                    <p class="logic__text svelte-rgyqg6">
                        {$t('autonomous_boiler_design_page.step3')}
                    </p>
                </div>
            </div>
            <div class="columns is-desktop">
                <div class="column logic__item svelte-rgyqg6">
                    <img
                        alt=""
                        class="logic__icon svelte-rgyqg6 mb-6"
                        src="/images/kotel/icons/bmk_icon_09.png"
                    />
                    <p class="logic__text svelte-rgyqg6">{$t('autonomous_boiler_design_page.step4')}</p>
                </div>
                <div class="column logic__item svelte-rgyqg6">
                    <img
                        alt=""
                        class="logic__icon svelte-rgyqg6 mb-6"
                        src="/images/kotel/icons/bmk_icon_06.png"
                    />
                    <p class="logic__text svelte-rgyqg6">
                        {$t('autonomous_boiler_design_page.step5')}
                    </p>
                </div>
                <div class="column logic__item svelte-rgyqg6">
                    <img
                        alt=""
                        class="logic__icon svelte-rgyqg6 mb-6"
                        src="/images/kotel/icons/bmk_icon_03.png"
                    />
                    <p class="logic__text svelte-rgyqg6">
                        {$t('autonomous_boiler_design_page.step6')}
                    </p>
                </div>
            </div>
            <div class="columns is-desktop">
                <div class="column logic__item svelte-rgyqg6">
                    <img
                        alt=""
                        class="logic__icon svelte-rgyqg6 mb-6"
                        src="/images/kotel/icons/bmk_icon_07.png"
                    />
                    <p class="logic__text svelte-rgyqg6">
                        {$t('autonomous_boiler_design_page.step7')}
                    </p>
                </div>
                <div class="column logic__item svelte-rgyqg6">
                    <img
                        alt=""
                        class="logic__icon svelte-rgyqg6 mb-6"
                        src="/images/kotel/icons/bmk_icon_05.png"
                    />
                    <p class="logic__text svelte-rgyqg6">
                        {$t('autonomous_boiler_design_page.step8')}
                    </p>
                </div>
            </div>
        </div>

        <div class="section p-4">
            <div class="box">
                <h5 class="title mb-15">
                    {@html $t('autonomous_boiler_design_page.gen_designer_box', {values: {p}})}
                </h5>
            </div>
        </div>
    </section>

    <section
        class="testimonial-section sec-ptb-100 clearfix py-6"
        id="testimonial-section"
    >
        <div class="container">
            <div class="section mb-60">
                <h2 class="title pb-6 titlefor">{$t('autonomous_boiler_design_page.testimonials_title')}</h2>
            </div>

            <Carousel perPage={{ 1000: 2, 700: 1 }} dots={false}>
                <span class="control" slot="left-control">
                    <Icon icon={faChevronLeft} />
                </span>

                {#each [
                    {
                        author: { ru: "Бабин В.Н.", en: "Babin V.N." },
                        title: { ru: 'Главный энергетик АО "Салют"', en: 'Chief Power Engineer, JSC "Salyut"' },
                        paragraphs: {
                            ru: [
                                'Выражаем благодарность руководству и коллективу Общества с ограниченной ответственностью «Энергия Плюс» за успешное выполнение проектных работ по техническому перевооружению котельной АО «НПЦ газотурбостроения «Салют» по адресу: г. Москва, проспект Буденного, 16 корп.2.',
                                'Работы были проведены своевременно, с учетом пожеланий Заказчика. Разработка проектной документации произведена в строгом соответствии с требованиями законодательства, что позволило получить положительное заключение экспертизы Проекта и перейти к этапу строительства объекта.',
                                'Хочется отметить слаженность и оперативность в работе коллектива, нацеленность на результат, высокую квалификацию специалистов, аккуратность исполнения работ.',
                                'Надеемся на дальнейшее взаимовыгодное и плодотворное сотрудничество.'
                            ],
                            en: [
                                'We express our gratitude to the management and team of LLC "Energy Plus" for the successful execution of design works for the technical retrofitting of the boiler house of JSC "Gas-Turbine Engineering RPC "Salyut" located at: Moscow, Budyonny Avenue, 16 bldg. 2.',
                                'The work was carried out on schedule and tailored to the Customer’s requirements. Design documentation was developed in strict compliance with legal requirements, enabling us to obtain positive project expertise approval and proceed to construction.',
                                'We would like to highlight the teamwork, efficiency, results-oriented approach, high qualifications of specialists, and meticulous execution.',
                                'We look forward to continued fruitful and mutually beneficial cooperation.'
                            ]
                        }
                    },
                    {
                        author: { ru: "Лукомский В.В.", en: "Lukomsky V.V." },
                        title: { ru: "Генеральный директор ЗАО «Сити-Арх»", en: "General Director, CJSC City-Arch" },
                        paragraphs: {
                            ru: [
                                'Настоящим письмом выражаем благодарность коллективу ООО «Энергия Плюс» за оперативное и качественное исполнение работ по проектированию газовой котельной для объекта: «Многофункциональный торгово-развлекательный центр с зоной отдыха выходного дня по адресу: Московская обл., г.Жуковский, ул. Гудкова, к юго-западу от микрорайона № 5А».',
                                'Коллектив ООО «Энергия Плюс» отличает высокий профессионализм, умелое взаимодействие с экспертными организациями, внимательное отношение к пожеланиям Заказчика при неукоснительном соблюдении требований нормативных актов Российской Федерации и Московской области. Все это позволило своевременно получить положительное заключение негосударственной экспертизы по объекту строительства.',
                                'Надеемся на дальнейшее плодотворное сотрудничество.'
                            ],
                            en: [
                                'We hereby express our gratitude to LLC "Energy Plus" for the prompt and high-quality design of a gas boiler house for the project: "Multifunctional shopping and entertainment center with a weekend recreation area in Zhukovsky, Moscow Region".',
                                'The team at LLC "Energy Plus" demonstrates outstanding professionalism, effective interaction with expert bodies, and close attention to the Customer\'s requirements while adhering strictly to Russian and regional regulations. This ensured timely non-governmental expertise approval for the facility.',
                                'We look forward to continued fruitful cooperation.'
                            ]
                        }
                    },
                    {
                        author: { ru: "МГТУ им. Н.Э. Баумана", en: "Bauman Moscow State Technical University" },
                        title: { ru: "Шахдеров О.Л.", en: "Shakhderov O.L." },
                        paragraphs: {
                            ru: [
                                'МГТУ им. Н.Э. Баумана выражает благодарность Вашей организации за профессиональное и надежное исполнение работ по проектированию технического перевооружения котельной.',
                                'Работы были выполнены в срок и в строгом соответствии с требованиями заказчика. Мы довольны сотрудничеством с Вами, и при необходимости обратимся к Вам еще.'
                            ],
                            en: [
                                'Bauman MSTU expresses its gratitude to your company for the professional and reliable design work on the technical retrofitting of our boiler house.',
                                'The work was completed on time and in strict accordance with the customer\'s requirements. We are satisfied with our cooperation and will gladly reach out again in the future.'
                            ]
                        }
                    },
                    {
                        author: { ru: 'ООО "Альтэра"', en: 'LLC "Altera"' },
                        title: { ru: "Директор Трошин В.И.", en: "Director Troshin V.I." },
                        paragraphs: {
                            ru: [
                                'Выражаем коллективу ООО «Энергия Плюс» благодарность за успешное сотрудничество в реализации проекта строительства газовой котельной для теплоснабжения складского комплекса ООО «Альтэра».',
                                'В рамках Договора подряда, компанией ООО «Энергия Плюс», выполнен комплекс проектных и строительно-монтажных работ. При разработке проекта котельной и газопровода учтены все пожелания и замечания Заказчика, требования согласующих организаций и инстанций.',
                                'Работу ООО «Энергия Плюс» отличает детальный и всесторонний подход к поставленной задаче, быстрое решение возникающих вопросов на основе глубокого знания законодательства и нормативных документов, а также четкое взаимодействие всех подразделений, аккуратность исполнения и ориентированность на конечный результат.',
                                'Выражаем уверенность в развитии сложившихся дружественных отношений и надеемся на дальнейшее взаимовыгодное и плодотворное сотрудничество.'
                            ],
                            en: [
                                'We thank LLC "Energy Plus" for successful cooperation in delivering the gas boiler plant project for the heating supply of the LLC "Altera" warehouse complex.',
                                'Under the general contract, LLC "Energy Plus" carried out comprehensive design, construction, and installation works. All customer requirements and regulatory authority conditions were carefully integrated into the boiler house and pipeline design.',
                                'The work of LLC "Energy Plus" is distinguished by its meticulous approach, rapid resolution of technical issues based on deep normative knowledge, coordinated department efforts, and dedication to final results.',
                                'We look forward to continued fruitful partnership.'
                            ]
                        }
                    },
                    {
                        author: { ru: 'ООО "ВТМ дорпроект СТОЛИЦА"', en: 'LLC "VTM Dorproekt STOLITSA"' },
                        title: { ru: "Отзыв Заказчика", en: "Client Review" },
                        paragraphs: {
                            ru: [
                                'Выражаем коллективу ООО «Энергия Плюс» благодарность за профессиональную разработку документации на газовую котельную мощностью 17,2 МВт в составе проекта: «Строительство комплекса общественно-административных зданий по адресу: Московская область, г.о. Красногорск, 65-66 км МКАД».',
                                'В рамках государственного контракта специалистами ООО «Энергия Плюс» был выполнен комплекс проектно-изыскательских работ, который позволил своевременно получить положительное заключение ГАУ МО «Мособлгосэкспертиза».',
                                'Желаем дальнейших успехов в работе, будем рады сотрудничеству на новых объектах.'
                            ],
                            en: [
                                'We thank the team of LLC "Energy Plus" for the professional development of documentation for a 17.2 MW gas boiler house as part of the administrative complex construction project in Krasnogorsk, Moscow Region.',
                                'Under the state contract, LLC "Energy Plus" engineers carried out comprehensive survey and design works that secured timely state expertise approval from Mosoblgosexpertiza.',
                                'We wish you continued success and will be pleased to collaborate on future projects.'
                            ]
                        }
                    },
                    {
                        author: { ru: 'ООО "Перспектива"', en: 'LLC "Perspektiva"' },
                        title: { ru: "Управляющий директор Ополько М.В.", en: "Managing Director Opolko M.V." },
                        paragraphs: {
                            ru: [
                                'Компанией ООО «Энергия Плюс» были выполнены работы по разработке проектной документации на техническое перевооружение системы внутреннего газоснабжения котельной. Проект выполнен в установленный срок и в полном соответствии с техническим заданием.',
                                'В ходе исполнения договорных обязательств компания показала себя как надежный деловой партнер. Профессиональный подход сотрудников способствовал оперативному решению вопросов.',
                                'Мы можем рекомендовать ООО «Энергия Плюс» как надежного и ответственного исполнителя по проектированию объектов газоснабжения.'
                            ],
                            en: [
                                'LLC "Energy Plus" completed the design documentation for the technical retrofitting of the internal gas supply system of the boiler plant. The project was executed on schedule and in full compliance with the terms of reference.',
                                'Throughout the contract, the company demonstrated high reliability and expertise. The team’s professional approach facilitated rapid problem solving.',
                                'We confidently recommend LLC "Energy Plus" as a reliable and qualified contractor for gas facility engineering.'
                            ]
                        }
                    }
                ] as review}
                    <div class="slide-content">
                        <div class="testimonial-boxed">
                            <h4 class="has-text-weight-medium">{review.author[currentLocale] || review.author.ru}</h4>
                            <span class="person-title is-size-7">{review.title[currentLocale] || review.title.ru}</span>
                            <div class="person-comment has-text-justified">
                                {#each (review.paragraphs[currentLocale] || review.paragraphs.ru) as paragraph}
                                    <p>{paragraph}</p>
                                {/each}
                            </div>
                        </div>
                    </div>
                {/each}

                <span class="control" slot="right-control">
                    <Icon icon={faChevronRight} />
                </span>
            </Carousel>
        </div>
        <div align="center">
            <a
                class="button is-primary is-medium is-raunded has-text-white"
                href="{p}/company/otzyvy-klientov">{$t('autonomous_boiler_design_page.read_recommendations')}</a
            >
        </div>
    </section>

    <section class="section">
        <div class="title has-text-centered has-text-weight-bold">
            {$t('autonomous_boiler_design_page.cost_calc_title')}
        </div>
        <div class="container is-max-widescreen">
            <CalcTabs />
        </div>
    </section>
</main>

<style lang="scss">
    /*section {*/
    /*    padding: 50px 60px;*/
    /*}*/

    .hero1 {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: multiply;
        background-image: url(/images/kotel/bg/bg_2.jpg),
            linear-gradient(0deg, grey, transparent),
            linear-gradient(45deg, grey, transparent),
            linear-gradient(80deg, grey, transparent),
            linear-gradient(100deg, grey, transparent);
    }

    /*ContactFormButton.button {*/
    /*    border-radius: 30px;*/
    /*}*/

    .calculation {
        background-image: url("/images/tehnicheskoePerevooruzhenie/form-bg.jpg");
        text-align: center;
        color: #fff;
        padding: 100px 0 70px;
        background-size: cover;
    }

    /*.button {*/
    /*    font-size: 15px;*/
    /*}*/

    .text-white {
        color: #fff;
    }

    h1 {
        font-size: 40px;
    }

    h2 {
        font-size: 34px;
        font-weight: 500;
    }

    .content h2 {
        font-weight: 500;
    }

    h4 {
        /*text-transform: uppercase;*/
        font-weight: normal;
    }

    h5 {
        line-height: 1.4em;
    }

    p {
        font-size: 18px;
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

    ul li div {
        margin-bottom: 30px;
        display: table;
    }

    ul li div:not(:first-child) {
        padding-left: 30px;
    }

    ul li div:first-child {
        float: left;
    }

    ul li h4 {
        text-transform: none;
    }

    .is-raunded {
        border-radius: 30px;
    }

    /*ContactFormButton .is-raunded {*/
    /*    border-radius: 30px;*/
    /*}*/

    .icon1 {
        width: 45px;
    }

    .icon2 {
        width: 25px;
        margin-top: 3px;
    }

    /*.is_flex {*/
    /*    display: flex;*/
    /*}*/

    .box2 {
        position: relative;
    }

    .box2 .box2__item {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        padding-right: 20px;
    }

    .logic__icon.svelte-rgyqg6 {
        height: 56px;
    }

    .logic__item.svelte-rgyqg6 {
        position: relative;
    }

    .logic__item.svelte-rgyqg6:last-child::after {
        display: none;
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
        border: 4px solid #f60;
    }

    .logic__item.svelte-rgyqg6::after {
        content: "";
        display: block;
        position: absolute;
        top: 101px;
        left: 52%;
        width: 96%;
        height: 4px;
        border-bottom: 2px dashed #383838;
        opacity: 0.5;
    }

    #testimonial-section .slide-content {
        background-color: #fbfbfb;
        border: 1px solid #ededed;
        margin: 0 10px;
    }

    .testimonial-boxed {
        padding: 30px 40px;
    }

    .person-comment p {
        font-size: 15px;
    }

    .person-comment p:first-child {
        padding-top: 20px;
    }
    .partners {
      .slide-content {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 210px;
        height: 210px;
      }
    }

    /*.fix-button .btn__zayavka {*/
    /*    padding: 0px;*/
    /*}*/

    /*******************************/

    /*Экран меньше 1023px*/

    @media screen and (max-width: 1023px) {
        .logic__icon.svelte-rgyqg6 {
            height: 56px;
        }

        .logic__item.svelte-rgyqg6 {
            position: relative;
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
            border: 4px solid #f60;
        }

        .logic__item.svelte-rgyqg6::after {
            content: "";
            display: block;
            position: absolute;
            top: 101px;
            left: 20%;
            width: 60%;
            height: 4px;
            border-bottom: 2px dashed #383838;
            opacity: 0.5;
        }

        .fix-column-row {
            flex-direction: column;
        }

        .calculation {
            overflow: hidden;
        }

        .fix-section {
            padding: 0 10px;
            margin: 40px 0;
        }
    }

    /*Экран меньше 768px*/

    @media screen and (max-width: 768px) {
        .fix-column-row {
            padding-bottom: 20px;
        }

        .box2 .box2__item {
            position: static;
            transform: translateY(0);
            padding-right: 0;
        }

        .columns {
            margin: -20px 0;
        }

        .fix-column-p:first-child {
            padding-top: 20px;
        }

        .fix-column-p {
            padding-top: 0;
            padding-bottom: 0;
        }

        h1 {
            font-size: 32px;
        }

        h2 {
            font-size: 30px;
        }
    }
</style>
