<script context="module">
  import { fetchEndpoint } from "$lib/utils";
  import SvelteSeo from "svelte-seo";

  export const load = async ({ fetch }) => {
    return await fetchEndpoint(fetch, "/ep/list-partners.json", {});
  };
</script>

<script>
  import BtnZayavka from "$lib/components/BtnZayavka.svelte";
  import HeaderLanding from "$lib/components/HeaderLanding.svelte";
  import TitleLanding from "$lib/components/TitleLanding.svelte";
  import Carousel from "$lib/components/Carousel.svelte";
  import {
    faChevronLeft,
    faChevronRight,
  } from "@fortawesome/free-solid-svg-icons";
  import ProjectsMosaic from "$lib/components/ProjectsMosaic.svelte";
  import Icon from "fa-svelte";
  import HiddenH1 from "$lib/components/HiddenH1.svelte";
  import CalcTabs from "$lib/components/calc/CalcTabs.svelte";
  import { t } from "svelte-i18n";
  import { session } from "$app/stores";

  $: currentLocale = $session.locale || "ru";
  $: p = currentLocale === "en" ? "/en" : "";

  $: projects = [
    {
      src: "/images/bmk/IMG_27.12.25г..jpg",
      alt: $t("modular_boiler_production_page.proj1"),
    },
    {
      src: "/images/bmk/IMG_5258 (1).jpg",
      alt: $t("modular_boiler_production_page.proj2"),
    },
    {
      src: "/images/bmk/IMG_5556 (2).jpg",
      alt: $t("modular_boiler_production_page.proj3"),
    },
    {
      src: "/images/bmk/Фото 1.jpg",
      alt: $t("modular_boiler_production_page.proj4"),
    },
    {
      src: "/images/bmk/Фото 2.jpg",
      alt: $t("modular_boiler_production_page.proj5"),
    },
    {
      src: "/images/bmk/f9ebdc26-2250-4b34-a272-cf4e717cd8fa.jpg",
      alt: $t("modular_boiler_production_page.proj6"),
    },
  ];

  export let data;
</script>

<SvelteSeo title="{$t('modular_boiler_production_page.meta_title')}" description="{$t('modular_boiler_production_page.meta_description')}" />
<HiddenH1>{$t('modular_boiler_production_page.meta_h1')}</HiddenH1>

