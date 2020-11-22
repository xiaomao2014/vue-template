import common from './common'

import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    common
  }
});
export default store
