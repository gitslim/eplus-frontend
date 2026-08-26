<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import CalcKotel from '$lib/components/calc/CalcKotel.svelte'
    import HiddenH1 from "$lib/components/HiddenH1.svelte"
    import {t} from 'svelte-i18n'
</script>

<style lang="scss">
  #name,
  #PhoneOrEmail,
  #gazPower {
    margin-left: 12px;
  }

  .calc .widget{
    display: flex;
    justify-content: center;

    .title-wrapper{
      max-width: 850px;

      text-align: center;
      font-size: 30px;
    }

    .heading-line{
      margin-left: 35px;
    }
  }
</style>

<SvelteSeo title="{$t('calculators.boiler_page.meta_title')}" description="{$t('calculators.boiler_page.meta_description')}"/>

<main class="main-content calc">
    <HiddenH1>{$t('calculators.boiler_page.meta_h1')}</HiddenH1>
    <div class="container is-widescreen">
        <div class="columns">
            <div class="widget column">
                <h2 class="title title-wrapper ">
                    <span>
                        <span><span>{$t('calculators.boiler_page.title_part1')}</span></span>
                         <span><span>{$t('calculators.boiler_page.title_part2')}</span></span>
                        <span class="heading-line"></span>
                    </span>
                </h2>
            </div>
        </div>
        <div class="columns">
            <div class="column is-offset-1 is-8">
                <CalcKotel/>
            </div>
        </div>
    </div>
</main>
