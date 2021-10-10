<script>
    import {createEventDispatcher} from 'svelte'
    import {imask} from '@imask/svelte'

    const dispatch = createEventDispatcher()

    export let item, invalid

    let value

    $: invalid = !value

    function handleClick(_) {
        dispatch('complete', {
            val: value,
            next: item.next
        })
    }
</script>


<div class="field">
    <div class="control">
        <input use:imask={{mask: item.mask}}
               placeholder="{item.placeholder}"
               class="input"
               bind:value>
    </div>
</div>
<div class="field">
    <div class="control">
        <a class="{$$props.class}" class:is-hidden={invalid} on:click={handleClick}>Далее</a>
    </div>
</div>