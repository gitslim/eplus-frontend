<script context="module">
  import SvelteSeo from "svelte-seo";
</script>

<script>
  import CalcBoiler from "../components/CalcBoiler.svelte";
  import CalcGaslines from "../components/CalcGazline.svelte";
  import CallbackForm from "../components/CallbackForm.svelte";
  import SidebarRight from "../components/SidebarRight.svelte";

  let swichToggle = false;
  let active = false;

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
      font-size: 1em;
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

  :global(.aside__right) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 370px;
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
  }
</style>

<SvelteSeo {title} />
<main role="main" class="main main-page columns my-6">
  <div class="container mt-4">
    <div class="columns">
      <div class="column is-8">
        <div class="widget column">
          <h2 class="title">
            <span>{title}</span>
            <span class="heading-line" />
          </h2>
        </div>
        <div class="column calc">
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
        <div class="column">
          <div class="calc-form__wrap">
            {#if swichToggle}
              <CalcBoiler />
            {:else}
              <CalcGaslines />
            {/if}
          </div>
        </div>
      </div>
      <div class="column is-4">
        <aside class="aside__right">
          <SidebarRight />
          <CallbackForm />
        </aside>
      </div>
    </div>
  </div>
</main>
