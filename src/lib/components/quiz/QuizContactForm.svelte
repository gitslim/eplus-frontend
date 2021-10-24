<script>
    import ContactForm from '$lib/components/ContactForm.svelte'
    import {createEventDispatcher} from 'svelte'

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
            val: null,
            next: item.next
        })
    }
</script>


<ContactForm {lead} on:success={(event)=>handleSuccess(event.detail)}/>