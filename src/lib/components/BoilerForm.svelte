<script>
    import Button from './Button.svelte'
    import InputForm from './InputForm.svelte'
    import {bitrixLead, calculation} from '$lib/utils'

    $: amount = 0

    let valid = false

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
  .title-block {
    width: 100%;
    text-align: left;
    color: #fff;
    margin-bottom: 15px;
  }

  .radio-label {
    position: relative;
    padding: 0 0 0 24px;
    cursor: pointer;
    display: block;
    color: #fff;
    text-align: left;

    &::before {
      content: "";
      position: absolute;
      top: 9px;
      left: 0;
      width: 14px;
      height: 14px;
      border: none;
      background: #fff;
    }

    &::after {
      content: "";
      position: absolute;
      top: 11px;
      left: 2px;
      width: 10px;
      height: 10px;
      background: #ff6600;
      opacity: 0;
    }
  }

  .checkbox-label {
    position: relative;
    padding: 0 0 0 24px;
    cursor: pointer;
    display: block;
    color: #fff;
    text-align: left;

    &::before {
      content: "";
      position: absolute;
      top: 9px;
      left: 0;
      width: 14px;
      height: 14px;
      border: none;
      background: #fff;
    }

    &::after {
      content: "";
      position: absolute;
      top: 11px;
      left: 2px;
      width: 10px;
      height: 10px;
      background: url("/images/form-checkbox.png") no-repeat center;

      opacity: 0;
    }
  }

  input[type="radio"],
  input[type="checkbox"] {
    display: none;
  }

  input[type="radio"]:checked + .radio-label::after,
  input[type="checkbox"]:checked + .checkbox-label::after {
    opacity: 1;
  }

  .btn-wrap {
    width: 100%;
    padding-bottom: 24px;
  }

  hr {
    width: 100%;
    height: 2px;
    background-color: gray;
  }

  .price {
    &__block {
      color: #fff;
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

<form class="form" name="boilerForm" on:submit|preventDefault={submitHandler}>
    <div class="colums is-max-desktop is-flex is-justify-content-center">
        <div class="column is-3">
            <div class="construction title-block">Вид строительства</div>
            <div class="construction__inputs">
                <input checked id="new" name="construction" type="radio" value="new"/>
                <label class="construction__label radio-label" for="new">новое</label>
                <input
                        bind:group={props.construction}
                        checked
                        id="rearmament"
                        name="rearmament"
                        type="radio"
                        value="new"/>
                <label class="construction__label radio-label" for="rearmament">
                    тех. перевооружение
                </label>
                <input
                        bind:group={props.construction}
                        id="reconstruction"
                        name="reconstruction"
                        type="radio"
                        value="reconstruction"/>
                <label class="construction__label radio-label" for="reconstruction">
                    реконструкция
                </label>
            </div>
        </div>

        <div class="column is-3">
            <InputForm
                    bind:val={props.gazPower}
                    id="gazPower"
                    name="gazPower"
                    placeholder="Мощность ориентировочная"
                    textLable="Мощность, МВт"/>
        </div>

        <div class="column is-3">
            <div class="title-block equipment">Оборудование</div>
            <div class="equipment__inputs">
                <input
                        bind:group={props.equipment}
                        checked
                        id="Imported"
                        name="equipment"
                        type="radio"
                        value="Imported"/>
                <label
                        class="radio-label equipment__label"
                        for="Imported">Импортное</label>
                <input
                        bind:group={props.equipment}
                        id="domestic"
                        name="equipment"
                        type="radio"
                        value="domestic"/>
                <label
                        class="radio-label equipment__label"
                        for="domestic">Отечественное</label>
            </div>
        </div>

        <div class="column is-3 pl-4">
            <div class="title-block job">Вид работ</div>
            <div class="job__inputs">
                <input
                        bind:checked={props.project}
                        id="project"
                        name="projectJob"
                        type="checkbox"
                        value="project"/>
                <label class="checkbox-label job__label" for="project">Проект</label>
                <input
                        bind:checked={props.install}
                        id="inst"
                        name="instJob"
                        type="checkbox"
                        value="inst"/>
                <label class="checkbox-label job__label" for="inst">Монтаж</label>
            </div>
        </div>
    </div>

    <hr/>

    <div class="colums is-max-desktop is-flex is-justify-content-center">
        <div class="column is-3">
            <InputForm
                    bind:val={props.name}
                    id="name"
                    name="name"
                    placeholder="Ваше Имя"
                    textLable="Ваше Имя"/>
        </div>
        <div class="column is-3">
            <InputForm
                    bind:val={props.PhoneOrEmail}
                    id="PhoneOrEmail"
                    name="PhoneOrEmail"
                    placeholder="Телефон или email"
                    textLable="Телефон или email"/>
        </div>
        <div class="column is-3 is-flex pb-4" style="align-items: flex-end;">
            <div class="btn-wrap">
<!--                <Button btnName="boilerForm" isDisabled={!valid}>Расчитать</Button>-->
                <button type="submit" class="button is-primary is-rounded" disabled={!valid}>Рассчитать</button>
            </div>
        </div>

        <div class="column is-3">
            <div class="price">
                <div class="price__block">
                    Стоимость, руб <span class="price__num">{amount}</span>
                </div>
            </div>
        </div>
    </div>
</form>
