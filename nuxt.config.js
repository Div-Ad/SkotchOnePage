export default {
    ssr: false,
    /*
    ** Headers of the page
    */
    googleAnalytics: {
        id: 'G-WZSY14CQHQ'
    },
    head: {
        title: 'This is Skotch !',
        htmlAttrs: {
            lang: 'fr'
        },
        meta: [
            { charset: 'utf-8'},
            { name: 'viewport', content: 'width=device-width, initial-scale=1'},
            { hid: 'description', name: 'description', content: 'L\'app ultime de prise de notes et de conseils entre copains'},
            { property:"og:url", content:"https://skotch.me"},
            { property:"og:title", content:"Skotch"},
            { property:"og:image", content:"/og.png"},
            { charset:"utf-8" },
            { name:"format-detection", content:"telephone:no" }, /* don't render numbers as phone numbers*/
            { name:"keywords", content:"advice, recommandation, partage, conseil, share, skotch, postit, note, forget, suggestion, pin, list, todolist, watchlist, listenlist, winelist, diy" },
            { name:"theme-color", content:"#2E3E51" },
        ],
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed:400|Caveat:wght@500&display=swap'},
            { rel: "stylesheet", href: "https://d1azc1qln24ryf.cloudfront.net/97848/skotch/style-cf.css?rtbrqc"},
            { rel: "stylesheet", href: "https://d1azc1qln24ryf.cloudfront.net/97848/skotch-sketch/style-cf.css?d87kq2"},
            { rel: "canonical", href:"https://skotch.me" },
            { rel: "shortcut icon", href: "/favicon-g.ico" },
            { rel: "shortcut icon", type: "image/png", sizes: "16x16", href: "icons/favicon-g-16x16.png" },
            { rel: "shortcut icon", type: "image/png", sizes: "32x32", href: "icons/favicon-g-32x32.png" },
            { rel: "shortcut icon", type: "image/png", sizes: "48x48", href: "icons/favicon-g-48x48.png" },
            { rel: "shortcut icon", sizes: "192x192", href: "skotch-op-favicon-192.png" },
            { rel: "apple-touch-icon", sizes: "192x192", href: "skotch-op-favicon-192.png" },
            /* Pinned Tab */
            { rel: "mask-icon", href: "icons/safari-pinned-tab.svg", color: "ffffff" },

        ],

        script:[
        ],

    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},
    /*
    ** Global CSS
    */
    css: [ { src:'~/assets/style/main.sass' } ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        {src: '@/plugins/scrollto.js', mode: 'client'},
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        '@nuxtjs/google-analytics'
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        ['vue-scrollto/nuxt', { duration: 300 }],
    ],
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    },
    generate: {
        dir: 'docs',
        subFolders: false
    },
    target: 'static'
}
