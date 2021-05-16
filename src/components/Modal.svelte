<script>
  export let open = false
  export let onClose
</script>

<div class="modal {open ? 'is-active' : ''}">
  <div class="modal-background"></div>
  <div class="modal-content">
    <slot/>
  </div>
  <button class="modal-close is-large" aria-label="close" on:click={onClose}></button>
</div>
