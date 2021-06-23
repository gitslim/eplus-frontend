
  import { UniqueTypeNamesRule } from "graphql";

  import { createEventDispatcher, onDestroy } from "svelte";
  import Button from "./Button.svelte";

  const dispatch = createEventDispatcher();
  const close = () => dispatch("close");

  let modal,
    shown = false;

  const handle_keydown = (e) => {
    if (e.key === "Escape") {
      close();
      return;
    }

    if (e.key === "Tab") {
      // trap focus
      const nodes = modal.querySelectorAll("*");
      const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0);

      let index = tabbable.indexOf(document.activeElement);
      if (index === -1 && e.shiftKey) index = 0;

      index += tabbable.length + (e.shiftKey ? -1 : 1);
      index %= tabbable.length;

      tabbable[index].focus();
      e.preventDefault();
    }

  };

  const previously_focused =
    typeof document !== "undefined" && document.activeElement;

  if (previously_focused) {
    onDestroy(() => {
      previously_focused.focus();
    });
  }

  export function isOpen() {
    shown = true;
  }

  export function isClose() {
    shown = false;
  }
</script>

<style lang="scss">

  .title {
    color: #fff;
    background-color: gray;
    justify-content: center;
    padding: 10px;
  }

  .modal-wrap {
    margin: 0 auto;
    border-radius: 5px;
    background-color: #fff;
    padding: 0;
    overflow: hidden;
  }

  form {
    padding: 10px;
  }
</style>

<svelte:window on:keydown={handle_keydown} />

<div class="modal {shown ? 'is-active' : ''}">
  <div class="modal-background" on:click={isClose} />

  <div class="modal-content">
    <div class="column modal-wrap is-6">
      <div class="title is-flex is-size-4">Оставить заявку</div>
      <form name="modal-form">
        <div class="field">
          <label class="label">ВАШЕ ИМЯ</label>
          <div class="control">
            <input class="input" type="text" placeholder="Ваше имя" />
          </div>
        </div>
        <div class="field">
          <label class="label">ТЕЛЕФОН</label>
          <div class="control">
            <input class="input" type="tel" placeholder="Телефон" />
          </div>
        </div>
        <Button btnName="modalSend">Отправить</Button>
      </form>
    </div>
  </div>
  <button class="modal-close is-large" aria-label="close" on:click={isClose} />
</div>
