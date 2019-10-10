
import request from '@/utils/request'

export function getMenu(data) {
    return request({
      url: '/Menu/GetCurrentMenu',
      method: 'get',
      params: { token }
    })
  }

