<template>
  <q-card flat class="contact-form-card">
    <q-form ref="formRef" class="q-gutter-md" @submit.prevent="submitForm">
      <div>
        <div class="form-eyebrow">
          {{ t('form.eyebrow') }}
        </div>

        <h3 class="cat-heading text-h4 q-mt-sm q-mb-sm">
          {{ t('form.title') }}
        </h3>

        <p class="text-muted q-mb-lg">
          {{ t('form.text') }}
        </p>
      </div>

      <q-input
        v-model.trim="form.fullName"
        outlined
        :label="t('form.fullName')"
        autocomplete="name"
        :rules="[(val) => !!val || t('form.requiredName')]"
      />

      <q-input
        v-model.trim="form.email"
        outlined
        type="email"
        :label="t('form.email')"
        autocomplete="email"
        :rules="[
          (val) => !!val || t('form.requiredEmail'),
          (val) => isValidEmail(val) || t('form.invalidEmail'),
        ]"
      />

      <q-input
        v-model.trim="form.phone"
        outlined
        type="tel"
        :label="t('form.phone')"
        autocomplete="tel"
        :hint="t('form.phoneHint')"
      />

      <q-input
        v-model.trim="form.message"
        outlined
        type="textarea"
        :label="t('form.message')"
        autogrow
        counter
        maxlength="1000"
        :rules="[
          (val) => !!val || t('form.requiredMessage'),
          (val) => val.length >= 20 || t('form.shortMessage'),
        ]"
      />

      <q-btn
        class="cat-btn full-width q-mt-sm"
        unelevated
        type="submit"
        :label="t('form.submit')"
        :loading="loading"
      />
    </q-form>
  </q-card>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { Notify } from 'quasar'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const formRef = ref(null)
const loading = ref(false)

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  message: '',
})

const isValidEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(value)
}

const resetForm = () => {
  form.fullName = ''
  form.email = ''
  form.phone = ''
  form.message = ''

  if (formRef.value) {
    formRef.value.resetValidation()
  }
}

const submitForm = async () => {
  const isValid = await formRef.value.validate()

  if (!isValid) return

  loading.value = true

  window.setTimeout(() => {
    loading.value = false

    Notify.create({
      type: 'positive',
      message: t('form.success'),
      caption: t('form.successCaption'),
    })

    resetForm()
  }, 700)
}
</script>

<style scoped lang="scss">
.form-eyebrow {
  font-family: var(--ff-mono);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--signal);
}

.form-eyebrow::before {
  content: '── ';
}
</style>
