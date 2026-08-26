<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import BtnZayavka from '$lib/components/BtnZayavka.svelte'
    import HeaderLanding from '$lib/components/HeaderLanding.svelte'
    import InfoBlock from '$lib/components/InfoBlock.svelte'
    import TitleLanding from '$lib/components/TitleLanding.svelte'
    import CalcTabs from '$lib/components/calc/CalcTabs.svelte'
    import HiddenH1 from "$lib/components/HiddenH1.svelte"
    import {t} from 'svelte-i18n'

    $: headerCaption = {
        caption: $t('onsite_pipelines_page.title'),
    }

    $: info = {
        text: $t('onsite_pipelines_page.info_text'),
        subText: $t('onsite_pipelines_page.info_sub'),
    }

    $: functionsCard = [
        {
            id: 1,
            text: $t('onsite_pipelines_page.item1'),
            alt: 'image-card',
            src: '/images/gazoprovodi/connecting-event__icon1.png',
        },
        {
            id: 2,
            text: $t('onsite_pipelines_page.item2'),
            alt: 'image-card',
            src: '/images/gazoprovodi/connecting-event__icon2.png',
        },
        {
            id: 3,
            text: $t('onsite_pipelines_page.item3'),
            alt: 'image-card',
            src: '/images/gazoprovodi/connecting-event__icon3.png',
        },
        {
            id: 4,
            text: $t('onsite_pipelines_page.item4'),
            alt: 'image-card',
            src: '/images/gazoprovodi/connecting-event__icon4.png',
        },
    ]
</script>

<style lang="scss">
  .caption {
    display: block;
    padding-top: 180px !important;
    padding-bottom: 130px;
    background: url("/images/gazoprovodi/main-banner33.jpg") no-repeat center;
    background-size: cover;
    overflow: hidden;
    color: #fff;
    width: 100vw;
  }

  .main {
    &__info {
      &-block {
        position: relative;
        top: -35px;
      }
    }
  }

  .functions {
    padding-top: 80px;

    &__title {
      padding: 0 15px;
    }

    &__targets {
      display: flex;

      flex-wrap: wrap;
      justify-content: space-around;
    }

    &__target {
      display: flex;
      width: 45%;
      min-height: 255px;
      box-shadow: 0 19px 46px 3px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      background-color: #fff;
      margin-bottom: 30px;

      &-img {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
        min-height: 255px;
        min-width: 160px;

        &img {
          border: 0;
          vertical-align: top;
          max-width: 100%;
          height: auto;
        }
      }

      &-info {
        display: flex;
        align-items: center;
        padding: 0 50px;
        border-left: 2px dashed #3838387a;
        font-size: 14px;
        color: rgb(56, 56, 56);
        line-height: 1.286;
        text-align: left;
      }
    }

    &__desc {
      max-width: 893px;
      margin: 0 auto 50px;
      font-size: 18px;
      font-weight: 300;
      line-height: 30px;
    }

    &__help {
      text-align: center;
    }

    &__icon {
      padding-top: 10px;
      margin-bottom: 20px;
      position: relative;
      display: flex;
      justify-content: center;
    }

    &__step {
      text-align: center;
      padding: 0 15px;
      position: relative;
      width: 21%;

      &:last-child::after {
        display: none;
      }

      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 93px;
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
        position: absolute;
        left: 287px;
        top: -34px;
        height: 270px;
        width: 2px;
        border-right: 2px dashed #3838387a;
        -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
      }

      &-img {
        width: 56px;
        height: 56px;
        margin-bottom: 75px;
      }

      &-text {
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        position: relative;
      }
    }
  }

  .calculation {
    background-image: url("/images/tehnicheskoePerevooruzhenie/form-bg.jpg");
    text-align: center;
    color: #fff;
    padding: 100px 0 70px;
    background-size: cover;
  }
</style>


<SvelteSeo title="{$t('onsite_pipelines_page.meta_title')}" description="{$t('onsite_pipelines_page.meta_description')}"/>
<HiddenH1>{$t('onsite_pipelines_page.meta_h1')}</HiddenH1>

<main class="main container-fluid">
    <section class="section caption">
        <div class="container is-max-widescreen">
            <HeaderLanding {...headerCaption}/>
            <BtnZayavka btnText="{$t('onsite_pipelines_page.order')}" radius="true"/>
        </div>
    </section>

    <div class="container is-max-widescreen">
        <div class="main__info-block">
            <InfoBlock {...info}/>
        </div>
    </div>

    <section class="section functions">
        <div class="container is-max-widescreen">
            <div class="functions__title">
                <TitleLanding
                        titleText="{$t('onsite_pipelines_page.section_title')}"/>
            </div>

            <p class="functions__desc">
                {$t('onsite_pipelines_page.section_desc')}
            </p>

            <div class="functions__targets columns is-desktop">
                {#each functionsCard as item}
                    <div class="functions__target">
                        <div class="functions__target-img">
                            <img src={item.src} alt={item.alt}/>
                        </div>
                        <div class="functions__target-info">
                            <p>{item.text}</p>
                        </div>
                    </div>
                {/each}
            </div>

            <div class="functions__help">
                <p class="functions__desc">
                    {$t('onsite_pipelines_page.help_desc')}
                </p>
                <div class="functions__icon columns">
                    <div class="functions__step column-gap is-2">
                        <img
                                alt="help-icon"
                                class="functions__step-img"
                                src="/images/gazoprovodi/events-help__icon1.png"/>
                        <p class="functions__step-text">{$t('onsite_pipelines_page.help_step1')}</p>
                    </div>
                    <div class="functions__step column-gap is-2">
                        <img
                                alt="help-icon"
                                class="functions__step-img"
                                src="/images/gazoprovodi/events-help__icon2.png"/>
                        <p class="functions__step-text">{$t('onsite_pipelines_page.help_step2')}</p>
                    </div>
                    <div class="functions__step column-gap is-2">
                        <img
                                alt="help-icon"
                                class="functions__step-img"
                                src="/images/gazoprovodi/events-help__icon3.png"/>
                        <p class="functions__step-text">{$t('onsite_pipelines_page.help_step3')}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
<!--    <section class="section calculation">-->
<!--        <div class="container is-max-widescreen">-->
<!--            <CalculationBlock/>-->
<!--        </div>-->
<!--    </section>-->
    <section class="section pt-6">
        <div class="title has-text-centered has-text-weight-bold">{$t('onsite_pipelines_page.cost_calc')}</div>
        <div class="container is-max-widescreen">
            <CalcTabs/>
        </div>
    </section>
</main>
