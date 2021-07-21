<!--点标记-->
<template>
  <div class="gaode-box">
    <div id="map-test"></div>
  </div>
</template>

<script>
// 在需要使用高德地图的页面引入lazyAMapApiLoaderInstance，详细功能参考https://lbs.amap.com/
import { lazyAMapApiLoaderInstance } from 'vue-amap'
export default {
  // name: 'GaodeMap',
  // mixins: [],
  components: {},
  props: {},
  data() {
    return {
      // 点标记的坐标
      center: [
        {
          position: [116.205467, 39.907761]
        },
        {
          position: [116.368904, 39.913423]
        },
        {
          position: [116.305467, 39.807761]
        }
      ]
    }
  },
  created() {},
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      //map-test为div的id
      // eslint-disable-next-line no-undef
      var map = new AMap.Map('map-test', {
        // eslint-disable-next-line no-undef
        center: new AMap.LngLat(116.397428, 39.90923) // 地图中心点
      })
      //点标记
      this.center.forEach(center => {
        // eslint-disable-next-line no-undef
        new AMap.Marker({
          map: map, //放置点标记的地图
          position: [center.position[0], center.position[1]],
          title: '点标记'
        }).on('click', function() {
          alert('点击了标记')
        })
      })
    })
  },
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

<style lang="scss" scoped>
.gaode-box {
  margin: 20px;
  #map-test {
    width: 95%;
    height: 600px;
  }
}
</style>
