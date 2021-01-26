export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'up-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    "./assets/fonts/HelveticaNeueCyr.css",
    "./assets/styles/reset.scss",
    "./assets/styles/main.scss",
    "./assets/styles/text.scss",
    "./assets/styles/shared/main-page/title-imgs.scss"
  ],

  plugins: [
    { src: "~/plugins/windowsize.js", ssr: false },
    { src: "~/plugins/vue-intersect.js" }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
