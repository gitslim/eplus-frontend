<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>

    import CalcGaz from '$lib/components/calc/CalcGaz.svelte'
    import HiddenH1 from "$lib/components/HiddenH1.svelte"

    let title = 'Калькулятор расчета стоимости газопровода'
    const meta = {
        title: "Калькулятор стоимости газопровода «Энергии Плюс» — получите расчет стоимости онлайн",
        description: "Промышленный газопровод. Получите расчет стоимости газопровода от профессионалов. Более 20 лет на рынке.",
        h1: "Проект и монтаж газопровода. Получить точный расчет затрат на реализацию инвестиционного проекта."
    }

</script>

<style>
    /* your styles go here */
</style>

<SvelteSeo title="{meta.title}" description="{meta.description}"/>
<HiddenH1>{meta.h1}</HiddenH1>


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
