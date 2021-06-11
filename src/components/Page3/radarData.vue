<template>
  <div class="radar-box">
    <div class="radar1-box">
      <div
        id="radar1"
        class="radar1"
        style="width: 600px; height: 400px;"
      ></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'radarData',
  // mixins: [],
  components: {},
  props: {
    indicator: {
      type: Array,
      default: () => []
    },
    curMonthsData: {
      type: Array,
      default: () => []
    },
    sixMonthsData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return { myRadarCharts: null }
  },
  created() {},
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let _this = this
      _this.myRadarCharts = echarts.init(document.getElementById('radar1'))
      let option = {
        legend: {
          data: ['本月', '近六个月'],
          top: 'bottom',
          padding: [5, 10],
          textStyle: {
            // 文字样式
            color: '#586779'
          }
        },
        tooltip: {
          trigger: 'item',
          backgroundColor: 'rgba(0,0,0,0.7)'
        },
        // 雷达图的指示器，用来指定雷达图中的多个变量（维度）
        radar: {
          radius: '65%',
          name: {
            textStyle: {
              // 文字样式
              color: '#586779'
            }
          },
          indicator: this.indicator
        },
        // 系列列表。每个系列通过 type 决定自己的图表类型
        series: [
          {
            name: '本月 vs 近六个月',
            type: 'radar',
            data: [
              {
                value: this.curMonthsData,
                name: '本月',
                itemStyle: {
                  normal: {
                    color: '#97bafa' //显示颜色与填充颜色对应
                  }
                },
                areaStyle: {
                  normal: {
                    color: '#97bafa' //填充的颜色
                  }
                }
              },
              {
                value: this.sixMonthsData,
                name: '近六个月',
                itemStyle: {
                  normal: {
                    color: '#98d09f' //显示颜色与填充颜色对应
                  }
                },
                areaStyle: {
                  normal: {
                    color: '#98d09f'
                  }
                }
              }
            ]
          }
        ]
      }
      _this.myRadarCharts.setOption(option)
      window.addEventListener('resize', function() {
        _this.myRadarCharts.resize()
      })
    }
  },
  computed: {},
  watch: {
    // curMonthsData() {
    //   this.init()
    // },
    // sixMonthsData() {
    //   this.init()
    // }
  }
  // updated () {},
  // beforeRouteUpdate () {},
  // beforeDestroy () {},
  // destroyed () {},
  // filters: {},
}
</script>

<style lang="scss" scoped></style>
