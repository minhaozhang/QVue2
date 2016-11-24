import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import MyToken from 'assets/js/my-token'
import RouterConfig from 'assets/js/my-router'
import App from './App'

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.http.options.emulateJSON = true
Vue.http.options.emulateHTTP = true

MyToken(Vue);

Vue.http.interceptors.push((request,next) => {

    next((response) => {
    })
})

/**
 * 定义路由表
 */
const router = new VueRouter({routes:RouterConfig})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
