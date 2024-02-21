<script>
    export let caption = '',
        subtitle = '',
        order = false

</script>

<style lang="scss">
  .container {
    &__title {
      margin-top: 15px;
      text-align: left;
      max-width: 580px;
      font-size: 45px;
      color: #fff;
      font-weight: 700;
      margin-bottom: 45px;
      position: relative;
      text-transform: uppercase;

      &::before {
        content: "";
        display: block;
        position: absolute;
        width: 150px;
        height: 10px;
        background-color: #f60;
        top: -50px;
      }
    }

    &__text {
      margin-bottom: 10px;
      text-align: left;
      font-size: 20px;
      font-weight: 700;
      color: #fff;
      text-transform: uppercase;
    }
  }

  .order__title {
    text-align: left;
    font-size: 25px;
    font-weight: 700;
    position: relative;
    text-transform: unset;

    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 150px;
      height: 10px;
      background-color: #f60;
      top: -50px;
    }
  }

</style>

<div class="container">
    <h1 class={order ? 'order__title' : 'container__title'}>{caption}</h1>
    {#if subtitle}
        <p class="container__text">{subtitle}</p>
    {/if}
    <slot/>
</div>
