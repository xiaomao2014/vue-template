import common from './common'

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    common
  }
})

// Vuex 支持在开发过程中热重载 mutation、module、action 和 getter。
if (module.hot) {
  module.hot.accept(['./common/index'], () => {
    const common = require('./common/index').default
    store.hotUpdate({
      modules: {
        common
      }
    })
  })
}

export default store
