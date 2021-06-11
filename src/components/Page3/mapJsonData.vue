<template>
  <div class="inner-box">
    <div class="map-box" id="map-box" style="width: 800px;height: 500px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'mapJsonData',
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
      myMapChart: null,
      provinceMap: {
        湖北: 'hubei',
        黑龙江: 'heilongjiang',
        湖南: 'hunan',
        广东: 'guangdong',
        海南: 'hainan',
        广西: 'guangxi',
        重庆: 'chongqing',
        四川: 'sichuan',
        贵州: 'guizhou',
        云南: 'yunnan',
        陕西: 'shanxi1',
        甘肃: 'gansu',
        青海: 'qinghai',
        宁夏: 'ningxia',
        新疆: 'xinjiang',
        北京: 'beijing',
        河南: 'henan',
        天津: 'tianjin',
        河北: 'hebei',
        山西: 'shanxi',
        内蒙古: 'neimenggu',
        辽宁: 'liaoning',
        吉林: 'jilin',
        上海: 'shanghai',
        江苏: 'jiangsu',
        浙江: 'zhejiang',
        安徽: 'anhui',
        福建: 'fujian',
        江西: 'jiangxi',
        山东: 'shandong',
        西藏: 'xizang'
      },
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
    this.initMap('china')
  },
  methods: {
    initMap(val) {
      console.log(val)
      this.myMapChart = this.$echarts.init(document.getElementById('map-box'))
      this.$axios.get('/map/json/' + val + '.json').then(res => {
        console.log(res)
        echarts.registerMap(val, res.data)
        let option = this.getOption(val)
        this.myMapChart.clear() // 清空图画
        this.myMapChart.setOption(option)
        this.myMapChart.off('click') // 点击之前要先清除点击事件，否则会出现多次点击的效果
        this.myMapChart.on('click', params => {
          console.log(params)
          console.log(params.name)
          if (this.provinceList.includes(params.name)) {
            this.initMap(this.provinceMap[params.name])
          } else {
            this.initMap('china')
          }
        })
        window.addEventListener('resize', function() {
          this.myMapChart.resize()
        })
      })
    },
    getOption(val) {
      console.log(val)
      let option = {
        geo: {
          type: 'map',
          map: val,
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
            data: val === 'china' ? this.exampleData1 : this.exampleData2
          }
        ]
      }
      return option
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
  .map-box {
    background-color: #18446b;
  }
}
</style>
