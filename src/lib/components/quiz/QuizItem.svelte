<script>
    import {createEventDispatcher} from 'svelte'
    import {fade} from 'svelte/transition'
    import QuizInput from '$lib/components/quiz/QuizInput.svelte'
    import ContactForm from '$lib/components/ContactForm.svelte'
    import QuizRadioGroup from '$lib/components/quiz/QuizRadioGroup.svelte'

    const dispatch = createEventDispatcher()

    export let item, inverted

    function handleAnswer(answer) {
        dispatch('answer', {
            q: item.title,
            a: answer.title,
            next: answer.next
        })
    }
    function handleInputComplete(_){

    }
</script>

{#key item.title.description}
    <div in:fade>
        <div class="subtitle has-text-centered has-text-dark">
            {item.title.description}
        </div>

        {#if item.widget === 'radio'}
            <QuizRadioGroup {inverted} {item} on:complete={(event)=>handleAnswer(event.detail)}/>
        {:else if item.widget === 'input'}
            <QuizInput {inverted} {item} class="button is-radiusless"
                       on:complete={(event)=>handleAnswer(event.detail)}/>
        {:else if item.widget === 'contact-form'}
            <ContactForm {inverted} lead="{item.lead}" on:success={handleInputComplete}/>
        {/if}
    </div>
{/key}