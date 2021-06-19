<script>
  import Button from "./Button.svelte";
  import InputForm from "./InputForm.svelte";

  let price = 0;

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

<form class="form" name="boilerForm">
  <div class="colums is-max-desktop is-flex is-justify-content-center">
    <div class="column is-3">
      <div class="construction title-block">Вид строительства</div>
      <div class="construction__inputs">
        <input type="radio" id="new" value="new" name="construction" checked />
        <label class="construction__label radio-label" for="new">новое</label>
        <input
          type="radio"
          id="rearmament"
          value="rearmament"
          name="construction" />
        <label class="construction__label radio-label" for="rearmament">
          тех. перевооружение
        </label>
        <input
          type="radio"
          id="reconstruction"
          value="reconstruction"
          name="construction" />
        <label class="construction__label radio-label" for="reconstruction">
          реконструкция
        </label>
      </div>
    </div>

    <div class="column is-3">
      <InputForm
        textLable="Мощность, МВт"
        id="gazPower"
        name="gazPower"
        placeholder="Мощность оринтеровочная" />
    </div>

    <div class="column is-3">
      <div class="title-block equipment">Оборудование</div>
      <div class="equipment__inputs">
        <input
          type="radio"
          id="Imported"
          name="equipment"
          value="Imported"
          checked />
        <label
          class="radio-label equipment__label"
          for="Imported">Импортное</label>
        <input type="radio" id="domestic" name="equipment" value="domestic" />
        <label
          class="radio-label equipment__label"
          for="domestic">Отечественное</label>
      </div>
    </div>

    <div class="column is-3 pl-4">
      <div class="title-block job">Вид работ</div>
      <div class="job__inputs">
        <input type="checkbox" id="project" name="projectJob" value="project" />
        <label class="checkbox-label job__label" for="project">Проект</label>
        <input type="checkbox" id="inst" name="instJob" value="inst" />
        <label class="checkbox-label job__label" for="inst">Монтаж</label>
      </div>
    </div>
  </div>

  <hr />

  <div class="colums is-max-desktop is-flex is-justify-content-center ">
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
    <div class="column is-3 is-flex is-align-items-flex-end pb-4">
      <div class="btn-wrap">
        <Button btnName="boilerForm">Расчитать</Button>
      </div>
    </div>

    <div class="column is-3">
      <div class="price">
        <div class="price__block">
          Стоимость, руб
          <span class="price__num">{price}</span>
        </div>
      </div>
    </div>
  </div>
</form>
