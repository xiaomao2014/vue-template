<template>
  <div class="baidu-box">
    <!--鼠标滚轮控制缩放：:scroll-wheel-zoom="true"-->
    <!--:center="center"  center="中国"-->
    <baidu-map
      class="map"
      :center="center"
      :zoom="zoom"
      @ready="readyHandler"
      :scroll-wheel-zoom="true"
    >
      <!-- 比例尺控件，注册此组件才会在地图上显示比例尺 -->
      <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
      <!-- 缩放控件，注册此组件才会显示拖放进度 -->
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <!-- 海量点标记 -->
      <bm-point-collection
        :points="points1"
        shape="BMAP_POINT_SHAPE_WATERDROP"
        @click="clickHandler"
      >
      </bm-point-collection>
      <bm-point-collection
        :points="points2"
        shape="BMAP_POINT_SHAPE_STAR"
        color="green"
        size="BMAP_POINT_SIZE_NORMAL"
        @click="clickHandler"
      >
      </bm-point-collection>
      <!-- 信息窗体组件 -->
      <bm-info-window
        title="信息窗体组件"
        :position="{ lng: infoWindow.lng, lat: infoWindow.lat }"
        :show="infoWindow.showFlag"
        @clickclose="clickcloseHandle"
      >
        <p>经度：{{ infoWindow.lng }}，纬度： {{ infoWindow.lat }}</p>
      </bm-info-window>
    </baidu-map>
  </div>
</template>

<script>
export default {
  // name: 'baiduMap',
  // mixins: [],
  components: {},
  props: {},
  data() {
    return {
      BMap: null,
      map: null,
      points1: [], // 海量点
      points2: [], // 海量点
      // 地图显示比例尺的大小，必须定义，有1~19个级别
      zoom: 4,
      // 动态设置中心点，center数据格式 => center:{lng:116.404,lat:39.915},可根据定位到不同的城市，动态改变值
      center: { lng: 105.0, lat: 38.0 },
      // 信息弹窗
      infoWindow: {
        lng: 0,
        lat: 0,
        showFlag: false
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 封装海量点
    addpoints() {
      // 水滴
      this.points1 = []
      for (let i = 0; i < 100; i++) {
        const position1 = {
          lng: Math.random() * 40 + 85,
          lat: Math.random() * 30 + 21
        }
        this.points1.push(position1)
      }
      console.log(this.points1)

      // 星型
      this.points2 = []
      for (let i = 0; i < 100; i++) {
        const position2 = {
          lng: Math.random() * 40 + 85,
          lat: Math.random() * 30 + 21
        }
        this.points2.push(position2)
      }
    },
    // 海量点标记点击事件
    clickHandler(e) {
      console.log(e)
      // alert(`单击点的坐标为：${e.point.lng}, ${e.point.lat}`)
      this.infoWindow.lng = e.point.lng
      this.infoWindow.lat = e.point.lat
      this.infoWindow.showFlag = true
    },
    // 地图API加载完毕后执行的代码
    // BMap是百度地图的对象，直接new出来跟原始的百度地图API一样使用，map是地图对象，可以调用对应的地图方法，比如添加marker
    readyHandler({ BMap, map }) {
      console.log(BMap)
      console.log(map)
      this.BMap = BMap
      this.map = map
      this.zoom = 6
      this.center.lng = 116.405683
      this.center.lat = 39.91396
      this.addpoints()
      // 设置地图主题颜色
      // let mapStyle = { style: 'midnight' }
      // map.setMapStyle(mapStyle)
    },
    // 点击信息弹窗关闭按钮
    clickcloseHandle() {
      // this.points1 = []
      // setTimeout(() => {
      //   this.addpoints()
      // }, 3000)
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
.baidu-box {
  margin: 20px;
  .map {
    width: 95%;
    height: 500px;
  }
}
</style>
<style lang="scss">
.baidu-box {
  .map {
    .BMap_cpyCtrl {
      display: none !important;
    }
    .anchorBL {
      display: none !important;
    }
  }
}
</style>
