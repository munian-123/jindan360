import request from './request'
export const getJON = () => {
  return request.get('/products/recommend')
}
export const getOut = () => {
  return request.get('/products/hot')
}
// export const postCode = (params) => {
//   return request.post('/sendSMS', params)
// }

// 黑马购物接口
export const postCode = (isParty, mobile) => {
  return request.post('/passport/login', {
    form: {
      isParty,
      mobile,
      partyData: {},
      smsCode: 246810
    }
  })
}
