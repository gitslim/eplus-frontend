<script>
    import {createEventDispatcher} from 'svelte'
    import Icon from 'fa-svelte'
    import {faExclamationTriangle, faPhone, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
    import {createForm} from 'svelte-forms-lib'
    import * as yup from 'yup'
    import {bitrixLead} from '$lib/utils'
    import {goto} from '$app/navigation'
    import {t} from 'svelte-i18n'
    import {session} from '$app/stores'

    const dispatch = createEventDispatcher()

    export let btnText = ''
    export let inverted = false
    export let lead = {}

    $: currentLocale = $session.locale || 'ru'
    $: p = currentLocale === 'en' ? '/en' : ''
    $: resolvedBtnText = btnText || $t('form.submit')

    const {
        form,
        errors,
        state,
        touched,
        isValid,
        isSubmitting,
        isValidating,
        handleBlur,
        handleChange,
        handleSubmit
    } = createForm({
        initialValues: {
            email:'',
            agree: false
        },
        validationSchema: yup.object().shape({
            email: yup.string().email($t('form.invalid_email') || $t('form.required')),
            agree: yup.boolean().oneOf([true], $t('form.consent_required') || 'Необходимо согласие на обработку персональных данных')
        }),
        onSubmit: async values => {
            let baseTitle = lead.title || 'Форма контактов'
            let title = currentLocale === 'en' ? `${baseTitle} [EN]` : baseTitle
            let data = {
                type: lead.type || 'lead.contactForm',
                title: title,
                comments: lead.comments || '',
                email: values.email,
                name: currentLocale === 'en' ? 'Customer from email form' : 'Заказчик из формы',
                phone: ''
            }
            // console.debug('lead data', data)
            let response = await bitrixLead(data)
            if (response.ok) {
                dispatch('success', {
                    values,
                    response
                })
                if (currentLocale === 'en') {
                    window.location.href = '/en/thanks'
                } else {
                    goto('/thanks')
                }
            } else {
                alert($t('form.send_error'))
            }
            
        }
    })

</script>

<form on:submit={handleSubmit}>
    <div class="field">
        <!--        <label class="label" for="name">Ваше имя</label>-->
        <div class="control has-icons-left has-icons-right">
            <input class="input"
                   class:is-danger={$touched.email && $errors.email}
                   id="email"
                   name="email"
                   placeholder="Email"
                   on:blur={handleBlur}
                   bind:value={$form.email}>
            <span class="icon is-small is-left">
          <Icon icon="{faEnvelope}"/>
        </span>
            <div class="icon is-small is-right" class:has-text-danger={$touched.email && $errors.email}>
                {#if $touched.email && $errors.email}
                    <Icon icon="{faExclamationTriangle}"/>
                {/if}
            </div>
        </div>
        {#if $touched.email && $errors.email}
            <p class="help" class:is-white={inverted} class:is-danger={!inverted}>{$errors.email}</p>
        {/if}
    </div>

    <div class="field">
        <div class="control">
            <label class="checkbox is-size-7" class:has-text-white={inverted}>
                <input type="checkbox"
                       id="agreeEmail"
                       name="agree"
                       on:change={handleChange}
                       bind:checked={$form.agree}>
                {#if currentLocale === 'en'}
                    I consent to the <a href="{p}/page/soglasie-na-obrabotku-personalnyh-dannyh" target="_blank" class={inverted ? 'has-text-white is-underlined' : 'has-text-link'}>processing of personal data</a> and agree with the <a href="{p}/page/politika-konfidencialnosti" target="_blank" class={inverted ? 'has-text-white is-underlined' : 'has-text-link'}>privacy policy</a>
                {:else}
                    Я даю согласие на <a href="/page/soglasie-na-obrabotku-personalnyh-dannyh" target="_blank" class={inverted ? 'has-text-white is-underlined' : 'has-text-link'}>обработку персональных данных</a> и соглашаюсь с <a href="/page/politika-konfidencialnosti" target="_blank" class={inverted ? 'has-text-white is-underlined' : 'has-text-link'}>политикой конфиденциальности</a>
                {/if}
            </label>
        </div>
        {#if $touched.agree && $errors.agree}
            <p class="help" class:is-white={inverted} class:is-danger={!inverted}>{$errors.agree}</p>
        {/if}
    </div>

    <div class="field is-grouped">
        <div class="control">
            <button class="button is-link" class:is-inverted={inverted} type="submit"
                    class:is-loading={$isSubmitting}>
                {resolvedBtnText}
            </button>
        </div>
        <!--    <div class="control">-->
        <!--      <button class="button is-link is-light" on:click={cancel}>Отмена</button>-->
        <!--    </div>-->
    </div>
</form>
<!--<div>{JSON.stringify($isValid)}</div>-->
