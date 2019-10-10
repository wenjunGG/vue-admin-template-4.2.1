
import {getMenu} from '@/api/menu';

const state = {
    menuList:[]
  }
  
  const mutations = {
    SET_menuList: (state, menuList) => {
      state.menuList = menuList
    }
  }
  
  const actions = {

    //获取菜单
    getMenuList({ dispatch, commit }){
        return new Promise((resolve, reject) => {
            getMenu(getters.token).then(response => {
              const { data } = response
      
              if (!data) {
                reject('Verification failed, please Login again.')
              }
      
             //const { userName, picture } = data
             
              resolve(data)

            }).catch(error => {
              reject(error)
            })
          })
    }
  }

  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }