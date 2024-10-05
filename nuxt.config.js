export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  compatibilityDate: '2024-10-04',
  routeRules: {
    // Admin dashboard renders only on client-side
    //   '/admin/**': {ssr: false, robots: false},
    // Add cors headers on API routes
    //   '/api/**': {cors: true, robots: false, experimentalNoScripts: true}
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Template',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Photo gallery'},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@pinia/nuxt',
    'nuxt-plotly'
  ],

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore' // import { defineStore } from 'pinia'
    ]
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    watch: {
      ws: false
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vuetify']
  },

  // https://github.com/vuejs/pinia/issues/1542
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          silenceDeprecations: ['legacy-js-api'],
        },
        sass: {
          api: 'modern',
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
    build: {
      target: ['esnext', 'es2022']
    },
    esbuild: {
      target: "es2022"
    },
    optimizeDeps: {
      include: ["plotly.js-dist-min"],
      esbuildOptions: {
        target: "es2022"
      }
    },
    server: {
      host: "0",
      hmr: {
        protocol: 'ws',
        host: 'localhost'
      },
      watch: {
        usePolling: true,
        interval: 1000
      }

    }
  },

  devtools: {
    timeline: {
      enabled: true
    }
  }
};
