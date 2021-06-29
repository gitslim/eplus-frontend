<script>
  // your script goes here

  import Button from "./Button.svelte";
  import InputForm from "./InputForm.svelte";
  import { calculation } from "../utils";

  $: amount = 0;
  let valid = false;

  $: projectOnSiteGas = false;
  $: projectInternalGas = false;
  $: installOnSiteGas = false;
  $: installInternalGas = false;

  const props = {
    project: false,
    install: false,
    gazPower: "",
    gazLine: "",
    construction: "",
    equipment: "",
    name: "",
    PhoneOrEmail: "",
  };

  $: props.project = projectOnSiteGas || projectInternalGas ? true : false;
  $: props.install = installOnSiteGas || installInternalGas ? true : false;
  $: if (
    (props.name.trim().length > 1 &&
      props.PhoneOrEmail.trim().length > 5 &&
      props.project) ||
    props.install
  ) {
    valid = true;
  } else valid = false;

  function submitHandler() {
    props.project = projectOnSiteGas || projectInternalGas ? true : false;

    props.install = installOnSiteGas || installInternalGas ? true : false;

    //console.log(props);
    amount = calculation(props);
  }
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

<form class="form" name="gazlineForm" on:submit|preventDefault={submitHandler}>
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
          bind:checked={projectInternalGas} />
        <label class="input__wrap_label" for="projecItnternalGas">
          проект на внутренний газопровод</label>

        <input
          type="checkbox"
          id="installationOnSiteGas"
          name="installationOnSiteGas"
          value="yes"
          bind:checked={installOnSiteGas} />
        <label class="input__wrap_label" for="installationOnSiteGas">
          монтаж внутриплощадочного газопровода</label>

        <input
          type="checkbox"
          id="installationInternalGas"
          name="installationInternalGas"
          value="yes"
          bind:checked={installInternalGas} />
        <label class="input__wrap_label" for="installationInternalGas">
          монтаж внутреннего газопровода</label>
      </div>
    </div>
    <hr />
  </div>
  <div class="is-max-desktop computing">
    <div class="columns" style="justify-content: center;">
      <div class="column is-3">
        <InputForm
          id="name"
          name="name"
          placeholder="Ваше Имя"
          textLable="Ваше Имя"
          bind:val={props.name} />
      </div>
      <div class="column is-3">
        <InputForm
          id="PhoneOrEmail"
          name="PhoneOrEmail"
          placeholder="Телефон или email"
          textLable="Телефон или email"
          bind:val={props.PhoneOrEmail} />
      </div>
      {#if projectInternalGas || installInternalGas}
        <div class="column is-3">
          <InputForm
            textLable="Протяженность, м"
            id="gazLen"
            name="gazLen"
            placeholder="Протяженность оринтеровочная"
            bind:val={props.gazLine} />
        </div>
      {/if}
      {#if projectOnSiteGas || installOnSiteGas}
        <div class="column is-3">
          <InputForm
            textLable="Мощность, МВт"
            id="gazPower"
            name="gazPower"
            placeholder="Мощность оринтеровочная"
            bind:val={props.gazPower} />
        </div>
      {/if}
    </div>
    <div class="columns" style="justify-content: center;">
      <div class="column is-3">
        <div class="price">
          <div class="price__block">
            Стоимость, руб <span class="price__num">{amount}</span>
          </div>
        </div>
      </div>
      <div class="column is-3 is-flex pb-5" style="align-items: flex-end;">
        <Button btnName="gazlineForm" isDisabled={!valid}>Расчитать</Button>
      </div>
    </div>
  </div>
</form>
