<script>
  export let btnText = "Заказать",
    radius = false;

</script>

<style lang="scss">
  .btn-wrap {
    display: flex;
  }

  .btn__zayavka {
    display: inline-flex;
    align-items: center;
    padding-top: 10px;
    text-decoration: none;
    margin-bottom: 30px;
    vertical-align: text-bottom;
    height: 51px;
    background-color: #f60;
    padding: 0 60px;
    color: #fefefe;
    font-size: 16px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    transition: 0.3s all;

    &-radius {
      border-radius: 30px;
    }

    &:hover {
      background-color: #ff7d27;
      box-shadow: 0 3px 37px rgba(255, 102, 0, 0.4);
    }
  }

</style>

<div class="btn-wrap">
  <a
    class={radius ? 'btn__zayavka btn__zayavka-radius' : 'btn__zayavka'}
    data-dialog-type="modal"
    href="/#/">{btnText}</a>
</div>
