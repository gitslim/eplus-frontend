<script>
  export let titleText = "";

</script>

<style lang="scss">
  .title {
    margin-bottom: 40px;
    position: relative;
    text-transform: uppercase;
    font-size: 30px;

    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 100px;
      height: 5px;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #f60;
    }
  }

</style>

<h2 class="title">{titleText}</h2>
