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
        name="name"
        :rules="[(val) => !!val || t('form.requiredName')]"
      />

      <q-input
        v-model.trim="form.email"
        outlined
        type="email"
        :label="t('form.email')"
        autocomplete="email"
        name="email"
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
        name="phone"
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
        name="message"
        :rules="[
          (val) => !!val || t('form.requiredMessage'),
          (val) => val.length >= 20 || t('form.shortMessage'),
        ]"
      />

      <!-- Honeypot anti-spam polje. Korisnik ga ne vidi. -->
      <input
        v-model="form.website"
        type="text"
        name="_gotcha"
        tabindex="-1"
        autocomplete="off"
        class="honeypot-field"
      />

      <q-btn
        class="cat-btn full-width q-mt-sm"
        unelevated
        type="submit"
        :label="t('form.submit')"
        :loading="loading"
        :disable="loading"
      />
    </q-form>
  </q-card>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { Notify } from 'quasar'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

const formRef = ref(null)
const loading = ref(false)

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  message: '',
  website: '',
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
  form.website = ''

  if (formRef.value) {
    formRef.value.resetValidation()
  }
}

const notifyError = (message, caption) => {
  Notify.create({
    type: 'negative',
    message,
    caption,
  })
}

const submitForm = async () => {
  const isValid = await formRef.value.validate()

  if (!isValid) return

  if (!FORMSPREE_ENDPOINT) {
    notifyError(
      'Formspree endpoint nije podešen.',
      'Proveri VITE_FORMSPREE_ENDPOINT u .env fajlu i na Vercelu.',
    )

    return
  }

  // Ako bot popuni skriveno polje, prekidamo slanje.
  if (form.website) return

  loading.value = true

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.fullName,
        email: form.email,
        phone: form.phone || 'Nije unet',
        message: form.message,
        language: locale.value,
        source: 'CAT DOO ČAČAK website',
        page: window.location.href,
        _subject: 'Novi upit sa sajta CAT DOO ČAČAK',
        _gotcha: form.website,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => null)
      const errorMessage = errorData?.errors?.[0]?.message || 'Formspree request failed'

      throw new Error(errorMessage)
    }

    Notify.create({
      type: 'positive',
      message: t('form.success'),
      caption: t('form.successCaption'),
    })

    resetForm()
  } catch (error) {
    notifyError(
      t('form.error') || 'Poruka nije poslata.',
      t('form.errorCaption') ||
        'Pokušajte ponovo ili nas kontaktirajte direktno putem telefona/emaila.',
    )
  } finally {
    loading.value = false
  }
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

.honeypot-field {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}
</style>
