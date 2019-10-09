import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/UseInfo/DoLogin',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/UseInfo/GetUserInfo',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/UseInfo/OutLogin',
    method: 'post'
  })
}
