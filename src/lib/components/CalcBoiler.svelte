<script>
    import Button from './Button.svelte'
    import InputCalc from './inputCalc.svelte'
    import {bitrixLead, calculation} from '$lib/utils'

    let valid = false

    $: amount = 0

    const props = {
        project: false,
        install: false,
        gazPower: '',
        construction: '',
        equipment: '',
        name: '',
        PhoneOrEmail: '',
    }

    $: if (
        (props.gazPower.trim().length >= 1 &&
            props.name.trim().length >= 2 &&
            props.PhoneOrEmail.trim().length > 5 &&
            props.project) ||
        props.install
    ) {
        valid = true
    } else valid = false

    async function submitHandler() {
        amount = calculation(props)
        await bitrixLead({
            type: 'lead.calcBoiler',
            title: 'Калькулятор котельной',
            name: props.name,
            phone: props.PhoneOrEmail
        })
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

  .field {
    flex-direction: column;
  }

  .desc {
    text-align: end;
  }

  .column {
    padding-top: 0;
    padding-bottom: 0;
  }

  .construction {
    padding-left: 19px;
  }

  .equipment {
    padding-left: 3px;
  }

  .job {
    margin-left: 16px;
  }

  .invalid {
    border-left: 3px solid #b94a48;
  }

  .valid {
    border-left: 3px solid #42a948;
  }

  .amaunt {
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
    <form name="calcBoiler" on:submit|preventDefault={submitHandler}>
        <div class="control">
            <div class="container is-flex columns is-multiline">
                <div class="column absolute-center is-4 desc">
                    <span>Вид строительства</span>
                </div>
                <div class="field is-flex column is-8 construction">
                    <label class="construction__label radio-label" for="new">
                        <input
                                bind:group={props.construction}
                                checked="true"
                                id="new"
                                name="construction"
                                type="radio"
                                value="new"/>
                        <span>новое</span>
                    </label>

                    <label class="construction__label radio-label" for="rearmament">
                        <input
                                bind:group={props.construction}
                                id="rearmament"
                                name="construction"
                                type="radio"
                                value="rearmament"/>

                        <span>тех. перевооружение</span>
                    </label>

                    <label class="construction__label radio-label" for="reconstruction">
                        <input
                                bind:group={props.construction}
                                id="reconstruction"
                                name="construction"
                                type="radio"
                                value="reconstruction"/>
                        <span>реконструкция</span>
                    </label>
                </div>
                <div class="container column is-12 is-flex">
                    <InputCalc
                            bind:val={props.gazPower}
                            id="gazPower"
                            name="gazPower"
                            placeholder="Мощность котельной, МВт"
                            textLabel="Мощность котельной, МВт"/>
                </div>
                <div class="container column is-12 is-flex ml-3 mt-4">
                    <div class="column is-4 desc"><span>Оборудование</span></div>

                    <div class="field equipment is-flex column is-8">
                        <label class="radio-label equipment__label" for="Imported">
                            <input
                                    bind:group={props.equipment}
                                    checked
                                    id="Imported"
                                    name="equipment"
                                    type="radio"
                                    value="Imported"/>
                            <span>Импортное</span>
                        </label>
                        <label class="radio-label" for="domestic">
                            <input
                                    bind:group={props.equipment}
                                    id="domestic"
                                    name="equipment"
                                    type="radio"
                                    value="domestic"/>
                            <span>Отечественное</span>
                        </label>
                    </div>
                </div>

                <div class="container column is-12 is-flex mt-4">
                    <div class="column is-4 desc"><span>Вид работ</span></div>

                    <div
                            class="job column is-8 {props.project || props.install ? 'valid' : 'invalid'}">
                        <label class="checkbox-label job__label" for="project">
                            <input
                                    bind:checked={props.project}
                                    id="project"
                                    name="projectJob"
                                    type="checkbox"
                                    value="project"/>
                            <span>Проект</span>
                        </label>

                        <label class="checkbox-label job__label" for="inst">
                            <input
                                    bind:checked={props.install}
                                    id="inst"
                                    name="instJob"
                                    type="checkbox"
                                    value="inst"/>
                            <span>Монтаж</span>
                        </label>
                    </div>
                </div>

                <div class="container column is-12 is-flex">
                    <InputCalc
                            bind:val={props.name}
                            id="name"
                            name="name"
                            placeholder="Ваше Имя"
                            textLabel="Ваше Имя"/>
                </div>

                <div class="container column is-12 is-flex">
                    <InputCalc
                            bind:val={props.PhoneOrEmail}
                            id="PhoneOrEmail"
                            name="PhoneOrEmail"
                            placeholder="Телефон или email"
                            textLabel="Телефон или email"/>
                </div>

                <div
                        class="container column is-8 is-flex pb-4"
                        style="align-items: center;">
                    <div class="btn-wrap column is-6">
<!--                        <Button btnName="boilerForm" isDisabled={!valid} radius>-->
<!--                            Расчитать-->
<!--                        </Button>-->
                        <button type="submit" class="button is-primary is-rounded" disabled={!valid}>Рассчитать</button>
                    </div>
                </div>
                <div class="amaunt container column is-12 is-flex">
                    <div class="column amaunt__text absolute-center is-4 desc">
                        <span>Стоимость, руб</span>
                    </div>
                    <div class="column is-8 amaunt__num"><span>{amount}</span></div>
                </div>
            </div>
        </div>
    </form>
</div>
