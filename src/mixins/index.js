import {
  keep2Num,
  removeStore
} from '../utils/tool'
let mixin = {
  data () {
    return {
      testMixins: '我是全局的：testMixins'
    }
  },
  methods: {
    $removeStore (name) {
      removeStore(name)
    },
    $keep2Num (num) {
      return keep2Num(num)
    }
  },
  computed: {},
  filters: {}
}
export default mixin
