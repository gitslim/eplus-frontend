<script>
    import Icon from 'fa-svelte'
    import * as icons from '@fortawesome/free-solid-svg-icons'
    import CalcGaz from '$lib/components/calc/CalcGaz.svelte'
    import CalcKotel from '$lib/components/calc/CalcKotel.svelte'

    export let selected = 'kotel'
</script>

<div class="container">
    <div class="tabs is-centered">
        <ul>
            <li class:is-active={selected==='kotel'}>
                <a on:click={()=>selected='kotel'}>
                <span class="icon is-small">
                    <Icon icon="{icons.faCity}"/>
                </span>
                    <span>Котельные</span>
                </a>
            </li>
            <li class:is-active={selected==='gaz'}>
                <a on:click={()=>selected='gaz'}>
                <span class="icon is-small">
                    <Icon icon="{icons.faRoute}"/>
                </span>
                    <span>Газопроводы</span>
                </a>
            </li>
        </ul>
    </div>

    <div class="section">
        {#if selected === 'kotel'}
            <div class="box">
                <CalcKotel/>
            </div>
        {:else if selected === 'gaz'}
            <div class="box">
                <CalcGaz/>
            </div>
        {/if}
    </div>
</div>