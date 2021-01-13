<template>
  <div class="dialog-box">
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      :before-close="beforeClose"
      :close-on-click-modal="false"
      custom-class="global-dialog-box"
    >
      <span class="tips">这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="closeDialog">取消</el-button>
        <el-button size="mini" type="primary" @click="confirm">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'GlobalDialog',
  // mixins: [],
  components: {},
  props: ['title', 'dialogVisible'],
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    closeDialog() {
      this.$emit('closeDialog')
    },
    confirm() {
      alert('点击了弹窗的确定按钮！')
      this.$emit('closeDialog')
    },
    beforeClose() {
      this.$emit('closeDialog')
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

<style lang="scss">
.dialog-box {
  .el-dialog {
    width: 500px;
    .tips {
      color: red;
    }
  }
}
</style>
