import request from './request'
// export const getJON = () => {
//   return request.get('/products/recommend')
// }
// export const getOut = () => {
//   return request.get('/products/hot')
// }
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
// 小兔xian接口
// 首页-热门推荐
export const getMutliData = () => {
  return request.get('/home/hot/mutli')
}
// 首页-猜你喜欢
export const getNewData = (page, pageSize) => {
  return request.get('/home/goods/guessLike', {
    params: {
      page,
      pageSize
    }

  })
}
//
// 商品详情
export const getGoodsData = (id) => {
  return request.get(`/goods?id=${id}`)
}
// 爆款
export const getHotpreFerence = (url) => {
  return request(url, {
    params: {
      page: 2,
      pageSize: 24
    }
  })
}
// 搜索
export const getAllData = () => {
  return request({
    methods: 'POST',
    url: '/search/all'
  })
}
