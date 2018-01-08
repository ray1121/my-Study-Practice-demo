import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import about from '@/components/about'
import document from '@/components/document'
import notFound from '@/components/404'
import study from '@/components/study'
import work from '@/components/work'
import hobby from '@/components/hobby'
import slider from '@/components/other/slider'
import user from '@/components/user'
import login from '@/components/login'
import select from '@/components/selector/select'
import increment from '@/components/increment/increment'

Vue.use(Router)
export default new Router({
  // 地址栏模式默认是hash模式
  mode: 'history',
  // 自定义时间发生时的类名
  linkActiveClass: 'is-active',
  // 记录从哪个页面来，以及上一个页面被活动的位置,
  // 当在当前页面往下滚动之后使用浏览器的前进后退会当前页面时自动跳到了上一次的位置
  scrollBehavior (to, from, savePosition) {
    // console.log(to)
    // console.log(from)
    // console.log(savePosition)
    if (savePosition) {
      return savePosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes: [{
    path: '/',
    component: home,
    alias: '/index',
    meta: {
      title: 'Home',
      needLogin: false,
      logined: false
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: home,
    meta: {
      title: 'Home',
      needLogin: false,
      logined: false
    }
  },
  {
    path: '/select',
    name: 'Select',
    component: select
  },
  {
    path: '/increment',
    name: 'Increment',
    component: increment
  },
  {
    path: '/about',
    component: about,
    children: [{
          // 相对于about所以path不要写/
      path: '',
      name: 'About',
      component: study,
      meta: {
        title: 'About',
        needLogin: false,
        logined: false
      }
    },
    {
          // 相对于about所以path不要写/
      path: 'work',
      name: 'Work',
      component: work,
      meta: {
        title: 'Work',
        needLogin: false,
        logined: false
      }
    },
    {
          // 相对于about所以path不要写/
      path: 'hobby',
      name: 'Hobby',
      component: hobby,
      meta: {
        title: 'Hobby',
        needLogin: false,
        logined: false
      }
    }
    ]
  },
  {
    path: '/document',
    name: 'Document',
    components: {
      default: document,
      slider: slider
    },
    // 给某一个具体的组件设置渲染之前的钩子函数
    beforeEnter (to, from, next) {
      next()
    },
    meta: {
      title: '文档',
      needLogin: false,
      logined: false
    }
  },
  {
    path: '/user/:userId?',
    component: user,
    meta: {
      title: '用户',
      needLogin: true,
      logined: false
    }
  },
  {
    path: '/login',
    component: login,
    meta: {
      title: '登录页面',
      needLogin: false,
      logined: false
    }
  },
  {
    path: '*',
    component: notFound
      // 重定向到某一个组件
      // redirect: {name: 'Home'}
      // redirect: (to) => {
      //   // 函数的方式动态设定要跳转的页面
      //   // console.log(to)
      //   if (to.path === '/aaa') {
      //     return '/home'
      //   } else {
      //     return 'about'
      //   }
      // }
  }

  ]
})
