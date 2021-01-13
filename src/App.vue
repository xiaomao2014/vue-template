<template>
  <div id="app">
    <Header />
    <div class="outer-box">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '@/views/Header.vue'
import Footer from '@/views/Footer.vue'
export default {
  name: 'App',
  // mixins: [],
  components: {
    Header,
    Footer
  },
  // props,
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
  // updated () {},
  // beforeRouteUpdate () {},
  // beforeDestroy () {},
  // destroyed () {},
  // filters: {},
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  .outer-box {
    margin-top: 61px;
    min-width: 1100px;
    min-height: 600px;
  }
}
</style>
