<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>

    import CalcGaz from '$lib/components/calc/CalcGaz.svelte'

    let title = 'Калькулятор расчета стоимости газопровода'
</script>

<style>
    /* your styles go here */
</style>

<SvelteSeo {title}/>

<main class="main-content">
    <div class="container is-widescreen">
        <div class="columns">
            <div class="widget column">
                <h2 class="title">
                    <span><span>{title}</span> </span><span class="heading-line"/>
                </h2>
            </div>
        </div>
        <div class="columns">
            <div class="column is-offset-1 is-8">
                <CalcGaz/>
            </div>
        </div>
    </div>
</main>
