<template lang="pug" src="../templates/index.pug"></template>

<script>

import IconTip from '../components/tooltip/tooltip.vue'

export default {

  name: 'skotch-one-page',

  components: { IconTip },

  data() {
    return {
      storyActive: false,
      selectedSkotch: false,
      selectedSkotch2: false,
      selectedSkotch3: true,
      searchOpened: false,
      searchOpened2: false,
      searchOpened3: false,
      storyActive2: false,
      userIsDoingSomething: false
      }
  },

  methods: {
    toggleStory() {
      this.storyActive = !this.storyActive
    },
    toggleStory2() {
      this.storyActive2 = !this.storyActive2
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
  computed: {},
}

</script>

<style></style>
