<script>
  // your script goes here

  import Button from "./Button.svelte";
  import InputForm from "./InputForm.svelte";

  let price = 0;
  $: installationInternalGas = false;
  $: projecItnternalGas = false;
  $: projectOnSiteGas = false;
  $: installationOnSiteGas = false;

</script>

<style lang="scss">
  .form {
    color: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;

    &__group {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    &__subtext {
      margin-bottom: 20px;
      color: #fff;
    }
  }
  .input__wrap {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    width: 360px;

    & input {
      display: none;
    }
    &_label {
      display: block;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: 8px;
        left: -20px;
        width: 14px;
        height: 14px;
        border: none;
        background: #fff;
      }

      &::after {
        content: "";
        position: absolute;
        top: 8px;
        left: -20px;
        width: 14px;
        height: 14px;
        background: url("/images/form-checkbox.png") center no-repeat;
        transition: 0.2s;
        opacity: 0;
      }
    }
  }

  input[type="checkbox"]:checked + .input__wrap_label::after {
    opacity: 1;
  }
  hr {
    width: 100%;
    height: 2px;
    background-color: gray;
  }

  .wrapper {
    padding-left: 1.3rem;
  }

  .price {
    &__block {
      position: relative;
      text-align: left;
      height: 100px;
      margin-bottom: 10px;
      border-bottom: 1px solid;
    }
    &__num {
      font-size: 2em;
      position: absolute;
      left: 72px;
      top: 45px;
    }
  }

</style>

<form class="form" name="gazlineForm">
  <div class="form__group">
    <div class="input__wrap">
      <div class="form__subtext">Вид работ</div>
      <div class="wrapper">
        <input
          type="checkbox"
          id="projectOnSiteGas"
          name="projectOnSiteGas"
          bind:checked={projectOnSiteGas}
          value="yes" />
        <label class="input__wrap_label" for="projectOnSiteGas">
          проект на внутриплощадочный газопровод</label>

        <input
          type="checkbox"
          id="projecItnternalGas"
          name="projecItnternalGas"
          value="yes"
          bind:checked={projecItnternalGas} />
        <label class="input__wrap_label" for="projecItnternalGas">
          проект на внутренний газопровод</label>

        <input
          type="checkbox"
          id="installationOnSiteGas"
          name="installationOnSiteGas"
          value="yes"
          bind:checked={installationOnSiteGas} />
        <label class="input__wrap_label" for="installationOnSiteGas">
          монтаж внутриплощадочного газопровода</label>

        <input
          type="checkbox"
          id="installationInternalGas"
          name="installationInternalGas"
          value="yes"
          bind:checked={installationInternalGas} />
        <label class="input__wrap_label" for="installationInternalGas">
          монтаж внутреннего газопровода</label>
      </div>
    </div>
    <hr />
  </div>
  <div class="is-max-desktop computing">
    <div class="columns is-justify-content-center">
      <div class="column is-3">
        <InputForm
          id="name"
          name="name"
          placeholder="Ваше Имя"
          textLable="Ваше Имя" />
      </div>
      <div class="column is-3">
        <InputForm
          id="PhoneOrEmail"
          name="PhoneOrEmail"
          placeholder="Телефон или email"
          textLable="Телефон или email" />
      </div>
      {#if projectOnSiteGas || installationOnSiteGas}
        <div class="column is-3">
          <InputForm
            textLable="Протяженность, м"
            id="gazLen"
            name="gazLen"
            placeholder="Протяженность оринтеровочная" />
        </div>
      {/if}
      {#if projecItnternalGas || installationInternalGas}
        <div class="column is-3">
          <InputForm
            textLable="Мощность, МВт"
            id="gazPower"
            name="gazPower"
            placeholder="Мощность оринтеровочная" />
        </div>
      {/if}
    </div>
    <div class="columns is-justify-content-center">
      <div class="column is-3">
        <div class="price">
          <div class="price__block">
            Стоимость, руб
            <span class="price__num">{price}</span>
          </div>
        </div>
      </div>
      <div class="column is-3 is-flex is-align-items-flex-end pb-5">
        <Button btnName="gazlineForm">Расчитать</Button>
      </div>
    </div>
  </div>
</form>
