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
    import {page, session} from '$app/stores'
    import {setupI18n, locale} from '$lib/i18n/index.js'

    // Initialize i18n with server-detected locale
    setupI18n($session.locale || 'ru')

    // Keep locale in sync with session (for client-side navigation)
    $: if ($session.locale) {
        locale.set($session.locale)
    }

    const {disableAnalytics, gtmId} = website

    function onRouteChange() {
        alert('route changed')
    }

    $: cleanBase = ($page?.path || '/')
        .replace(/^\/en(\/|$)/, '/')
        .replace(/^\/+/, '/')
    $: ruPath = cleanBase === '' ? '/' : '/' + cleanBase
    $: enPath = cleanBase === '' ? '/en' : ('/en/' + cleanBase).replace(/\/+/g, '/')
</script>

<svelte:head>
    <link rel="canonical" href="{website.siteUrl}{$page.path}">
    <link rel="alternate" hreflang="ru" href="{website.siteUrl}{ruPath}">
    <link rel="alternate" hreflang="en" href="{website.siteUrl}{enPath}">
    <link rel="alternate" hreflang="x-default" href="{website.siteUrl}{ruPath}">
    <meta property="og:locale" content="{$session.locale === 'en' ? 'en_US' : 'ru_RU'}">
    <meta property="og:locale:alternate" content="{$session.locale === 'en' ? 'ru_RU' : 'en_US'}">
    
    {#if !disableAnalytics}
        <script>(function(w, c){(w[c]=w[c]||[]).push(function(){new zTracker({"id":"1c4048a82bb80f894465cde6d1dda49618015","metrics":{"metrika":"54841009"}});});})(window, "zTrackerCallbacks");</script>
        <script>
            // Замените 'YOUR_METRIKA_ID' на ваш реальный идентификатор Яндекс Метрики
            const METRIKA_ID = "54841009";

            // Функция для отправки события в Яндекс Метрику
            function sendMetrikaEvent(email) {
                if (window.ym) {
                    window.ym(METRIKA_ID, "reachGoal", "emailCopied", { email });
                }
            }

            // Функция для отслеживания события копирования
            function handleCopyEvent(event) {
                const copiedText = window.getSelection().toString();
                const hasAtSymbol = copiedText.includes("@");
                const hasRussianLetters = /[А-Яа-яЁё]/.test(copiedText);

                if (hasAtSymbol && !hasRussianLetters) {
                    sendMetrikaEvent(copiedText);
                }
            }

            document.addEventListener("copy", handleCopyEvent);

            function handleMailtoRightClick(event) {
                const target = event.target;
                if (
                    event.button === 2 &&
                    target.tagName === "A" &&
                    target.getAttribute("href") &&
                    target.getAttribute("href").startsWith("mailto:")
                ) {
                    const email = target.getAttribute("href").substring(7);
                    const hasRussianLetters = /[А-Яа-яЁё]/.test(email);

                    if (!hasRussianLetters) {
                        sendMetrikaEvent(email);
                    }
                }
            }

            document.addEventListener("contextmenu", handleMailtoRightClick);
        </script>
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
    {/if}
</svelte:head>

{#if !disableAnalytics}
    <GTM {gtmId}/>
{/if}

<div class="body-wrapper">
    <Navbar/>
    <slot/>
    <Footer/>
    <BackToTop/>
    {#if !disableAnalytics}
        <RoistatCounter/>
    {/if}
</div>
