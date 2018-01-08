<template>
 <ul>
     <li :key="index" v-for="(item,index) in list " v-on:click="getTitle(item.title)">{{item}}</li>
 </ul>
</template>

<script>
 export default {
   props: ['listDatas'],
   computed: {
     list () {
       return this.$store.state.listModule.list
     }
   },
   components: {

   },
   created () {
     this.$store.dispatch('getListAction')
   },
   methods: {
     getTitle (title) {
       this.$emit('changeData', title)
     }
   }
 }
</script>

<style>

 
</style>
