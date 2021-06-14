<script>
  export let titleText = "",
    white = false;

</script>

<style lang="scss">
  .title {
    margin-bottom: 40px;
    position: relative;
    text-transform: uppercase;
    font-size: 30px;
    text-align: center;

    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 100px;
      height: 5px;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #f60;
    }
  }

  .white-color {
    color: #fff;
  }

</style>

<h2 class="title {white ? 'white-color' : ''}">{titleText}</h2>
