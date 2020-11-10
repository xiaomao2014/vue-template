<template>
  <div class="inner-box">
    <h1>Page3</h1>
    <el-button
      type="primary"
      @click="jump('我是page3路由传参到page4的参数内容')"
    >
      page3路由传值到page4
    </el-button>
  </div>
</template>

<script>
export default {
  name: "Page3",
  // mixins: [],
  components: {},
  // props,
  data () {
    return {}
  },
  created () {},
  mounted () {},
  methods: {
    jump (id) {
      // 直接调用$router.push 实现携带参数的跳转
      this.$router.push({
        path: `/Page4/${id}`
      })
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

</style>
