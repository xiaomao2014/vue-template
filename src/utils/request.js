// 导入axios
import axios from 'axios'

// 引入qs模块，为post型数据提供序列化（非常重要）
import QS from 'qs'

// 环境判断-设置默认请求地址
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:8081'
} else {
  axios.defaults.baseURL = 'http://www.baidu.com'
}

// 使用element-ui Message做消息提醒
// import { Message } from 'element-ui'

// 获取cookie
// import { getCookie } from './tool'

// 1. 创建新的axios实例，
const service = axios.create({
  // 超时时间 单位是ms
  timeout: 3 * 1000
})
// 如果需要的话可以针对性设置post请求头
// service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 2.请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    // 1.token携带问题
    // 注意使用token的时候需要引入cookie方法或者用本地localStorage等方法，这里取token之前，你肯定需要先拿到token,存一下
    // const token = getCookie('token')
    // if (token) {
    //   // 如果要求携带在参数中
    //   config.params = { token: token }
    //   // 如果要求携带在请求头中
    //   config.headers.token = token
    // }
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 3.响应拦截器
service.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    // 接收到响应数据并成功后的一些共有的处理，关闭loading等
    return response
  },
  error => {
    // 对响应错误做点什么
    // Message.error(error.message)
    return Promise.reject(error)
  }
)

// 请求封装
/**
 * 封装 get 请求
 * @param url
 * @param data
 * @returns {Promise}
 */
// get函数有两个参数。第一个参数代表的是我们要请求的url地址，第二个参数代表的是请求该url时携带的请求参数。接下来是get请求返回的promise对象，成功时返回resolve，失败时返回reject。
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
/**
 * 封装 post 请求
 * @param url
 * @param data
 * @returns {Promise}
 */
// post方法的封装与上面的get类似，不同之处在于，post在提交参数的书写方式。post所携带的第二个参数是一个参数对象（在这里用到了QS模块！！！），而get的第二个参数是一个{ }。
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

/**
 * 封装 put 请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, params).then(
      res => {
        resolve(res.data)
      },
      err => {
        reject(err)
      }
    )
  })
}
