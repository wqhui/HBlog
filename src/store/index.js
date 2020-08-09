import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    navigation: {
      navItems: [
        { name: '首页', id: '0', icon: 'fa-home', path: '/home' },
        { name: '标签', id: '1', icon: 'fa-tags', path: '/tags' },
        { name: '分类', id: '2', icon: 'fa-list', path: '/category' },
        { name: '归档', id: '3', icon: 'fa-archive', path: '/archives' },
        { name: '关于', id: '4', icon: 'fa-user', path: '/about' }
        // { name: '友链', id: '5', icon: 'fa-link', path: '/friendship' }
      ]
    },
    sideBar: {
      directory: {
        isShow: false
      }
    }

  },
  mutations,
  actions
})

export default store
