<script>
    import Address from '$lib/components/Address.svelte'
    // import Modal from '$lib/components/Modal.svelte'
    import BtnZayavka from '$lib/components/BtnZayavka.svelte'
</script>


<footer class="footer">
    <div class="container">
        <div class="columns is-desktop text-small">
            <div class="column">
                <a class="footer-logo" href="/">«Энергия Плюс» - Инжиниринговая компания</a>
                <div class="pt-4">
                    <p>
                        Наша цель - создавать системы газоснабжения и объекты малой энергетики,
                    </p>
                    <p>
                        которые могут еще более эффективно и безопасно служить людям,
                        не причиняя вреда нашей планете.
                    </p>
                </div>
                <div class="pt-6">
                    <Address/>
                </div>
                <div class="pt-4 columns">
                    <div class="column is-6">
                        <BtnZayavka btnText="Заказать проект"></BtnZayavka>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="columns">
                    <div class="column">
                        <p><span>Услуги</span></p>
                        <ul>
                            <li><a href="/page/proektirovanie">Проектирование</a></li>
                            <li><a href="/page/stroitelstvo">Строительство</a></li>
                        </ul>

                        <p class="pt-4"><span>Комплексные решения</span></p>
                        <ul>
                            <li>
                                <a href="/page/tehnicheskoe-perevooruzhenie-kotelnoj">Тех.
                                    перевооружение котельной</a>
                            </li>
                            <li>
                                <a
                                        href="/page/vnutriploshadochnye-gazoprovody">Внутриплощадочные
                                    газопроводы</a>
                            </li>
                        </ul>
                    </div>
                    <div class="column">
                        <p><span>О компании</span></p>
                        <ul>
                            <li><a href="/company/history">История</a></li>
                            <li><a href="/page/referens-list">Проекты</a></li>
                            <li><a href="/company/dopuski-sro">Допуски СРО</a></li>
                            <li><a href="/company/otzyvy-klientov">Отзывы клиентов</a></li>
                        </ul>

                        <p class="pt-4"><span>Полезное</span></p>
                        <ul>
                            <li><a href="/rasschitat-stoimost">Калькуляторы</a></li>
                            <li><a href="/documents">Документы</a></li>
                            <li><a href="/articles">Статьи</a></li>
                            <li><a href="/faq">FAQ</a></li>
                        </ul>
                    </div>

                    <div class="column">
                        <p>Режим работы:</p>
                        <ul>
                            <li><b>Пнд-Птн:</b> 09<sup>00</sup> - 18<sup>00</sup></li>
                            <li><b>Сбт:</b> выходной</li>
                            <li><b>Вск:</b> выходной</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom text-small columns">
            <div class="column">
                <span>2003–2020 © ООО «Энергия Плюс»</span>
                <p>Инжиниринговая компания</p>
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
