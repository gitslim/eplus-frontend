<script>
    import {onMount} from 'svelte'

    onMount(async () => {
        (function(w, d, s, h, id) {
            w.roistatProjectId = id; w.roistatHost = h
            var p = d.location.protocol == "https:" ? "https://" : "http://"
            var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);
            var js = d.createElement(s); 
            js.charset="UTF-8"; 
            js.async = 1; 
            js.src = p+h+u; 
            var js2 = d.getElementsByTagName(s)[0]; 
            js2.parentNode.insertBefore(js, js2);
        })
        (window, 
        document, 
        'script', 'cloud.roistat.com', 'b6a3db25829b3ab64e2dd6af0d579587')
    })
</script>