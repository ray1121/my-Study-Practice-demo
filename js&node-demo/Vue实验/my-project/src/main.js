// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
/**
 *路由钩子函数beforeEach是在重新渲染新组建之前被调用
 *to是即将进入的路由组件，from是从哪个路由组件来的
 */
router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  //
  if (!to.meta.needLogin) {
    next()
  } else {
    if (from.meta.logined) {
      next(to.fullPath)
    } else {
      next('/login')
    }
  }
})
/**
 *路由钩子函数afterEach是在重新渲染新组建之后被调用
 * 可以在这里设置页面的head信息
 */
router.afterEach((to, from) => {
  if (to.meta.title) {
    window.document.title = to.meta.title
  } else {
    window.document.title = 'cirmall'
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
