<template>
  <div class="inner-box">
    <div id="pieBox" class="pieBox" style="width: 600px; height: 400px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'pieData',
  // mixins: [],
  components: {},
  props: {
    pieDataObj: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      myPieCharts: null
    }
  },
  created() {},
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let _this = this
      _this.myPieCharts = echarts.init(document.getElementById('pieBox'))
      let option = {
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: '',
            type: 'pie',
            itemStyle: {
              borderRadius: 5
            },
            radius: [10, 100],
            roseType: 'radius', // 南丁格尔图 饼图的每一个区域的半径是不同的
            label: {
              // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
              show: true, // 显示文字
              // formatter: function (arg) {
              //   console.log(arg);
              //   return arg.name + arg.value;
              // },
              color: '#586779'
            },
            labelLine: {
              show: true,
              length: 10,
              length2: 5
            },
            tooltip: {
              // position: [10, 10]
            },
            data: this.pieDataObj
          }
        ]
      }
      _this.myPieCharts.setOption(option)
      window.addEventListener('resize', function() {
        _this.myPieCharts.resize()
      })
    }
  },
  computed: {},
  watch: {
    // pieDataObj() {
    //   this.init();
    // },
  }
  // updated () {},
  // beforeRouteUpdate () {},
  // beforeDestroy () {},
  // destroyed () {},
  // filters: {},
}
</script>

<style lang="scss" scoped></style>
