<template>
  <div class="inner-box">
    <div class="main" id="main" style="width: 800px;height: 500px;"></div>
  </div>
</template>

<script>
require('echarts/map/js/china')
const provinceName = [
  'anhui',
  'aomen',
  'beijing',
  'chongqing',
  'fujian',
  'gansu',
  'guangdong',
  'guangxi',
  'guizhou',
  'hainan',
  'hebei',
  'heilongjiang',
  'henan',
  'hubei',
  'hunan',
  'jiangsu',
  'jiangxi',
  'jilin',
  'liaoning',
  'neimenggu',
  'ningxia',
  'qinghai',
  'shandong',
  'shanghai',
  'shanxi',
  'shanxi1',
  'sichuan',
  'taiwan',
  'tianjin',
  'xianggang',
  'xinjiang',
  'xizang',
  'yunnan',
  'zhejiang'
]
function getProvinceName(item) {
  return require('echarts/map/js/province/' + item + '.js')
}
provinceName.forEach(item => {
  getProvinceName(item)
})
export default {
  name: 'mapData',
  // mixins: [],
  components: {},
  // props,
  data() {
    return {
      provinceList: [
        '湖北',
        '黑龙江',
        '湖南',
        '广东',
        '海南',
        '广西',
        '重庆',
        '四川',
        '贵州',
        '云南',
        '陕西',
        '甘肃',
        '青海',
        '宁夏',
        '新疆',
        '北京',
        '河南',
        '天津',
        '河北',
        '山西',
        '内蒙古',
        '辽宁',
        '吉林',
        '上海',
        '江苏',
        '浙江',
        '安徽',
        '福建',
        '江西',
        '山东',
        '西藏'
      ],
      geoMap: 'china',
      exampleData1: [
        {
          bearerNetWorkScore: 55.89,
          businessQualityScore: 13,
          homeNetWorkScore: 19,
          name: '河南',
          serviceQualityScore: 18.02,
          userQualityScore: 89
        },
        {
          bearerNetWorkScore: 5,
          businessQualityScore: 1,
          homeNetWorkScore: 88,
          name: '黑龙江',
          serviceQualityScore: 63,
          userQualityScore: 55
        }
      ],
      exampleData2: [
        {
          bearerNetWorkScore: 89,
          businessQualityScore: 3,
          homeNetWorkScore: 9,
          name: '黑河市',
          serviceQualityScore: 18,
          userQualityScore: 9
        },
        {
          bearerNetWorkScore: 75,
          businessQualityScore: 17,
          homeNetWorkScore: 8,
          name: '齐齐哈尔市',
          serviceQualityScore: 673,
          userQualityScore: 575
        }
      ]
    }
  },
  created() {},
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let myChart = this.$echarts.init(document.getElementById('main'))
      let chartOption = {
        geo: {
          type: 'map',
          map: this.geoMap,
          zoom: 1.2, // 设置初始化的缩放比例
          // center: [87.617733, 43.792818], // 设置地图中心点的坐标
          // 地图区域的多边形 图形样式
          label: {
            show: true, // 展示标签:省份名称
            // color: '#f00', // 省份名称颜色
            emphasis: {
              show: true,
              color: '#fff'
            }
          },
          itemStyle: {
            normal: {
              // 地图区域的颜色
              areaColor: '#CFD8DC',
              borderColor: '#B0BFC6',
              borderWidth: 1
            },
            // 选中省份下的地图区域的颜色
            emphasis: {
              areaColor: '#0aabf6'
            }
          }
        },
        tooltip: {
          formatter(params) {
            // params.data 就是series配置项中的data数据遍历
            // console.log(params)
            let homeNetWorkScore,
              bearerNetWorkScore,
              userQualityScore,
              serviceQualityScore,
              businessQualityScore
            if (params.data) {
              homeNetWorkScore = params.data.homeNetWorkScore
              bearerNetWorkScore = params.data.bearerNetWorkScore
              userQualityScore = params.data.userQualityScore
              serviceQualityScore = params.data.serviceQualityScore
              businessQualityScore = params.data.businessQualityScore
            } else {
              homeNetWorkScore = 0
              bearerNetWorkScore = 0
              userQualityScore = 0
              serviceQualityScore = 0
              businessQualityScore = 0
            }
            let htmlStr = `
          <div style='font-size: 12px;'> ${params.name}</div>
          <p style='font-size: 12px;'>
	          家庭网络得分：${homeNetWorkScore}<br/>
	          承载网络得分：${bearerNetWorkScore}<br/>
	          服务质量得分：${serviceQualityScore}<br/>
	          业务质量得分：${businessQualityScore}<br/>
	          用户质量综合得分：${userQualityScore}<br/>
          </p>
        `
            return htmlStr
          }
        },
        series: [
          {
            name: '', // 浮动框的标题（上面的formatter自定义了提示框数据，所以这里可不写）
            type: 'map',
            geoIndex: 0,
            label: {
              show: true
            },
            data:
              this.geoMap === 'china' ? this.exampleData1 : this.exampleData2
          }
        ]
      }
      myChart.clear() // 清空图画
      myChart.setOption(chartOption)
      myChart.off('click') // 点击之前要先清除点击事件，否则会出现多次点击的效果
      myChart.on('click', params => {
        // console.log(params)
        console.log(params.name)
        if (this.provinceList.includes(params.name)) {
          this.geoMap = params.name
          console.log(this.geoMap)
        } else {
          this.geoMap = 'china'
        }
        this.init()
      })
      window.addEventListener('resize', function() {
        myChart.resize()
      })
    }
    // a() {
    //   mapChartInstance.on('click', async chinaParam => {
    //     const proviceName = chinaParam.name
    //     const len = this.const.provinceList.filter(item => {
    //       return item === proviceName
    //     }).length
    //     // 全国才可以点击 ，目前只支持这几个市的点击
    //     if (len > 0) {
    //       this.$emit('mapClick', proviceName)
    //     }
    //   })
    // }
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
  .main {
    background-color: #18446b;
  }
}
</style>
