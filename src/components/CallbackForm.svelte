<script>
  import BtnZayavka from "./BtnZayavka.svelte";
  import TitleLanding from "./TitleLanding.svelte";
  $: white = true;
  $: left;
  $: btnText;
  $: radius;
  $: bWhite;
  $: btnWhite = true;
  export let white, left, btnText, radius, bWhite, btnWhite;
  let modal;
</script>

<style lang="scss">
  .contact-link {
    background: #f86923;
    color: #fff;
    padding: 30px;
  }

  // .title__bottom {
  //   font-size: 16px;
  //   font-weight: 700;
  //   margin-bottom: 10px;
  // }

  // .btn-white {
  //   color: #222;
  //   margin-top: 20px;
  //   border: 2px solid#fff;
  //   background: #fff;
  //   border-radius: 30px;
  //   overflow: hidden;
  //   transition: all 0.3s;
  //   font-size: 12px;
  //   letter-spacing: 1px;
  //   text-transform: uppercase;
  //   padding: 9px 24px 9px;
  //   position: relative;
  //   display: inline-block;
  //   z-index: 1;
  //   font-weight: 700;

  //   &:hover {
  //     color: #fff;
  //     background-color: #f86923;
  //   }
  // }

  .bWhite {
    background: #fff;
    color: black;
  }
</style>

<div class="contact-link" class:bWhite>
  <!-- <div class="title__bottom">Нужна консультация ?</div> -->
  <TitleLanding titleText="Нужна консультация ?" {white} {left} />
  <div class="desc">
    Позвоните нам по телефону:<br />
    <b style="font-size:15px;" class="roistat-phone">+7 (495) 790-76-97</b><br />
    или воспользуйтесь формой обратной связи
  </div>
  <div class="mt-4">
    <BtnZayavka {btnText} {radius} {btnWhite} />
  </div>
</div>
