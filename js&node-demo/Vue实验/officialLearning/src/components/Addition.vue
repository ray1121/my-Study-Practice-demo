<template>
 <div>
<h1>总和是{{total}}</h1>
<Num @computedTotal="sum"></Num>
<Num @computedTotal="sum"></Num>
 </div>
</template>

<script>
import Vue from 'Vue'
export default {
  data () {
    return {
      total: 0
    }
  },
  methods: {
    sum () {
      this.total += 1
    }
  },
  components: {
    Num: Vue.component('num', {
      template: '<el-button type="primary" @click="add">{{count}}</el-button>',
      data () {
        return {
          count: 1
        }
      },
      methods: {
        add () {
          this.count += 1
          this.$emit('computedTotal')
        }
      }
    })
  }
}
</script>

<style>

 
</style>
