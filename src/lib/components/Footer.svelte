<script>
    import Address from '$lib/components/Address.svelte'
    // import Modal from '$lib/components/Modal.svelte'
    import BtnZayavka from '$lib/components/BtnZayavka.svelte'
    import YandexQualityIcon from '$lib/counters/YandexQualityIcon.svelte'
    import {t} from 'svelte-i18n'
    import {session} from '$app/stores'

    $: currentLocale = $session.locale || 'ru'
    $: p = currentLocale === 'en' ? '/en' : ''
</script>


<footer class="footer">
    <div class="container">
        <div class="columns is-desktop text-small">
            <div class="column">
                <a class="footer-logo" href="{p}/">{$t('footer.brand')}</a>
                <div class="pt-4">
                    <p>
                        {$t('footer.mission_1')}
                    </p>
                    <p>
                        {$t('footer.mission_2')}
                    </p>
                </div>
                <div class="pt-6">
                    <Address/>
                </div>
                <div class="pt-4 columns">
                    <div class="column is-6">
                        <BtnZayavka btnText="{$t('footer.order_project')}"></BtnZayavka>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="columns">
                    <div class="column">
                        <p><span>{$t('footer.services')}</span></p>
                        <ul>
                            <li><a rel={currentLocale === 'en' ? 'external' : undefined} href="{p}/page/proektirovanie">{$t('footer.design')}</a></li>
                            <li><a rel={currentLocale === 'en' ? 'external' : undefined} href="{p}/page/stroitelstvo">{$t('footer.construction')}</a></li>
                        </ul>

                        <p class="pt-4"><span>{$t('footer.complex_solutions')}</span></p>
                        <ul>
                            <li>
                                <a rel={currentLocale === 'en' ? 'external' : undefined} href="{p}/page/tehnicheskoe-perevooruzhenie-kotelnoj">{$t('footer.boiler_upgrade')}</a>
                            </li>
                            <li>
                                <a rel={currentLocale === 'en' ? 'external' : undefined} href="{p}/page/vnutriploshadochnye-gazoprovody">{$t('footer.onsite_pipelines')}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="column">
                        <p><span>{$t('footer.about')}</span></p>
                        <ul>
                            <li><a rel={currentLocale === 'en' ? 'external' : undefined} href="{p}/company/history">{$t('footer.history')}</a></li>
                            <li><a rel={currentLocale === 'en' ? 'external' : undefined} href="{p}/page/referens-list">{$t('footer.projects')}</a></li>
                            <li><a rel={currentLocale === 'en' ? 'external' : undefined} href="{p}/company/dopuski-sro">{$t('footer.sro')}</a></li>
                            <li><a rel={currentLocale === 'en' ? 'external' : undefined} href="{p}/company/otzyvy-klientov">{$t('footer.reviews')}</a></li>
                        </ul>

                        <p class="pt-4"><span>{$t('footer.useful')}</span></p>
                        <ul>
                            <li><a rel={currentLocale === 'en' ? 'external' : undefined} href="{p}/rasschitat-stoimost">{$t('footer.calculators')}</a></li>
                            <li><a rel={currentLocale === 'en' ? 'external' : undefined} href="{p}/documents">{$t('footer.documents')}</a></li>
                            <li><a rel={currentLocale === 'en' ? 'external' : undefined} href="{p}/articles">{$t('footer.articles')}</a></li>
                            <li><a rel={currentLocale === 'en' ? 'external' : undefined} href="{p}/faq">{$t('footer.faq')}</a></li>
                            <li><a rel={currentLocale === 'en' ? 'external' : undefined} href="{p}/page/politika-konfidencialnosti">{$t('footer.privacy_policy')}</a></li>
                            <li><a rel={currentLocale === 'en' ? 'external' : undefined} href="{p}/page/soglasie-na-obrabotku-personalnyh-dannyh">{$t('footer.consent_pdn')}</a></li>
                        </ul>
                    </div>

                    <div class="column">
                        <p>{$t('footer.work_hours')}</p>
                        <ul>
                            <li><b>{$t('footer.mon_fri')}</b> 09<sup>00</sup> - 18<sup>00</sup></li>
                            <li><b>{$t('footer.sat')}</b> {$t('footer.day_off')}</li>
                            <li><b>{$t('footer.sun')}</b> {$t('footer.day_off')}</li>
                        </ul>
                        <div class="pt-4">
                            <YandexQualityIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom text-small columns">
            <div class="column">
                <span>{$t('footer.copyright')}</span>
                <p>{$t('footer.engineering_company')}</p>
            </div>
            <!-- <div class="column is-narrow">
                <span>Инжиниринговая компания</span>
            </div> -->
        </div>
    </div>
    <div class="counter columns">
        <div class="column is-3 is-offset-3">
        </div>
    </div>

    <!--    <Modal show={$showModal}/>-->
</footer>

