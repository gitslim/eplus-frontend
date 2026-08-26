<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import CallbackForm from '$lib/components/CallbackForm.svelte'
    import SidebarRight from '$lib/components/SidebarRight.svelte'
    import HiddenH1 from "$lib/components/HiddenH1.svelte"
    import { t } from 'svelte-i18n'
    import { session } from '$app/stores'

    $: currentLocale = $session.locale || 'ru'
    $: p = currentLocale === 'en' ? '/en' : ''
</script>

<style lang="scss">
  .column-content {
    padding-left: 15px;
  }

  .content__wrap {
    display: flex;
    @media screen and (max-width: 900px) {
      flex-direction: column;
      align-items: center;
    }
  }

  ul {
    list-style: disc;
    li{
      padding-bottom: 10px;
    }
  }

  .content-block {
    width: 65%;
    margin-right: 10px;
    @media screen and (max-width: 570px) {
      width: 100%;
      padding: 15px;
      margin-right: 0px;
    }
  }

  .content-bottom {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .block-sidebar {
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 570px) {
      width: 90%;
    }
  }
</style>

<SvelteSeo title="{$t('utility_pages.special_offers.meta_title')}" description="{$t('utility_pages.special_offers.meta_description')}"/>
<main class="container">
    <HiddenH1>{$t('utility_pages.special_offers.meta_h1')}</HiddenH1>
    <div class="content__wrap">
        <div class="content-block is-max-desctop">
            <section>
                <div class="widget">
                    <h2 class="title">
                        <span><span>{$t('utility_pages.special_offers.title')}</span> </span>
                        <span class="heading-line"></span>
                    </h2>
                </div>
                <div class="column-content">
                    <ul>
                        <li>
                            <a href="{p}/page/tehnicheskoe-perevooruzhenie-kotelnoj">{$t('utility_pages.special_offers.item1')}</a>
                        </li>
                        <li>
                            <a href="{p}/page/vnutriploshadochnye-gazoprovody">{$t('utility_pages.special_offers.item2')}</a>
                        </li>
                        <li>
                          <a href="{p}/page/konteynernaya-kotelnaya">{$t('utility_pages.special_offers.item3')}</a>
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
