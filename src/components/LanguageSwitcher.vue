<template>
  <q-btn-dropdown
    flat
    dense
    class="language-switcher"
    :label="currentLocaleLabel"
    dropdown-icon="expand_more"
  >
    <q-list class="language-menu">
      <q-item
        v-for="item in languages"
        :key="item.value"
        clickable
        v-close-popup
        :active="locale === item.value"
        @click="changeLocale(item.value)"
      >
        <q-item-section>
          <q-item-label>{{ item.label }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const languages = [
  {
    value: 'sr',
    label: 'SR',
  },
  {
    value: 'en',
    label: 'EN',
  },
  {
    value: 'ru',
    label: 'RU',
  },
]

const currentLocaleLabel = computed(() => {
  return languages.find((item) => item.value === locale.value)?.label || 'SR'
})

const changeLocale = (value) => {
  locale.value = value
  localStorage.setItem('cat_locale', value)

  document.documentElement.setAttribute('lang', value === 'sr' ? 'sr' : value)
}
</script>

<style scoped lang="scss">
.language-switcher {
  min-height: 38px;
  padding: 0 8px;
  border-radius: var(--radius-sm);
  font-family: var(--ff-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  color: var(--paper);
}

.language-menu {
  min-width: 110px;
  background: var(--paper);
  color: var(--ink);
}

.language-menu .q-item {
  font-family: var(--ff-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
}

.language-menu .q-item--active {
  color: var(--signal);
}
</style>
