<script>
    import {createEventDispatcher, onMount} from 'svelte'

    const dispatch = createEventDispatcher()

    export let item
    export let answers

    onMount(async () => {
        setTimeout(() => {
            let val
            try {
                val = item.fn(answers)
            } catch {
                console.debug('Quiz fn error')
            } finally {
                dispatch('complete', {
                    val: val,
                    next: item.next
                })
            }
        }, item.delay || 100)
    })
</script>

<div>
    <progress class="progress is-small is-primary"></progress>
</div>