<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import HiddenH1 from "$lib/components/HiddenH1.svelte"
    import {session} from '$app/stores'

    $: currentLocale = $session.locale || 'ru'
    $: p = currentLocale === 'en' ? '/en' : ''

    $: title = currentLocale === 'en'
        ? 'Consent to Personal Data Processing'
        : 'Согласие на обработку персональных данных'

    $: meta = currentLocale === 'en' ? {
        title: "Consent to Personal Data Processing | Energy Plus LLC",
        description: "Terms of consent to the processing of personal data of website users of Energy Plus LLC.",
        h1: "Consent to Personal Data Processing"
    } : {
        title: "Согласие на обработку персональных данных | ООО «Энергия Плюс»",
        description: "Условия согласия на обработку персональных данных пользователей сайта ООО «Энергия Плюс».",
        h1: "Согласие на обработку персональных данных"
    }
</script>

<svelte:head>
    <meta name="description" content="{meta.description}">
    <meta property="og:locale" content="{currentLocale === 'en' ? 'en_US' : 'ru_RU'}">
    <meta property="og:type" content="article">
    <meta property="og:title" content="{meta.title}">
    <meta property="og:description" content="{meta.description}">
    <meta property="og:url" content="https://xn--c1adkmgpem4hrai.xn--p1ai/page/soglasie-na-obrabotku-personalnyh-dannyh">
    <meta property="og:site_name" content="{currentLocale === 'en' ? 'Energy Plus LLC' : 'ООО Энергия Плюс'}">
</svelte:head>

<SvelteSeo title="{meta.title}" description="{meta.description}"/>
<HiddenH1>{meta.h1}</HiddenH1>

