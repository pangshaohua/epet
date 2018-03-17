import {
  RECEIVE_BRAND,
  RECEIVE_CATEGORYSANDLIST,
  RECEIVE_HOMEMESSAGE
} from './mutation-types'

export default {
  [RECEIVE_BRAND](state,{brand}){
    state.brand = brand
  },
  [RECEIVE_CATEGORYSANDLIST](state,{categorysAndList}){
    state.categorysAndList = categorysAndList
  },
  [RECEIVE_HOMEMESSAGE](state,{homeMessage}){
    state.homeMessage = homeMessage
  },
}
