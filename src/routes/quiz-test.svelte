<script>
    import QuizArea from '$lib/components/quiz/QuizArea.svelte'
    import Modal from '$lib/components/Modal.svelte'
</script>

<QuizArea title="он-Лайн калькулятор расчёта стоимости ТТР" quizId={0}/>

<Modal>
    <div class="py-6 has-text-centered" slot="trigger" let:open>
        <button class="button is-dark is-large is-radiusless"
                on:click={()=>{open()}}>
            он-Лайн калькулятор расчёта стоимости ТТР
        </button>
    </div>
    <div slot="content" class="modal-content" let:store={{close}}>
        <QuizArea title="он-Лайн калькулятор расчёта стоимости ТТР" quizId={0}/>
    </div>
</Modal>

