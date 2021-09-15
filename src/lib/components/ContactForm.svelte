<script>
    import {createEventDispatcher} from 'svelte'
    import Icon from 'fa-svelte'
    import {faCheck, faExclamationTriangle, faPhone, faUser} from '@fortawesome/free-solid-svg-icons'
    import {createForm} from 'svelte-forms-lib'
    import * as yup from 'yup'
    import {bitrixLead} from '$lib/utils'

    const dispatch = createEventDispatcher()

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
            phone: ''
        },
        validationSchema: yup.object().shape({
            name: yup.string().required('Обязательное поле'),
            phone: yup.string().required('Обязательное поле')
        }),
        onSubmit: async values => {
            let response = await bitrixLead({
                type: 'lead.contactForm',
                title: 'Обращение с сайта',
                name: values.name,
                phone: values.phone
            })
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
        <label class="label" for="name">Ваше имя</label>
        <div class="control has-icons-left has-icons-right">
            <input class="input"
                   class:is-danger={$errors.name}
                   id="name"
                   name="name"
                   on:change={handleChange}
                   on:blur={handleChange}
                   on:keyup={handleChange}
                   bind:value={$form.name}>
            <span class="icon is-small is-left">
          <Icon icon="{faUser}"/>
        </span>
            <div class="icon is-small is-right">
                {#if $errors.name}
                    <Icon icon="{faExclamationTriangle}"/>
                {:else}
                    <Icon icon="{faCheck}"/>
                {/if}
            </div>
        </div>
        {#if $errors.name}
            <p class="help is-danger">{$errors.name}</p>
        {/if}
    </div>

    <div class="field">
        <label class="label" for="phone">Телефон</label>
        <div class="control has-icons-left has-icons-right">
            <input id="phone"
                   name="phone"
                   on:change={handleChange}
                   on:blur={handleChange}
                   on:keyup={handleChange}
                   bind:value={$form.phone}
                   class="input"
                   class:is-danger={$errors.phone}>
            <span class="icon is-small is-left">
        <Icon icon="{faPhone}"/>
    </span>
            <span class="icon is-small is-right">
        {#if $errors.phone}
              <Icon icon="{faExclamationTriangle}"/>
          {/if}
    </span>
        </div>
        {#if $errors.phone}
            <p class="help is-danger">{$errors.phone}</p>
        {/if}
    </div>

    <div class="field is-grouped">
        <div class="control">
            <button class="button is-link" disabled="{!$isValid}" type="submit" class:is-loading={$isSubmitting}>
                Отправить
            </button>
        </div>
        <!--    <div class="control">-->
        <!--      <button class="button is-link is-light" on:click={cancel}>Отмена</button>-->
        <!--    </div>-->
    </div>
</form>
<!--<div>{JSON.stringify($isValid)}</div>-->
