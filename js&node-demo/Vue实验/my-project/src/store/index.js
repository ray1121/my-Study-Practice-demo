import Vue from 'vue'
import Vuex from 'vuex'
import { setTimeout } from 'timers'
import axios from 'axios'

Vue.use(Vuex)
/**
 * 只能有一个跟Vuex的实例，但是可以划分不同的组件功能模块分别定义state,getters,mutations,actions
 * 然后再跟Vuex中注入modules：{子vuex}
 * 这样的话在子组件中访问state就变成了，this.$store.state.子模块名.state名
 * 但是this.$store.dispatch就不需要加子模块名了
 */
let listModule = {
  state: {
    list: []
  },
  mutations: {
    changeList (state, payload) {
      state.list = payload.list
    }
  },
  actions: {
    getListAction ({commit}) {
      axios.get('https://www.easy-mock.com/mock/5a2f70926ce8af6869ec3965/example/list')
      .then((data) => {
        console.log(data.data.data.title)
        let list = data.data.data.title
        commit('changeList', {list})
      })
      .catch(e => console.log(e))
    }
  }
}

export default new Vuex.Store({
  state: {
    count: 100

  },
  /**
   * getters对state做进一步处理
   */
  getters: {
    filterCount (state) {
      return state.count > 120 ? 120 : state.count
    }
  },
  /**
   * 要想改变store中的值必须通过提交一个mutation，
   * Mutations是唯一修改状态的回调函数
   * mutations必须是同步的！！！
   * 若有异步操作要放在Actions里面
   */
  mutations: {
    addIncrement (state, payload) {
      state.count += payload.addnum
    },
    deIncrement (state, payload) {
      state.count -= payload.deNum
    }
  },
  actions: {
/**
 * 异步操作写在这里，但是与若想改变状态必须提价mutations不冲突
 * 结构赋值contex里面的方法
 */
    addAction ({commit, dispatch}) {
    //   console.log(contex)
      setTimeout(() => {
        commit('addIncrement', {addnum: 5})
        dispatch('testAction', {testlog: '测试继续分发动作'})
      }, 1000)
    },
    testAction (contex, param) {
      console.log(contex)
      console.log(param.testlog)
    }

  },
  modules: {
    listModule
  }
})
/**
 * Vuex的辅助函数
 * mapState
 * mapGetter
 * mapActions
 * mapMutations
 */
