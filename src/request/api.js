import request from './request'
export const getJON = () => {
  return request.get('/products/recommend')
}
export const getOut = () => {
  return request.get('/products/hot')
}
