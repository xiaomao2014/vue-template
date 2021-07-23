<!--AMap.UI 组件库 PointSimplifier-->
<!--AMap.UI 组件库组件库的 PointSimplifier 类可以支持百万数量级别的点标记绘制-->
<template>
  <div class="inner-box">
    <div id="test"></div>
  </div>
</template>

<script>
import { lazyAMapApiLoaderInstance } from 'vue-amap'
export default {
  // name: 'AMapPointSimplifier',
  // mixins: [],
  components: {},
  props: {},
  data() {
    return {
      map: null,
      center: [116.403995, 39.915111],
      pointSimplifierIns: null
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
      let _this = this
      // 创建地图
      _this.map = null
      // eslint-disable-next-line no-undef
      _this.map = new AMap.Map('test', {
        center: this.center,
        zooms: [4, 18]
      })
      _this.testData()
    },

    // 随机创建一批点，仅作示意
    testData() {
      let _this = this
      let data1 = _this.createPoints('2G', _this.map.getCenter(), 20)
      let data2 = _this.createPoints('4G', _this.map.getCenter(), 20)
      let data3 = _this.createPoints('5G', _this.map.getCenter(), 20)
      // 加载海量点组件
      // eslint-disable-next-line no-undef
      AMapUI.loadUI(['misc/PointSimplifier'], PointSimplifier => {
        if (!PointSimplifier.supportCanvas) {
          alert('当前环境不支持 Canvas！')
          return
        }
        // 启动页面
        _this.initPage(PointSimplifier, data1, 2)
        _this.initPage(PointSimplifier, data2, 4)
        _this.initPage(PointSimplifier, data3, 5)
      })
    },
    // 随机创建一批点
    createPoints(type, center, num) {
      let data = []
      for (let i = 0, len = num; i < len; i++) {
        data.push({
          // position数据格式：position:[115.3662,39.14536]
          position: [
            center.getLng() + (Math.random() > 0.5 ? 1 : -1) * Math.random(),
            center.getLat() + (Math.random() > 0.5 ? 1 : -1) * Math.random()
          ],
          id: '我是ID：' + i,
          name: '我的名字是张' + i,
          style: type
        })
      }
      console.log(data)
      return data
    },
    // 启动页面
    initPage(PointSimplifier, data, type) {
      let _this = this
      // 自定义图标
      let icon = ''
      if (type === 2) {
        icon = require('../../assets/images/2G.png')
      }
      if (type === 4) {
        icon = require('../../assets/images/4G.png')
      }
      if (type === 5) {
        icon = require('../../assets/images/5G.png')
      }
      // 创建组件实例
      _this.pointSimplifierIns = new PointSimplifier({
        //关联的map
        map: _this.map,
        // zIndex: zIndex,

        // 数据源中靠后的元素优先，index大的排到前面去
        compareDataItem: function(a, b, aIndex, bIndex) {
          return aIndex > bIndex ? -1 : 1
        },

        //返回数据项的经纬度，AMap.LngLat实例或者经纬度数组
        getPosition: function(dataItem) {
          return dataItem.position
        },

        // 返回数据项的Title信息，鼠标hover时显示-返回鼠标Hover时显示的Title内容
        getHoverTitle: function(dataItem, idx) {
          // console.log(dataItem)
          let content1 =
            '<div>id：' + dataItem.id + '</div>' + '我是索引：' + idx
          let content2 = '<div>name：' + dataItem.name + '</div>'
          let content3 = '<div>style：' + dataItem.style + '</div>'
          let content =
            "<div style='border:1px solid #6290eb;padding:5px;font-size:16px;border-radius: 5px;background-color: rgba(19, 28, 45,0.7);color:#fff;box-shadow:0 0 9px 1px #6290eb;'>" +
            content1 +
            content2 +
            content3 +
            '</div>'
          return content
        },

        // 点的样式
        renderOptions: {
          // 点的样式
          pointStyle: {
            // content的取值有两类1.{string}, 可以是 rect（矩形）, circle（圆形），none（空）2.{function},根据矩形范围，描绘出点的形状路径或者绘制 图片。
            content: PointSimplifier.Render.Canvas.getImageContent(
              // 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b1.png', // 外部引入
              // require('../../assets/images/2G.png'), // 自定义图片
              icon,
              function onload() {
                _this.pointSimplifierIns.renderLater()
              },
              function onerror(e) {
                console.log(e)
                alert('图片加载失败！')
              }
            ),
            // 宽度
            width: 19,
            // 高度
            height: 31,
            // 定位点为底部中心
            offset: ['-50%', '-100%'],
            strokeStyle: null,
            fillStyle: null
            // fillStyle: 'blue' // 蓝色填充
          },

          // 鼠标Hover时显示的Title
          hoverTitleStyle: {
            // title所用的dom节点上的classNames，多个用空格分开，可借此调整dom节点的样式
            classNames: 'dialogBox',
            // title的位置，left 或者 top
            position: 'top',
            // title的dom节点相对于定位点的偏移
            offset: [0, -10]
          }
        }
      })

      // 随机创建一批点，仅作示意
      // let data = _this.createPoints(_this.map.getCenter(), 100000)

      // 设置数据源，data需要是一个数组
      // console.log(data)
      _this.pointSimplifierIns.setData(data)

      // 监听事件
      _this.pointSimplifierIns.on(
        'pointClick pointMouseover pointMouseout',
        // eslint-disable-next-line no-unused-vars
        function(e, record) {
          // console.log(e)
          // console.log(e.type, record)
        }
      )
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
  margin: 20px;
  height: 700px;
  #test {
    width: 95%;
    height: 600px;
  }
}
</style>
<style lang="scss">
.amap-logo,
.amap-copyright {
  display: none !important;
}
//更改弹窗样式
.dialogBox {
  //border: 1px solid red !important;
}
</style>
