<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>


<script>
    import BtnZayavka from '$lib/components/BtnZayavka.svelte';
    import CalcTabs from '$lib/components/calc/CalcTabs.svelte';
    import ContactForm from '$lib/components/ContactForm.svelte'
    import HeaderLanding from '$lib/components/HeaderLanding.svelte';
    import InfoBlock from '$lib/components/InfoBlock.svelte';
    import TitleLanding from '$lib/components/TitleLanding.svelte';
    import LazyImage from 'svelte-lazy-image';
    import {Lightbox} from 'svelte-lightbox';
    import HiddenH1 from "$lib/components/HiddenH1.svelte"
    import {t} from 'svelte-i18n'
    import {session} from '$app/stores'

    $: currentLocale = $session.locale || 'ru'
</script>


<style lang="scss">
  main {
    --text-light: white;
    --bg-dark: #353535;
    --gray: #f2f2f2;
    --orange: #ff6600;

    .text-light {
      color: var(--text-light);

      * {
        color: var(--text-light);
      }
    }

    .text-22 {
      font-size: 22px;
    }

    .bg-dark {
      background: var(--bg-dark);
    }

    .bg-gray {
      background: var(--bg-gray);
    }

    .orange-block {
      //border-top: 4px solid var(--orange);

      padding: 30px 0 0 0;

      //background: var(--bg-orange);
      //color: var(--bg-orange);

      //font-weight: bold;

      //text-align: left;
    }

    .section__wrap {
      position: relative;
      top: -100px;
      margin-bottom: -300px;

      padding: 100px 30px;

      border-radius: 10px;
      background-color: #fff;
      box-shadow: 0 19px 46px 25px rgba(0, 0, 0, 0.15);

      font-size: 18px;
    }

    .section__wrap-v2 {
      top: 12px;
      background-color: #fff;
      box-shadow: 0 19px 46px 30px rgba(0, 0, 0, 0.15);
      padding: 40px 80px;
    }

    section {
      padding: 80px 0;
    }

    .hero {
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      background-blend-mode: multiply;
      background-image: url(/images/gazoprovodi/gazoprovod_grp.jpg),
      linear-gradient(0deg, grey, transparent);
      //linear-gradient(45deg, grey, transparent),
      //linear-gradient(80deg, grey, transparent),
      //linear-gradient(100deg, grey, transparent)

      .hero-body {
        margin-top: 50px;
      }
    }

    .title:before {
      content: "";
      display: block;
      position: absolute;
      width: 100px;
      height: 5px;
      top: -30px;
      left: 0;
      background-color: #f60;
    }

    .about {
      padding: 80px 0;

      :global(.info__text) {
        margin: 0;
      }

      :global(.info__subtext) {
        font-style: normal;
        font-size: 20px;

      }
    }

    .about, .docs {
      .content {
        font-size: 18px;
        text-align: justify;
      }
    }


    .objects-section {
      padding: 100px 0 150px;
      margin: auto 0;

      background: #ededed;

      .title {
        margin-bottom: 40px;

        text-align: center;
      }

      .title:before {
        left: 50%;
        transform: translateX(-50%);
      }


    }

    .tech-section {
      padding: 100px 0 250px;

      font-size: 22px;

      .tech__content {
        display: flex;
        flex-direction: column;
        gap: 40px;
      }
    }

    .objects-map {
      display: flex;
      flex-wrap: wrap;

      .objects-map__row {
        width: 100%;

        display: flex;
        justify-content: start;
        flex-wrap: wrap;
        gap: 40px;


        .objects-map__item {
          :global(figure) {
            margin: 0;
          }

          :global(.image img) {
            object-fit: cover;
            width: 600px;
            height: 386px;
          }
        }
      }
    }

    .list {
      //margin-bottom: 50px;

      &__item {
        list-style: none;
        margin: 10px 0;
        position: relative;
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

    .calc {
      padding: 0;
      padding-bottom: 150px;

      .container {
        z-index: 1;
      }

      .section__wrap {
        @media screen and (min-width: 900px) {
          padding: 80px 100px 50px;
          max-width: 1300px;
        }
      }

      .columns {
        justify-content: center;
      }

      :global(.content .container),
      :global( .content li) {
        font-size: 22px;
      }

      :global(.calc__tabs + .section .box) {
        box-shadow: unset;
      }

      :global(.calc__tabs ul) {
        margin-left: 0;
      }
    }

    .order-form {
      background: linear-gradient(180deg, #252429, transparent),
      linear-gradient(0deg, #252429, transparent);

      .container .columns {
        align-items: center;
        gap: 80px;
      }

      .order-form__img-container {
        padding: 2%;
        background-color: #c2c2c2;
      }

      .order-form__img-container img {
        display: block;
      }
    }


    .solution {
      //position: relative;

      //top: -300px;
      color: #fff;
      background: url("/images/bmk/form-bg22.jpg") center no-repeat;
      padding: 200px 0px 130px;
      background-size: cover;

      font-size: 1.5rem;

      p {
        //text-align: justify;
      }

      .columns {
        gap: 30px;
      }

      &__list {
        margin: 0;
        padding-left: 30px;
        list-style: none;
      }

      &__item {
        margin-bottom: 24px;
        position: relative;

        padding: 0 0 0 10px;

        //font-size: 18px;
        //text-align: justify;
        font-weight: bold;
        color: #fff;

        &::before {
          content: "";
          display: block;
          position: absolute;
          background: url("/images/bmk/bmk_check_006.png") center no-repeat;
          background-size: contain;
          width: 23px;
          height: 100%;
          left: -30px;

          margin: auto 0;
        }
      }
    }

    .flex-row {
      display: flex;
      gap: 40px;

      img {
        width: 50px;
        height: 50px;
      }
    }


    .docs {
      p, li {
        font-size: 22px;
      }

      .content .px-6 {
        display: flex;
        flex-direction: column;
        gap: 40px;
      }


      .objects-map .objects-map__row {
        justify-content: start;
      }

      .list__item {
        margin-bottom: 24px;
        position: relative;

        padding: 0 0 0 10px;

        //font-size: 18px;

        &::before {
          content: "";
          display: block;
          position: absolute;
          background: url("/images/bmk/bmk-dignity.png") center no-repeat;
          background-size: contain;
          width: 23px;
          height: 100%;
          left: -30px;

          margin: auto 0;
        }
      }
    }

    .quality {
      padding: 100px 0;

      p {
        font-size: 22px;
      }

      .flex-row {
        img {
          width: auto;
          height: 150px;
        }
      }
    }

  }
</style>



<SvelteSeo title="{$t('gas_dist_grp_design_page.meta_title')}" description="{$t('gas_dist_grp_design_page.meta_description')}"/>
<HiddenH1>{$t('gas_dist_grp_design_page.meta_h1')}</HiddenH1>

<main>

    <section class="section hero caption">
        <div class="column hero-body">
            <HeaderLanding caption="{$t('gas_dist_grp_design_page.title')}">
                <div class="columns">
                    <div class="column is-half">
                        <BtnZayavka btnText="{$t('gas_dist_grp_design_page.order')}" radius/>
                    </div>
                </div>
            </HeaderLanding>
        </div>
    </section>

    <section class="section about">
        <div class="container content">
            <div class="columns">
                <div class="column is-7">
                    <img alt={currentLocale === 'en' ? 'Gas pipeline design project' : 'Проект газопровода'} src="/images/gazoprovodi/gazoprovod_grp2.jpg">
                </div>
                <div class="column is-5 text-22">
                    <p>{$t('gas_dist_grp_design_page.about_p1')}</p>
                </div>
            </div>
            <InfoBlock text="" subText="{$t('gas_dist_grp_design_page.about_sub')}">
            </InfoBlock>
        </div>
    </section>
    <section class="section tech-section bg-dark ">
        <div class="container text-light ">
            <div class="columns">
                <div class="content column">
                    <div class="container ">
                        <div class="px-6">
                            <TitleLanding left white titleText="{$t('gas_dist_grp_design_page.tech_title')}"/>

                            <div class="tech__content">
                                <ul class="mb-5 list">
                                    <li class="list__item">
                                        {$t('gas_dist_grp_design_page.tech_item1')}
                                    </li>
                                    <li class="list__item">
                                        {$t('gas_dist_grp_design_page.tech_item2')}
                                    </li>
                                    <li class="list__item">
                                        {$t('gas_dist_grp_design_page.tech_item3')}
                                    </li>
                                    <li class="list__item">
                                        {$t('gas_dist_grp_design_page.tech_item4')}
                                    </li>
                                    <li class="list__item">{$t('gas_dist_grp_design_page.tech_item5')}</li>
                                    <li class="list__item">{$t('gas_dist_grp_design_page.tech_item6')}</li>
                                    <li class="list__item">{$t('gas_dist_grp_design_page.tech_item7')}</li>
                                    <li class="list__item">{$t('gas_dist_grp_design_page.tech_item8')}</li>
                                    <li class="list__item">{$t('gas_dist_grp_design_page.tech_item9')}</li>
                                    <li class="list__item">{$t('gas_dist_grp_design_page.tech_item10')}</li>
                                </ul>
                                <p>{$t('gas_dist_grp_design_page.tech_software')}</p>
                                <div class="objects-map ">
                                    <div class="objects-map__row">
                                        <div class="objects-map__item">
                                            <Lightbox noScroll="false"
                                                      modalClasses="pipu">
                                                <figure class="image">
                                                    <LazyImage
                                                        class="objects-map__img"
                                                        src={'/images/map/object-map2.jpg'}
                                                        alt={currentLocale === 'en' ? 'Gas pipeline route map' : 'Трасса газопровода'}/>
                                                </figure>
                                            </Lightbox>
                                        </div>
                                        <div class="objects-map__item">
                                            <Lightbox noScroll="false"
                                                      modalClasses="pipu">
                                                <figure class="image">
                                                    <LazyImage
                                                        class="objects-map__img"
                                                        src={'/images/gazoprovodi/gazoprovod_grp3.jpg'}
                                                        alt={currentLocale === 'en' ? 'Gas regulating point diagram' : 'Схема ГРП'}/>
                                                </figure>
                                            </Lightbox>
                                        </div>
                                        <div class="objects-map__item">
                                            <Lightbox noScroll="false"
                                                      modalClasses="pipu">
                                                <figure class="image">
                                                    <LazyImage
                                                        class="objects-map__img"
                                                        src={'/images/map/object-map5.jpg'}
                                                        alt={currentLocale === 'en' ? 'Main gas pipeline layout diagram' : 'Магистральный газопровод на схеме'}/>
                                                </figure>
                                            </Lightbox>
                                        </div>

                                        <div class="objects-map__item">
                                            <Lightbox noScroll="false"
                                                      modalClasses="pipu">
                                                <figure class="image">
                                                    <LazyImage
                                                        class="objects-map__img"
                                                        src={'/images/map/object-map3.jpg'}
                                                        alt={currentLocale === 'en' ? 'Gas pipeline on schematic map' : 'Газопровод на схеме'}/>
                                                </figure>
                                            </Lightbox>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="section calc ">
        <div class="container section__wrap ">
            <div class="columns ">
                <div class="content column is-10">
                    <div class="">
                        <TitleLanding titleText="{$t('gas_dist_grp_design_page.calc_title')}"/>
                        <CalcTabs selected="gaz" classes="calc__tabs"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section solution px-4">
        <div class="container ">
            <div class="columns px-6">
                <div class="column is-8">
                    <TitleLanding left titleText="{$t('gas_dist_grp_design_page.services_title')}" white/>
                    <ul class="solution__list">
                        <li class="solution__item">
                            {$t('gas_dist_grp_design_page.services_item1')}
                        </li>
                        <li class="solution__item">
                            {$t('gas_dist_grp_design_page.services_item2')}
                        </li>
                        <li class="solution__item">
                            {$t('gas_dist_grp_design_page.services_item3')}
                        </li>
                    </ul>
                </div>


            </div>
            <div class="columns px-6 pt-2">
                <div class="column is-1 is-align-content-center">
                    <img width="80px" src="/images/kotel/icons/icon_3.png"/>
                </div>
                <div class="column is-11">
                    <p class="text-light ">
                        {$t('gas_dist_grp_design_page.services_compliance')}</p>
                </div>
            </div>
        </div>
    </section>
    <section class="section docs">
        <div class="container">
            <div class="columns">
                <div class="content column">
                    <div class="px-6">
                        <div class="flex-row">
                            <img width="100px" src="/images/bmk/bmk_icon_02.png"/>

                            <p class="">{$t('gas_dist_grp_design_page.docs_work_doc')}</p>
                        </div>
                        <div class="flex-row ">
                            <img width="100px" src="/images/bmk/bmk_icon_04.png"/>

                            <div>
                                <p>{$t('gas_dist_grp_design_page.docs_gen_role')}</p>

                                <ul class="mb-5 list">
                                    <li class="list__item"> {$t('gas_dist_grp_design_page.docs_item1')}</li>
                                    <li class="list__item"> {$t('gas_dist_grp_design_page.docs_item2')}</li>
                                    <li class="list__item"> {$t('gas_dist_grp_design_page.docs_item3')}</li>
                                    <li class="list__item"> {$t('gas_dist_grp_design_page.docs_item4')}</li>
                                    <li class="list__item"> {$t('gas_dist_grp_design_page.docs_item5')}</li>
                                    <li class="list__item"> {$t('gas_dist_grp_design_page.docs_item6')}</li>
                                    <li class="list__item"> {$t('gas_dist_grp_design_page.docs_item7')}</li>
                                    <li class="list__item"> {$t('gas_dist_grp_design_page.docs_item8')}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="quality">
            <div class="container section__wrap-v2">
                <div class="columns">
                    <div class="content column">
                        <div class="px-6  ">
                            <div class="flex-row">
                                <img src="/images/itc_ctp/i_bezopasnost128.png"/>
                                <p>{@html $t('gas_dist_grp_design_page.quality_text')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section order-form">
        <div class="container">
            <div class="columns">
                <div class="column is-6 order-form__img-container">
                    <img alt={currentLocale === 'en' ? 'Gas pipeline construction' : 'Прокладка газопровода'} src="\images\gazoprovodi\gazoprovod-build.jpg"/>
                </div>
                <div class="column">
                    <h4 class="title has-text-white">{$t('gas_dist_grp_design_page.form_title')}</h4>
                    <ContactForm/>
                    <p class="is-size-7 has-text-white pt-3">{$t('gas_dist_grp_design_page.form_privacy')}</p>
                </div>
            </div>
        </div>
    </section>

</main>

