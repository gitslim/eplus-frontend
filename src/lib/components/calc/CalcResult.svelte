<script>
    import {createEventDispatcher} from 'svelte'
    import {t, locale} from 'svelte-i18n'

    const dispatch = createEventDispatcher()

    export let text = '', amount = 0

    $: formatter = new Intl.NumberFormat($locale === 'en' ? 'en-US' : 'ru-RU', {
        style: 'currency',
        currency: 'RUB',
    })

    $: sum = formatter.format(amount)
    $: resolvedText = text || $t('calculators.common.result_title')

    function handleClick(_) {
        dispatch('complete')
    }
</script>

{#if resolvedText}
    <div class="subtitle has-text-centered">
        {resolvedText}
    </div>
{/if}

<div class="title has-text-centered py-4">
    {#if isNaN(amount)}
        <div class="has-text-danger-dark">
            {$t('calculators.common.calc_error')}
        </div>
    {:else}
        <div class="has-text-success-dark">
            {sum}
        </div>
    {/if}
</div>

<div class="subtitle has-text-centered has-text-dark">
    <span>{$t('calculators.common.order_exact')}</span>
    <a rel="external"
       class="has-text-centered has-text-primary zphone"
       href="tel:+74957907697">
        <span class="callibri_phone">+7 (495) 790-76-97</span>
    </a>
</div>
<div class="field has-text-centered">
    <div class="control">
        <a class="button is-primary" on:click={handleClick}>{$t('calculators.common.start_over')}</a>
    </div>
</div>