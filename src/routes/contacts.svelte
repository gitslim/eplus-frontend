<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import Address from '$lib/components/Address.svelte'
    import Modal from '$lib/components/Modal.svelte'
    import ContactForm from '$lib/components/ContactForm.svelte'
    import {showModal} from '$lib/stores'
    import YandexMap from '$lib/counters/YandexMap.svelte'
    import BtnZayavka from '$lib/components/BtnZayavka.svelte'

    let title = 'Контакты'
    let showContactForm = false

    function handleContactFormCancel(event) {
        showContactForm = false
        alert(event)
    }
</script>

<SvelteSeo {title}/>

<Modal onClose={() => (showContactForm = false)} open={showContactForm}>
    <div class="box">
        <ContactForm on:cancel={handleContactFormCancel}/>
    </div>
</Modal>

<main class="container pt-4">
    <section class="section">
        <div class="box">
            <h1 class="title">{title}</h1>
            <div class="columns">
                <div class="column is-4">
                    <Address/>
                    <!--                    <button class="button" on:click={() => showModal.set(true)}>Заказать-->
                    <!--                        звонок-->
                    <!--                    </button>-->
                    <div class="pt-6">
                        <BtnZayavka btnText="Заказать звонок"></BtnZayavka>
                    </div>
                </div>
                <div class="column is-6 is-offset-2">
                    <YandexMap></YandexMap>
                </div>
            </div>
        </div>
    </section>
    <hr/>
</main>
