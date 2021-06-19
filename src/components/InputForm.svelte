<script>
  $: val = "";
  $: danger = true;

  export let id = "",
    placeholder = "",
    textLable = "",
    name = "";

  function emptiness(val) {
    if (!val) {
      return (danger = true);
    } else return (danger = false);
  }

</script>

<style lang="scss">
  .item {
    width: 100%;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 0 30px 0;
    position: relative;

    &__lable {
      width: 100%;
      margin-bottom: 20px;
      text-align: left;
      color: #fff;
    }

    &__input {
      background: transparent;
      border: none !important;
      border-bottom: 1px solid #fff !important;
      color: #fff;
      opacity: 1;
      padding: 0;
      margin: 0;
      height: 50px;
      font-size: 18px;
      font-weight: 300;
      line-height: 30px;
      box-shadow: none !important;
      outline-style: unset;
    }
    &__danger {
      position: absolute;
      bottom: -30px;
      color: red;
    }
  }

</style>

<div class="item">
  <label class="item__lable" for={id}>{textLable}</label>
  <div class="item__input-wrap">
    <input
      class="item__input"
      type="text"
      {id}
      {name}
      {placeholder}
      bind:value={val}
      on:input={emptiness(val)} />
  </div>
  {#if danger}<span class="item__danger">Обязательное поле</span>{/if}
</div>
