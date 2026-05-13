<template>
  <transition
    appear
    enter-active-class="animated fadeInUp"
    leave-active-class="animated fadeOutDown"
  >
    <div v-show="isVisible" class="floating-contact-wrapper">
      <q-btn
        class="floating-contact-btn"
        unelevated
        aria-label="Pošaljite upit"
        @click="scrollToContact"
      >
        <span class="floating-contact-btn__text">{{ t('floating.contact') }}</span>
        <span class="floating-contact-btn__arrow">→</span>

        <q-tooltip>
          {{ t('floating.tooltipContact') }}
        </q-tooltip>
      </q-btn>
    </div>
  </transition>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'

const $q = useQuasar()
const { t } = useI18n()

const hasScrolledEnough = ref(false)

const isVisible = computed(() => {
  if ($q.screen.lt.md) {
    return true
  }

  return hasScrolledEnough.value
})

const updateVisibility = () => {
  hasScrolledEnough.value = window.scrollY > 300
}

const scrollToContact = () => {
  const target = document.getElementById('contact')

  if (!target) return

  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

onMounted(() => {
  updateVisibility()
  window.addEventListener('scroll', updateVisibility, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateVisibility)
})
</script>

<style scoped lang="scss">
.floating-contact-wrapper {
  position: fixed;
  right: 24px;
  bottom: 82px;
  z-index: 3000;
}

.floating-contact-btn {
  min-height: 46px;
  padding: 0 18px;
  border-radius: var(--radius-sm);
  font-family: var(--ff-mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  background: var(--ink) !important;
  color: var(--paper) !important;
  border: 1px solid var(--line-on-dark);
}

.floating-contact-btn:hover {
  background: var(--ink-soft) !important;
}

.floating-contact-btn__text {
  margin-right: 10px;
}

.floating-contact-btn__arrow {
  font-size: 14px;
}

@media (max-width: 768px) {
  .floating-contact-wrapper {
    right: 18px;
    bottom: 76px;
  }
}
</style>
