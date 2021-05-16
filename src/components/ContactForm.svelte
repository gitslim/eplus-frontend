<script>
  import Icon from 'fa-svelte'
  import {faCheck, faExclamationTriangle, faPhone, faUser} from '@fortawesome/free-solid-svg-icons'
  import {createForm} from 'svelte-forms-lib'
  import * as yup from 'yup'

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
      name: yup.string().required("Обязательное поле"),
      phone: yup.string().required("Обязательное поле")
    }),
    onSubmit: values => {
      alert(JSON.stringify(values))
    }
  })

</script>

<div>
  <form class:valid={$isValid} on:submit={handleSubmit}>
    <div class="field">
      <label for="name" class="label">Ваше имя</label>
      <div class="control has-icons-left has-icons-right">
        <input name="name"
               on:keyup={handleChange}
               class="input"
               class:is-danger={$touched.name && $errors.name}>
        <span class="icon is-small is-left">
          <Icon icon="{faUser}"/>
        </span>
        <div class="icon is-small is-right">
          {#if $touched.name}
            {#if $errors.name}
              <Icon icon="{faExclamationTriangle}"/>
            {:else}
              <Icon icon="{faCheck}"/>
            {/if}
          {/if}
        </div>
      </div>
      {#if $touched.name && $errors.name}
        <p class="help is-danger">{$errors.name}</p>
      {/if}
    </div>

    <div class="field">
      <label for="phone" class="label">Телефон</label>
      <div class="control has-icons-left has-icons-right">
        <input id="phone" name="phone"
               bind:value={$form.phone}
               on:change={handleChange}
               on:blur={handleChange}
               type="text"
               class="input"
               class:is-danger={$touched.phone && $errors.phone}>
        <span class="icon is-small is-left">
        <Icon icon="{faPhone}"/>
    </span>
        <span class="icon is-small is-right">
        {#if $touched.phone && $errors.phone}
              <Icon icon="{faExclamationTriangle}"/>
          {/if}
    </span>
      </div>
      {#if $touched.phone && $errors.phone}
        <p class="help is-danger">{$errors.phone}</p>
      {/if}
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button type="submit" class="button is-link" disabled="{!$isValid}">Заказать звонок</button>
      </div>
      <!--    <div class="control">-->
      <!--      <button class="button is-link is-light" on:click={cancel}>Отмена</button>-->
      <!--    </div>-->
    </div>
  </form>

</div>
