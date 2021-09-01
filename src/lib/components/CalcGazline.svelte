<script>
    import Button from './Button.svelte'
    import InputCalc from './inputCalc.svelte'
    import {calculation} from '$lib/utils'

    let valid = false

    $: amount = 0

    $: projectOnSiteGas = false
    $: projectInternalGas = false
    $: installOnSiteGas = false
    $: installInternalGas = false

    const props = {
        project: false,
        install: false,
        gazPower: '',
        gazLine: '',
        construction: '',
        equipment: '',
        name: '',
        PhoneOrEmail: '',
    }

    $: props.project = projectOnSiteGas || projectInternalGas ? true : false
    $: props.install = installOnSiteGas || installInternalGas ? true : false
    $: if (
        (props.name.trim().length > 1 &&
            props.PhoneOrEmail.trim().length > 5 &&
            props.project) ||
        props.install
    ) {
        valid = true
    } else valid = false

    function submitHandler() {
        props.project = projectOnSiteGas || projectInternalGas ? true : false

        props.install = installOnSiteGas || installInternalGas ? true : false

        //console.log(props);
        amount = calculation(props)
    }
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

<div class="container">
    <form class="calcGazline" on:submit|preventDefault={submitHandler}>
        <div class="control">
            <div class="container is-flex columns is-multiline">
                <div class="container column is-12 is-flex mt-4">
                    <div class="column pr-2 is-4 desc"><span>Вид работ</span></div>
                    <div
                            class="job column py-0 is-8 {projectOnSiteGas || projectInternalGas || installOnSiteGas || installInternalGas ? 'valid' : 'invalid'}">
                        <label class="checkbox-label job__label" for="projectOnSiteGas">
                            <input
                                    bind:checked={projectOnSiteGas}
                                    id="projectOnSiteGas"
                                    name="projectOnSiteGas"
                                    type="checkbox"/>
                            <span>проект на внутриплощадочный газопровод</span>
                        </label>

                        <label class="checkbox-label job__label" for="projectInternalGas">
                            <input
                                    bind:checked={projectInternalGas}
                                    id="projectInternalGas"
                                    name="projectInternalGas"
                                    type="checkbox"/>
                            <span>проект на внутренний газопровод</span>
                        </label>

                        <label
                                class="checkbox-label job__label"
                                for="installationOnSiteGas">
                            <input
                                    bind:checked={installOnSiteGas}
                                    id="installationOnSiteGas"
                                    name="installationOnSiteGas"
                                    type="checkbox"/>
                            <span> монтаж внутриплощадочного газопровода</span>
                        </label>

                        <label
                                class="checkbox-label job__label"
                                for="installationInternalGas">
                            <input
                                    bind:checked={installInternalGas}
                                    id="installationInternalGas"
                                    name="installationInternalGas"
                                    type="checkbox"/>
                            <span>монтаж внутреннего газопровода</span>
                        </label>
                    </div>
                </div>
                {#if projectInternalGas || installInternalGas}
                    <div class="container py-0 column is-12 is-flex">
                        <InputCalc
                                textLabel="Протяженность, м"
                                id="gazLen"
                                name="gazLen"
                                placeholder="Протяженность ориентировочная"
                                bind:val={props.gazLine}/>
                    </div>
                {/if}

                {#if projectOnSiteGas || installOnSiteGas}
                    <div class="container py-0 column is-12 is-flex">
                        <InputCalc
                                textLabel="Мощность, МВт"
                                id="gazPower"
                                name="gazPower"
                                placeholder="Мощность ориентировочная"
                                bind:val={props.gazPower}/>
                    </div>
                {/if}

                <div class="container py-0 column is-12 is-flex">
                    <InputCalc
                            bind:val={props.name}
                            id="name"
                            name="name"
                            placeholder="Ваше Имя"
                            textLabel="Ваше Имя"/>
                </div>

                <div class="container py-0 column is-12 is-flex">
                    <InputCalc
                            bind:val={props.PhoneOrEmail}
                            id="PhoneOrEmail"
                            name="PhoneOrEmail"
                            placeholder="Телефон или email"
                            textLabel="Телефон или email"/>
                </div>

                <div
                        class="container column is-8 is-flex py-0"
                        style="align-items: center;">
                    <div class="btn-wrap column py-0 is-6">
                        <Button
                                btnName="boilerForm"
                                class="mt-0"
                                isDisabled={!valid}
                                radius>
                            Расчитать
                        </Button>
                    </div>
                </div>
                <div class="amaunt container column is-12 is-flex">
                    <div class="column amaunt__text absolute-center py-0 is-4 desc">
                        <span>Стоимость, руб</span>
                    </div>
                    <div class="amaunt__num"><span>{amount}</span></div>
                </div>
            </div>
        </div>
    </form>
</div>
