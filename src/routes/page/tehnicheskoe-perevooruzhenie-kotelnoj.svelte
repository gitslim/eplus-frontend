<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import HeaderLanding from '$lib/components/HeaderLanding.svelte'
    import TitleLanding from '$lib/components/TitleLanding.svelte'
    import PurposeCard from '$lib/components/PurposeCard.svelte'
    import BtnZayavka from '$lib/components/BtnZayavka.svelte'
    import InfoBlock from '$lib/components/InfoBlock.svelte'
    import CalcTabs from '$lib/components/calc/CalcTabs.svelte'
    import LazyImage from "svelte-lazy-image"
    import HiddenH1 from "$lib/components/HiddenH1.svelte"
    import {t} from 'svelte-i18n'

    $: headerCaption = {
        caption: $t('boiler_upgrade.title'),
    }

    $: info = {
        text: $t('boiler_upgrade.info_text'),
        subText: $t('boiler_upgrade.info_sub'),
    }

    $: questions = [
        {
            id: '01',
            text: $t('boiler_upgrade.q1'),
        },
        {
            id: '02',
            text: $t('boiler_upgrade.q2'),
        },
        {
            id: '03',
            text: $t('boiler_upgrade.q3'),
        },
        {
            id: '04',
            text: $t('boiler_upgrade.q4'),
        },
        {
            id: '05',
            text: $t('boiler_upgrade.q5'),
        },
    ]

    $: functionsCard = [
        {
            id: 1,
            text: $t('boiler_upgrade.step1'),
            alt: 'image-card',
            src: '/images/tehnicheskoePerevooruzhenie/steps-kot-1.png',
        },
        {
            id: 2,
            text: $t('boiler_upgrade.step2'),
            alt: 'image-card',
            src: '/images/tehnicheskoePerevooruzhenie/steps-kot-2.png',
        },
        {
            id: 3,
            text: $t('boiler_upgrade.step3'),
            alt: 'image-card',
            src: '/images/tehnicheskoePerevooruzhenie/steps-kot-3.png',
        },
        {
            id: 4,
            text: $t('boiler_upgrade.step4'),
            alt: 'image-card',
            src: '/images/tehnicheskoePerevooruzhenie/steps-kot-4.png',
        },
        {
            id: 5,
            text: $t('boiler_upgrade.step5'),
            alt: 'image-card',
            src: '/images/tehnicheskoePerevooruzhenie/steps-kot-5.png',
        },
        {
            id: 6,
            text: $t('boiler_upgrade.step6'),
            alt: 'image-card',
            src: '/images/tehnicheskoePerevooruzhenie/steps-kot-6.png',
        },
    ]
</script>

<style lang="scss">
  .caption {
    display: block;
    padding-top: 180px !important;
    padding-bottom: 130px;
    background-size: cover;
    background-blend-mode: multiply;
    background: url("/images/pages/tehnicheskoe-perevooruzhenie-kotelnoj/Рисунок10.jpg") no-repeat center,
    linear-gradient(0deg, grey, transparent),
    linear-gradient(45deg, grey, transparent),
    linear-gradient(80deg, grey, transparent),
    linear-gradient(100deg, grey, transparent);
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

  .questions {
    padding-top: 60px;
    text-align: center;

    &__desc {
      max-width: 893px;
      margin: 0 auto 50px;
      font-size: 18px;
      font-weight: 300;
      line-height: 30px;
    }

    &__items {
      display: flex;
      flex-direction: column;
    }

    &__item {
      display: flex;
      padding-bottom: 50px;
      position: relative;

      &:last-child::before {
        display: none;
      }

      &::before {
        content: "";
        position: absolute;
        left: 94px;
        top: 54px;
        height: 100%;
        width: 2px;
        border-right: 2px dashed #3838387a;
      }

      &-num {
        font-size: 40px;
        color: rgb(56, 56, 56);
        font-weight: bold;
        text-align: center;
        min-width: 55px;
        margin-right: 100px;
        height: 100%;
      }

      &-text {
        display: inline-flex;
        align-items: center;
        text-align: left;
        font-size: 20px;
        color: rgb(56, 56, 56);
        font-weight: bold;
        line-height: 1.2;
      }

      &::after {
        content: "";
        position: absolute;
        top: 40px;
        left: 95px;
        transform: translateX(-50%);
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #fff;
        border: 4px solid #ff6600;
      }
    }
  }

  .functions {
    margin-bottom: 40px;
    padding-top: 60px;
    text-align: center;

    &__items {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
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


<SvelteSeo title="{$t('boiler_upgrade.meta_title')}" description="{$t('boiler_upgrade.meta_description')}"/>
<HiddenH1>{$t('boiler_upgrade.meta_h1')}</HiddenH1>

<main class="main">
    <section class="section caption">
        <div class="container is-widescreen">
            <HeaderLanding {...headerCaption}/>
            <BtnZayavka btnText="{$t('boiler_upgrade.order')}" radius="true"/>
        </div>
    </section>

    <div class="container is-max-widescreen">
        <div class="main__info-block">
            <InfoBlock {...info}/>
        </div>
    </div>

    <section class="section questions">
        <div class="container is-max-widescreen">
            <p class="questions__desc">
                {$t('boiler_upgrade.questions_intro')}
            </p>
            <div class="questions__wrap">
                <div class="columns questions__items">
                    {#each questions as {text, id}}
                        <div class="column is-10 questions__item">
                            <p class="questions__item-num">{id}</p>
                            <p class="questions__item-text">{text}</p>
                        </div>
                    {/each}
                </div>
            </div>
            <p class="questions__desc">
                {$t('boiler_upgrade.questions_outro')}
            </p>
        </div>
    </section>
    <section class="section functions">
        <div class="container is-widescreen">
            <TitleLanding titleText="{$t('boiler_upgrade.stages_title')}"/>
            <div class="columns functions__items">
                {#each functionsCard as item}
                    <PurposeCard text={item.text} alt={item.alt} src={item.src}/>
                {/each}
            </div>
        </div>
    </section>
<!--    <section class="section calculation">-->
<!--        <div class="container is-max-widescreen">-->
<!--            <CalculationBlock/>-->
<!--        </div>-->
<!--    </section>-->
    <section class="section">
        <div class="title has-text-centered has-text-weight-bold">{$t('boiler_upgrade.cost_calc')}</div>
        <div class="container is-max-widescreen">
            <CalcTabs/>
        </div>
    </section>
</main>
