<script context="module">
    import SvelteSeo from 'svelte-seo'
    import {fetchEndpoint} from '$lib/utils'
    import {page} from '$app/stores'

    export const load = async ({fetch, page, session}) => {
        const locale = session?.locale || 'ru'
        return await fetchEndpoint(fetch, '/ep/list-faqs.json', {locale})
    }
</script>

<script>
    import CallbackForm from '$lib/components/CallbackForm.svelte'
    import SidebarRight from '$lib/components/SidebarRight.svelte'
    import Icon from 'fa-svelte'
    import {faBook} from '@fortawesome/free-solid-svg-icons'
    import Link from '$lib/components/Link.svelte'
    import HiddenH1 from "$lib/components/HiddenH1.svelte"
    import { t } from 'svelte-i18n'
    import { session } from '$app/stores'

    $: currentLocale = $session.locale || 'ru'
    $: p = currentLocale === 'en' ? '/en' : ''

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
</script>

<style lang="scss">
</style>

<SvelteSeo title="{$t('utility_pages.faq.meta_title')}" description="{$t('utility_pages.faq.meta_description')}"/>
<HiddenH1>{$t('utility_pages.faq.meta_h1')}</HiddenH1>


<main class="p-4">
    <div class="container">
        <div class="columns">
            <div class="column is-two-thirds">


                <nav class="panel">
                    <p class="panel-heading">
                        {$t('utility_pages.faq.title')}
                    </p>
                    <div class="panel-block">
                        <div class="tags">
                            <a class="tag" href="{p}/faq" class:is-primary={!selectedTag}
                               on:click={()=>{selectedTag=undefined}}>{$t('utility_pages.faq.all_questions')}</a>
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
                                <a href="{p}/faq/{faq.slug}">
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