<script>
    import {createEventDispatcher} from 'svelte'
    import {t} from 'svelte-i18n'

    const dispatch = createEventDispatcher()

    export let item
    export let answers

    function handleClick(_) {
        dispatch('complete', {
            next: item.next,
            log: $t('calculators.quiz.calculate_more_accurately') || 'Расчитать более точно и ответить письмом'
        })
    }
</script>

{#if item.text}
    <div class="subtitle has-text-centered is-size-2 has-text-weight-medium">
        {item.text}
    </div>
{/if}

<hr style="background-color: #f86923;"/>

<div class="subtitle has-text-centered has-text-dark ">
    <span>{$t('calculators.quiz.fill_questionnaire_prompt')}</span>
</div>
<div class="field has-text-centered">
    <div class="control">
        <a class="button is-primary" on:click={handleClick}>{$t('calculators.quiz.get_questionnaire_btn')}</a>
    </div>
</div>