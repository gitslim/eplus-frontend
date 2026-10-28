<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import HiddenH1 from "$lib/components/HiddenH1.svelte"
    import {session} from '$app/stores'

    $: currentLocale = $session.locale || 'ru'
    $: p = currentLocale === 'en' ? '/en' : ''

    $: title = currentLocale === 'en'
        ? 'Privacy Policy'
        : 'Политика конфиденциальности'

    $: meta = currentLocale === 'en' ? {
        title: "Privacy Policy | Energy Plus LLC",
        description: "Privacy and personal data processing policy on the Energy Plus LLC website.",
        h1: "Privacy Policy"
    } : {
        title: "Политика конфиденциальности | ООО «Энергия Плюс»",
        description: "Политика конфиденциальности и обработки персональных данных на сайте ООО «Энергия Плюс».",
        h1: "Политика конфиденциальности"
    }
</script>

<svelte:head>
    <meta name="description" content="{meta.description}">
    <meta property="og:locale" content="{currentLocale === 'en' ? 'en_US' : 'ru_RU'}">
    <meta property="og:type" content="article">
    <meta property="og:title" content="{meta.title}">
    <meta property="og:description" content="{meta.description}">
    <meta property="og:url" content="https://xn--c1adkmgpem4hrai.xn--p1ai/page/politika-konfidencialnosti">
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
                    APPROVED by General Director Order No. 156 of October 8, 2026
                {:else}
                    УТВЕРЖДЕНО Приказом Генерального директора от 08.10.2026 №156
                {/if}
            </p>
        </div>

        <div class="box content p-5">
            {#if currentLocale === 'en'}
                <h2 class="title is-4">1. General Provisions</h2>
                <p>
                    1.1 This Privacy Policy (hereinafter — "Policy") is adopted by the Administrator and applies to all information that the Administrator may obtain about the User of the website энергияплюс.рф (hereinafter — "Website" or "Service") from any device and during communication with the Administrator in any form.
                </p>
                <p>
                    1.2 By using the Website (viewing, reading text, submitting or uploading information) and providing their personal data, the Website User gives consent to the processing of personal data in accordance with this Policy, unless additional consent requirements are established by this Policy.
                </p>
                <p>
                    1.3 For the purposes of this Policy, "Administrator" means the legal entity Energy Plus LLC, registered office address: 10A bldg. 1, 1st Vladimirskaya St., Moscow, 111123, Russia, OGRN 1035008257767, INN 5041023415.
                </p>

                <h2 class="title is-4 mt-5">2. Personal Data</h2>
                <p>
                    2.1 Personal data — any information relating directly or indirectly to a specific or identifiable natural person (personal data subject) — User.
                </p>
                <p>
                    2.2 Personal data processing — any action (operation) or set of actions (operations) performed with personal data, using automation tools or without them, including collection, recording, systematization, accumulation, clarification (updating, amendment), extraction, use, transfer (provision, access), anonymization, deletion, and destruction.
                </p>
                <p>
                    2.3 The Administrator processes the following personal data: full name of the Service user, email address, phone number, statistical and other data necessary for using the Service.
                </p>
                <p>
                    2.4 Cookies — small text files stored in the browser of Service visitors. The Administrator automatically collects (from Cookies) anonymized statistical data about Service visitors, including:
                </p>
                <ul>
                    <li>type of action performed in the Service (click, cursor hover, etc.);</li>
                    <li>date and time of the action;</li>
                    <li>page URL;</li>
                    <li>Referer;</li>
                    <li>IP (without the ability to work with IP addresses in statistics);</li>
                    <li>ClientID (browser identifier via cookie);</li>
                    <li>screen resolution;</li>
                    <li>class of the clicked HTML element;</li>
                    <li>data on viewed items/services.</li>
                </ul>
                <p>
                    2.5 The Administrator processes statistical data and visitor data, including with the use of Yandex.Metrica systems.
                </p>
                <p>
                    2.6 The Service visitor can independently manage Cookies by modifying browser settings.
                </p>
                <p>
                    2.7 Hereby the User agrees to receive promotional materials from the Administrator and third parties with whom the Administrator has contractual relations.
                </p>
                <p>
                    2.8 Promotional materials are sent by the Administrator via email to the email address provided by the User.
                </p>

                <h2 class="title is-4 mt-5">3. Purposes of Personal Data Processing</h2>
                <p>
                    3.1 The Administrator processes the User's personal data for the purpose of exercising powers and obligations imposed on the Administration by the legislation of the Russian Federation.
                </p>

                <h2 class="title is-4 mt-5">4. Terms and Conditions of Personal Data Processing</h2>
                <p>
                    4.1 Processing of User personal data is carried out without limitation of period, by any legal means, including in personal data information systems using automation tools or without them.
                </p>
                <p>
                    4.2 Processing of User personal data is carried out for the duration of contractual relations between the User and the Administrator.
                </p>
                <p>
                    4.3 All personal data is obtained by the Administrator directly from the User or their representative, or from a person authorizing the Administrator to process User personal data, except as provided by law.
                </p>
                <p>
                    4.4 The Administrator has the right to transfer personal data to inquiry and investigative bodies and other authorized bodies on grounds provided by current legislation of the Russian Federation.
                </p>
                <p>
                    4.5 The legal basis for personal data processing by the Administrator: the Constitution of the Russian Federation, the Civil Code of the Russian Federation, the Labor Code of the Russian Federation, and the User's consent.
                </p>
                <p>
                    4.6 To ensure the protection of User personal data, the Administrator implements necessary legal and technical measures:
                </p>
                <p>
                    4.6.1 Legal measures: internal regulations on personal data protection, non-disclosure agreements with individuals having access to personal data.
                </p>
                <p>
                    4.6.2 Technical measures: using certified information security tools, interaction with the state cybersecurity monitoring system.
                </p>

                <h2 class="title is-4 mt-5">5. Rights of the User</h2>
                <p>
                    5.1 The User has the right to exercise their statutory rights, including but not limited to:
                </p>
                <ul>
                    <li>clarifying, updating their personal data, and demanding its destruction.</li>
                </ul>

                <h2 class="title is-4 mt-5">6. Rights and Obligations of the Administrator</h2>
                <p>
                    6.1 The Administrator undertakes to use the obtained User personal data only for the purposes specified in this Policy.
                </p>
                <p>
                    6.2 The Administrator is obliged to take precautions to protect the confidentiality of Personal Data according to standard commercial practices.
                </p>
                <p>
                    6.3 The Administrator is obliged to store User personal information for the period necessary for the purposes specified in this Privacy Policy.
                </p>

                <h2 class="title is-4 mt-5">7. Final Provisions</h2>
                <p>
                    Consent is valid for an unlimited duration. The User may revoke this consent to the processing of their personal data by notifying the Administrator in writing via email.
                </p>
            {:else}
                <h2 class="title is-4">1. Общие положения</h2>
                <p>
                    1.1 Настоящая Политика конфиденциальности (далее — «Политика») принята Администратором и действует в отношении всей информации, которую Администратор может получить о Пользователе сайта энергияплюс.рф (далее — «Сайт» или «Сервис») с любого устройства и при коммуникации с Администратором в любой форме.
                </p>
                <p>
                    1.2 Используя Сайт (просмотр, чтение текста, отправка или загрузка информации) и предоставляя свои персональные данные, Пользователь Сайта дает согласие на обработку персональных данных в соответствии с данной Политикой, если дополнительные требования к согласию не установлены настоящей Политикой.
                </p>
                <p>
                    1.3 Для целей настоящей политики под «Администратором» понимается юридическое лицо ООО «Энергия Плюс», адрес места нахождения: 111123, г. Москва, ул. 1-я Владимирская, д. 10А к., ОГРН 1035008257767, ИНН 5041023415.
                </p>

                <h2 class="title is-4 mt-5">2. Персональные данные</h2>
                <p>
                    2.1 Персональные данные — любая информация, относящаяся прямо или косвенно к определенному или определяемому физическому лицу (субъекту персональных данных) — Пользователю.
                </p>
                <p>
                    2.2 Обработка персональных данных — любое действие (операция) или совокупность действий (операций) с персональными данными, совершаемое с использованием средств автоматизации или без их использования, в том числе сбор, запись, систематизация, накопление, уточнение (обновление, изменение), извлечение, использование, передача (предоставление, доступ), обезличивание, удаление, уничтожение.
                </p>
                <p>
                    2.3 Администратор производит обработку следующих персональных данных: фамилии, имени, отчества пользователя Сервиса, адрес электронной почты, номер телефона, статистические и иные данные, необходимые для цели пользования Сервисом.
                </p>
                <p>
                    2.4 Cookies — небольшие по размеру текстовые файлы, хранящиеся в браузере посетителей Сервиса. На совокупности различных веб-проектов Администратора при просмотре Сервиса происходит автоматический сбор (из Cookies) следующих обезличенных статистических данных о посетителе Сервиса, в том числе:
                </p>
                <ul>
                    <li>тип выполненного в Сервисе действия (клик, наведение курсора и т.п.);</li>
                    <li>дата и время выполнения действия;</li>
                    <li>URL страницы;</li>
                    <li>Referer;</li>
                    <li>IP (без возможности работы с IP-адресами в статистике);</li>
                    <li>ClientD (идентификатор браузера по файлу Cookie);</li>
                    <li>экранное разрешение;</li>
                    <li>класс HTML-элемента, на который происходит клик;</li>
                    <li>данные о просматриваемых товарах.</li>
                </ul>
                <p>
                    2.5 Администратором обрабатываются статистические данные и данные о посетителе Сервиса, в том числе с использованием систем Яндекс.Метрика.
                </p>
                <p>
                    2.6 Посетитель Сервиса может самостоятельно управлять файлами Cookies путем изменения настроек браузера.
                </p>
                <p>
                    2.7 Настоящим Пользователь соглашается с направлением ему рекламных материалов Администратора и третьих лиц, с которыми у Администратора заключен договор, по которому Администратор является рекламораспространителем и (или) другие договоры.
                </p>
                <p>
                    2.8 Направление рекламных материалов осуществляется Администратором посредством направления e-mail рассылок на адрес электронной почты, указанной Пользователем.
                </p>

                <h2 class="title is-4 mt-5">3. Цели обработки персональных данных</h2>
                <p>
                    3.1 Администратор обрабатывает персональные данные Пользователя для целей реализации полномочий и обязанностей, возложенных на Администрацию законодательством Российской Федерации.
                </p>

                <h2 class="title is-4 mt-5">4. Порядок и условия обработки персональных данных</h2>
                <p>
                    4.1 Обработка персональных данных Пользователя осуществляется без ограничения срока, любым законным способом, в том числе в информационных системах персональных данных с использованием средств автоматизации или без использования таких средств.
                </p>
                <p>
                    4.2 Обработка персональных данных Пользователя осуществляется на срок действия договорных отношений Пользователя и Администратора, любым законным способом, в том числе в информационных системах персональных данных с использованием средств автоматизации или без использования таких средств.
                </p>
                <p>
                    4.3 Все персональные данные Администратор получает непосредственно от Пользователя или от его представителя, либо от лица, поручившего Администратору обработку персональных данных Пользователя, за исключением случаев, предусмотренных законодательством Российской Федерации.
                </p>
                <p>
                    4.4 Администратор вправе передавать персональные данные органам дознания и следствия, иным уполномоченным органам по основаниям, предусмотренным действующим законодательством Российской Федерации.
                </p>
                <p>
                    4.5 Правовым основанием обработки персональных данных Администратором являются: Конституция РФ, Гражданский кодекс РФ, Трудовой кодекс РФ, согласие Пользователя на обработку его персональных данных.
                </p>
                <p>
                    4.6 Для обеспечения защиты персональных данных Пользователя при их обработке Администратором приняты следующие меры от несанкционированного доступа, а также иных противоправных действий в отношении персональных данных пользователя:
                </p>
                <p>
                    4.6.1 Правовые меры, включающие в себя, в том числе создание документов, направленных на защиту персональных данных: положение о защите персональных данных, заключение соглашений о конфиденциальности с лицами, имеющими доступ к персональным данным.
                </p>
                <p>
                    4.6.2 Технические меры: использование средств защиты информации, прошедших процедуру оценки соответствия требованиям законодательства РФ, взаимодействие с госсистемой обнаружения, предупреждения и ликвидации последствий кибератак.
                </p>

                <h2 class="title is-4 mt-5">5. Права Пользователя</h2>
                <p>
                    5.1 Пользователь вправе реализовывать свои права, предусмотренные законодательством Российской Федерации о персональных данных, в том числе, но не ограничиваясь:
                </p>
                <ul>
                    <li>уточнять, обновлять свои персональные данные, требовать их уничтожения.</li>
                </ul>

                <h2 class="title is-4 mt-5">6. Права и обязанности администратора</h2>
                <p>
                    6.1 Администратор обязуется использовать полученную персональную информацию Пользователя только в целях, названных в настоящей Политике.
                </p>
                <p>
                    6.2 Администратор обязан принимать меры предосторожности для защиты конфиденциальности Персональных данных согласно порядку, обычно используемого для защиты такого рода информации в деловом обороте.
                </p>
                <p>
                    6.3 Администратор обязан хранить персональную информацию Пользователя в течение периода времени, необходимого для целей, указанных в настоящей Политике конфиденциальности.
                </p>

                <h2 class="title is-4 mt-5">7. Заключительные положения</h2>
                <p>
                    Согласие действует в течение неограниченного времени. Пользователь вправе отозвать настоящее согласие на обработку своих персональных данных, письменно уведомив об этом Администратора по электронной почте.
                </p>
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
