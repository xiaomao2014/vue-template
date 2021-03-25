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
    <div>
      <h1>
        vue项目中使用codemirror插件实现代码编辑器功能-代码高亮显示及自动提示
      </h1>
      <div class="editor-box">
        <textarea
          ref="mycode"
          class="codesql"
          v-model="code"
          style="height:200px;width:600px;"
        >
        </textarea>
      </div>
      <div>
        <el-button @click="getCodemirrorInfo">点我获得编辑器内容</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import 'codemirror/theme/ambiance.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/hint/show-hint.css'
let CodeMirror = require('codemirror/lib/codemirror')
require('codemirror/addon/edit/matchbrackets')
require('codemirror/addon/selection/active-line')
require('codemirror/mode/sql/sql')
require('codemirror/addon/hint/show-hint')
require('codemirror/addon/hint/sql-hint')
require('codemirror/mode/javascript/javascript') // 引入js代码
require('codemirror/addon/hint/javascript-hint') // 引入js代码提示
require('codemirror/mode/javascript/javascript.js')
require('codemirror/mode/css/css.js')
require('codemirror/mode/xml/xml.js')
require('codemirror/mode/clike/clike.js')
require('codemirror/mode/markdown/markdown.js')
require('codemirror/mode/python/python.js')
require('codemirror/mode/r/r.js')
require('codemirror/mode/shell/shell.js')
require('codemirror/mode/sql/sql.js')
require('codemirror/mode/swift/swift.js')
require('codemirror/mode/vue/vue.js')
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
      value1: ['黄金糕1', '双皮奶2'],
      // value1: []
      // value1: [1, 2]
      code: '',
      editor: null
    }
  },
  created() {},
  mounted() {
    this.initEditor()
  },
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
    },
    initEditor() {
      // let mime = 'text/x-mariadb'
      let mime = 'text/javascript'
      let theme = 'ambiance' // 设置主题，不设置的会使用默认主题
      this.editor = CodeMirror.fromTextArea(this.$refs.mycode, {
        mode: mime, // 选择对应代码编辑器的语言，我这边选的是数据库，根据个人情况自行设置即可
        indentWithTabs: true, // 在缩进时，是否需要把 n*tab宽度个空格替换成n个tab字符，默认为false 。
        smartIndent: true, // 自动缩进，设置是否根据上下文自动缩进（和上一行相同的缩进量）。默认为true。
        lineNumbers: true, // 是否在编辑器左侧显示行号。
        matchBrackets: true, // 匹配结束符号，比如"]、}"
        theme: theme, // 主题
        extraKeys: { Ctrl: 'autocomplete' }, // 自定义快捷键
        // hintOptions: {
        //   // 自定义提示选项
        //   tables: {
        //     users: ['name', 'score', 'birthDate'],
        //     countries: ['name', 'population', 'size']
        //   }
        // },
        autofocus: true // 自动聚焦
      })
      // 代码自动提示功能，记住使用cursorActivity事件不要使用change事件，这是一个坑，那样页面直接会卡死
      this.editor.on('cursorActivity', function() {
        // editor.showHint() // 显示代码提示框
      })
      // 编辑器赋值
      this.editor.setValue(this.code)
      // 监控编辑器值变化
      this.editor.on('change', coder => {
        // 获取编辑器内容
        this.code = coder.getValue()
        console.log(this.code)
      })
    },
    getCodemirrorInfo() {
      console.log(this.code)
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
.editor-box {
  width: 600px;
  .codesql {
    font-size: 14px;
    font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
  }
}
</style>
