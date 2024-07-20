import Axios from 'axios'
import { message } from 'antd'
const successCode = ['200', 200, 0, '0', 'ok', 'true']
if (process.env.REACT_APP_USE_MOCK === 'true') {
  // 加载 Mock 数据
  require('../mocks/index')
}

// 请求失败后的错误统一处理
const netErrorHandle = (response: { status: number }) => {
  const { status } = response
  if (status === 401) {
    // TODO: token 过期了，需要返回登陆页面
    message.error('登录状态已过期，请重新登录')
    // 回到主应用的登录通用页面
    return message.error(`服务器异常${response.status}`)
  }
  switch (status) {
    case 403:
      break
    case 404:
      break
    default:
      break
  }
  message.error(`服务器异常${response.status}`)
}

// 创建axios实例
const instance = Axios.create({ baseURL: '', timeout: 3000 })

/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken') // 获取token
    token && (config.headers.Authorization = token)
    config.withCredentials = true
    return config
  },
  (error) => Promise.reject(error)
)

/**
 * 响应拦截器
 * 拦截响应并统一处理
 */

instance.interceptors.response.use(
  (res: any) => {
    if (res.status && res.status === 200 && (successCode.indexOf(res.data.status) > -1 || successCode.indexOf(res.data.code) > -1)) {
      return Promise.resolve(res.data)
    } else {
      const data = res.data || {}
      const msg = data.msg || data.message
      message.error(msg || '操作失败')
      return Promise.reject(res)
    }
  },
  (error) => {
    const { response, message: msg } = error
    if (response) {
      netErrorHandle(response)
      return Promise.reject(response)
    } else {
      console.warn(msg)
      if (msg && msg.indexOf('timeout') > -1) {
        message.error('请求超时，请稍后重试')
        return Promise.reject(error)
      } else if (!window.navigator.onLine) {
        // 通知断网
        message.error('请求失败，请检查您的网络连接情况')
        return Promise.reject(error)
      } else {
        return Promise.reject(error)
      }
    }
  }
)

export default instance
