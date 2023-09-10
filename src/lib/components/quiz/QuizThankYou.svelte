<script>
    import {createEventDispatcher} from 'svelte'

    const dispatch = createEventDispatcher()

    export let item

    function handleClick(_) {
        dispatch('complete')
    }
</script>

{#if item.text}
    <div class="subtitle has-text-centered">
        {item.text}
    </div>
{/if}

<div class="subtitle has-text-centered has-text-dark">
    <span>Уточнить детали можно по телефону</span>
    <br/>
    <a rel="external"
       class="has-text-centered has-text-primary"
       href="tel:+74957907697">
        <span class="callibri_phone">+7 (495) 790-76-97</span>
    </a>
</div>
<div class="field has-text-centered">
    <div class="control">
        <a class="button is-primary" on:click={handleClick}>Начать сначала</a>
    </div>
</div>