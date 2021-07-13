<script>
  import { showModal } from "../stores";
  export let btnName = "",
    radius = false,
    isDisabled = false;
</script>

<style lang="scss">
  .btn {
    width: 100%;
    height: 3rem;
    color: #fff;
    font-size: 1.3rem;
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
      color: black;
    }
  }

  .radius {
    border-radius: 30px;
  }
</style>

<button
  class="btn button"
  class:radius
  name={btnName}
  disabled={isDisabled}
  on:click={() => showModal.set(true)}>
  <slot />
</button>
