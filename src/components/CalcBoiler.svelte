<script>
  // your script goes here

  import Button from "./Button.svelte";
  import InputCalc from "./inputCalc.svelte";
</script>

<style>
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
</style>

<div class="container">
  <form name="calcBoiler">
    <div class="control">
      <div class="container is-flex columns is-multiline">
        <div class="column py-0 absolute-centeris-4 desc">
          <span>Вид строительства</span>
        </div>
        <div class="field is-flex column is-8">
          <label class="construction__label radio-label" for="new">
            <input
              type="radio"
              id="new"
              value="new"
              name="construction"
              checked />
            <span>новое</span>
          </label>

          <label class="construction__label radio-label" for="rearmament">
            <input
              type="radio"
              id="rearmament"
              value="rearmament"
              name="construction" />
            <span>тех. перевооружение</span>
          </label>

          <label class="construction__label radio-label" for="reconstruction">
            <input
              type="radio"
              id="reconstruction"
              value="reconstruction"
              name="construction" />
            <span>реконструкция</span>
          </label>
        </div>
        <div class="container column py-0 is-12 is-flex">
          <InputCalc
            textLable="Мощность котельной, МВт"
            id="gazPower"
            name="gazPower"
            placeholder="Мощность котельной, МВт" />
        </div>
        <div class="container column py-0 is-12 is-flex">
          <div class="column is-4 desc"><span>Оборудование</span></div>
          <div class="field is-flex column is-8">
            <label class="radio-label equipment__label" for="Imported">
              <input
                type="radio"
                id="Imported"
                name="equipment"
                value="Imported"
                checked />
              <span>Импортное</span>
            </label>

            <label class="radio-label equipment__label" for="domestic">
              <input
                type="radio"
                id="domestic"
                name="equipment"
                value="domestic" />
              <span>Отечественное</span>
            </label>
          </div>
        </div>
        <div class="container column a1py-0 is-12 is-flex">
          <InputCalc
            id="name"
            name="name"
            placeholder="Ваше Имя"
            textLable="Ваше Имя" />
        </div>
        <div class="container column py-0 is-12 is-flex">
          <InputCalc
            id="PhoneOrEmail"
            name="PhoneOrEmail"
            placeholder="Телефон или email"
            textLable="Телефон или email" />
        </div>
        <div
          class="container column py-0 is-6 is-flex pb-4"
          style="align-items: center;">
          <div class="btn-wrap column is-6">
            <Button btnName="boilerForm">Расчитать</Button>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>
