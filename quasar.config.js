/* eslint-env node */

import { configure } from 'quasar/wrappers'

export default configure(() => {
  return {
    supportTS: false,

    css: ['app.scss'],

    extras: ['material-icons'],

    build: {
      vueRouterMode: 'history',

      env: {
        SITE_TITLE: 'CAT DOO ČAČAK | Kvalitetna ambalaža od 1992. godine',
        SITE_DESCRIPTION:
          'CAT DOO Čačak je kompanija specijalizovana za proizvodnju talasastog papira, kartona i ambalaže po meri.',
      },
    },

    htmlVariables: {
      title: 'CAT DOO ČAČAK | Kvalitetna ambalaža od 1992. godine',
      description:
        'CAT DOO Čačak je kompanija specijalizovana za proizvodnju talasastog papira, kartona i ambalaže po meri.',
    },

    devServer: {
      open: true,
    },

    framework: {
      config: {
        brand: {
          primary: '#1565C0',
          secondary: '#37474F',
          accent: '#F57C00',
          positive: '#2E7D32',
          dark: '#0D1B2A',
        },

        notify: {
          position: 'top-right',
          timeout: 3000,
          progress: true,
          actions: [
            {
              icon: 'close',
              color: 'white',
              round: true,
            },
          ],
        },
      },

      plugins: ['Notify', 'Loading'],
    },

    animations: ['fadeInUp', 'fadeOutDown'],

    ssr: {
      pwa: false,
      prodPort: 3000,
      middlewares: ['render'],
    },

    pwa: {
      workboxMode: 'GenerateSW',
    },

    capacitor: {
      hideSplashscreen: true,
    },

    electron: {
      inspectPort: 5858,
      bundler: 'packager',

      packager: {},

      builder: {
        appId: 'cat-doo-cacak',
      },
    },

    bex: {
      contentScripts: ['my-content-script'],
    },
  }
})
