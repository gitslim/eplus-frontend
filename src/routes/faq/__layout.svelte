<script context="module">
    import SvelteSeo from 'svelte-seo'
    import {fetchEndpoint} from '$lib/utils'
    import {page} from '$app/stores'

    export const load = async ({fetch, page}) => {
        return await fetchEndpoint(fetch, '/ep/list-faqs.json', {})
    }
</script>

<script>
    import CallbackForm from '$lib/components/CallbackForm.svelte'
    import SidebarRight from '$lib/components/SidebarRight.svelte'
    import Icon from 'fa-svelte'
    import {faBook} from '@fortawesome/free-solid-svg-icons'
    import Link from '$lib/components/Link.svelte'

    let title = 'Часто задаваемые вопросы'

    export let data

    let selectedTag,
        allTags = []

    if (data) {
        data.faqs.map((faq) => {
            if (faq.tags) {
                faq.tags.map((tag) => {
                    if (!allTags.includes(tag.name))
                        allTags.push(tag.name)
                })
            }
        })
    }

    $: filteredFaqs = data.faqs.filter((faq) => {
        if (!selectedTag) {
            return true
        } else {
            return faq.tags.map((tag) => tag.name).includes(selectedTag)
        }
    })

    const meta = {
        title: 'Ответы на часто задаваемые вопросы. Проектирование газопровода. Проект и монтаж котельной. Узнайте больше о БМК',
        description: 'Полезные материалы. Узнайте полезную информацию о котельных, БМК и газопроводах. Статьи от ведущих инженеров отрасли',
        h1: 'FAQ для инженеров, энергетиков и предпринимателей. Ознакомьтесь с полезными материалами перед тем, как купить БМК.Узнайте больше о проектировании и строительстве газопроводов, котельных'
    }
</script>

<style lang="scss">
</style>

<SvelteSeo title="{meta.title}" description="{meta.description}"/>
<h1 style="position: absolute; clip-path: inset(100%); width: 1px; height: 1px; overflow: hidden;">{meta.h1}</h1>


<main class="p-4">
    <div class="container">
        <div class="columns">
            <div class="column is-two-thirds">


                <nav class="panel">
                    <p class="panel-heading">
                        {title}
                    </p>
                    <div class="panel-block">
                        <div class="tags">
                            <a class="tag" href="/faq" class:is-primary={!selectedTag}
                               on:click={()=>{selectedTag=undefined}}>Все вопросы</a>
                            {#each allTags as tag}
                                <a class="tag" class:is-primary={selectedTag===tag}
                                   on:click={()=>{selectedTag=tag}}>{tag}</a>
                            {/each}
                        </div>
                    </div>

                    {#each filteredFaqs as faq}
                        {#if $page.params.slug === faq.slug}
                            <div class="block p-5">
                                <slot/>
                            </div>
                            {:else}
                            <div class="panel-block" class:is-active={$page.params.slug === faq.slug}>
                                <span class="panel-icon">
                                <Icon icon="{faBook}"/>
                                    </span>
                                <a href="/faq/{faq.slug}">
                                    {faq.title}
                                </a>
                            </div>
                        {/if}
                    {/each}

                </nav>

            </div>
            <div class="column">
                <SidebarRight/>
                <CallbackForm white/>
            </div>
        </div>
    </div>
</main>