<main>
  <section class="section hero caption">
    <div class="column hero-body">
      <HeaderLanding caption="{$t('modular_boiler_production_page.title')}">
        <div class="columns">
          <div class="column is-half">
            <BtnZayavka btnText="{$t('modular_boiler_production_page.order')}" radius />
          </div>
        </div>
      </HeaderLanding>
    </div>
  </section>
  <section class="section px-4 types-boiler-room">
    <div class="container">
      <div class="content">
        <TitleLanding left titleText="{$t('modular_boiler_production_page.boiler_types_title')}" />
        <div class="table-boiler-room">
          <div class="table-boiler-room__row">
            <div>{$t('modular_boiler_production_page.th_coolant')}</div>
            <div>{$t('modular_boiler_production_page.th_water')}</div>
            <div>{$t('modular_boiler_production_page.th_steam')}</div>
            <div>{$t('modular_boiler_production_page.th_steam_water')}</div>
          </div>
          <div class="table-boiler-room__row">
            <div>{$t('modular_boiler_production_page.th_placement')}</div>
            <div>{$t('modular_boiler_production_page.th_roof')}</div>
            <div>{$t('modular_boiler_production_page.th_attached')}</div>
            <div>{$t('modular_boiler_production_page.th_standalone')}</div>
          </div>
          <div class="table-boiler-room__row">
            <div>{$t('modular_boiler_production_page.th_execution')}</div>
            <div>{$t('modular_boiler_production_page.th_containers')}</div>
            <div>{$t('modular_boiler_production_page.th_modular')}</div>
            <div>{$t('modular_boiler_production_page.th_prefabricated')}</div>
          </div>
          <div class="table-boiler-room__row">
            <div>{$t('modular_boiler_production_page.th_fuel')}</div>
            <div>{$t('modular_boiler_production_page.th_nat_gas')}</div>
            <div>{$t('modular_boiler_production_page.th_lpg')}</div>
            <div>{$t('modular_boiler_production_page.th_diesel')}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section pb-6 mb-6">
    <div class="title has-text-centered has-text-weight-bold">
      {$t('modular_boiler_production_page.cost_calc_title')}
    </div>
    <div class="container is-max-widescreen">
      <CalcTabs showType={false} />
    </div>
  </section>

  <section class="section pt-0 px-4">
    <div class="container seo">
      <p class="seo__text">
        {$t('modular_boiler_production_page.seo_intro')}
      </p>
      <div class="columns">
        <div class="seo__info column is-6">
          <ul class="seo__list mt-6">
            <li class="seo__item">
              {$t('modular_boiler_production_page.seo_item1')}
            </li>
            <li class="seo__item mb-3">
              {$t('modular_boiler_production_page.seo_item2')}
            </li>
            <li class="seo__item">
              {$t('modular_boiler_production_page.seo_item3')}
            </li>
            <li class="seo__item">
              {$t('modular_boiler_production_page.seo_item4')}
            </li>
            <li class="seo__item">{$t('modular_boiler_production_page.seo_item5')}</li>
          </ul>
          <p class="seo__text mt-6">
            {$t('modular_boiler_production_page.seo_outro')}
          </p>
        </div>
        <div class="seo__img column is-6">
          <img alt="Картинка котельная" src="/images/bmk/bmk_image_003.png" />
        </div>
      </div>
    </div>
  </section>
  <section class="section py-6 my-6">
    <div class="container text-center py-6">
      <div class="title titlefor has-text-centered pb-6">
        <h2>{$t('modular_boiler_production_page.projects_title')}</h2>
      </div>

      <ProjectsMosaic {projects} />
    </div>
    <div align="center" class="pb-6">
      <a
        class="button is-primary is-medium is-raunded"
        href="{p}/page/referens-list/#object_teplo">{$t('modular_boiler_production_page.projects_title')}</a
      >
    </div>
  </section>
  <section class="section desc px-4">
    <div class="container is-widescreen desc__wrap">
      <div class="info">
        <div
          class="container is-widescreen columns info__content"
          style="justify-content: center;"
        >
          <div class="column is-5">
            <TitleLanding
              left
              titleText="{$t('modular_boiler_production_page.cap_build_title')}"
              white
            />
            <p class="block info__text">
              {$t('modular_boiler_production_page.cap_build_p1')}
            </p>
            <p class="block info__text">
              {$t('modular_boiler_production_page.cap_build_p2')}
            </p>
            <p class="block info__text">
              {$t('modular_boiler_production_page.cap_build_p3')}
            </p>
          </div>
          <div class="column is-4">
            <TitleLanding
              left
              titleText="{$t('modular_boiler_production_page.when_install_title')}"
              white
            />
            <p class="block info__text">
              {$t('modular_boiler_production_page.when_install_p1')}
            </p>
            <p class="block info__text">
              {$t('modular_boiler_production_page.when_install_p2')}
            </p>
            <p class="block info__text">
              {$t('modular_boiler_production_page.when_install_p3')}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section solution px-4">
    <div class="container">
      <div class="columns">
        <div class="column is-6">
          <TitleLanding left titleText="{$t('modular_boiler_production_page.energy_plus_title')}" white />
          <p class="solution__text">
            {$t('modular_boiler_production_page.energy_plus_intro')}
          </p>
        </div>
        <div class="column is-6">
          <ul class="solution__list">
            <li class="solution__item">
              {$t('modular_boiler_production_page.solution_item1')}
            </li>
            <li class="solution__item">
              {$t('modular_boiler_production_page.solution_item2')}
            </li>
            <li class="solution__item">
              {$t('modular_boiler_production_page.solution_item3')}
            </li>
            <li class="solution__item">
              {$t('modular_boiler_production_page.solution_item4')}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container is-2 advantage">
      <div class="columns">
        <div class="content column advantage__wrap">
          <div class="container">
            <div
              class="px-6 is-flex is-flex-direction-column
                is-justify-content-space-between"
            >
              <div class="block__wrap">
                <TitleLanding
                  green
                  left
                  titleText="{$t('modular_boiler_production_page.advantages_title')}"
                />
                <ul class="mb-5 list">
                  <li class="list__item">
                    {$t('modular_boiler_production_page.adv_item1')}
                  </li>
                  <li class="list__item">
                    {$t('modular_boiler_production_page.adv_item2')}
                  </li>
                  <li class="list__item">
                    {$t('modular_boiler_production_page.adv_item3')}
                  </li>
                  <li class="list__item">
                    {$t('modular_boiler_production_page.adv_item4')}
                  </li>
                  <li class="list__item">
                    {$t('modular_boiler_production_page.adv_item5')}
                  </li>
                  <li class="list__item">
                    {$t('modular_boiler_production_page.adv_item6')}
                  </li>
                  <li class="list__item">
                    {$t('modular_boiler_production_page.adv_item7')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section px-4 partners">
    <div class="container">
      <div class="content text-center">
        <TitleLanding titleText="{$t('modular_boiler_production_page.partners_title')}" />
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

  <section class="section logic px-4">
    <div class="container">
      <TitleLanding titleText="{$t('modular_boiler_production_page.algorithm_title')}" />
      <div class="columns">
        <div class="column is-3 logic__item">
          <img
            alt="bmk-icon"
            class="logic__icon"
            src="/images/bmk/bmk_icon_01.png"
          />
          <p class="logic__text">
            {@html $t('modular_boiler_production_page.step1')}
          </p>
        </div>
        <div class="column is-3 logic__item">
          <img
            alt="bmk-icon"
            class="logic__icon"
            src="/images/bmk/bmk_icon_02.png"
          />
          <p class="logic__text">{$t('modular_boiler_production_page.step2')}</p>
        </div>
        <div class="column is-3 logic__item">
          <img
            alt="bmk-icon"
            class="logic__icon"
            src="/images/bmk/bmk_icon_03.png"
          />
          <p class="logic__text">{$t('modular_boiler_production_page.step3')}</p>
        </div>
        <div class="column is-3 logic__item">
          <img
            alt="bmk-icon"
            class="logic__icon"
            src="/images/bmk/bmk_icon_04.png"
          />
          <p class="logic__text">
            {$t('modular_boiler_production_page.step4')}
          </p>
        </div>
      </div>
      <div class="columns">
        <div class="column is-3 logic__item">
          <img
            alt="bmk-icon"
            class="logic__icon"
            src="/images/bmk/bmk_icon_05.png"
          />
          <p class="logic__text">
            {$t('modular_boiler_production_page.step5')}
          </p>
        </div>
        <div class="column is-3 logic__item">
          <img
            alt="bmk-icon"
            class="logic__icon"
            src="/images/bmk/bmk_icon_06.png"
          />
          <p class="logic__text">{$t('modular_boiler_production_page.step6')}</p>
        </div>
        <div class="column is-3 logic__item">
          <img
            alt="bmk-icon"
            class="logic__icon"
            src="/images/bmk/bmk_icon_07.png"
          />
          <p class="logic__text">
            {$t('modular_boiler_production_page.step7')}
          </p>
        </div>
        <div class="column is-3 logic__item">
          <img
            alt="bmk-icon"
            class="logic__icon"
            src="/images/bmk/bmk_icon_08.png"
          />
          <p class="logic__text">{$t('modular_boiler_production_page.step8')}</p>
        </div>
      </div>
      <div class="columns">
        <div class="column logic__column is-10 is-offset-1 mt-6">
          <div class="logic__wrap">
            <p class="logic__info">
              {@html $t('modular_boiler_production_page.partner_resource_p1')}
            </p>
            <p class="logic__info">
              {$t('modular_boiler_production_page.partner_resource_p2')}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section advice">
    <div class="advice__bg">
      <div class="container px-4">
        <div class="columns is-align-items-center">
          <div class="column is-7 py-6">
            <figure class="image advice__img">
              <img
                alt="Блочно-модульная котельная"
                src="/images/bmk/kotelnay2.png"
              />
            </figure>
          </div>
          <div class="column is-5">
            <TitleLanding left titleText="{$t('modular_boiler_production_page.consultation_title')}" />
            <div class="">
              {@html $t('modular_boiler_production_page.consultation_call')}
            </div>
            <div class="advice__btn column is-8 p-0 is-flex mt-6 is-size-5">
              <BtnZayavka btnText="{$t('modular_boiler_production_page.send_request')}" radius />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<style lang="scss">
  .section {
    padding-top: 60px;
  }

  .caption {
    display: block;
    padding-top: 180px !important;
    padding-bottom: 130px;
    background-position: center;
    background-blend-mode: multiply;
    background-image: url(/images/bmk/bmk_background2.jpg),
      linear-gradient(45deg, grey, transparent),
      linear-gradient(90deg, grey, transparent);
    background-size: cover;
    overflow: hidden;
    color: #fff;
    width: 100vw;
    @media (max-width: 768px) {
      background-position: 73% 0;
    }
  }

  .desc {
    padding: 100px 0;
    background: #353535;

    &__wrap {
      margin-bottom: 50px;
    }

    &__text {
      text-align: justify;
      font-size: 22px;
      font-weight: 300;
      line-height: 1.8;
      color: #202020;
    }

    &__img {
      //position: absolute;
      z-index: 1;
      max-width: 100%;
      top: 0;
      left: -115px;
    }
  }

  .info {
    // padding-bottom: 120px;
    //margin-top: 95px;

    &__content {
      padding-top: 50px;
      gap: 40px;
    }

    &__text {
      text-align: justify;
      color: #fff;
      font-size: 18px;
      font-weight: 300;
      margin-bottom: 10px;
    }
  }

  .bmk-video {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 700px;
    height: 400px;
    border-radius: 15px;
    background-position: center center;
    background-size: cover;
    margin-bottom: 80px;
  }

  ul {
    margin: 0;
    padding-left: 30px;
    text-align: justify;
    list-style: none;
  }

  .left-side {
  }

  .right-side {
    &::before {
      content: "";
      position: absolute;
      top: -45px;
      bottom: -45px;
      left: 50%;
      transform: translate(-50%, 0);
      content: "";
      display: block;
      border-left: 2px dashed #3838387a;
      @media (max-width: 768px) {
        margin-bottom: 60px;
        border-left: none;
        border-top: 2px dashed #3838387a;
        transform: none;
        position: relative;
        top: 0;
        bottom: 0;
        left: 0;
      }
    }
  }

  .dignity {
    margin-bottom: 90px !important;

    &__item {
      position: relative;
      margin-bottom: 15px;
      font-size: 18px;

      &::before {
        content: "";
        display: block;
        position: absolute;
        background: url("/images/bmk/bmk-dignity.png") center no-repeat;
        background-size: contain;
        width: 23px;
        height: 23px;
        left: -30px;
        top: 7px;
      }
    }
  }

  .block__inner {
    &_wrap {
      position: relative;
      top: -130px;
      padding: 60px 30px;
      background-color: #fff;
      box-shadow: 0 19px 46px 25px rgba(0, 0, 0, 0.15);
    }
  }

  .limitations {
    &__item {
      position: relative;
      margin-bottom: 15px;
      font-size: 18px;

      &::before {
        content: "";
        display: block;
        position: absolute;
        background: url("/images/bmk/bmk-limitations.png") center no-repeat;
        background-size: contain;
        width: 23px;
        height: 23px;
        left: -30px;
        top: 7px;
      }
    }
  }

  .seo {
    &__text {
      font-size: 18px;
      line-height: 1.8;
    }

    &__item {
      list-style: none;
      margin: 20px 0;
      position: relative;
      font-size: 18px;
      line-height: 1.6;

      &::before {
        content: "";
        display: block;
        position: absolute;
        left: -20px;
        top: 50%;
        transform: translate(0, -50%);
        width: 6px;
        height: 6px;
        border-radius: 999rem;
        background-color: #ff6600;
      }
    }
  }

  .solution {
    color: #fff;
    background: url("/images/bmk/form-bg22.jpg") center no-repeat;
    padding: 100px 0px 130px;
    background-size: cover;

    &__text {
      text-align: justify;
      color: #fff;
      font-size: 18px;
    }

    &__list {
      margin: 0;
      padding-left: 30px;
      list-style: none;
    }

    &__item {
      text-align: justify;
      margin-bottom: 24px;
      position: relative;
      font-size: 18px;
      font-weight: bold;
      color: #fff;

      &::before {
        content: "";
        display: block;
        position: absolute;
        background: url("/images/bmk/bmk_check_006.png") center no-repeat;
        background-size: contain;
        width: 23px;
        height: 23px;
        left: -30px;
        top: 4px;
      }
    }
  }

  .logic {
    &__item {
      position: relative;

      &:last-child::after {
        display: none;
      }

      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 96px;
        left: 50%;
        transform: translateX(-50%);
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #fff;
        border: 4px solid #f60;
      }

      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 101px;
        left: 52%;
        width: 96%;
        height: 4px;
        border-bottom: 2px dashed #383838;
        opacity: 0.5;
        @media (max-width: 768px) {
          left: 20%;
          width: 60%;
        }
      }
    }

    &__icon {
      display: block;
      height: 56px;
      margin: 0 auto 75px;
    }

    &__column {
      position: relative;
    }

    &__text {
      text-align: center;
    }

    &__wrap {
      //position: absolute;
      top: 12px;
      background-color: #fff;
      //padding: 40px 30px;
      box-shadow: 0 19px 46px 30px rgba(0, 0, 0, 0.15);
      padding: 40px 80px;
    }

    &__info {
      text-align: center;
      font-size: 18px;
      font-weight: 300;
      line-height: 1.6;
      margin-bottom: 10px;
    }
  }

  .advice {
    padding-top: 238px;

    &__bg {
      background: url("/images/bmk/pryamougolnik_11_kopiya_2.jpg") center
        no-repeat;
      background-size: cover;
      padding: 0px 0 150px;
      margin-top: -50px;
    }

    &__img {
      img {
        margin: 0 auto;
        width: 90%;
      }
    }

    &__text {
      font-size: 18px;
      line-height: 1.6;
      font-weight: 300;
    }

    &__phone {
      color: #202020;

      &:hover {
        color: #f86923;
      }
    }
  }

  .types-boiler-room {
    padding: 50px;

    .table-boiler-room {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      padding: 15px 0;

      //font-size: 18px;
      text-transform: uppercase;
      line-height: 1.6;
      font-weight: 300;

      &__row {
        display: flex;
        justify-content: space-between;

        > div {
          width: 320px;
          padding: 2rem;

          border-bottom: 1px solid $main-brand-color;

          &:first-child {
            color: #fefefe;
            font-weight: bold;
            background: $main-brand-color;
            border-bottom: 1px solid white;
          }
        }
      }
    }

    @media screen and (max-width: 1024px) {
      .table-boiler-room {
        &__row {
          width: 100%;
          flex-direction: column;

          div {
            width: 100%;
          }
        }
      }
    }
  }

  .advantage {
    &__wrap {
      position: relative;
      top: -130px;
      padding: 60px 30px;
      background-color: #fff;
      box-shadow: 0 19px 46px 25px rgba(0, 0, 0, 0.15);

      .list {
        &__item {
          list-style: none;
          margin: 20px 0;
          position: relative;
          font-size: 18px;
          line-height: 1.6;

          &::before {
            content: "";
            display: block;
            position: absolute;
            left: -20px;
            top: 50%;
            transform: translate(0, -50%);
            width: 6px;
            height: 6px;
            border-radius: 999rem;
            background-color: #ff6600;
          }
        }
      }
    }
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

  /* ================================================================
     RESPONSIVE — Tablet ≤768px
     ================================================================ */
  @media (max-width: 768px) {
    /* Table → vertical list */
    .types-boiler-room {
      padding: 24px 16px;

      .table-boiler-room {
        flex-direction: column;
        gap: 0;

        &__row {
          flex-direction: column;
          margin-bottom: 16px;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid rgba(248, 105, 35, 0.2);

          > div {
            width: 100%;
            padding: 12px 16px;
            border-bottom: 1px solid rgba(248, 105, 35, 0.15);

            &:last-child {
              border-bottom: none;
            }

            &:first-child {
              font-size: 14px;
            }
          }
        }
      }
    }

    /* Advantages — remove negative offset */
    .advantage {
      &__wrap {
        top: 0;
        padding: 30px 20px;
      }
    }

    /* Algorithm — hide decorative lines */
    .logic {
      &__item {
        &::before,
        &::after {
          display: none;
        }
      }

      &__icon {
        margin-bottom: 20px;
      }

      &__wrap {
        padding: 24px 20px;
      }
    }

    /* Partners carousel */
    .partners {
      .slide-content {
        width: 150px;
        height: 150px;
      }
    }
  }

  /* ================================================================
     RESPONSIVE — Mobile ≤480px
     ================================================================ */
  @media (max-width: 480px) {
    .section {
      padding-top: 30px;
    }

    /* Hero */
    .caption {
      padding-top: 100px !important;
      padding-bottom: 60px;
    }

    /* Table */
    .types-boiler-room {
      .table-boiler-room {
        &__row {
          > div {
            padding: 10px 14px;
            font-size: 14px;
          }
        }
      }
    }

    /* SEO text */
    .seo {
      &__text {
        font-size: 15px;
        line-height: 1.7;
      }

      &__item {
        font-size: 15px;
        margin: 14px 0;
      }
    }

    /* Dark section */
    .desc {
      padding: 40px 0;

      &__wrap {
        margin-bottom: 24px;
      }
    }

    .info {
      &__content {
        padding-top: 24px;
        gap: 20px;
      }

      &__text {
        font-size: 15px;
        margin-bottom: 8px;
      }
    }

    /* Solution */
    .solution {
      padding: 40px 0 60px;

      &__text {
        font-size: 15px;
      }

      &__item {
        font-size: 15px;
        margin-bottom: 16px;
      }
    }

    /* Advantages */
    .advantage {
      &__wrap {
        padding: 24px 16px;

        .list {
          &__item {
            font-size: 15px;
          }
        }
      }
    }

    /* Algorithm */
    .logic {
      &__icon {
        height: 44px;
        margin-bottom: 16px;
      }

      &__text {
        font-size: 14px;
      }

      &__wrap {
        padding: 20px 16px;
      }

      &__info {
        font-size: 15px;
        padding: 0;
      }
    }

    /* Consultation */
    .advice {
      padding-top: 40px;

      &__bg {
        padding: 0 0 40px;
        margin-top: 0;
      }

      &__btn {
        width: 100%;
      }
    }

    /* Partners */
    .partners {
      .slide-content {
        width: 120px;
        height: 120px;
      }
    }
  }
</style>
