<template>
<div> 
  <el-card class="box-card">
    <div v-for="num in 4" :key="num" class="text item">
      这是计算属性和监听属性的例子
    </div>
  </el-card>
  <el-row :gutter="20">
    <el-col :span="6" >
      <el-input placeholder="请输入要提问的内容" v-model="question"></el-input>
    </el-col>
    <el-col :span="6">
      <el-button type="primary">查询</el-button>
    </el-col>
    <el-col :span="6">
      <span>答案是：{{answer}}</span>
    </el-col>
    <el-col :span="6">
      <span>你的问题是{{question}}</span>
    </el-col>
  </el-row>
</div>

</template>

<script>

import _ from 'lodash'
import axios from 'axios'
export default {
  //  computed: {
  //    reverString () {
  //      return this.theString.split('').reverse().join('')
  //    }
  //  },

  data () {
    return {
      question: '',
      answer: '你不问我不说'
    }
  },
  watch: {
    // 监听question值一旦发生改变，这个函数就会触发
    question: function (newQuestion) {
      this.answer = '等你敲问号结尾中.....'
      this.getAnswer()
    }
  },
  methods: {
    getAnswer:
      _.debounce(function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = '还没敲问号?'
          return
        }
        this.answer = '思考中.....'

        console.log(`给vm的this指向${this.toString()}`)
        axios
          .get('https://yesno.wtf/api')
          .then((response) => {
            console.log(`这里的this指向${this}`)
            this.answer = _.capitalize(response.data.answer)
          })
          .catch((error) => {
            this.answer = 'Error! Could not reach the API. ' + error
          })
      }, 500)

  },
  components: {}
}
</script>

<style>
.text {
    font-size: 14px;
  }
.item {
    padding: 18px 0;
  }
.box-card {
    width: 480px;
    margin-bottom: 40px;
  }
  .no-ssr-placeholder {
  color: #41b883;
}
</style>
