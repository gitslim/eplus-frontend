<script>
    import {createEventDispatcher} from 'svelte'

    const dispatch = createEventDispatcher()

    export let item

    let selectedOption

    $: if (selectedOption)
        setTimeout(() => dispatch('complete', {
            val: selectedOption.val,
            next: selectedOption.next
        }), 200)
</script>


{#each item.options as option, i}
    <div class="field">
        <input class="is-checkradio is-large is-white"
               type=radio
               id={i}
               bind:group={selectedOption}
               value={option}>
        <label for="{i}">{option.title}</label>
    </div>
{/each}