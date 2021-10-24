<script>
    import {createEventDispatcher} from 'svelte'
    import {fade} from 'svelte/transition'
    import QuizInput from '$lib/components/quiz/QuizInput.svelte'
    import QuizRadioGroup from '$lib/components/quiz/QuizRadioGroup.svelte'
    import QuizCalc from '$lib/components/quiz/QuizCalc.svelte'
    import QuizResult from '$lib/components/quiz/QuizResult.svelte'
    import QuizContactForm from '$lib/components/quiz/QuizContactForm.svelte'
    import QuizThankYou from '$lib/components/quiz/QuizThankYou.svelte'

    const dispatch = createEventDispatcher()

    export let quizTitle
    export let item
    export let answers
    export let log

    function handleAnswer(answer) {
        if (answer) {
            dispatch('answer', {
                val: answer.val,
                next: answer.next,
                log: answer.log
            })
        } else {
            dispatch('finish')
        }
    }
</script>

{#key item}
    <div class="pt-4" in:fade>
        <div class="subtitle has-text-centered has-text-dark">
            {item.title}
        </div>

        {#if item.widget === 'radio'}
            <QuizRadioGroup {item} on:complete={(event)=>handleAnswer(event.detail)}/>
        {:else if item.widget === 'input'}
            <QuizInput {item} class="button is-radiusless" on:complete={(event)=>handleAnswer(event.detail)}/>
        {:else if item.widget === 'calc'}
            <QuizCalc {item} {answers} on:complete={(event)=>handleAnswer(event.detail)}/>
        {:else if item.widget === 'result'}
            <QuizResult {item} {answers} on:complete={(event)=>handleAnswer(event.detail)}/>
        {:else if item.widget === 'contact-form'}
            <QuizContactForm {quizTitle} {item} {log} on:complete={(event)=>handleAnswer(event.detail)}/>
        {:else if item.widget === 'thank-you'}
            <QuizThankYou {quizTitle} {item} on:complete={(event)=>handleAnswer(event.detail)}/>
        {/if}
    </div>
{/key}