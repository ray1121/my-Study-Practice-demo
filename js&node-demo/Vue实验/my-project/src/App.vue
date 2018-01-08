<template>
  <div id="app">
    <div>
      <ul>
        <!-- 访问子路由的时候父路由一直都会被渲染出来加上exact就可以阻断父路由的渲染 -->
        <router-link :to="index" exact tag="li" >
          <i></i>
          <span>home</span>
        </router-link>
        <!-- router-link默认替换的标签的是a 用tag="div"可以改变
          并且可以自动添加点击事件
           -->
       <router-link :to="{path:'/document'}" tag="li" >
          <i></i>
          <span>document</span>
        </router-link>
        
         <router-link :to="{name:'Select'}" exact tag="li" >
          <i></i>
          <span>select</span>
        </router-link>
        <router-link :to="{name:'Increment'}" exact tag="li" >
          <i></i>
          <span>Increment</span>
        </router-link>
       <!-- router-link自动识别是hash模式还是History模式 -->
        <router-link to="/about" tag="li"  >
          <i></i>
          <span>about</span>
        </router-link> 
        <router-link to="/user" tag="li"  >
          <i></i>
          <span>user</span>
        </router-link> 
      </ul>
    </div>
    <!-- 同一个路由下呀渲染多个组件就要起名字对应渲染  -->
    <router-view name="slider" class="slider"/>
    <router-view class="center"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      index: '/'
    }
  }
}
</script>

<style>
.center{
  margin: 0 auto;
  font-size: 30px
}
.is-active{
  background: greenyellow
}
.slider{
  font-size: 30px
}
</style>
