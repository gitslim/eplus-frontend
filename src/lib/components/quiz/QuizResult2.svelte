<script>
    import {createEventDispatcher} from 'svelte'

    const dispatch = createEventDispatcher()

    export let item
    export let answers

    // let val

    // const formatter = new Intl.NumberFormat('ru-RU', {
    //     style: 'currency',
    //     currency: 'RUB',
    //     // These options are needed to round to whole numbers if that's what you want.
    //     //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //     //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    // })

    // $: sum = formatter.format(answers[item.answer])

    function handleClick(_) {
        dispatch('complete', {
            next: item.next,
            log: 'Расчитать более точно и ответить письмом'
        })
    }
</script>

{#if item.text}
    <div class="subtitle has-text-centered is-size-2 has-text-weight-medium">
        {item.text}
    </div>
{/if}

<!-- <div class="title has-text-centered has-text-success-dark py-4">
    {sum}
</div> -->

<hr style="background-color: #f86923;"/>

<div class="subtitle has-text-centered has-text-dark ">
    <span>Заполните опросный лист, чтобы узнать точную цену</span>
    <!-- <a rel="external"
       class="has-text-centered has-text-primary"
       href="tel:+74957907697">
        <span class="callibri_phone">+7 (495) 790-76-97</span>
    </a> -->
</div>
<div class="field has-text-centered">
    <div class="control">
        <a class="button is-primary" on:click={handleClick}>Получить опросный лист</a>
    </div>
</div>