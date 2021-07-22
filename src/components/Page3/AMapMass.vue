<!--海量点标记-->
<template>
  <div class="gaode-amap-box">
    <div id="amap-test"></div>
  </div>
</template>

<script>
// 在需要使用高德地图的页面引入lazyAMapApiLoaderInstance，详细功能参考https://lbs.amap.com/
import { lazyAMapApiLoaderInstance } from 'vue-amap'
export default {
  // name: 'AMapMass',
  // mixins: [],
  components: {},
  props: {},
  data() {
    return {
      map: null,
      styleObjectArr: [],
      massMarks: null,
      marker: null,
      mapData: [],
      center: [116.403995, 39.915111], // 地图中心点
      infoWindow: null,
      cluster: null
    }
  },
  created() {},
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      this.init()
    })
  },
  methods: {
    // 初始化地图
    init() {
      // 创建地图
      this.map = null
      // eslint-disable-next-line no-undef
      this.map = new AMap.Map('amap-test', {
        // amap-test为地图容器
        center: this.center,
        resizeEnable: true, // 是否监控地图容器尺寸变化
        zoomEnable: true, // 是否可滚轮缩放
        dragEnable: true, //是否可拖拽
        zoom: 7
        // mapStyle: 'amap://styles/darkblue'
        // keyboardEnable: false, //键盘控制'↑' '→' '↓' '←'
        // doubleClickZoom: false, //地图是否可通过双击鼠标放大地图
      })
      this.getMapData() // 创建海量点marker
    },
    // 获得接口数据
    getMapData() {
      let _this = this
      // 封装万级数据
      let testArr1 = []
      for (let i = 1; i <= 1000; i++) {
        let obj = {}
        obj.id = i
        obj.type = '2G'
        obj.lnglat = [
          Math.floor(Math.random() * (130 - 100 + 1)) +
            100 +
            '.' +
            Math.floor(Math.random() * 1000000),
          Math.floor(Math.random() * (45 - 20 + 1)) +
            20 +
            '.' +
            Math.floor(Math.random() * 1000000)
        ]
        testArr1.push(obj)
      }
      // console.log(testArr1)
      let testArr2 = []
      for (let i = 1; i <= 1000; i++) {
        let obj = {}
        obj.id = i
        obj.type = '4G'
        obj.lnglat = [
          Math.floor(Math.random() * (130 - 100 + 1)) +
            100 +
            '.' +
            Math.floor(Math.random() * 1000000),
          Math.floor(Math.random() * (45 - 20 + 1)) +
            20 +
            '.' +
            Math.floor(Math.random() * 1000000)
        ]
        testArr2.push(obj)
      }
      // console.log(testArr2)
      let testArr3 = []
      for (let i = 1; i <= 500; i++) {
        let obj = {}
        obj.id = i
        obj.type = '5G'
        obj.lnglat = [
          Math.floor(Math.random() * (130 - 100 + 1)) +
            100 +
            '.' +
            Math.floor(Math.random() * 1000000),
          Math.floor(Math.random() * (45 - 20 + 1)) +
            20 +
            '.' +
            Math.floor(Math.random() * 1000000)
        ]
        testArr3.push(obj)
      }
      // console.log(testArr3)
      let resArr = testArr1.concat(testArr2).concat(testArr3)
      // console.log(resArr)
      resArr.forEach(item => {
        if (item.type === '2G') {
          item.style = 0
        }
        if (item.type === '4G') {
          item.style = 1
        }
        if (item.type === '5G') {
          item.style = 2
        }
      })
      // let data = [
      //   {
      //     lnglat: [121.497548, 31.267093],
      //     name: '要显示的信息1',
      //     id: 1,
      //     style: 0 // 该数据的样式取值styleObjectArr数组对应的样式索引
      //   },
      //   {
      //     lnglat: [114.076539, 30.527361],
      //     name: '要显示的信息2',
      //     id: 2,
      //     style: 1
      //   },
      //   {
      //     lnglat: [116.397743335, 39.90789277],
      //     name: '要显示的信息3',
      //     id: 3,
      //     style: 2
      //   }
      // ]
      // _this.mapData = data
      _this.center = resArr[resArr.length - 1].lnglat
      // console.log(_this.center)
      _this.mapData = []
      _this.mapData = resArr
      _this.getMassMarks() // 初始化地图
    },
    // 创建海量点marker
    getMassMarks() {
      console.time()
      let _this = this
      // 1.创建多种类点样式数组
      _this.styleObjectArr = []
      _this.styleObjectArr = [
        {
          url: require('../../assets/images/2G.png'), // 本地图标地址引入
          // url: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png', // 线上图标地址引入方式
          // eslint-disable-next-line no-undef
          size: new AMap.Size(20, 30), // 图标大小
          // eslint-disable-next-line no-undef
          anchor: new AMap.Pixel(5, 5), // 图标显示位置偏移量，基准点为图标左上角
          zIndex: 1 //设置层级，值大的显示在上层
        },
        {
          url: require('../../assets/images/4G.png'), // 图标地址
          // url: 'http://117.132.184.21:8000/test/image/screentest/location1.png',
          // eslint-disable-next-line no-undef
          size: new AMap.Size(20, 30), // 图标大小
          // eslint-disable-next-line no-undef
          anchor: new AMap.Pixel(5, 5), // 图标显示位置偏移量，基准点为图标左上角
          zIndex: 1
        },
        {
          url: require('../../assets/images/5G.png'), // 图标地址
          // url: 'http://117.132.184.21:8000/test/image/screentest/location1.png',
          // eslint-disable-next-line no-undef
          size: new AMap.Size(20, 30), // 图标大小
          // eslint-disable-next-line no-undef
          anchor: new AMap.Pixel(5, 5), // 图标显示位置偏移量，基准点为图标左上角
          zIndex: 1
        }
      ]

      // 2.创建海量点类
      _this.massMarks = null
      // eslint-disable-next-line no-undef
      _this.massMarks = new AMap.MassMarks(_this.mapData, {
        zIndex: 100, // 相对于地图海量点图层叠加的顺序
        zooms: [3, 19], // 在指定地图缩放级别范围内展示海量点图层
        cursor: 'pointer',
        style: _this.styleObjectArr //多种样式对象的数组
      })

      // 创建marker
      // eslint-disable-next-line no-undef
      _this.marker = new AMap.Marker({ content: '', map: _this.map })

      // 3.将 massMarks 添加到地图实例
      _this.massMarks.setMap(_this.map)

      //鼠标移上显示信息窗体
      // eslint-disable-next-line no-undef
      // AMap.event.addListener(_this.massMarks, 'mouseover', function(e) {
      //   _this.marker.setPosition(e.data.lnglat)
      //   _this.marker.setLabel({ content: e.data.name }) //设置信息窗体内容
      // })
      //鼠标移开隐藏信息窗体
      // eslint-disable-next-line no-undef
      // AMap.event.addListener(_this.massMarks, 'mouseout', function(e) {
      //   _this.marker.setPosition(e.data.lnglat)
      //   _this.marker.setLabel({ content: '' }) //信息窗体内容清空
      // })

      // 4.鼠标移入移出效果
      _this.massMarks.on('mouseover', function(e) {
        // console.log(e)
        // 打开默认的窗体
        // _this.marker.setPosition(e.data.lnglat)
        // _this.marker.setLabel({ content: e.data.name })

        // 自定义信息窗体
        let content1 = '<div>id：' + e.data.id + '</div>'
        let content2 = '<div>style：' + e.data.style + '</div>'
        let content3 = '<div>lnglat：' + e.data.lnglat + '</div>'
        let content4 = '<div>type：' + e.data.type + '</div>'
        let content =
          "<div style='border:1px solid #6290eb;padding:5px;font-size:16px;border-radius: 5px;background-color: rgba(19, 28, 45,0.7);color:#fff;box-shadow:0 0 9px 1px #6290eb;'>" +
          content1 +
          content2 +
          content3 +
          content4 +
          '</div>'
        // 创建 infoWindow 实例
        // eslint-disable-next-line no-undef
        _this.infoWindow = new AMap.InfoWindow({
          // eslint-disable-next-line no-undef
          offset: new AMap.Pixel(0, -10),
          isCustom: true, //使用自定义窗体
          content: content // 传入 dom 对象，或者 html 字符串
        })
        // 打开信息窗体
        _this.infoWindow.open(_this.map, e.data.lnglat)
      })
      _this.massMarks.on('mouseout', function() {
        // 关闭默认窗体
        // _this.marker.setPosition(e.data.lnglat)
        // _this.marker.setLabel({ content: '' })

        // 关闭自定义窗体
        // 关闭信息窗体
        _this.infoWindow.close()
      })
      console.log('耗时1111111111111111：')
      console.timeEnd()

      // _this.map.on('mapmove', function() {
      //   console.log('移动中...')
      //   _this.massMarks.clear()
      //   _this.map.destroy()
      //   _this.mapData = []
      // })
      // _this.map.on('moveend', function() {
      //   console.log('移动结束')
      //   _this.init()
      // })

      // 5.测试点聚合
      // 5.1方法一默认
      // _this.map.plugin(['AMap.MarkerClusterer'], function() {
      //   // let sts = [
      //   //   {
      //   //     url: require('../../assets/images/blue.png'),
      //   //     // eslint-disable-next-line no-undef
      //   //     size: new AMap.Size(34, 34),
      //   //     // eslint-disable-next-line no-undef
      //   //     offset: new AMap.Pixel(-16, -16)
      //   //   }
      //   // ]
      //   // eslint-disable-next-line no-undef
      //   _this.cluster = new AMap.MarkerClusterer(
      //     _this.map, // 地图实例
      //     _this.mapData, // 海量点组成的数组
      //     {
      //       // styles: sts
      //     }
      //   )
      // })
      // 5.2方法二完全自定义
      // let count = _this.mapData.length
      // let _renderClusterMarker = function(context) {
      //   // console.log(context)
      //   var factor = Math.pow(context.count / count, 1 / 18)
      //   var div = document.createElement('div')
      //   var Hue = 180 - factor * 180
      //   var bgColor = 'hsla(' + Hue + ',100%,50%,0.7)'
      //   var fontColor = 'hsla(' + Hue + ',100%,20%,1)'
      //   var borderColor = 'hsla(' + Hue + ',100%,40%,1)'
      //   var shadowColor = 'hsla(' + Hue + ',100%,50%,1)'
      //   div.style.backgroundColor = bgColor
      //   var size = Math.round(30 + Math.pow(context.count / count, 1 / 5) * 20)
      //   div.style.width = div.style.height = size + 'px'
      //   div.style.border = 'solid 1px ' + borderColor
      //   div.style.borderRadius = size / 2 + 'px'
      //   div.style.boxShadow = '0 0 1px ' + shadowColor
      //   div.innerHTML = context.count
      //   div.style.lineHeight = size + 'px'
      //   div.style.color = fontColor
      //   div.style.fontSize = '14px'
      //   div.style.textAlign = 'center'
      //   // eslint-disable-next-line no-undef
      //   context.marker.setOffset(new AMap.Pixel(-size / 2, -size / 2))
      //   context.marker.setContent(div)
      // }
      // _this.map.plugin(['AMap.MarkerClusterer'], function() {
      //   // eslint-disable-next-line no-undef
      //   _this.cluster = new AMap.MarkerClusterer(_this.map, _this.mapData, {
      //     gridSize: 80,
      //     renderClusterMarker: _renderClusterMarker
      //   })
      // })
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
.gaode-amap-box {
  margin: 20px;
  height: 700px;
  #amap-test {
    width: 95%;
    height: 600px;
  }
}
</style>
<style lang="scss">
.amap-marker-label {
  border: 1px solid red;
}
.amap-logo,
.amap-copyright {
  display: none !important;
}
//最后一层marker图标自定义
//.amap-marker .amap-marker-content div {
//  background-image: url('../../assets/images/2G.png');
//  background-color: rgba(0, 0, 0, 0) !important;
//  border: 0px !important;
//  border-radius: 0% !important;
//  box-shadow: 0 0 0 0 !important;
//  line-height: 79px !important;
//}
</style>
