<template>
  <div class="inner-box">
    <div>
      <div>Page2---子路由</div>
      <span class="item" @click="jump(1)">Page2-1</span>
      <span class="item" @click="jump(2)">Page2-2</span>
      <span class="item" @click="jump(3)">Page2-3</span>
    </div>
    <router-view />
  </div>
</template>

<script>
import { getWeatherAJAX, getOilAJAX, getPhoneAJAX } from '@/api/api'
export default {
  name: 'Page2',
  // mixins: [],
  components: {},
  // props,
  data() {
    return {}
  },
  created() {},
  mounted() {
    // 获得天气信息
    this.getWeatherData()
    // 获得加油站信息
    this.getOilData()
    // 获得手机归属地
    this.getPhoneData()
  },
  methods: {
    jump(key) {
      console.log(key)
      switch (key) {
        case 1:
          this.$router.push({ path: '/Page2/Page2-1' })
          break
        case 2:
          this.$router.push({ path: '/Page2/Page2-2' })
          break
        case 3:
          this.$router.push({ path: '/Page2/Page2-3' })
          break
      }
    },
    async getWeatherData() {
      // let params = {
      //   city: '北京',
      //   key: 'c814bdd088296c2ec8951e4436951525'
      // }
      // await getWeatherAJAX(params).then(res => {
      //   console.log(res)
      // })
      // const data = await getWeatherAJAX(params)
      const data = await getWeatherAJAX()
      if (!data) return false
      console.log(data)
    },
    async getOilData() {
      // let params = {
      //   city: '上海',
      //   key: '69e691b33c2b2bd5bce2949900c03a0d'
      // }
      // const data = await getOilAJAX(params)
      const data = await getOilAJAX()
      if (!data) return false
      console.log(data)
    },
    // 获得手机归属地
    async getPhoneData() {
      const data = await getPhoneAJAX()
      if (!data) return false
      console.log(data)
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
.inner-box {
  .item {
    padding-right: 20px;
  }
}
</style>
