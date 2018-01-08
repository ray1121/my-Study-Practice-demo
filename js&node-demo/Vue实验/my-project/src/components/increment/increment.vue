<template>
 <div>
<h2>使用Vuex制作的简单加法计算器</h2>
<input type="button" value="-" @click="deHandle({deNum:3})">
<span>{{num}}</span>
<input type="button" value="+" @click="addHandle({addnum:3})">
<span>{{num2}}</span>
 </div>
</template>
<script>
/**
 * Vuex 的四个辅助函数
 */
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  /**
      * 计算属性
     */
  computed: {
    // num () {
    //     // 使用计算属性从store中取出的state中的count
    //   return this.$store.state.count
    // },
    // num2 () {
    //   return this.$store.getters.filterCount
    // }
    ...mapState({ num: 'count' }),
    ...mapGetters({ num2: 'filterCount' })
  },
  data () {
    return {}
  },
  components: {},
  methods: {
    // addHandle () {
    /**
  * 在这里需要改变store中的状态,所以要提交一个mutation
  * this.$store.commit第一个参数是移交的mutations的名称后面传进mutations的参数
  * this.$store.commit也可以只传一个对象，但是要指明type,即为mutation的名称
  */
    //    this.$store.commit('addIncrement', {
    //      addnum: 5
    //    })
    // 改成一个触发的异步action
    //   this.$store.dispatch('addAction')
    // },

/**
 * 用map的这种方式传参要在定义时间的html中传
 */

    ...mapActions({ addHandle: 'addAction' }),

    ...mapMutations({ deHandle: 'deIncrement' })

    // deHandle () {
    //   this.$store.commit({
    //     type: 'deIncrement',
    //     deNum: 5
    //   })
    // }
  }
}
</script>

<style>

</style>
