<template>
 <div>
<span v-if="Math.random()>0.3">
    Now You See Me :)
</span>
<span v-else>
    你看不见我
</span>
<el-input v-model="msg" placeholder="ray is handsome"></el-input>
<div >{{msg}}</div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
       msg: ''
     }
   },
   components: {

   }
 }
</script>

<style>

 
</style>
