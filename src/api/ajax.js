/* 
1.统一处理请求异常
2.异步请求成功的数据不是response，而是response.data
3.对post请求参数进行urleccoded处理，而不是使用默认的json方式（后台接口不支持）
4.配置全局的请求超时的时间
*/

import axios from 'axios'
//用于将对象转换成查询字符串
const qs = require('qs')

// 配置请求超时的全局配置
axios.defaults.timeout = 20000

//添加请求拦截器
axios.interceptors.request.use((config) => {

  const {method,data} = config
  //如果是携带数据的post请求，进行处理，将其参数携带方式转换成urlencoded
  if(method.toLowerCase() === 'post' && data && typeof data === 'object'){
    config.data = qs.stringify(data)  //{name:'tom',pwd:'123'} => name=tom&pwd=123
  }
  
  return config
})

//添加响应拦截器
axios.interceptors.response.use((response) => {
  //直接返回请求的具体数据
  return response.data
},
(error) => {
  //如果请求-响应过程出错，统一处理错误
  alert(error.message)
  return new Promise(()=>{})
})

export default axios