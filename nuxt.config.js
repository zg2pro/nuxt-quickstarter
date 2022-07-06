export default {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: "universal",
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
      title: process.env.npm_package_name || "",
      script: [
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/js/solid.min.js"
        },
        { src: "https://code.jquery.com/jquery-3.2.1.slim.min.js" },
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        },
        {
          src:
            "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        }
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: process.env.npm_package_description || ""
        }
      ],
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css"
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href:
            "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css",
          integrity:
            "sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB",
          crossorigin: "anonymous"
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
          integrity:
            "sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt",
          crossorigin: "anonymous"
        }
      ]
    },
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [
      { src: "~plugins/swiper.js", ssr: false },
      { src: "~/plugins/vueTyper.js", ssr: false }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: ["@nuxtjs/style-resources", "@nuxtjs/color-mode"],
    styleResources: {
      // your settings here
      scss: ["'./assets/scss/*.scss'"]
    },
    /*
     ** Nuxt.js modules
     */
    modules: [
  
      ["@nuxtjs/style-resources"]
    ],
    loading: { color: "#3B8070" },
    router:{
      base: process.env.NODE_ENV === "development" ? process.env.BASE_URL : "/nuxt-quickstarter/",
    },
    build: {
      extend(config, { isDev, isClient }) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.xml$/,
          loader: 'raw-loader',
          exclude: /(node_modules)/
        });
        config.module.rules.push({
          enforce: 'pre',
          test: /\.xsl$/,
          loader: 'raw-loader',
          exclude: /(node_modules)/
        });
        if (isDev && isClient) {
          const vueLoader = config.module.rules.find(
            ({ loader }) => loader === "vue-loader"
          );
          const {
            options: { loaders }
          } = vueLoader || { options: {} };
          if (loaders) {
            for (const loader of Object.values(loaders)) {
            }
          }
        }
      }
    }
  };