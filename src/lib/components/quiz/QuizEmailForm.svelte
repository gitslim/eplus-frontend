<script>
    import {createEventDispatcher} from 'svelte'
    import EmailForm from '$lib/components/EmailForm.svelte';
    import {t} from 'svelte-i18n'

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

<div class="subtitle has-text-centered has-text-dark ">
    <span>{$t('calculators.quiz.enter_email_for_calc')}</span>
</div>
<EmailForm {lead} on:success={(event)=>handleSuccess(event.detail)}/>