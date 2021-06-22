<script>
  export let open = false;
  export const onToggle = () => {
    open = !open;
  };
</script>

<div class="modal {open ? 'is-active' : ''}">
  <div class="modal-background" on:click={onToggle} />
  <div class="modal-content">
    <slot />
  </div>
  <button class="modal-close is-large" aria-label="close" on:click={onToggle} />
</div>
