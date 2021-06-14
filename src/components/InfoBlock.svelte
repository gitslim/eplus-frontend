<script>
  export let text, subText;

</script>

<style lang="scss">
  .info {
    display: flex;
    box-shadow: 0 19px 46px 3px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    background-color: #ffffff;

    &__wrap {
      &-img {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 170px;
        background: #f2f2f2;
        border-radius: 5px 0 0 5px;
      }

      &-text {
        padding: 40px 70px;
        font-size: 16px;
        color: rgb(56, 56, 56);
        line-height: 1.667;
      }
    }

    &__img {
      width: 50px;
    }

    &__text {
      font-weight: bold;
      margin-bottom: 35px;
    }

    &__subtext {
      font-style: italic;
    }
  }

</style>

<div class="info">
  <div class="info__wrap-img">
    <img src="/images/info_icon.png" alt="info-icon" class="info__img" />
  </div>
  <div class="info__wrap-text">
    <p class="info__text">{text}</p>
    <p class="info__subtext">{subText}</p>
  </div>
</div>
