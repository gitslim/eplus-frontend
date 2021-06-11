<script>
  export let src = "",
    alt = "",
    text = "";

</script>

<style lang="scss">
  .target {
    box-shadow: 0 19px 46px 3px rgb(0 0 0 / 15%);
    border-radius: 5px;
    min-height: 450px;
    background-color: #fff;
    margin-bottom: 30px;

    &__img {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;
      border-bottom: 2px dashed #3838387a;
    }

    &__info {
      padding: 35px 22px;
      font-size: 16px;
      font-weight: 300;
      line-height: 30px;
    }
  }

  img {
    border: 0;
    vertical-align: top;
    max-width: 100%;
    height: auto;
  }

</style>

<div class="target">
  <div class="target__img"><img {src} {alt} /></div>

  <div class="target__info">
    <p>{text}</p>
  </div>
</div>