<section class="section">
    <div class="container">
        <div class="box mb-5">
            <h1 class="title is-2 mb-2">{title}</h1>
            <p class="subtitle is-6 has-text-grey">
                {#if currentLocale === 'en'}
                    Publication date: 08.10.2026
                {:else}
                    Дата публикации: 08.10.2026
                {/if}
            </p>
        </div>

        <div class="box content p-5">
            {#if currentLocale === 'en'}
                <p>
                    Hereby I, by filling out the feedback form on the website энергияплюс.рф (energy-plus.biz), freely, of my own will and in my own interest, give my consent to Energy Plus LLC, INN 5041023415, OGRN 1035008257767, address: 10A bldg. 1, 1st Vladimirskaya St., Moscow, 111123, Russia, hereinafter referred to as the Operator, to process my personal data on the following terms.
                </p>

                <h2 class="title is-4 mt-5">1. Purposes of Personal Data Processing</h2>
                <p>
                    Personal data is processed exclusively for the purpose of receiving, considering, and processing inquiries submitted through the feedback form on the Operator's website, as well as maintaining communication with the user to respond to their inquiry.
                </p>

                <h2 class="title is-4 mt-5">2. Scope of Personal Data Processed</h2>
                <p>
                    The Operator processes the following personal data provided by the user via the feedback form:
                </p>
                <ul>
                    <li>full name (if provided);</li>
                    <li>phone number;</li>
                    <li>email address.</li>
                </ul>

                <h2 class="title is-4 mt-5">3. Actions Performed with Personal Data</h2>
                <p>
                    I consent to the following actions performed with my personal data: collection, recording, systematization, accumulation, storage, clarification (updating, amendment), extraction, use, transfer in cases stipulated by the legislation of the Russian Federation, anonymization, blocking, deletion, and destruction.
                </p>
                <p>
                    Personal data processing is carried out with or without the use of automation tools in accordance with the legislation of the Russian Federation.
                </p>

                <h2 class="title is-4 mt-5">4. Transfer of Personal Data</h2>
                <p>
                    The Operator does not distribute my personal data or provide it to third parties, except where such transfer is necessary for processing my inquiry on legal grounds or is provided for by the legislation of the Russian Federation.
                </p>
                <p>
                    When instructing third parties to process personal data, the Operator ensures compliance with the requirements of personal data legislation.
                </p>

                <h2 class="title is-4 mt-5">5. Consent Validity Period and Data Storage</h2>
                <p>
                    This consent is valid from the moment of its provision until the purposes of personal data processing are achieved or until the consent is revoked, unless otherwise provided by the legislation of the Russian Federation.
                </p>
                <p>
                    Personal data is stored for no longer than required by the processing purposes, unless another storage period is established by the legislation of the Russian Federation or other legal grounds exist for continuing processing.
                </p>
                <p>
                    Upon achieving the processing purposes or upon occurrence of other statutory grounds, personal data is subject to deletion or destruction in accordance with the established procedure.
                </p>

                <h2 class="title is-4 mt-5">6. Revocation of Consent</h2>
                <p>
                    I have the right to revoke this consent by sending a written notice to the Operator:
                </p>
                <ul>
                    <li>by email: <a href="mailto:info@energy-plus.biz" class="has-text-link">info@energy-plus.biz</a></li>
                    <li>by postal mail: 10A bldg. 1, 1st Vladimirskaya St., Moscow, 111123, Russia</li>
                </ul>
                <p>
                    Upon receipt of the revocation, the Operator terminates personal data processing based on this consent and ensures its deletion or destruction within statutory timeframes, unless other legal grounds exist for continued processing.
                </p>

                <h2 class="title is-4 mt-5">7. Final Provisions</h2>
                <p>
                    This consent is granted independently of other documents and consents posted on the Operator's website.
                </p>
                <p>
                    Information on the procedure and conditions of personal data processing is contained in the Personal Data Processing Policy available at: <a href="{p}/page/politika-konfidencialnosti" class="has-text-link has-text-weight-bold">https://энергияплюс.рф{p}/page/politika-konfidencialnosti</a>.
                </p>

                <div class="notification is-light mt-5">
                    <h3 class="title is-5 mb-3">Operator Details:</h3>
                    <p><strong>Full Name:</strong> Energy Plus Limited Liability Company (OOO «Энергия Плюс»)</p>
                    <p><strong>INN:</strong> 5041023415</p>
                    <p><strong>OGRN:</strong> 1035008257767</p>
                    <p><strong>Legal Address:</strong> 10A bldg. 1, 1st Vladimirskaya St., Moscow, 111123, Russia</p>
                    <p><strong>Email for Personal Data Inquiries:</strong> <a href="mailto:info@energy-plus.biz" class="has-text-link">info@energy-plus.biz</a></p>
                </div>
            {:else}
                <p>
                    Настоящим я, заполняя форму обратной связи на сайте энергияплюс.рф, свободно, своей волей и в своем интересе даю согласие Обществу с ограниченной ответственностью «Энергия Плюс», ИНН 5041023415, ОГРН 1035008257767, адрес: 111123, г. Москва, ул. 1-ая Владимирская, д. 10А, стр. 1, далее — Оператор, на обработку моих персональных данных на следующих условиях.
                </p>

                <h2 class="title is-4 mt-5">1. Цели обработки персональных данных</h2>
                <p>
                    Обработка персональных данных осуществляется исключительно в целях приема, рассмотрения и обработки обращений, направленных через форму обратной связи на сайте Оператора, а также осуществления обратной связи с пользователем для ответа на его обращение.
                </p>

                <h2 class="title is-4 mt-5">2. Перечень обрабатываемых персональных данных</h2>
                <p>
                    Оператор обрабатывает следующие персональные данные, предоставленные пользователем через форму обратной связи:
                </p>
                <ul>
                    <li>фамилия, имя, отчество (при наличии);</li>
                    <li>номер телефона;</li>
                    <li>адрес электронной почты.</li>
                </ul>

                <h2 class="title is-4 mt-5">3. Действия с персональными данными</h2>
                <p>
                    Я даю согласие на совершение следующих действий с моими персональными данными: сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу в случаях, предусмотренных законодательством Российской Федерации, обезличивание, блокирование, удаление и уничтожение.
                </p>
                <p>
                    Обработка персональных данных осуществляется с использованием средств автоматизации и (или) без использования таких средств в соответствии с законодательством Российской Федерации.
                </p>

                <h2 class="title is-4 mt-5">4. Передача персональных данных</h2>
                <p>
                    Оператор не распространяет мои персональные данные и не предоставляет их третьим лицам, за исключением случаев, когда такая передача необходима для обработки моего обращения на законном основании либо предусмотрена законодательством Российской Федерации.
                </p>
                <p>
                    При поручении обработки персональных данных третьим лицам Оператор обеспечивает соблюдение требований законодательства Российской Федерации о персональных данных.
                </p>

                <h2 class="title is-4 mt-5">5. Срок действия согласия и хранения данных</h2>
                <p>
                    Настоящее согласие действует с момента его предоставления до достижения целей обработки персональных данных либо до отзыва согласия, если иное не предусмотрено законодательством Российской Федерации.
                </p>
                <p>
                    Персональные данные хранятся не дольше, чем этого требуют цели обработки, если иной срок хранения не установлен законодательством Российской Федерации или отсутствуют иные законные основания для продолжения обработки.
                </p>
                <p>
                    По достижении целей обработки либо при наступлении иных предусмотренных законодательством оснований персональные данные подлежат удалению или уничтожению в установленном законом порядке.
                </p>

                <h2 class="title is-4 mt-5">6. Отзыв согласия</h2>
                <p>
                    Я вправе отозвать настоящее согласие, направив Оператору письменное обращение:
                </p>
                <ul>
                    <li>по электронной почте: <a href="mailto:info@energy-plus.biz" class="has-text-link">info@energy-plus.biz</a></li>
                    <li>по почтовому адресу: 111123, г. Москва, ул. 1-ая Владимирская, д. 10А, стр. 1</li>
                </ul>
                <p>
                    После получения отзыва Оператор прекращает обработку персональных данных, основанную на настоящем согласии, и обеспечивает их удаление или уничтожение, если отсутствуют иные законные основания для продолжения обработки, в сроки, установленные законодательством Российской Федерации.
                </p>

                <h2 class="title is-4 mt-5">7. Заключительные положения</h2>
                <p>
                    Настоящее согласие предоставляется отдельно от иных документов и согласий, размещенных на сайте Оператора.
                </p>
                <p>
                    Информация о порядке и условиях обработки персональных данных содержится в Политике в отношении обработки персональных данных, размещенной по адресу: <a href="/page/politika-konfidencialnosti" class="has-text-link has-text-weight-bold">https://энергияплюс.рф/page/politika-konfidencialnosti</a>.
                </p>

                <div class="notification is-light mt-5">
                    <h3 class="title is-5 mb-3">Реквизиты Оператора:</h3>
                    <p><strong>Полное наименование:</strong> Общество с ограниченной ответственностью «Энергия Плюс»</p>
                    <p><strong>ИНН:</strong> 5041023415</p>
                    <p><strong>ОГРН:</strong> 1035008257767</p>
                    <p><strong>Юридический адрес:</strong> 111123, г. Москва, ул. 1-ая Владимирская, д. 10А, стр. 1</p>
                    <p><strong>Электронная почта для обращений по вопросам персональных данных:</strong> <a href="mailto:info@energy-plus.biz" class="has-text-link">info@energy-plus.biz</a></p>
                </div>
            {/if}
        </div>
    </div>
</section>

<style>
    .content h2 {
        border-bottom: 2px solid #ff6600;
        padding-bottom: 0.3rem;
        color: #222;
    }
</style>
