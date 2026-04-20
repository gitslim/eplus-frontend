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

  @media (max-width: 480px) {
    .container {
      &__title {
        font-size: 28px;
        margin-bottom: 24px;
        max-width: 100%;

        &::before {
          width: 80px;
          height: 6px;
          top: -30px;
        }
      }

      &__text {
        font-size: 16px;
      }
    }

    .order__title {
      font-size: 20px;

      &::before {
        width: 80px;
        height: 6px;
        top: -30px;
      }
    }
  }

</style>

<div class="container">
    <h2 class={order ? 'order__title' : 'container__title'}>{caption}</h2>
    {#if subtitle}
        <p class="container__text">{subtitle}</p>
    {/if}
    <slot/>
</div>
