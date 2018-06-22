module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "venue",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "A rewards and bounty tracker platform"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
        integrity:
          "sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt",
        crossorigin: "anonymous"
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },
    postcss: {
      plugins: {
        "postcss-custom-properties": false
      }
    },
    vendor: ["axios", "vue-js-modal"]
  },
  css: [
    { src: "~/assets/main.scss", lang: "scss" },
    { src: "~/assets/spacing.scss", lang: "scss" }
  ],
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:8000/api"
  },
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL: "http://localhost:8000/api"
  },
  buefy: {
    materialDesignIcons: false,
    defaultIconPack: "fad"
  },
  plugins: [
    "~/plugins/vue-clipboard",
    "~/plugins/buefy",
    "~/plugins/token",
    // '~/plugins/vue-sweetalert2',
    "~/plugins/vee-validate",
    // { src: '~/plugins/local-storage', ssr: false }
    { src: "~/plugins/vue-js-modal.js", ssr: false }
  ]
};
