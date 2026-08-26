<script>
    import {createEventDispatcher} from 'svelte'
    import {t} from 'svelte-i18n'

    const dispatch = createEventDispatcher()

    export let item
    export let answers

    const formatter = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
    })

    $: sum = formatter.format(answers[item.answer])

    function handleClick(_) {
        dispatch('complete')
    }
</script>

{#if item.text}
    <div class="subtitle has-text-centered">
        {item.text}
    </div>
{/if}

<div class="title has-text-centered has-text-success-dark py-4">
    {sum}
</div>

<div class="subtitle has-text-centered has-text-dark">
    <span>{$t('calculators.quiz.order_phone_prompt')}</span>
    <a rel="external"
       class="has-text-centered has-text-primary zphone"
       href="tel:+74957907697">
        <span class="callibri_phone zphone">+7 (495) 790-76-97</span>
    </a>
</div>
<div class="field has-text-centered">
    <div class="control">
        <a class="button is-primary" on:click={handleClick}>{$t('calculators.quiz.start_over')}</a>
    </div>
</div>