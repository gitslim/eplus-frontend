<script>
  export let id = "",
    type = "text",
    placeholder = "",
    name = "";

</script>

<style lang="scss">
  .item {
    width: 22%;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 0 30px 0;

    &__input {
      background: transparent;
      border: none;
      border-bottom: 1px solid #fff;
      color: #fff;
      opacity: 1;
      padding: 0;
      margin: 0;
      height: 50px;
      font-size: 18px;
      font-weight: 300;
      line-height: 30px;
      box-shadow: none;
    }
  }

</style>

<div class="item">
  <label for={id}>Ваше имя</label>
  <div class="item__input"><input {type} {id} {name} {placeholder} /></div>
</div>
