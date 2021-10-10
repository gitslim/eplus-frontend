<script>
    import ContactForm from '$lib/components/ContactForm.svelte'
    import {createEventDispatcher} from 'svelte'

    const dispatch = createEventDispatcher()

    export let quizTitle
    export let item

    $: lead = {
        type: 'lead.Quiz',
        title: quizTitle,
    }

    function handleSuccess() {
        dispatch('complete', {
            val: null,
            next: item.next
        })
    }
</script>


<ContactForm inverted {lead} on:success={(event)=>handleSuccess(event.detail)}/>