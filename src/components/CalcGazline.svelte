<script>
  import Button from "./Button.svelte";
  import InputCalc from "./inputCalc.svelte";

  $: projekts = {
    projectOnSiteGas: false,
    projecItnternalGas: false,
    installationOnSiteGas: false,
    installationInternalGas: false,
  };

  $: valid = projekts ? true : false;

  // export let amaunt = 0;
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
  }

  .invalid {
    border-left: 3px solid #b94a48;
  }

  .valid {
    border-left: 3px solid #42a948;
  }
</style>

<div class="contauner">
  <form class="calcGazline">
    <div class="control">
      <div class="container is-flex columns is-multiline">
        <div class="container column is-12 is-flex mt-4">
          <div class="column is-4 desc"><span>Вид работ</span></div>
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
      </div>
    </div>
  </form>
</div>
