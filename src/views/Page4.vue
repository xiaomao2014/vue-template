<template>
  <div class="inner-box">
    <h1>Page4</h1>
    <h4>{{$route.params.id}}</h4>
  </div>
</template>

<script>
export default {
  name: "Page4",
  // mixins: [],
  components: {},
  // props,
  data () {
    return {};
  },
  created () {},
  mounted () {
    // this.$route.params.id获取路由传参
    console.log(this.$route.params.id)
  },
  methods: {},
  computed: {},
  watch: {}
  // updated () {},
  // beforeRouteUpdate () {},
  // beforeDestroy () {},
  // destroyed () {},
  // filters: {},
};
</script>

<style lang="scss" scoped>

</style>
