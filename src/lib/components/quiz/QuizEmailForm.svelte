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

<div class="subtitle has-text-centered is-size-2 has-text-weight-medium">
    15 000 ₽
</div>
<hr style="background-color: #f86923;"/>
<div class="subtitle has-text-centered has-text-dark ">
    <span>Чтобы узнать точную цену, оставьте свои контактные данные</span>
</div>
<EmailForm {lead} on:success={(event)=>handleSuccess(event.detail)}/>