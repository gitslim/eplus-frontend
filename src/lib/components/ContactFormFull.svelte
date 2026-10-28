<script>
    import {createEventDispatcher} from 'svelte'
    import Icon from 'fa-svelte'
    import {faExclamationTriangle, faPhone, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
    import {createForm} from 'svelte-forms-lib'
    import * as yup from 'yup'
    import {bitrixLead} from '$lib/utils'
    import {goto} from '$app/navigation'
    import {imask} from '@imask/svelte'
    import {t} from 'svelte-i18n'
    import {session} from '$app/stores'

    const dispatch = createEventDispatcher()

    export let btnText = ''
    export let inverted = false
    export let lead = {}

    $: currentLocale = $session.locale || 'ru'
    $: p = currentLocale === 'en' ? '/en' : ''
    $: resolvedBtnText = btnText || $t('form.submit')
    $: maskOptions = currentLocale === 'en'
        ? { mask: /^\+?[0-9\s\-\(\)]*$/ }
        : { mask: '+7 (000) 000-00-00' }

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
            name: '',
            phone: '',
            email:'',
            agree: false
        },
        validationSchema: yup.object().shape({
            name: yup.string().required($t('form.required')),
            phone: yup.string()
                .test('phone-valid', $t('form.invalid_phone'), val => {
                    if (!val) return false
                    if (currentLocale === 'en') {
                        return /^\+?[0-9\s\-\(\)]{7,20}$/.test(val)
                    }
                    return /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(val)
                })
                .required($t('form.required')),
            email: yup.string().email($t('form.invalid_email')),
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
                name: values.name,
                phone: values.phone                
            }
            // console.debug('lead data', data)
            let response = await bitrixLead(data)
            if (response.ok) {
                if (lead.downloadUrl) {
                    const a = document.createElement('a')
                    a.href = lead.downloadUrl
                    a.download = lead.downloadName || lead.downloadUrl.split('/').pop()
                    document.body.appendChild(a)
                    a.click()
                    document.body.removeChild(a)
                }
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
                   class:is-danger={$touched.name && $errors.name}
                   id="name"
                   name="name"
                   placeholder="{$t('form.your_name')}"
                   on:blur={handleBlur}
                   bind:value={$form.name}>
            <span class="icon is-small is-left">
          <Icon icon="{faUser}"/>
        </span>
            <div class="icon is-small is-right" class:has-text-danger={$touched.name && $errors.name}>
                {#if $touched.name && $errors.name}
                    <Icon icon="{faExclamationTriangle}"/>
                {/if}
            </div>
        </div>
        {#if $touched.name && $errors.name}
            <p class="help" class:is-white={inverted} class:is-danger={!inverted}>{$errors.name}</p>
        {/if}
    </div>

    <div class="field">
        <!--        <label class="label" for="phone">Телефон</label>-->
        <div class="control has-icons-left has-icons-right">
            <input id="phone"
                   name="phone"
                   placeholder="{$t('form.phone')}"
                   use:imask={maskOptions}
                   on:accept={(e) => {
                        $form.phone = e.detail.value;
                   }}
                   on:blur={handleBlur}
                   class="input"
                   class:is-danger={$touched.phone && $errors.phone}>
            <span class="icon is-small is-left">
        <Icon icon="{faPhone}"/>
    </span>
            <span class="icon is-small is-right" class:has-text-danger={$touched.phone && $errors.phone}>
        {#if $touched.phone && $errors.phone}
              <Icon icon="{faExclamationTriangle}"/>
          {/if}
    </span>
        </div>
        {#if $touched.phone && $errors.phone}
            <p class="help" class:is-white={inverted} class:is-danger={!inverted}>{$errors.phone}</p>
        {/if}
    </div>

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
                       id="agreeFull"
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

<style>
    @media (max-width: 480px) {
        :global(.field .input) {
            font-size: 16px;
        }
        :global(.field.is-grouped) {
            flex-direction: column;
        }
        :global(.field.is-grouped .control) {
            width: 100%;
        }
        :global(.field.is-grouped .control .button) {
            width: 100%;
            min-height: 48px;
        }
    }
</style>
