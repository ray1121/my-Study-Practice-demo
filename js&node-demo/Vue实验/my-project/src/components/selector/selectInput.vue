<template>
 <div>
<input readonly='readonly' @click="showListHandel" :value="title"/>
<input type="button" value="Go" v-on:dblclick="showInfo">
<span></span>
 </div>
</template>

<script>
 export default {
   props: ['isShow', 'title'],
   computed: {
     initShow () {
       return this.isShow
     }
   },
   data () {
     return {

     }
   },
   methods: {
     showListHandel () {
       this.$emit('update:isShow', !this.initShow)
     },
     showInfo () {
       window.alert('滚！')
     }
   },
   components: {
 
   }
 }
</script>

<style>

 
</style>
