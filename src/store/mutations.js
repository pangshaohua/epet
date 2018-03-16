import {
  RECEIVE_BRAND,
  RECEIVE_CATEGORYSANDLIST,
} from './mutation-types'

export default {
  [RECEIVE_BRAND](state,{brand}){
    state.brand = brand
  },
  [RECEIVE_CATEGORYSANDLIST](state,{categorysAndList}){
    state.categorysAndList = categorysAndList
  },
}
