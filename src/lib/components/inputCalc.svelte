<script>
    import {createEventDispatcher} from 'svelte'

    const dispatch = createEventDispatcher()

    $: val = ''

    export let id = '',
        placeholder = '',
        textLabel = '',
        name = '',
        val

    dispatch('val', val)
</script>

<style lang="scss">
  .item {
    display: flex;
    text-align: end;
    align-items: center;

    &__input {
      display: block;
      width: 100%;
      height: 39px;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.8;
      color: #555555;
      background-color: #fff;
      background-image: none;
      border: 1px solid #ccc;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
      transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
      outline-style: unset;

      &:focus {
        border-color: #66afe9;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08),
        0 0 8px rgba(102, 175, 233, 0.6);
      }
    }

    &__danger {
      position: absolute;
      bottom: -5px;
      color: red;
      left: 323px;
    }
  }

  .invalid,
  .invalid:focus {
    border-left: 3px solid #b94a48;
  }

  .valid,
  .valid:focus {
    border-left: 3px solid #42a948;
  }
</style>

<div class="item column">
    <label class="item__lable column is-4" for={id}>{textLabel}</label>
    <div class="item__input-wrap column">
        <input
                bind:value={val}
                class="item__input column {val ? 'valid' : 'invalid'}"
                {id}
                {name}
                {placeholder}
                type="text"/>
    </div>
    {#if !val}<span class="item__danger">Обязательное поле</span>{/if}
</div>
