<script context="module">

    export function load({error, status}) {
        // console.error('In error page', error)
        return {
            props: {
                title: status === 404 ? 'Страница не найдена!' : 'Ошибка сервера!',
                status: status,
                // stack: error.stack
            }
        }
    }
</script>

<script>
    import {goto} from '$app/navigation'

    export let title, status, stack
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<section class="section">
    <div class="container">

        <div class="hero is-warning">
            <div class="hero-body">
                <p class="title">
                    {title}
                </p>
                <button class="button is-link" on:click={()=>goto('/')}>Вернуться на главную страницу</button>
            </div>
        </div>

        {#if stack}
            <pre>Http status: {status}</pre>
            <pre>Stacktrace: {stack}</pre>
        {/if}

    </div>
</section>


