import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'
import {
  reqAddress,
  reqCategorys,
  reqShops
} from '../api/index'

export default {

  //异步获取当前位置
  async getAddress({commit,state}){
    const { longitude,latitude } = state
    //发送异步请求
    const result = await reqAddress(longitude,latitude)
    //判断请求是否成功
    if(result.code === 0){
      //获取具体的响应数据
      const address = result.data
      //提交给对应的mutation来直接修改状态数据
      commit(RECEIVE_ADDRESS,address)
    }
  },

  //异步获取分类列表
  async getCategorys({commit}){
    //发送异步请求
    const result = await reqCategorys()
    //判断请求是否成功
    if(result.code === 0){
      //获取具体的响应数据
      const categorys = result.data
      //提交给对应的mutation来直接修改状态数据
      commit(RECEIVE_CATEGORYS,categorys)
    }
  },

  //异步获取附近商家列表
  async getShops({commit,state}){
    const { longitude,latitude } = state
    //发送异步请求
    const result = await reqShops({longitude,latitude})
    //判断请求是否成功
    if(result.code === 0){
      //获取具体的响应数据
      const shops = result.data
      //提交给对应的mutation来直接修改状态数据
      commit(RECEIVE_SHOPS,shops)
    }
  },
}
