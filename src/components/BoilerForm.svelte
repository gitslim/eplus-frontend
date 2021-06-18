<script>
  import Button from "./Button.svelte";
  import InputForm from "./InputForm.svelte";

  let price = 0;

</script>

<style lang="scss">
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
    <div class="column is-3"><strong>Вид Строительства</strong></div>

    <div class="column is-3">
      <InputForm
        textLable="Мощность, МВт"
        id="gazPower"
        name="gazPower"
        placeholder="Мощность оринтеровочная" />
    </div>
    <div class="column is-3">
      <strike>Оборудование</strike>
    </div>
    <div class="column is-3"><small>Вид работ</small></div>
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
    <div class="column is-3 is-flex is-align-items-flex-end pb-6">
      <Button btnName="boilerForm">Расчитать</Button>
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
