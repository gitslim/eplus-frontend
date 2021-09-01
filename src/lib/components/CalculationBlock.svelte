<script>
    import BoilerForm from './BoilerForm.svelte'
    import GaslinesForm from './GaslinesForm.svelte'
    import TitleLanding from './TitleLanding.svelte'

    let white = true
    let swichToggle = true
    let active = true

    function HandlerClick() {
        swichToggle = !swichToggle
        active = !active
    }
</script>

<style lang="scss">
  .calc {
    &__nav {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin-bottom: 60px;
      list-style: none;
      padding-left: 0;
    }

    &__item {
      position: relative;
      display: block;
    }

    &__link {
      display: block;
      padding: 15px 0;
      font-size: 16px;
      color: rgb(254, 254, 254);
      font-weight: bold;
      line-height: 1.2;
      border: 1px solid #ff6600;
      width: 190px;
      transition: 0.3s all;
      letter-spacing: unset;
      text-transform: none;
    }
  }

  .active {
    background: #ff6600;
    pointer-events: none;
    cursor: default;
  }
</style>

<!-- <BoilerForm/>
<GaslinesForm/> -->

<div class="calc">
    <TitleLanding titleText="Расчет стоимости" white/>
    <ul class="calc__nav">
        <li class="calc__item" class:active>
            <a
                    class="calc__link"
                    href="/#/"
                    on:click|preventDefault={HandlerClick}>Котельные</a>
        </li>
        <li class="calc__item active" class:active={!active}>
            <a
                    class="calc__link"
                    href="/#/"
                    on:click|preventDefault={HandlerClick}>Газопроводы</a>
        </li>
    </ul>
    <div class="calc-form__wrap">
        {#if swichToggle}
            <BoilerForm/>
        {:else}
            <GaslinesForm/>
        {/if}
    </div>
</div>
