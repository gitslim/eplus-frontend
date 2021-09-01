<script>
    import {createEventDispatcher, onDestroy} from 'svelte'
    import {showModal} from '$lib/stores.js'

    const dispatch = createEventDispatcher()
    const close = () => dispatch('close', isClose())

    let modal
    export let show = false

    $: uName = ''
    $: uPhone = ''
    let disabled = true

    $: if (uName && uPhone) {
        disabled = false
    } else disabled = true

    const handle_keydown = (e) => {
        if (e.key === 'Escape') {
            showModal.set(false)
            return
        }

        if (e.key === 'Tab') {
            // trap focus
            const nodes = modal.querySelectorAll('*')
            const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0)

            let index = tabbable.indexOf(document.activeElement)
            if (index === -1 && e.shiftKey) index = 0

            index += tabbable.length + (e.shiftKey ? -1 : 1)
            index %= tabbable.length

            tabbable[index].focus()
            e.preventDefault()
        }
    }

    const previously_focused =
        typeof document !== 'undefined' && document.activeElement

    if (previously_focused) {
        onDestroy(() => {
            previously_focused.focus()
        })
    }

    export function isOpen() {
        showModal.set(true)
    }

    export function isClose() {
        showModal.set(false)
    }

    async function send() {
        //const uri = "https://energy-plus.bitrix24.ru/rest/24/1r1d4lsvi52ba17t/crm.lead.add.json";
        const uriGet = `https://energy-plus.bitrix24.ru/rest/24/sdffnlbl90oxjik5/crm.lead.add.json?FIELDS[TITLE]=Обращение с сайта&FIELDS[NAME]=${uName}&FIELDS[PHONE][0][VALUE]=${uPhone}`

        /*let response = await fetch(uriGet);
        if (response.error) {
          alert(response.error);
        }
        if (response.ok) {
          //console.log(response);
          show = false;
          alert("Ваша заявка принята");
        }*/
    }
</script>

<style lang="scss">
  .title {
    color: #fff;
    background-color: gray;
    justify-content: center;
    padding: 10px;
  }

  .modal-wrap {
    margin: 0 auto;
    border-radius: 5px;
    background-color: #fff;
    padding: 0;
    overflow: hidden;
  }

  form {
    padding: 10px;
  }

  .btn {
    width: 100%;
    height: 3rem;
    color: #fff;
    font-size: 1.3rem;
    margin-top: 20px;
    border: 2px solid #f86923;
    background: #f86923;
    // border-radius: 30px;
    overflow: hidden;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 9px 24px 9px;
    position: relative;
    display: inline-block;
    font-weight: 700;

    &:hover {
      background: #fff;
      color: black;
    }
  }
</style>

<svelte:window on:keydown={handle_keydown}/>

<div class="modal {show ? 'is-active' : ''}">
    <div class="modal-background" on:click={close}/>

    <div class="modal-content">
        <div class="column modal-wrap is-6">
            <div class="title is-flex is-size-4">Оставить заявку</div>
            <form name="modal-form">
                <div class="field">
                    <label class="label" for="uName">ВАШЕ ИМЯ</label>
                    <div class="control">
                        <input
                                bind:value={uName}
                                class="input"
                                id="uName"
                                placeholder="Ваше имя"
                                type="text"/>
                    </div>
                </div>
                <div class="field">
                    <label class="label" for="uPhone">ТЕЛЕФОН</label>
                    <div class="control">
                        <input
                                bind:value={uPhone}
                                class="input"
                                id="uPhone"
                                placeholder="Телефон"
                                type="phone"/>
                    </div>
                </div>
                <button
                        class="button btn"
                        {disabled}
                        on:click|preventDefault={send}>Отправить
                </button>
            </form>
        </div>
    </div>
    <button aria-label="close" class="modal-close is-large" on:click={close}/>
</div>
