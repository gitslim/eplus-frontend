<script>
    import {createEventDispatcher} from 'svelte'
    import EmailForm from '$lib/components/EmailForm.svelte';

    const dispatch = createEventDispatcher()

    export let quizTitle = ''
    export let item
    export let log

    let lead

    $: lead = {
        type: 'lead.Quiz',
        title: quizTitle,
        comments: log.join(' | ')
    }

    function handleSuccess() {
        dispatch('complete', {
            // val: null,
            next: item.next
        })
    }
</script>


<EmailForm {lead} on:success={(event)=>handleSuccess(event.detail)}/>