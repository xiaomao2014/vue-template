import {
  CHANGE_COUNT_M
} from './mutations-types.js'
export default {
  [CHANGE_COUNT_M] (state, data) {
    // state.count = data
    state.count = state.count + data
  }
}
