<script>
    import {createEventDispatcher, onMount} from 'svelte'

    const dispatch = createEventDispatcher()
    export let url
    let script

    onMount(async () => {
        script.addEventListener('load', () => {
            dispatch('loaded')
        })

        script.addEventListener('error', (event) => {
            console.error('something went wrong', event)
            dispatch('error')
        })
    })
</script>

<svelte:head>
    <script bind:this={script} src={url}/>
</svelte:head>
