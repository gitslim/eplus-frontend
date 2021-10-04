<script>
    import {createEventDispatcher} from 'svelte'
    import {fade} from 'svelte/transition'

    const dispatch = createEventDispatcher()

    export let question

    function handleAnswer(answer) {
        dispatch('answer', {
            q: question.title,
            a: answer.title,
            next: answer.next
        })
    }
</script>

{#key question}
    <div in:fade>
        <div class="title has-text-centered">
            {question.title}
        </div>

        {#if question.widget === 'radio'}
            {#each question.options as option, i}
                <div class="field">
                    <input class="is-checkradio is-large is-white" type="radio"
                           id="{i}"
                           on:click={()=>handleAnswer(option)}>
                    <label for="{i}">{option.title}</label>
                </div>
            {/each}
        {/if}
    </div>
{/key}