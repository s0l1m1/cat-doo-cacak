<template>
  <q-card flat class="contact-form-card">
    <q-form ref="formRef" class="q-gutter-md" @submit.prevent="submitForm">
      <div>
        <div class="form-eyebrow">Upit za saradnju</div>

        <h3 class="cat-heading text-h4 q-mt-sm q-mb-sm">Pošaljite poruku</h3>

        <p class="text-muted q-mb-lg">
          Popunite formu za informacije o ponudi, proizvodnji i mogućnostima saradnje.
        </p>
      </div>

      <q-input
        v-model.trim="form.fullName"
        outlined
        label="Ime i prezime"
        autocomplete="name"
        :rules="[(val) => !!val || 'Ime i prezime je obavezno']"
      />

      <q-input
        v-model.trim="form.email"
        outlined
        type="email"
        label="Email adresa"
        autocomplete="email"
        :rules="[
          (val) => !!val || 'Email adresa je obavezna',
          (val) => isValidEmail(val) || 'Unesite ispravnu email adresu',
        ]"
      />

      <q-input
        v-model.trim="form.phone"
        outlined
        type="tel"
        label="Telefon"
        autocomplete="tel"
        hint="Opciono"
      />

      <q-input
        v-model.trim="form.message"
        outlined
        type="textarea"
        label="Poruka"
        autogrow
        counter
        maxlength="1000"
        :rules="[
          (val) => !!val || 'Poruka je obavezna',
          (val) => val.length >= 20 || 'Poruka mora imati najmanje 20 karaktera',
        ]"
      />

      <q-btn
        class="cat-btn full-width q-mt-sm"
        unelevated
        type="submit"
        label="Pošalji poruku"
        :loading="loading"
      />
    </q-form>
  </q-card>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { Notify } from 'quasar'

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
      message: 'Poruka je uspešno pripremljena.',
      caption: 'Hvala na upitu. Kontaktiraćemo vas u najkraćem roku.',
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
