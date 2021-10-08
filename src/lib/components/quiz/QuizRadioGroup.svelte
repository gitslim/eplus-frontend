<script>
    import {createEventDispatcher} from 'svelte'

    const dispatch = createEventDispatcher()

    export let item, inverted

    let selectedOption

    $: if (selectedOption)
        setTimeout(() => dispatch('complete', {
            title: selectedOption.title.description,
            next: selectedOption.next
        }), 200)
</script>

{#each item.options as option, i}
    <div class="field">
        <input class="is-checkradio is-large is-white" class:is-inverted={inverted}
               type=radio
               id={i}
               bind:group={selectedOption}
               value={option}>
        <label for="{i}">{option.title.description}</label>
    </div>
{/each}