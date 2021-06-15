<script>
  // your script goes here

  import InputForm from "./InputForm.svelte";

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

      &__subtext {
        margin-bottom: 20px;
        color: #fff;
      }
    }
  }

  .input__wrap {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    width: 360px;
  }

  hr {
    width: 100%;
    height: 2px;
    background-color: gray;
  }

</style>

<form class="form">
  <div class="form__group">
    <div class="input__wrap">
      <div class="form__subtext">Вид работ</div>
      <label for="projectOnSiteGas">
        <input type="checkbox" id="projectOnSiteGas" name="projectOnSiteGas" />
        проект на внутриплощадочный газопровод</label>
      <label for="projecItnternalGas">
        <input
          type="checkbox"
          id="projecItnternalGas"
          name="projecItnternalGas" />
        проект на внутренний газопровод</label>
      <label for="installationOnSiteGas">
        <input
          type="checkbox"
          id="installationOnSiteGas"
          name="installationOnSiteGas" />
        монтаж внутриплощадочного газопровода</label>
      <label for="installationInternalGas">
        <input
          type="checkbox"
          id="installationInternalGas"
          name="installationInternalGas" />
        монтаж внутреннего газопровода</label>
    </div>
    <hr />
  </div>
  <div class="container is-max-widescreen computing">
    <InputForm id="name" name="name" placeholder="Ваше Имя" />

    <!-- <label for="phoneOrEmail">Телефон или Email</label>
      <input
        type="text"
        id="phoneOrEmail"
        name="phoneOrEmail"
        placeholder="Телефон или Email" />

    <label for="cost"> <input type="text" id="cost" name="cost" /> </label> -->
  </div>
</form>
