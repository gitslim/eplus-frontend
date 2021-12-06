<svelte:head>
    <meta name="robots" content="noindex">
</svelte:head>

<script>
    import Modal from '$lib/components/Modal.svelte'
    import CalcTabs from '$lib/components/calc/CalcTabs.svelte'
</script>

<!--<div class="is-divider" data-content="Модальное окно"></div>-->

<Modal>
    <div class="py-6 has-text-centered" slot="trigger" let:open>
        <button class="button is-primary is-large is-radiusless"
                on:click={()=>{open()}}>
            Расчет стоимости
        </button>
    </div>
    <div slot="content" class="modal-content" let:store={{close}}>
        <div class="box">
            <h2 class="title has-text-centered">Калькуляторы расчета стоимости</h2>
            <CalcTabs/>
        </div>
    </div>
</Modal>

<!--<div class="is-divider" data-content="Инлайн"></div>-->

<section class="section pt-6">
    <CalcTabs/>
</section>
