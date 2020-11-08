<template>
  <div class="inner-box">
    <div>
      <div>Page2---子路由</div>
      <span class="item" @click="jump(1)">Page2-1</span>
      <span class="item" @click="jump(2)">Page2-2</span>
      <span class="item" @click="jump(3)">Page2-3</span>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "Page2",
  // mixins: [],
  components: {},
  // props,
  data () {
    return {}
  },
  created () {},
  mounted () {},
  methods: {
    jump (key) {
      console.log(key)
      switch (key) {
        case 1:
          this.$router.push({ path: "/Page2/Page2-1" })
          break
        case 2:
          this.$router.push({ path: "/Page2/Page2-2" })
          break
        case 3:
          this.$router.push({ path: "/Page2/Page2-3" })
          break
      }
    }
  },
  computed: {},
  watch: {}
  // updated () {},
  // beforeRouteUpdate () {},
  // beforeDestroy () {},
  // destroyed () {},
  // filters: {},
}
</script>

<style lang="scss" scoped>
.inner-box{
  .item {
    padding-right: 20px;
  }
}

</style>
