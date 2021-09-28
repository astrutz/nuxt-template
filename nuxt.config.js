import colors from 'vuetify/es5/util/colors'

export default {
  head: {
    titleTemplate: '%s - nuxt-template',
    title: 'nuxt-template',
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdn.service.d-velop.cloud/dapi/latest/dapi.js' }
    ]
  },

  css: [
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],

  modules: [
    '@nuxtjs/axios'
  ],

  axios: {},

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false
    }
  },

  build: {
    // Needed to use the serverMiddleware for dmsobjectextensions, no implications, because only used serverside
    extend (config) {
      config.node = {
        fs: 'empty'
      }
    }
  },

  serverMiddleware: [
    { path: '/', handler: '~/serverMiddleware/index.js' }
  ],

  router: {
    base: '/able-nuxt-template/'
  }
}
