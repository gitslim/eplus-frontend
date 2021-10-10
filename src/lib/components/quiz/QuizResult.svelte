<script>
    import {createEventDispatcher, onMount} from 'svelte'

    const dispatch = createEventDispatcher()

    export let item
    export let answers

    const formatter = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    $: sum = formatter.format(answers[item.answer])

    function handleClick(_){
        dispatch('complete')
    }
</script>


<span class="subtitle">
    {item.pre}
    <span class="has-text-success-dark">{sum}</span>
    <span>{item.post}</span>
</span>

<div class="subtitle has-text-dark pt-4">
    <span>Закажите точный расчет по телефону</span>
    <a rel="external"
       class="has-text-centered has-text-white"
       href="tel:+74957907697">
        <span class="callibri_phone">+7 (495) 790-76-97</span>
    </a>
</div>
<div class="field">
    <div class="control">
        <a class="button is-inverted" on:click={handleClick}>Начать сначала</a>
    </div>
</div>