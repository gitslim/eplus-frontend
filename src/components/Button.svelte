<script>
  function clickHandler(e) {
    console.log("click ===>", e.target);
    console.log("Button name: ".e.name);
  }
  export let btnName = "";

</script>

<style lang="scss">
  .btn {
    width: 100%;
    color: #222;
    margin-top: 20px;
    border: 2px solid #f86923;
    background: #f86923;
    // border-radius: 30px;
    overflow: hidden;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 9px 24px 9px;
    position: relative;
    display: inline-block;
    font-weight: 700;

    &:hover {
      background: #fff;
    }
  }

</style>

<button class="btn" name={btnName} on:click|preventDefault={clickHandler}>
  <slot />
</button>
