<svelte:head>
    <meta name="robots" content="noindex">
</svelte:head>

<script>
    import Modal from '$lib/components/Modal.svelte'
    import CalcGazline from '$lib/components/calc/CalcGazline.svelte'
</script>

<section class="section pt-6">
    <CalcGazline/>
</section>

<Modal>
    <div class="py-6 has-text-centered" slot="trigger" let:open>
        <button class="button is-primary is-large is-radiusless"
                on:click={()=>{open()}}>
            Калькулятор газопровода
        </button>
    </div>
    <div slot="content" class="modal-content" let:store={{close}}>
        <div class="box">
            <h2 class="title has-text-centered">ВНУТРИПЛОЩАДНЫЕ И ВНУТРЕННИЕ ГАЗОПРОВОДЫ</h2>
        <CalcGazline/>
        </div>
    </div>
</Modal>

