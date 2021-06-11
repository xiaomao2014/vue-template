<template>
  <div class="inner-box">
    <h1>Page3</h1>
    <h3>1.路由传参跳转</h3>
    <el-button
      type="primary"
      @click="jump('我是page3路由传参到page4的参数内容')"
    >
      page3路由传值到page4
    </el-button>

    <h3>2.日期选择器-选择月</h3>
    <div>
      <el-date-picker
        v-model="value"
        type="month"
        placeholder="选择月"
        @change="changeDatePicker"
        value-format="yyyy-MM"
      >
      </el-date-picker>
    </div>

    <h3>3.表格展示-点击行触发事件</h3>
    <div class="text-table-box">
      <el-table
        :data="tableData"
        style="width: 100%"
        @row-click="rowClick"
        ref="orderTable"
        :border="true"
        height="180"
        @mouseover.native="tableMouseOverHandler"
        @mouseleave.native="tableMouseLeaveHandler"
      >
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </div>

    <h3>4.Vue基础使用</h3>
    <div>
      <div>vuex中common文件中的getters数据：{{ isChineseLanguage }}</div>
      <div>vuex中common文件中state的count数据：{{ count }}</div>
      <el-button type="primary" @click="increment">
        点我+1
      </el-button>
    </div>

    <h3>5.图片的使用</h3>
    <div>
      <img class="logo" src="../assets/images/logo.png" alt="logo" />
    </div>
    <h3>6.Mixins使用</h3>
    <div>{{ testMixins }}</div>
    <h3>7.全局封装方法使用</h3>
    <div>{{ $keep2Num(5.123568) }}<br />{{ $keep2Num(5.899568) }}</div>
    <h3>8.全局封装组件字体图标的使用</h3>
    <Iconfont iconName="el-icon-edit" class="icon"></Iconfont>
    <h3>9.全局封装组件弹窗的使用</h3>
    <el-button type="primary" @click="openDialog">
      打开弹窗
    </el-button>
    <GlobalDialog
      :title="title"
      :dialogVisible="dialogVisible"
      @closeDialog="closeDialogHandle"
    />
    <h3>10、echarts图表使用</h3>
    <div>
      <mapData />
    </div>
    <div>
      <radarData
        :curMonthsData="areaCurMonthsRadarData"
        :sixMonthsData="areaSixMonthsRadarData"
        :indicator="userIndicator"
      />
    </div>
    <div>
      <pieData :pieDataObj="pieDataObj" />
    </div>
  </div>
</template>

<script>
// 引入lodash
import _ from 'lodash'
// _.chunk()根据size参数将数组分组，size是每一组的长度。如果数组不能均分，最后一组就会包含剩下的元素。
console.log(_.chunk(['a', 'b', 'c', 'd'], 1))
// 引入mapState
import { mapMutations, mapState, mapActions, mapGetters } from 'vuex'
import mapData from '@/components/Page3/mapData'
import radarData from '@/components/Page3/radarData'
import pieData from '@/components/Page3/pieData'
export default {
  name: 'Page3',
  // mixins: [],
  components: { mapData, radarData, pieData },
  // props,
  data() {
    return {
      // 日期选择器值
      value: '',
      speed: 0,
      isAutoPlay: true,
      playInterval: null,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎4',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎4',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      // 弹窗组件数据
      title: '弹窗标题',
      dialogVisible: false,
      // 雷达图
      userIndicator: [
        {
          name: '网关性能',
          axisLabel: {
            show: true,
            textStyle: { fontSize: 18, color: '#586779' }
          },
          max: 350
        },
        { name: '接入网性能', max: 350 },
        { name: '驻地网性能', max: 350 },
        { name: '业务承载性能', max: 350 },
        { name: 'Wifi性能', max: 350 }
      ],
      areaSixMonthsRadarData: [100, 12, 69, 320, 245], // 当前地区用户业务质量综合分析近六个月的
      areaCurMonthsRadarData: [25, 69, 58, 189, 214], // 当前地区用户业务质量综合分析本月的
      // 玫瑰图
      pieDataObj: [
        {
          value: 20,
          name: '异常投诉单数',
          itemStyle: { color: '#7ECF51' }
        },
        { value: 30, name: '重复投诉单数', itemStyle: { color: '#61A5E8' } },
        {
          value: 40,
          name: '回访不满意单数',
          itemStyle: { color: '#E16757' }
        },
        {
          value: 50,
          name: '用后即评装机单数',
          itemStyle: { color: '#E3935D' }
        },
        {
          value: 60,
          name: '用户感知不满意单数',
          itemStyle: { color: '#EECB5F' }
        }
      ]
    }
  },
  created() {},
  mounted() {
    this.speed = 1
    this.playInterval = setInterval(this.tableAutoPlay, 20)
  },
  methods: {
    ...mapActions([]),
    ...mapMutations(['CHANGE_COUNT_M']),
    jump(id) {
      // 直接调用$router.push 实现携带参数的跳转
      this.$router.push({
        path: `/Page4/${id}`
      })
    },
    changeDatePicker(e) {
      console.log(e) // 2020-07
    },
    rowClick(row) {
      console.log(row)
      console.log(row.name)
    },
    tableAutoPlay() {
      if (
        this.isAutoPlay &&
        this.speed &&
        this.$refs['orderTable'] &&
        this.$refs['orderTable'].$refs.bodyWrapper
      ) {
        let offsetHeight = this.$refs['orderTable'].$refs.bodyWrapper
          .offsetHeight
        let scrollHeight = this.$refs['orderTable'].$refs.bodyWrapper
          .scrollHeight
        let scrollTop = this.$refs['orderTable'].$refs.bodyWrapper.scrollTop
        if (scrollTop + offsetHeight < scrollHeight) {
          this.$refs['orderTable'].$refs.bodyWrapper.scrollTop += this.speed
        } else {
          this.$refs['orderTable'].$refs.bodyWrapper.scrollTop = 0
        }
      }
    },
    tableMouseOverHandler() {
      this.isAutoPlay = false
    },
    tableMouseLeaveHandler() {
      this.isAutoPlay = true
    },
    increment() {
      this.CHANGE_COUNT_M(1)
    },
    openDialog() {
      this.title = '我是定制的标题'
      this.dialogVisible = true
    },
    closeDialogHandle() {
      this.dialogVisible = false
    }
  },
  computed: {
    ...mapGetters({
      isChineseLanguage: 'isChineseLanguage'
    }),
    ...mapState({
      count: state => state.common.count
    })
  },
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
  .logo {
    width: 100px;
    height: 100px;
  }
  .icon {
    font-size: 30px;
    color: red;
  }
}
</style>
