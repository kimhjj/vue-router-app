import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  // router의 위치가 중요하다. (제일 위에 오도록, rendering 보다 먼저)
  router,
  render: h => h(App)
}).$mount('#app')
