<template>
  <div>关于我
    <hr>
    <ul>
      <router-link :to="{name:'About'}" tag="li"  exact event="mouseover">
      <a>study</a>
      </router-link>
      <router-link :to="{name:'Work'}" tag="li" event="mouseover">
      <a>work</a>
      </router-link>
      <router-link :to="{name:'Hobby'}" tag="li" event="mouseover">
      <a>hobby</a>
      </router-link>
    </ul>
    <hr>
    <!-- router-view就是子路由匹配到之后所渲染的位置 -->
    <transition mode="out-in">
     <router-view style="position:absolute"></router-view>
    </transition> 
  </div>
</template>

<script>
export default {

}
</script>
<style>
.v-enter{
  opacity: 0;
}
.v-enter-to{
  opacity: 1;
}
.v-enter-active{
  transition: 1s
}
.v-leave{
  opacity: 1;
}
.v-leave-to{
  opacity: 0;
}
.v-leave-active{
  transition: 0.5s
}
</style>