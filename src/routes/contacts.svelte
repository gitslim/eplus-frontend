<script context="module">
  import SvelteSeo from "svelte-seo";
</script>

<script>
  import Address from "../components/Address.svelte";
  import Modal from "../components/Modal.svelte";
  import ContactForm from "../components/ContactForm.svelte";
  import { showModal } from "../stores";

  export let segment;
  let title = "Контакты";
  let showContactForm = false;

  function handleContactFormCancel(event) {
    showContactForm = false;
    alert(event);
  }
</script>

<SvelteSeo {title} />

<Modal open={showContactForm} onClose={() => (showContactForm = false)}>
  <div class="box">
    <ContactForm on:cancel={handleContactFormCancel} />
  </div>
</Modal>

<section class="section">
  <div class="container">
    <h1 class="title">{title}</h1>
    <div class="columns">
      <div class="column is-6">
        <ContactForm />
      </div>
      <div class="column is-6">
        <Address />
        <div>
          <button class="button" on:click={() => showModal.set(true)}>Заказать
            звонок</button>
        </div>
      </div>
      <div class="column is-6">
        <!--        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N7DB4C5" height="100%" width="100%"></iframe>-->
      </div>
    </div>
  </div>
</section>
