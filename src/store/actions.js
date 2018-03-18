import {
  reqBrand,
  reqCategorysAndList,
  reqHomeMessage,
  reqTotalBrand
} from  '../api'

import {
  RECEIVE_BRAND,
  RECEIVE_CATEGORYSANDLIST,
  RECEIVE_HOMEMESSAGE,
  RECEIVE_TotalBrand,
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
  async getHomeMessage({commit}){
    const result = await reqHomeMessage()
    if (result.code===0){
      commit(RECEIVE_HOMEMESSAGE,{homeMessage:result.data})
    }
  },
  async getTotalBrand({commit},callback){
    const result = await reqTotalBrand()
    if (result.code===0){
      commit(RECEIVE_TotalBrand,{totalBrand:result.data})
      callback&&callback()
    }
  },
}
