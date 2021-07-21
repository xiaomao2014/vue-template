import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
// 引入百度地图
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'gCGDQF7pPKgwNn2k1lby04MxfT7qPwbo'
  // ak: 'jNf8T3IButbenn1DVAU1IRWpb1H6aduG'
})
// 引入高德地图
import VueAMap from 'vue-amap'
Vue.use(VueAMap)

VueAMap.initAMapApiLoader({
  key: '8c8ee4529d0aec51f0ca8b51bcf602b1',
  // 高德地图扩展插件(按需添加)
  plugin: [
    'AMap.Autocomplete', // 输入提示插件
    'AMap.PlaceSearch', // POI搜索插件
    'AMap.Scale', // 右下角缩略图插件 比例尺
    'AMap.OverView', // 地图鹰眼插件
    'AMap.ToolBar', // 地图工具条
    'AMap.MapType', // 类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
    'AMap.PolyEditor', // 编辑 折线多，边形
    'AMap.CircleEditor', // 圆形编辑器插件
    'AMap.Geolocation', // 定位控件，用来获取和展示用户主机所在的经纬度位置
    'AMap.Geocoder' //地图编码
  ],
  uiVersion: '1.1', // ui库版本，不配置不加载,
  v: '2.0'
})

// 引入axios
import axios from 'axios'

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
Vue.prototype.$axios = axios

Vue.config.productionTip = false
// 环境变量
console.log('当前环境变量：' + process.env.NODE_ENV)
console.log('当前环境路径：' + process.env.VUE_APP_BASE_URL)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
