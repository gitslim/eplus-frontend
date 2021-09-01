<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import CallbackForm from '$lib/components/CallbackForm.svelte'
    import SidebarRight from '$lib/components/SidebarRight.svelte'

    let title = 'Комплексные решения'
</script>

<style lang="scss">
  .column-content {
    padding-left: 15px;
  }

  .content__wrap {
    display: flex;
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

  .block-sidebar {
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
  }
</style>

<SvelteSeo {title}/>
<main class="container">
    <div class="content__wrap">
        <div class="content-block is-max-desctop">
            <section>
                <div class="widget">
                    <h2 class="title">
                        <span><span>{title}</span> </span>
                        <span class="heading-line"></span>
                    </h2>
                </div>
                <div class="column-content">
                    <ul>
                        <li>
                            <a href="/page/tehnicheskoe-perevooruzhenie-kotelnoj">Техническое
                                перевооружение котельной</a>
                        </li>
                        <li>
                            <a href="/page/vnutriploshadochnye-gazoprovody">Внутриплощадочные
                                и внутренние газопроводы</a>
                        </li>
                    </ul>
                </div>
            </section>
            <div class="content-bottom">
                <CallbackForm left white/>
            </div>
        </div>
        <div class="block-sidebar">
            <SidebarRight/>
        </div>
    </div>
</main>
