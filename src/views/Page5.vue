<template>
  <div class="inner-box">
    <el-select v-model="value1" multiple placeholder="请选择" @change="change">
      <el-option
        v-for="item in options"
        :key="item.id"
        :label="item.label"
        :value="item.label"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'Page5',
  // mixins: [],
  components: {},
  // props,
  data() {
    return {
      options: [
        {
          id: 1,
          label: '黄金糕1'
        },
        {
          id: 2,
          label: '双皮奶2'
        },
        {
          id: 3,
          label: '蚵仔煎3'
        },
        {
          id: 4,
          label: '龙须面4'
        },
        {
          id: 5,
          label: '北京烤鸭5'
        }
      ],
      value1: ['黄金糕1', '双皮奶2']
      // value1: []
      // value1: [1, 2]
    }
  },
  created() {},
  mounted() {},
  methods: {
    change(e) {
      console.log(e)
      this.value1 = e
      console.log(this.value1)
      let res = []
      this.value1.forEach(item => {
        console.log(item)
        this.options.forEach(bar => {
          console.log(bar.label)
          if (item == bar.label) {
            console.log(bar.id)
            res.push(bar.id)
          }
        })
      })
      console.log(res)
      console.log(res.join(','))
      let str = res.join(',')
      console.log(str)
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

<style lang="scss" scoped></style>
