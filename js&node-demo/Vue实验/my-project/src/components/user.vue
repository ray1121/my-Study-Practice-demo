<template>
 <div>
我是User
    <div>
        <!-- 使用v-for要绑定key值 -->
       <router-link :to="{path:'/user/'+item.id,query:{info:'follow'}}"  :key="index" v-for="(item,index) in userLists" event="mouseover">
           {{item.name}}
       </router-link> 
    </div>
    <div style="font-size:15px" v-if="userInfo.name">
        <p>姓名：{{ userInfo.name }}</p>
        <p>性别:{{ userInfo.sex }}</p>
        <p>爱好:{{ userInfo.hobby }}</p>
    </div>
    <hr>
    <div v-if="userInfo.name" style="color:red;font-size:18px">
        <router-link exact :to="{path:'',query:{info:'follow'}}">
            他的关注
        </router-link>
        <router-link exact :to="{path:'',query:{info:'share'}}">
            他的分享
        </router-link>
    </div>
    <div>
        {{$route.query}}
    </div>
 </div>
</template> 

<script>
let userLists = [
  {
    id: 1,
    name: '张三',
    sex: '男',
    hobby: 'basketball'
  },
  {
    id: 2,
    name: '李四',
    sex: '女',
    hobby: '化妆'
  },
  {
    id: 3,
    name: '王一',
    sex: '男',
    hobby: 'eat shit'
  }
]
export default {
  data () {
    return {
      userLists: userLists,
      userInfo: {}
    }
  },
  watch: {
    $route () {
    /**
     *路径发生变化的时候，$route就会重新被赋值，监控了这个属性，则该函数就会被执行
    */
      this.getData()
    }
  },
  created () {
      /**
       * 渲染这个组件的时候会调用这个函数一次
       * 复用这个组件的时候，这个函数就不会调用了
       * 地址一旦发生变化，$route就会重新生成一个路由对象
      */
    this.getData()
  },
  methods: {
    getData () {
      let id = parseInt(this.$route.params.userId) // 此时或的id是string类型,记得要转化类型再强档于
    //   console.log(id)
      if (id) {
        // console.log(typeof (id))
        // this.userInfo = this.userLists.filter(item => { return item.id === id })
        // console.log(this.userLists)
        /* eslint-disable */
        this.userInfo=this.userLists.filter(item => item.id === id)[0]
      } else {
        this.userInfo = {}
      }
    }
  }
}
</script>

<style>

 
</style>
