import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'
const Menukey='vue_admin_menu'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

/**** 设置菜单****/

export function setMenu(menuValue){
  return Cookies.set(Menukey,menuValue)
}

export function getMenu(){
  return Cookies.set(Menukey)
}

