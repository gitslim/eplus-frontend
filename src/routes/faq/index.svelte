<script context="module">
    import SvelteSeo from 'svelte-seo'
    import {fetchEndpoint} from '$lib/utils'

    export const load = async ({fetch}) => {
        return await fetchEndpoint(fetch, '/ep/list-faqs.json', {})
    }
</script>

<script>
    import CallbackForm from '$lib/components/CallbackForm.svelte'
    import SidebarRight from '$lib/components/SidebarRight.svelte'

    let title = 'Часто задаваемые вопросы'

    export let data

    let noFilterTag = 'Все вопросы',
        selectedTag = noFilterTag,
        allTags = [noFilterTag]

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
        if (selectedTag === noFilterTag) {
            return true
        } else {
            return faq.tags.map((tag) => tag.name).includes(selectedTag)
        }
    })
</script>

<style lang="scss">
  //.aside__right {
  //  display: flex;
  //  justify-content: center;
  //  flex-direction: column;
  //  width: 370px;
  //  margin: 10px;
  //  margin-left: auto;
  //  margin-right: auto;
  //}
</style>

<SvelteSeo {title}/>

<!--<div class="container">-->
<!--    <div class="columns">-->
<!--        <div class="column is-one-fifth">-->

<!--            <aside class="menu">-->
<!--                <p class="menu-label">-->
<!--                    General-->
<!--                </p>-->
<!--                <ul class="menu-list">-->
<!--                    <li><a>Dashboard</a></li>-->
<!--                    <li><a>Customers</a></li>-->
<!--                </ul>-->
<!--                <p class="menu-label">-->
<!--                    Administration-->
<!--                </p>-->
<!--                <ul class="menu-list">-->
<!--                    <li><a>Team Settings</a></li>-->
<!--                    <li>-->
<!--                        <a class="is-active">Manage Your Team</a>-->
<!--                        <ul>-->
<!--                            <li><a>Members</a></li>-->
<!--                            <li><a>Plugins</a></li>-->
<!--                            <li><a>Add a member</a></li>-->
<!--                        </ul>-->
<!--                    </li>-->
<!--                    <li><a>Invitations</a></li>-->
<!--                    <li><a>Cloud Storage Environment Settings</a></li>-->
<!--                    <li><a>Authentication</a></li>-->
<!--                </ul>-->
<!--                <p class="menu-label">-->
<!--                    Transactions-->
<!--                </p>-->
<!--                <ul class="menu-list">-->
<!--                    <li><a>Payments</a></li>-->
<!--                    <li><a>Transfers</a></li>-->
<!--                    <li><a>Balance</a></li>-->
<!--                </ul>-->
<!--            </aside>-->

<!--        </div>-->

<!--        <div class="column">-->

<!--            <div class="block">-->
<!--                This text is within a <strong>block</strong>.-->
<!--            </div>-->
<!--            <div class="block">-->
<!--                This text is within a <strong>second block</strong>. Lorem ipsum dolor sit amet, consectetur adipiscing-->
<!--                elit.-->
<!--                Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.-->
<!--            </div>-->
<!--            <div class="block">-->
<!--                This text is within a <strong>third block</strong>. This block has no margin at the bottom.-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</div>-->

<main class="p-4">
    <div class="container">
        <h2 class="title">{title}</h2>
        <div class="columns">
            <div class="column is-two-thirds">
                <div class="tags">
                    {#each allTags as tag}
                        <a class="tag" class:is-primary={selectedTag===tag} on:click={()=>{selectedTag=tag}}>{tag}</a>
                    {/each}
                </div>

                <div class="is-divider"></div>

                <div class="">
                    {#each filteredFaqs as faq}
                        <div class="box">
                            <div class="block">
                                <a class="is-link" href="/faq/{faq.slug}">{faq.title}</a>
                            </div>
                            <div class="tags">
                                {#each faq.tags as tag}
                                    <a class="tag is-small" on:click={()=>{selectedTag=tag.name}}>{tag.name}</a>
                                {/each}
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
            <div class="column">
                <SidebarRight/>
                <CallbackForm white/>
            </div>
        </div>
    </div>
</main>