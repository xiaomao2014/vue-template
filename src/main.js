import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
// 引入全局mixins
import Mixin from './mixins'
// 引入echarts
import echarts from 'echarts'
// import * as echarts from 'echarts'

// 引入全局注册组件global
import './global/index'

// 引入common.css、reset.css
import '../static/css/common.css'
import '../static/css/reset.css'

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.mixin(Mixin)

// 全局引入lodash
import _ from 'lodash'
Vue.prototype._ = _
// 使用echarts
Vue.prototype.$echarts = echarts

// 引入axios
// import axios from 'axios'

Vue.config.productionTip = false
// 环境变量
console.log('当前环境变量：' + process.env.NODE_ENV)
console.log('当前环境路径：' + process.env.VUE_APP_BASE_URL)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
