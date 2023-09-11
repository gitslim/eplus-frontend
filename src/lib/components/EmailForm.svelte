<script>
    import {createEventDispatcher} from 'svelte'
    import Icon from 'fa-svelte'
    import {faExclamationTriangle, faPhone, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
    import {createForm} from 'svelte-forms-lib'
    import * as yup from 'yup'
    import {bitrixLead} from '$lib/utils'

    const dispatch = createEventDispatcher()

    export let btnText = 'Отправить'
    export let inverted = false
    export let lead = {}

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
            email:''
        },
        validationSchema: yup.object().shape({
            email: yup.string().email('Обязательное поле')
        }),
        onSubmit: async values => {
            let data = {
                type: lead.type || 'lead.contactForm',
                title: lead.title || 'Форма контактов',
                comments: lead.comments || '',
                email: values.email,
                name:'Заказчик из формы',
                phone: ''
            }
            // console.debug('lead data', data)
            let response = await bitrixLead(data)
            if (response.ok) {
                dispatch('success', {
                    values,
                    response
                })
            } else {
                alert('Ошибка отправки формы. Попробуйте еще раз!')
            }
            
        }
    })

</script>

<form on:submit={handleSubmit}>
    <div class="field">
        <!--        <label class="label" for="name">Ваше имя</label>-->
        <div class="control has-icons-left has-icons-right">
            <input class="input"
                   class:is-danger={$errors.name}
                   id="email"
                   name="email"
                   placeholder="Email"
                   on:change={handleChange}
                   on:blur={handleChange}
                   on:keyup={handleChange}
                   bind:value={$form.email}>
            <span class="icon is-small is-left">
          <Icon icon="{faEnvelope}"/>
        </span>
            <div class="icon is-small is-right" class:has-text-danger={$errors.email}>
                {#if $errors.email}
                    <Icon icon="{faExclamationTriangle}"/>
                {/if}
            </div>
        </div>
        {#if $errors.email}
            <p class="help" class:is-white={inverted} class:is-danger={!inverted}>{$errors.email}</p>
        {/if}
    </div>

    <div class="field is-grouped">
        <div class="control">
            <button class="button is-link" class:is-inverted={inverted} disabled="{!$isValid}" type="submit"
                    class:is-loading={$isSubmitting}>
                {btnText}
            </button>
        </div>
        <!--    <div class="control">-->
        <!--      <button class="button is-link is-light" on:click={cancel}>Отмена</button>-->
        <!--    </div>-->
    </div>
</form>
<!--<div>{JSON.stringify($isValid)}</div>-->
