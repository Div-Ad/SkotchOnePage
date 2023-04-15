<template lang="pug" src="./help.pug"></template>

<script>
import IconTip from '~/components/tooltip/tooltip.vue'

export default {

    name: 'Help',
    head: {
        title: 'Skotch | Help',
        htmlAttrs: {
            lang: 'fr'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {
                hid: 'description',
                name: 'description',
                content: 'L\'aide pour l\'app ultime de prise de notes et de conseils entre copains'
            },
            {property: "og:url", content: "https://skotch.me"},
            {property: "og:title", content: "Skotch"},
            {property: "og:image", content: "/og.png"},
            {
                name: "keywords",
                content: "aide, advice, recommandation, partage, conseil, share, skotch, postit, note, forget, suggestion, pin, list, todolist, watchlist, listenlist, winelist, diy"
            },

        ],
        link: [
            {rel: "shortcut icon", href: "/favicon-h.ico"},
            {rel: "icon", type: "image/png", sizes: "16x16", href: "icons/favicon-h-16x16.png"},
            {rel: "icon", type: "image/png", sizes: "32x32", href: "icons/favicon-h-32x32.png"},
            {rel: "icon", type: "image/png", sizes: "48x48", href: "icons/favicon-h-48x48.png"},
            {rel: "shortcut icon", type: "image/png", sizes: "192x192", href: "skotch-op-favicon-h-192.png"},
            { rel: "apple-touch-icon", sizes: "192x192", href: "skotch-op-favicon-h-192.png" },
        ],
    },

    components: {IconTip},

    data() {
        return {
            openedMenu: false,
            storyActive: false,
            selectedSkotch: false,
            selectedSkotch2: false,
            selectedSkotch3: true,
            searchOpened: true,
            searchOpened2: true,
            searchOpened3: true,
            storyActive2: false,
            filterDisplay: false
        }
    },

    methods: {
        toggleMenu() {
            this.openedMenu = !this.openedMenu

        },
        searchOpen() {
            this.searchOpened = !this.searchOpened
        },
        searchOpen2() {
            this.searchOpened2 = !this.searchOpened2
        },
        searchOpen3() {
            this.searchOpened3 = !this.searchOpened3
        },
        selectSkotch() {
            this.selectedSkotch = !this.selectedSkotch
        },
        selectSkotch2() {
            this.selectedSkotch2 = !this.selectedSkotch2
        },
        selectSkotch3() {
            this.selectedSkotch3 = !this.selectedSkotch3
        },
    },

}

</script>

<style></style>
