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
          id: 1,
          position: [116.205467, 39.907761]
        },
        {
          id: 2,
          position: [116.368904, 39.913423]
        },
        {
          id: 3,
          position: [116.305467, 39.807761]
        }
      ],
      markerList: [],
      map: null,
      marker: null,
      infoWindow: null
    }
  },
  created() {},
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      // eslint-disable-next-line no-undef
      this.map = new AMap.Map('map-test', {
        // eslint-disable-next-line no-undef
        center: new AMap.LngLat(116.397428, 39.90923)
      })
      this.markerHandle()
    })
  },
  methods: {
    markerHandle() {
      let _this = this
      _this.markerList = [
        {
          id: 1,
          position: [116.205467, 39.907761]
        },
        {
          id: 2,
          position: [116.368904, 39.913423]
        },
        {
          id: 3,
          position: [116.305467, 39.807761]
        }
      ]
      _this.markerList.forEach(item => {
        // 1.创建 AMap.Icon 实例：
        // eslint-disable-next-line no-undef
        let icon1 = new AMap.Icon({
          // eslint-disable-next-line no-undef
          // size: new AMap.Size(30, 39), // 图标尺寸
          image: require('../../assets/images/2G.png') // Icon的图像
          // eslint-disable-next-line no-undef
          // imageOffset: new AMap.Pixel(0, -20), // 图像相对展示区域的偏移量，适于雪碧图等
          // eslint-disable-next-line no-undef
          // imageSize: new AMap.Size(30, 39) // 根据所设置的大小拉伸或压缩图片
        })
        // eslint-disable-next-line no-undef
        let icon2 = new AMap.Icon({
          image: require('../../assets/images/4G.png') // Icon的图像
        })
        // 2.配置label-content
        let content = '<div>id：' + item.id + '</div>'
        // 3.创建点标记
        // eslint-disable-next-line no-undef
        _this.marker = new AMap.Marker({
          position: item.position,
          // icon: require('../../assets/images/2G.png'),
          icon: item.id === 1 ? icon1 : icon2,
          label: {
            content: content,
            direction: 'top' // 文本标注方位 可选值：'top'|'right'|'bottom'|'left'|'center'，默认值: 'right'
          },
          // 用户自定义属性，支持JavaScript API任意数据类型
          extData: {
            id: item.id,
            position: item.position
          }
        })
        // 4.将点标记渲染到地图上
        _this.map.add(_this.marker)
        // 5.点标记鼠标悬浮事件
        _this.marker.on('mouseover', e => {
          console.log(e)
          // 创建自定义信息窗体
          let content1 = '<div>id：' + e.target._opts.extData.id + '</div>'
          let content =
            "<div style='border:1px solid #6290eb;padding:5px;font-size:16px;border-radius: 5px;background-color: rgba(19, 28, 45,0.7);color:#fff;box-shadow:0 0 9px 1px #6290eb;'>" +
            content1 +
            '</div>'
          // 创建 infoWindow 实例
          // eslint-disable-next-line no-undef
          _this.infoWindow = new AMap.InfoWindow({
            // eslint-disable-next-line no-undef
            offset: new AMap.Pixel(13, -5),
            isCustom: true, //使用自定义窗体
            content: content // 传入 dom 对象，或者 html 字符串
          })
          // 打开信息窗体
          _this.infoWindow.open(_this.map, e.target._opts.extData.position)
        })
        // 5.点标记鼠标离开事件
        _this.marker.on('mouseout', () => {
          // 关闭信息窗体
          _this.infoWindow.close()
        })
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
.gaode-box {
  margin: 20px;
  #map-test {
    width: 95%;
    height: 600px;
  }
}
</style>
