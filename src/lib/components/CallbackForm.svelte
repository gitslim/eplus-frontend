<script>
    import BtnZayavka from './BtnZayavka.svelte'
    import TitleLanding from './TitleLanding.svelte'
    import {t} from 'svelte-i18n'

    $: white
    $: left
    $: btnText
    $: radius
    $: bWhite
    $: btnWhite = true
    export let titleText = ''
    export let white, left, btnText, radius, bWhite, btnWhite
    let modal

    $: resolvedTitle = titleText || $t('common.need_consultation')
</script>

<style lang="scss">
  .contact-link {
    background: #f86923;
    color: #fff;
    padding: 30px;
  }

  .bWhite {
    background: #fff;
    color: black;
  }
</style>

<div class="contact-link" class:bWhite>
    <TitleLanding {left} titleText={resolvedTitle} {white}/>
    <div class="desc">
        {$t('common.call_us')}<br/>
        <b class="roistat-phone" style="font-size:15px;">+7 (495) 790-76-97</b><br/>
        {$t('common.or_use_feedback_form')}
    </div>
    <div class="mt-4">
        <BtnZayavka {btnText} {btnWhite} {radius}/>
    </div>
</div>
