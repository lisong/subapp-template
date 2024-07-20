const Mock = require('mockjs')
export default Mock.mock('/api/test', 'get', () => {
  return Mock.mock({
    code: 200,
    msg: 'success1'
  })
})
