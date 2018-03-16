import {
  reqBrand,
  reqCategorysAndList,
} from  '../api'

import {
  RECEIVE_BRAND,
  RECEIVE_CATEGORYSANDLIST,
} from './mutation-types'

export default {
  async getBrand({commit}){
    const result = await reqBrand()
    if (result.code===0){
      commit(RECEIVE_BRAND,{brand:result.data})
    }
  },
  async getCategorysAndList({commit},callback){
    const result = await reqCategorysAndList()
    if (result.code===0){
      commit(RECEIVE_CATEGORYSANDLIST,{categorysAndList:result.data})
      callback&&callback()
    }
  },
}
