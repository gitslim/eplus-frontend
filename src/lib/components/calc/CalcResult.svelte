<script>
    import {createEventDispatcher} from 'svelte'

    const dispatch = createEventDispatcher()

    export let text, amount

    const formatter = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
    })

    $: sum = formatter.format(amount)

    function handleClick(_) {
        dispatch('complete')
    }
</script>

{#if text}
    <div class="subtitle has-text-centered">
        {text}
    </div>
{/if}

<div class="title has-text-centered py-4">
    {#if isNaN(amount)}
        <div class="has-text-danger-dark">
            Ошибка расчета
        </div>
    {:else}
        <div class="has-text-success-dark">
            {sum}
        </div>
    {/if}
</div>

<div class="subtitle has-text-centered has-text-dark">
    <span>Закажите точный расчет по телефону</span>
    <a rel="external"
       class="has-text-centered has-text-primary zphone"
       href="tel:+74957907697">
        <span class="callibri_phone">+7 (495) 790-76-97</span>
    </a>
</div>
<div class="field has-text-centered">
    <div class="control">
        <a class="button is-primary" on:click={handleClick}>Начать сначала</a>
    </div>
</div>