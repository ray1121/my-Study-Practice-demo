<template>
 <section>
     <div>
         <!-- 自定义一个属性is-show并且传给子组件 ,
         若要实现双向数据绑定子组件改变同时更新父组件对应的值就在
         自定义属性后面加上.sync-->
        <selectInput :isShow.sync="listShow" :title="title"/>
        <list v-show="listShow" :listDatas="listDatas" @changeData="changeData"/>
     </div>
 </section>
</template>

<script>
import list from '@/components/selector/list'
import selectInput from '@/components/selector/selectInput'
let listDatas = [
    {title: 'Js'},
    {title: 'Node'},
    {title: 'Python'},
    {title: 'Mysql'},
    {title: 'Redis'}
]
export default {
  data () {
    return {
      listShow: false,
      listDatas: listDatas,
      title: ''
    }
  },
  components: {
    selectInput,
    list
  },
  methods: {
    changeData (title) {
      console.log(title)
      this.title = title
    }
  }
}
</script>

<style>

</style>
