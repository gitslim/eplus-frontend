<script>
    import {createEventDispatcher} from 'svelte'
    import Icon from 'fa-svelte'
    import {faExclamationTriangle, faPhone, faUser} from '@fortawesome/free-solid-svg-icons'
    import {createForm} from 'svelte-forms-lib'
    import * as yup from 'yup'
    import {bitrixLead} from '$lib/utils'
    import {goto} from '$app/navigation'
    import {imask} from '@imask/svelte'

    const dispatch = createEventDispatcher()

    export let btnText = 'Отправить'
    export let inverted = false
    export let lead = {}

    const maskOptions = {
        mask: '+7 (000) 000-00-00'
    }

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
            phone: yup.string()
                .matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Некорректный номер телефона')
                .required('Обязательное поле')
        }),
        onSubmit: async values => {
            window.ym(54841009, 'init', {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true,
            })

            let data = {
                type: lead.type || 'lead.contactForm',
                title: lead.title || 'Форма контактов',
                comments: lead.comments || '',
                email: '',
                name: values.name,
                phone: values.phone                
            }
            // console.debug('lead data', data)
            let response = await bitrixLead(data)
            if (response.ok) {
                dispatch('success', {
                    values,
                    response
                })
                goto('/thanks')
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
                   class:is-danger={$touched.name && $errors.name}
                   id="name"
                   name="name"
                   placeholder="Ваше имя"
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
                   placeholder="Телефон"
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

    <div class="field is-grouped">
        <div class="control">
            <button class="button is-link" class:is-inverted={inverted} type="submit"
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
