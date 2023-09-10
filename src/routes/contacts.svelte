<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import Address from '$lib/components/Address.svelte'
    // import Modal from '$lib/components/Modal.svelte'
    import ContactForm from '$lib/components/ContactForm.svelte'
    import {showModal} from '$lib/stores'
    import YandexMap from '$lib/counters/YandexMap.svelte'
    import YandexMap2 from '$lib/counters/YandexMap2.svelte'
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

.map-item {
    height: 300px;
    border-radius: 20px;
    overflow: hidden;
    border: 2px solid rgb(248 105 35);
    margin: 0 auto;
}

.hiden-block {
    display: none;
}

.hiden-block2 {
    display: block;
}

/**************************************/
    /*Экран меньше 769px START*/
@media screen and (max-width: 768px) {
    .hiden-block {
    display: block;
    }

    .hiden-block2 {
    display: none;
    }
}
    /*Экран меньше 769px END*/
/**************************************/

</style>


<main class="container pt-4">
    <section class="section">
        <div class="box">
            <h1 class="title titlefor pt-3">{title}</h1>
            <div class="columns">
                <div class="column hiden-block">
                    <YandexMap></YandexMap>
                </div>
                <div class="column">
<!--                    <Address/>-->
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
                <div class="column hiden-block2">
                    <YandexMap></YandexMap>
                </div>
            </div>
        </div>
    </section>


    <section class="section mt-5 mb-3">
        <div class="title pb-2 mb-2 has-text-centered">
            <h3>Мы работаем на всей территории России</h3>
        </div>
        <div class="columns" >
            <div class="column is-8 is-offset-2">              
                <div class="map-item">
                    <YandexMap2     center = {[58.813777, 57.622613]}
                                    zoomSize = {3}
                                    nameIcon = {'Иваново икон'}
                                    nameAdress = {'155800, Иваново, Куконковых, д.10А, стр. 1'}>
                    </YandexMap2>
                </div>
            </div>           
        </div>
    </section>
</main>
