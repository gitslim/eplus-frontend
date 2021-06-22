<script context="module">
  import SvelteSeo from "svelte-seo";
</script>

<script>
  import CalcBoiler from "../components/CalcBoiler.svelte";
  import CalcGaslines from "../components/calcGazline.svelte";

  let swichToggle = true;
  let active = true;

  function handlerClick() {
    active = !active;
    swichToggle = !swichToggle;
  }

  let title = "Калькуляторы";
</script>

<style lang="scss">
  .calc {
    &__link {
      font-weight: 700;
      color: #222;
      padding: 8px 18px !important;
      border: none;
      font-size: 13px;
      text-transform: uppercase;
      background: none;
      letter-spacing: 1px;

      &:focus {
        background-color: transparent;
        cursor: default;
      }

      &:hover {
        text-decoration: none;
        background-color: #eeeeee;
      }
    }
  }

  a:hover,
  a:focus,
  a:active {
    transition: all 0.35s;
    outline: none !important;
    color: #f86923;
  }
  .active {
    color: #f86923;
    pointer-events: none;
    cursor: default;
  }
</style>

<SvelteSeo {title} />
<main role="main" class="main main-page">
  <div class="container mt-4">
    <div class="widget column is-8">
      <h2 class="title"><span>{title}</span> <span class="heading-line" /></h2>
    </div>
    <div class="column is-8 calc">
      <ul class="calc__nav is-flex">
        <li class="calc__item">
          <a
            class="calc__link"
            class:active
            on:click|preventDefault={handlerClick}
            href="/#/">Котельные</a>
        </li>
        <li class="calc__item">
          <a
            class="calc__link"
            class:active={!active}
            href="/#/"
            on:click|preventDefault={handlerClick}>Газопроводы</a>
        </li>
      </ul>
    </div>
    <div class="column is-8">
      <div class="calc-form__wrap">
        {#if swichToggle}
          <CalcBoiler />
        {:else}
          <CalcGaslines />
        {/if}
      </div>
    </div>
  </div>
</main>
