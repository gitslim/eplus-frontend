<script>
    import {onMount} from 'svelte'

    onMount(async () => {
        (function (m, e, t, r, i, k, a) {
            m[i] =
                m[i] ||
                function () {
                    (m[i].a = m[i].a || []).push(arguments)
                }
            m[i].l = 1 * new Date();
            (k = e.createElement(t)),
                (a = e.getElementsByTagName(t)[0]),
                (k.async = 1),
                (k.src = r),
                a.parentNode.insertBefore(k, a)
        })(
            window,
            document,
            'script',
            'https://mc.yandex.ru/metrika/tag.js',
            'ym'
        )

        ym(54841009, 'init', {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true,
        })
    })
</script>
<noscript>
    <div>
        <img
                alt=""
                src="https://mc.yandex.ru/watch/54841009"
                style="position:absolute; left:-9999px;"/>
    </div>
</noscript>
