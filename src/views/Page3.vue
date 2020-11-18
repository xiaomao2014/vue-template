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
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
// _.chunk()根据size参数将数组分组，size是每一组的长度。如果数组不能均分，最后一组就会包含剩下的元素。
console.log(_.chunk(["a", "b", "c", "d"], 1));
export default {
  name: "Page3",
  // mixins: [],
  components: {},
  // props,
  data () {
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
      ]
    };
  },
  created () {},
  mounted () {
    this.speed = 1;
    this.playInterval = setInterval(this.tableAutoPlay, 20);
  },
  methods: {
    jump (id) {
      // 直接调用$router.push 实现携带参数的跳转
      this.$router.push({
        path: `/Page4/${id}`
      })
    },
    changeDatePicker (e) {
      console.log(e) // 2020-07
    },
    rowClick (row) {
      console.log(row)
      console.log(row.name)
    },
    tableAutoPlay () {
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

</style>
