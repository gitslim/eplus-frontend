<script>
    import '$lib/styles/normalise.css'
    import '$lib/styles/global.scss'

    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import GTM from '$lib/counters/GTM.svelte'
    import website from '$lib/config/website'
    import BackToTop from '$lib/components/BackToTop.svelte'
    import RoistatCounter from '$lib/counters/RoistatCounter.svelte'
    import {afterUpdate} from 'svelte'
    import {page} from '$app/stores'

    const {disableAnalytics, gtmId} = website

    function onRouteChange() {
        alert('route changed')
    }

    // afterUpdate(() => {
    //     window.document.dispatchEvent(new Event('DOMContentLoaded', {
    //         bubbles: true,
    //         cancelable: true
    //     }))
    // })
</script>

<svelte:head>
    <link rel="canonical" href="{website.siteUrl}{$page.path}">
    <script>(function(w, c){(w[c]=w[c]||[]).push(function(){new zTracker({"id":"1c4048a82bb80f894465cde6d1dda49618015","metrics":{"metrika":"54841009"}});});})(window, "zTrackerCallbacks");</script>
    <script async src="https://my.novofon.com/js/ct_phone.min.js"></script>
    {#if $page.path == '/page/proektirovanie-gazoraspredelitelnyh-sistem-i-grp'}
        <!-- Marquiz script start --> <script> (function(w, d, s, o){ var j = d.createElement(s); j.async = true; j.src = '//script.marquiz.ru/v2.js';j.onload = function() { if (document.readyState !== 'loading') Marquiz.init(o); else document.addEventListener("DOMContentLoaded", function() { Marquiz.init(o); }); }; d.head.insertBefore(j, d.head.firstElementChild); })(window, document, 'script', { host: '//quiz.marquiz.ru', region: 'eu', id: '6549ee6efb5f880025a1c38e', autoOpen: false, autoOpenFreq: 'always', openOnExit: true, disableOnMobile: false } ); </script> <!-- Marquiz script end -->
    {/if}
    <!-- Top.Mail.Ru counter -->
    <script type="text/javascript">
        var _tmr = window._tmr || (window._tmr = []);
        _tmr.push({id: "3578012", type: "pageView", start: (new Date()).getTime()});
        (function (d, w, id) {
            if (d.getElementById(id)) return;
            var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
            ts.src = "https://top-fwz1.mail.ru/js/code.js";
            var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
            if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
        })(document, window, "tmr-code");
    </script>
    <noscript><div><img src="https://top-fwz1.mail.ru/counter?id=3578012;js=na" style="position:absolute;left:-9999px;" alt="Top.Mail.Ru" /></div></noscript>
    <!-- /Top.Mail.Ru counter -->
</svelte:head>
<style global lang="scss">
  .body-wrapper {
    padding-top: 3.25rem;
  }
</style>

{#if !disableAnalytics}
    <GTM {gtmId}/>
{/if}

<div class="body-wrapper">
    <Navbar/>
    <slot/>
    <Footer/>
    <BackToTop/>
    <RoistatCounter/>
</div>
