<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import Address from '$lib/components/Address.svelte'
    // import Modal from '$lib/components/Modal.svelte'
    import ContactForm from '$lib/components/ContactForm.svelte'
    import {showModal} from '$lib/stores'
    import YandexMap from '$lib/counters/YandexMap.svelte'
    import BtnZayavka from '$lib/components/BtnZayavka.svelte'
    import Modal from '$lib/components/Modal.svelte'

    let title = 'Контакты'
    let showContactForm = false

    function handleContactFormCancel(event) {
        showContactForm = false
        alert(event)
    }
</script>

<SvelteSeo {title}/>

<!--<Modal onClose={() => (showContactForm = false)} open={showContactForm}>-->
<!--    <div class="box">-->
<!--        <ContactForm on:cancel={handleContactFormCancel}/>-->
<!--    </div>-->
<!--</Modal>-->

<style lang="scss">



.titlefor:before {
        content: "";
        display: block;
        position: absolute;
        width: 100px;
        height: 3px;
        top: -8px;
        left: 0;
        background-color: #f60;
    }

</style>


<main class="container pt-4">
    <section class="section">
        <div class="box">
            <h1 class="title titlefor pt-3">{title}</h1>
            <div class="columns">
                <div class="column">
                    <Address/>
                    <!--                    <button class="button" on:click={() => showModal.set(true)}>Заказать-->
                    <!--                        звонок-->
                    <!--                    </button>-->
                    <span>
                        <br/>
                        <p class="has-text-justified">
                            "ООО Энергия Плюс предоставляет <b>услуги по проектированию</b> опасных и особо опасных производственных объектов <b>на всей территории Российской Федерации</b> от Калининграда до Южно-Сахалинска.
                        </p>
                        <p class="has-text-justified">
                            Мы предлагаем не только <b>оптимальные технические решения</b>, но и самые <b>конкурентные цены</b> на все виды услуг"
                        </p>
                    </span>
                    <div class="pt-6">
                        <BtnZayavka btnText="Заказать звонок"></BtnZayavka>
<!--                        <ContactForm></ContactForm>-->
                    </div>
                </div>
                <div class="column">
                    <YandexMap></YandexMap>
                </div>
            </div>
        </div>
    </section>
    <hr/>
</main>
