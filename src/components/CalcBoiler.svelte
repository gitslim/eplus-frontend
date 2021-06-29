<script>
  import Button from "./Button.svelte";
  import InputCalc from "./inputCalc.svelte";
  import { calculation } from "../utils";

  let valid = false;

  $: amount = 0;

  const props = {
    project: false,
    install: false,
    gazPower: "",
    construction: "",
    equipment: "",
    name: "",
    PhoneOrEmail: "",
  };

  $: if (
    (props.gazPower.trim().length >= 1 &&
      props.name.trim().length >= 2 &&
      props.PhoneOrEmail.trim().length > 5 &&
      props.project) ||
    props.install
  ) {
    valid = true;
  } else valid = false;

  function submitHandler() {
    amount = calculation(props);
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
  <form on:submit|preventDefault={submitHandler} name="calcBoiler">
    <div class="control">
      <div class="container is-flex columns is-multiline">
        <div class="column absolute-center is-4 desc">
          <span>Вид строительства</span>
        </div>
        <div class="field is-flex column is-8 construction">
          <label class="construction__label radio-label" for="new">
            <input
              checked="true"
              type="radio"
              id="new"
              value="new"
              name="construction"
              bind:group={props.construction} />
            <span>новое</span>
          </label>

          <label class="construction__label radio-label" for="rearmament">
            <input
              type="radio"
              id="rearmament"
              value="rearmament"
              bind:group={props.construction}
              name="construction" />

            <span>тех. перевооружение</span>
          </label>

          <label class="construction__label radio-label" for="reconstruction">
            <input
              type="radio"
              id="reconstruction"
              value="reconstruction"
              bind:group={props.construction}
              name="construction" />
            <span>реконструкция</span>
          </label>
        </div>
        <div class="container column is-12 is-flex">
          <InputCalc
            textLabel="Мощность котельной, МВт"
            id="gazPower"
            name="gazPower"
            placeholder="Мощность котельной, МВт"
            bind:val={props.gazPower} />
        </div>
        <div class="container column is-12 is-flex ml-3 mt-4">
          <div class="column is-4 desc"><span>Оборудование</span></div>

          <div class="field equipment is-flex column is-8">
            <label class="radio-label equipment__label" for="Imported">
              <input
                type="radio"
                id="Imported"
                name="equipment"
                value="Imported"
                bind:group={props.equipment}
                checked />
              <span>Импортное</span>
            </label>
            <label class="radio-label" for="domestic">
              <input
                type="radio"
                id="domestic"
                name="equipment"
                value="domestic"
                bind:group={props.equipment} />
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
                type="checkbox"
                id="project"
                name="projectJob"
                value="project"
                bind:checked={props.project} />
              <span>Проект</span>
            </label>

            <label class="checkbox-label job__label" for="inst">
              <input
                type="checkbox"
                id="inst"
                name="instJob"
                value="inst"
                bind:checked={props.install} />
              <span>Монтаж</span>
            </label>
          </div>
        </div>

        <div class="container column is-12 is-flex">
          <InputCalc
            id="name"
            name="name"
            placeholder="Ваше Имя"
            textLabel="Ваше Имя"
            bind:val={props.name} />
        </div>

        <div class="container column is-12 is-flex">
          <InputCalc
            id="PhoneOrEmail"
            name="PhoneOrEmail"
            placeholder="Телефон или email"
            textLabel="Телефон или email"
            bind:val={props.PhoneOrEmail} />
        </div>

        <div
          class="container column is-8 is-flex pb-4"
          style="align-items: center;">
          <div class="btn-wrap column is-6">
            <Button btnName="boilerForm" radius isDisabled={!valid}>
              Расчитать
            </Button>
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
