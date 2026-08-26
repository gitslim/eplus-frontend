<script>
    import Modal from '$lib/components/Modal.svelte'
    import ContactFormFull from '$lib/components/ContactFormFull.svelte'
    import {t} from 'svelte-i18n'

    let isFormSubmitted
    export let onClick;
    export let lead = {};

    function handleSuccessSubmit(event) {
        isFormSubmitted = true
    }
</script>


<Modal>
    <div slot="trigger" let:open>
        <a class={$$props.class}
           on:click={()=>{open(); onClick();}}>
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
                <ContactFormFull lead = {lead} on:success={handleSuccessSubmit}/>
            {/if}
        </div>
    </div>
</Modal>

