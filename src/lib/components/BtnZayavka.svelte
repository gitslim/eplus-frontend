<script>
    import Modal from '$lib/components/Modal.svelte'
    import ContactForm from '$lib/components/ContactForm.svelte'

    export let btnText = 'Заказать',
        radius = false,
        btnWhite

    let isFormSubmitted

    function handleSuccessSubmit(event) {
        // window.ym(54841009, 'reachGoal', 'lidformsiteyagtm')
        isFormSubmitted = true
    }
</script>

<style lang="scss">
  .btn-wrap {
    display: flex;
    width: 100%;
  }

  .btn__zayavka {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    //padding-top: 10px;
    text-decoration: none;
    //margin-bottom: 30px;
    vertical-align: text-bottom;
    height: 51px;
    background-color: #f60;
    padding: 0 60px;
    color: #fefefe;
    //font-size: 16px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    transition: 0.3s all;

    &-radius {
      border-radius: 30px;
    }

    &:hover {
      background-color: #ff7d27;
      box-shadow: 0 3px 37px rgba(255, 102, 0, 0.4);
    }
  }

  .btn-white {
    color: #222;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    //margin-top: 20px;
    border: 2px solid #fff;
    background: #fff;
    border-radius: 30px;
    overflow: hidden;
    transition: all 0.3s;
    //font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 9px 24px 9px;
    position: relative;

    z-index: 1;
    font-weight: 700;

    &:hover {
      color: #fff;
      background-color: #f86923;
    }
  }
</style>

<!--<div class="btn-wrap">-->
<!--    <a-->
<!--            class="btn__zayavka {radius ? 'btn__zayavka-radius' : ''}{btnWhite ? 'btn-white' : ''}"-->
<!--            data-dialog-type="modal"-->
<!--            href="/#/"-->
<!--            on:click|preventDefault={handlerClick}>{btnText}</a>-->
<!--</div>-->

<Modal>
    <div class="btn-wrap" slot="trigger" let:open>
        <a class="btn__zayavka {radius ? 'btn__zayavka-radius' : ''}{btnWhite ? 'btn-white' : ''}"
           on:click={()=>{open()}}>{btnText}</a>
    </div>
    <div slot="content" class="modal-content" let:store={{close}}>
        <div class="box">
            {#if isFormSubmitted}
                <div class="notification is-light is-success">
                    <button class="delete" on:click={close}></button>
                    Ваша заявка принята. Мы свяжемся с вами в ближайшее время.
                </div>
            {:else}
                <h1 class="title align-content-center">Оставить заявку</h1>
                <ContactForm on:success={handleSuccessSubmit}/>
            {/if}
        </div>
    </div>
</Modal>

