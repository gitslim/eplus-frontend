<script>
    import BtnZayavka from './BtnZayavka.svelte'
    import TitleLanding from './TitleLanding.svelte'

    $: white
    $: left
    $: btnText
    $: radius
    $: bWhite
    $: btnWhite = true
    export let titleText='Нужна консультация?'
    export let white, left, btnText, radius, bWhite, btnWhite
    let modal
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
    <TitleLanding {left} {titleText} {white}/>
    <div class="desc">
        Позвоните нам по телефону:<br/>
        <b class="roistat-phone" style="font-size:15px;">+7 (495) 790-76-97</b><br/>
        или воспользуйтесь формой обратной связи
    </div>
    <div class="mt-4">
        <BtnZayavka {btnText} {btnWhite} {radius}/>
    </div>
</div>
