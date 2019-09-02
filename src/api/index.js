/* 
包含多个接口请求函数的模块
*/
import ajax from './ajax'

//代理请求发送时，识别的请求路径开头
const BASE = '/api'
















//根据经纬度获取位置详情  latitude纬度|longitude|经度|
export const reqAddress = (longitude,latitude) => ajax.get(BASE+`/position/${latitude},${longitude}`)

//获取食品分类列表
export const reqCategorys = () => ajax({
  method: 'GET',
  url: BASE+'/index_category'
})

//根据经纬度获取商铺信息
export const reqShops = ({latitude,longitude}) => ajax({
  method: 'GET',
  url: BASE+'/shops',
  params: { latitude, longitude }
})