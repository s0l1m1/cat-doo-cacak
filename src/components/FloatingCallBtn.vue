<template>
  <transition
    appear
    enter-active-class="animated fadeInUp"
    leave-active-class="animated fadeOutDown"
  >
    <div v-show="isVisible" class="floating-call-wrapper">
      <q-btn
        class="floating-call-btn"
        unelevated
        type="a"
        :href="phoneHref"
        aria-label="Pozovite CAT DOO ČAČAK"
      >
        <span class="floating-call-btn__text">{{ t('floating.call') }}</span>
        <span class="floating-call-btn__arrow">→</span>

        <q-tooltip>
          {{ t('floating.tooltipCall') }}
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

const phoneHref = 'tel:+381646162273'
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

onMounted(() => {
  updateVisibility()
  window.addEventListener('scroll', updateVisibility, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateVisibility)
})
</script>

<style scoped lang="scss">
.floating-call-btn {
  min-height: 46px;
  padding: 0 18px;
  border-radius: var(--radius-sm);
  font-family: var(--ff-mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  background: var(--signal) !important;
  color: var(--ink) !important;
}

.floating-call-btn__text {
  margin-right: 10px;
}

.floating-call-btn__arrow {
  font-size: 14px;
}
</style>
