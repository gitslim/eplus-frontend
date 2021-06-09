<script>
  import CallbackForm from "../components/callbackForm.svelte";

</script>

<style lang="scss">
  .column-content {
    padding-left: 15px;
  }
  
  .content__wrap {
    display: flex
  }

  ul {
    list-style: disc;
  }
  .content-block {
    width: 65%;
    margin-right: 10px;
  }
  .content-bottom {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .sidebar-right {
    margin: 0 auto;
  }

</style>

<main class="container">
  <div class="row content__wrap">
    <div class="content-block col-8">
      <section>
        <div class="widget">
          <h2 class="title">
            <span><span>Комплексные решения</span> </span><span
              class="heading-line" />
          </h2>
        </div>
        <div class="column-content">
          <ul>
            <li>
              <a href="/tehniceskoe-perevooruzenie">Техническое перевооружение
                котельной</a>
            </li>
            <li>
              <a
                href="/vnutriplosadocnye-i-vnutrennie-gazoprovody">Внутриплощадочные
                и внутренние газопроводы</a>
            </li>
          </ul>
        </div>
      </section>
      <div class="content-bottom">
        <CallbackForm />
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 sidebar sidebar-right theiaStickySidebar">
			<div class="sidebar-inner">
        <div class="content block-content">
            <div class="field field--name-body field--type-text-with-summary field--label-hidden field__item">
              <h3 style="color:#ff6600; font-size:19px;">ВИДЕОПРЕЗЕНТАЦИЯ КОМПАНИИ</h3>
              <p><iframe allowfullscreen="" frameborder="0" height="208" src="https://www.youtube.com/embed/L8tZf_xNUWQ" width="370"></iframe></p>
          </div>   
        </div>  
      </div>
    </div>
  </div>
</main>
