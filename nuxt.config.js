export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'delapse-fe',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
    ]
  },

  // runtime config
  publicRuntimeConfig: {
    apiURL: process.env.API_URL,
    clientId: process.env.PASSPORT_CLIENT_ID,
    clientSecret: process.env.PASSPORT_CLIENT_SECRET,
    grandClientId: process.env.PASSPORT_GRANT_CLIENT_ID,
    grandClientSecret: process.env.PASSPORT_GRANT_CLIENT_SECRET,
    mixPusherAppKey: process.env.MIX_PUSHER_APP_KEY,
    mixPusherAppCluster: process.env.MIX_PUSHER_APP_CLUSTER,
    mapboxAccessToken: process.env.MAPBOX_ACCESS_TOKEN,
  },
  env: {
    apiURL: process.env.API_URL,
    clientId: process.env.PASSPORT_CLIENT_ID,
    clientSecret: process.env.PASSPORT_CLIENT_SECRET,
    grandClientId: process.env.PASSPORT_GRANT_CLIENT_ID,
    grandClientSecret: process.env.PASSPORT_GRANT_CLIENT_SECRET,
    mixPusherAppKey: process.env.MIX_PUSHER_APP_KEY,
    mixPusherAppCluster: process.env.MIX_PUSHER_APP_CLUSTER,
    mapboxAccessToken: process.env.MAPBOX_ACCESS_TOKEN,
  },
  privateRuntimeConfig: {
    clientId: process.env.PASSPORT_CLIENT_ID,
    clientSecret: process.env.PASSPORT_CLIENT_SECRET,
    grandClientId: process.env.PASSPORT_GRANT_CLIENT_ID,
    grandClientSecret: process.env.PASSPORT_GRANT_CLIENT_SECRET,
    mixPusherAppKey: process.env.MIX_PUSHER_APP_KEY,
    mixPusherAppCluster: process.env.MIX_PUSHER_APP_CLUSTER,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/fonts/roboto.css',
    '~/assets/css/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/vee-validate",
    '~/plugins/echo.js',
    '~/plugins/chat-scroll.js',
    '~/plugins/vue-datepicker',
    '~/plugins/vue-carousel',
    { src: '~/plugins/vue-masonry', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@nuxtjs/pwa'
  ],

  fontawesome: {
    icons: {
      solid: [
        'faHome',
        'faKey',
        'faUser',
        'faEnvelopeOpen',
        'faLock',
        'faArrowRight',
        'faPlus',
        'faArrowLeft',
        'faCalendarAlt',
        'faBookOpen',
        'faChevronDown',
        'faTrash',
        'faSearch',
        'faUserPlus',
        'faUpload',
        'faComment',
        'faImage',
        'faMapMarkerAlt',
        'faExclamationTriangle',
        'faCog',
        'faPhoneAlt',
        'faPlay',
        'faTimes',
        'faSave',
        'faArrowDown',
        'faSun',
      ],
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/auth-next',
    '@nuxtjs/toast'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL,
  },

  proxy: {
    '/backend': {
      target: process.env.API_URL,
      pathRewrite: { '^/backend': '/' },
    },
  },

  // Auth module configuration (https://dev.auth.nuxtjs.org/)
  auth: {
    redirect: {
      login: "/login",
      logout: "/login",
      callback: "/login",
      user: "/",
      home: false
    },
    strategies: {
      password_grant: {
        scheme: "refresh",
        token: {
          property: "access_token",
          propertyName: "access_token"
        },
        endpoints: {
          login: {
            url: "/oauth/token",
            method: "post",
            propertyName: "access_token"
          },
          logout: {
            url: "api/v1/auth/logout",
            method: "post",
          },
          user: {
            url: "api/v1/auth/user"
          }
        }
      },
      // password_grant_custom: {
      //   scheme: "~/auth/schemes/PassportPasswordScheme.js",
      //   client_id: process.env.PASSPORT_GRANT_CLIENT_ID,
      //   client_secret: process.env.PASSPORT_GRANT_CLIENT_SECRET,
      //   endpoints: {
      //     login: {
      //       url: "/oauth/token",
      //       method: "post",
      //       propertyName: "access_token"
      //     },
      //     logout: false,
      //     user: {
      //       url: '/api/v1/auth/me', method: 'get', propertyName: false
      //     }
      //   }
      // },
      'laravel/passport': {
        url: process.env.API_URL,
        client_id: process.env.PASSPORT_CLIENT_ID,
        client_secret: process.env.PASSPORT_CLIENT_SECRET,
        userinfo_endpoint: process.env.API_URL + "/api/oauth/me",
      }
    }
  },

  router: {
    middleware: ['auth']
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Delapse',
      lang: 'en-US',
      start_url: "https://www.delapse.be/",
      orientation: 'portrait',
      background_color: '#1BA711',
      theme_color: '#1BA711',
      icons: [
        {
          src: '/icon.png',
          sizes: '196x196',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    }
  },

  // https://github.com/nuxt-community/modules/tree/master/packages/toast
  toast: {
    duration: 5000,
    keepOnHover: true,
    theme: 'outline',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
}
