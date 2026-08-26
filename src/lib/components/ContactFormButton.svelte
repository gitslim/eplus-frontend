<script>
    import Modal from '$lib/components/Modal.svelte'
    import ContactForm from '$lib/components/ContactForm.svelte'
    import {t} from 'svelte-i18n'

    let isFormSubmitted
    export let onClick;

    function handleSuccessSubmit(event) {
        isFormSubmitted = true
    }
</script>


<Modal>
    <div slot="trigger" let:open>
        <a href="/" class={$$props.class}
           on:click|preventDefault={()=>{open(); onClick();}}>
            <slot name="button"/>
        </a>
    </div>
    <div slot="content" class="modal-content" let:store={{close}}>
        <div class="box">
            {#if isFormSubmitted}
                <div class="notification is-light is-success">
                    <button class="delete" on:click={close}></button>
                    <slot name="success">
                        {$t('form.request_accepted')}
                    </slot>
                </div>
            {:else}
                <div class="title align-content-center">
                    <slot name="title">
                        {$t('form.leave_request')}
                    </slot>
                </div>
                <ContactForm on:success={handleSuccessSubmit}/>
            {/if}
        </div>
    </div>
</Modal>

