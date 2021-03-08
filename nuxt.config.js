export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - ' + 'JED Pharma',
    title: 'JedPharma' || '',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      { rel: "stylesheet", type: "text/css", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.0/css/all.css'}
    ],
    script: [
      { src: "https://code.jquery.com/jquery-3.3.1.slim.min.js" },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" },
      { src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-accept" },
    { src: "~/plugins/bt-vue" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "nuxt-compress",
    'nuxt-purgecss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    ['@nuxtjs/axios', {
      common: {
        'Content-Type': 'application/json, text/plain, */*'
      },
    }],
    ["nuxt-compress",
    {
      gzip: {
        cache: true
      },
      brotli: {
        threshold: 10240
      }
    }],
    ['@nuxtjs/pwa', { meta: false, icon: false, manifest: false }]

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    //analyze: true
  }
}
