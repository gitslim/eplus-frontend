<script>
    import Icon from 'fa-svelte'
    import {faBurn, faDraftingCompass, faMedal, faUserShield,} from '@fortawesome/free-solid-svg-icons'
    import {faBattleNet} from '@fortawesome/free-brands-svg-icons'
    import LazyImage from 'svelte-lazy-image'
    import {showModal} from '$lib/stores'
    import BtnZayavka from '$lib/components/BtnZayavka.svelte'
    import {t} from 'svelte-i18n'
</script>


<div class="columns is-vcentered">
    <div class="column is-5">
        <figure class="image is-4by3">
            <LazyImage
                    alt="{$t('full_engineering.img_alt')}"
                    src="/images/Инжиниринг полного цикла.png"/>
        </figure>
    </div>
    <div class="column is-6 is-offset-1">
        <h2 class="title is-2">{$t('full_engineering.title')}</h2>
        <h3 class="subtitle is-4">{$t('full_engineering.subtitle')}</h3>

        <ul>
            <li>
                <Icon class="icon has-text-primary" icon={faBurn}/>
                {$t('full_engineering.adv1')}
            </li>
            <li>
                <Icon class="icon has-text-primary" icon={faDraftingCompass}/>
                {$t('full_engineering.adv2')}
            </li>
            <li>
                <Icon class="icon has-text-primary" icon={faBattleNet}/>
                {$t('full_engineering.adv3')}
            </li>
            <li>
                <Icon class="icon has-text-primary" icon={faUserShield}/>
                {$t('full_engineering.adv4')}
            </li>
            <li>
                <Icon class="icon has-text-primary" icon={faMedal}/>
                {$t('full_engineering.adv5')}
            </li>
        </ul>

        <p class="has-text-centered pt-6">
            <BtnZayavka btnText="{$t('full_engineering.btn')}"/>
        </p>
    </div>
</div>
