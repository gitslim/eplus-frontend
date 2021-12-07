<svelte:head>
    <meta name="robots" content="noindex">
</svelte:head>

<script>
    import QuizArea from '$lib/components/quiz/QuizArea.svelte'
    import Modal from '$lib/components/Modal.svelte'
</script>

<div class="container pt-6">
    <div class="box">
        <QuizArea title="Онлайн расчет стоимости газоснабжения объекта" quizId={1}/>
    </div>
    <Modal>
        <div class="py-6 has-text-centered" slot="trigger" let:open>
            <button class="button is-primary is-large"
                    on:click={()=>{open()}}>
                Онлайн расчет стоимости газоснабжения объекта
            </button>
        </div>
        <div slot="content" class="modal-content" let:store={{close}}>
            <QuizArea title="Онлайн расчет стоимости газоснабжения объекта" quizId={1}/>
        </div>
    </Modal>
</div>

<div class="container">
    <div class="box">
        <QuizArea title="Онлайн калькулятор расчёта стоимости ТТР" quizId={0}/>
    </div>

    <Modal>
        <div class="py-6 has-text-centered" slot="trigger" let:open>
            <button class="button is-primary is-large"
                    on:click={()=>{open()}}>
                Онлайн калькулятор расчёта стоимости ТТР
            </button>
        </div>
        <div slot="content" class="modal-content" let:store={{close}}>
            <QuizArea title="Онлайн калькулятор расчёта стоимости ТТР" quizId={0}/>
        </div>
    </Modal>
</div>

