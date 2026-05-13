import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import { messages } from 'src/i18n'

const savedLocale = localStorage.getItem('cat_locale') || 'sr'

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: savedLocale,
  fallbackLocale: 'sr',
  messages,
})

export default boot(({ app }) => {
  app.use(i18n)
})
