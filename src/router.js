import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

// Router 객체를 생성하고, router의 매핑 정보를 입력한다.
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      // 1) 상단 import
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // 2) lazy-loaded, 요청을 받을 때 import
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
