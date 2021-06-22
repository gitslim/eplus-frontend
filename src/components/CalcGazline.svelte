<script>
  import Button from "./Button.svelte";
  import InputCalc from "./inputCalc.svelte";

  $: projekts = {
    projectOnSiteGas: false,
    projecItnternalGas: false,
    installationOnSiteGas: false,
    installationInternalGas: false,
  };

  $: valid = Object.keys(projekts).find((key) => projekts[key] === true)
    ? true
    : false;

  export let amaunt = 0;
</script>

<style lang="scss">
  label {
    display: flex;
    align-items: center;
  }
  span {
    margin-left: 10px;
  }
  // .field {
  //   flex-direction: column;
  // }

  .desc {
    text-align: end;
  }
  .job {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
  }

  .invalid {
    border-left: 3px solid #b94a48;
  }

  .valid {
    border-left: 3px solid #42a948;
  }

  .amaunt {
    align-items: center;
    &__text {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    &__num {
      height: 2.3rem;
      display: flex;
      align-items: center;
      font-size: 1.5em;
    }
  }
</style>

<div class="contauner">
  <form class="calcGazline">
    <div class="control">
      <div class="container is-flex columns is-multiline">
        <div class="container column is-12 is-flex mt-4">
          <div class="column pr-2 is-4 desc"><span>Вид работ</span></div>
          <div class="job column py-0 is-8 {valid ? 'valid' : 'invalid'}">
            <label class="checkbox-label job__label" for="projectOnSiteGas">
              <input
                type="checkbox"
                id="projectOnSiteGas"
                name="projectOnSiteGas"
                bind:checked={projekts.projectOnSiteGas} />
              <span>проект на внутриплощадочный газопровод</span>
            </label>

            <label class="checkbox-label job__label" for="projecItnternalGas">
              <input
                type="checkbox"
                id="projecItnternalGas"
                name="projecItnternalGas"
                bind:checked={projekts.projecItnternalGas} />
              <span>проект на внутренний газопровод</span>
            </label>

            <label
              class="checkbox-label job__label"
              for="installationOnSiteGas">
              <input
                type="checkbox"
                id="installationOnSiteGas"
                name="installationOnSiteGas"
                bind:checked={projekts.installationOnSiteGas} />
              <span> монтаж внутриплощадочного газопровода</span>
            </label>

            <label
              class="checkbox-label job__label"
              for="installationInternalGas">
              <input
                type="checkbox"
                id="installationInternalGas"
                name="installationInternalGas"
                bind:checked={projekts.installationInternalGas} />
              <span>монтаж внутреннего газопровода</span>
            </label>
          </div>
        </div>
        {#if projekts.installationOnSiteGas || projekts.projectOnSiteGas}
          <div class="container py-0 column is-12 is-flex">
            <InputCalc
              textLable="Протяженность, м"
              id="gazLen"
              name="gazLen"
              placeholder="Протяженность оринтеровочная" />
          </div>
        {/if}

        {#if projekts.installationInternalGas || projekts.projecItnternalGas}
          <div class="container py-0 column is-12 is-flex">
            <InputCalc
              textLable="Мощность, МВт"
              id="gazPower"
              name="gazPower"
              placeholder="Мощность оринтеровочная" />
          </div>
        {/if}

        <div class="container py-0 column is-12 is-flex">
          <InputCalc
            id="name"
            name="name"
            placeholder="Ваше Имя"
            textLable="Ваше Имя" />
        </div>

        <div class="container py-0 column is-12 is-flex">
          <InputCalc
            id="PhoneOrEmail"
            name="PhoneOrEmail"
            placeholder="Телефон или email"
            textLable="Телефон или email" />
        </div>

        <div
          class="container column is-8 is-flex py-0"
          style="align-items: center;">
          <div class="btn-wrap column py-0 is-6">
            <Button class="mt-0" btnName="boilerForm" radius>Расчитать</Button>
          </div>
        </div>
        <div class="amaunt container column is-12 is-flex">
          <div class="column amaunt__text absolute-center py-0 is-4 desc">
            <span>Стоимость, руб</span>
          </div>
          <div class="amaunt__num"><span>{amaunt}</span></div>
        </div>
      </div>
    </div>
  </form>
</div>
