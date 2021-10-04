<script>
    import QuizArea from '$lib/components/quiz/QuizArea.svelte'
    import Modal from '$lib/components/Modal.svelte'
</script>

<QuizArea/>

<Modal>
    <div class="btn-wrap" slot="trigger" let:open>
        <button class="button"
                on:click={()=>{open()}}>Modal
        </button>
    </div>
    <div slot="content" class="modal-content" let:store={{close}}>
            <QuizArea/>
    </div>
</Modal>
