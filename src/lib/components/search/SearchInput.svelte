<script>
    import {onMount} from 'svelte'

    export let
        type = 2,
        placeholder = 'Поиск по сайту',
        fontSize = 16,
        width = 'auto'

    let el,
        bem

    onMount(async () => {

        (function (w, d, c) {
            bem = JSON.stringify(
                {
                    'action': d.location.origin + '/search',
                    'arrow': false,
                    'bg': 'transparent',
                    'fontsize': fontSize,
                    'fg': '#4a4a4a',
                    'language': 'ru',
                    'logo': 'rb',
                    'publicname': 'Поиск по сайту Энергияплюс.рф',
                    'suggest': true,
                    'target': '_self',
                    'tld': 'ru',
                    'type': type,
                    'usebigdictionary': false,
                    'searchid': 2531200,
                    'input_fg': '#4a4a4a',
                    'input_bg': '#ffffff',
                    'input_fontStyle': 'normal',
                    'input_fontWeight': 'normal',
                    'input_placeholder': placeholder,
                    'input_placeholderColor': '#4a4a4a',
                    'input_borderColor': '#4a4a4a'
                }
            )

            var s = d.createElement('script'),
                h = d.getElementsByTagName('script')[0],
                // e = d.documentElement,
                e = el
            if ((' ' + e.className + ' ').indexOf(' ya-page_js_yes ') === -1) {
                e.className += ' ya-page_js_yes'
            }
            s.type = 'text/javascript'
            s.async = true
            s.charset = 'utf-8'
            s.src = (d.location.protocol === 'https:' ? 'https:' : 'http:') + '//site.yandex.net/v2.0/js/all.js'
            h.parentNode.insertBefore(s, h);
            (w[c] || (w[c] = [])).push(function () {
                w.Ya.Site.Form.init()
            })
        })(window, document, 'yandex_site_callbacks')

    })

</script>

<style>
    .ya-site-form_inited_no {
        display: none;
    }
</style>


<div bind:this={el} class="ya-site-form ya-site-form_inited_no" style="width:{width};"
     data-bem={bem}>
    <form action="https://yandex.ru/search/site/" method="get" target="_self" accept-charset="utf-8">
        <input type="hidden" name="searchid" value="2531200"/>
        <input type="hidden" name="l10n" value="ru"/>
        <input type="hidden" name="reqenc" value=""/>
        <input type="search" name="text" value=""/>
        <input type="submit" value={placeholder}/>
    </form>
</div>


