<template>
  <!-- 跳转页 -->
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <el-button type="primary" @click="homeHandle()">多表头</el-button>
      <el-button type="primary" @click="serveHandle()">合并单元表格</el-button>
      <el-button type="primary" @click="indexHandle()">表格套表单</el-button>
      <el-button type="primary" @click="textHandle()">拆分单元格</el-button>
      <el-button type="primary" @click="ITPproject()">ITP项目</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
    homeHandle() {
      this.$router.push('/home')
      // let obj =  this.$router.resolve({
      //   path: '/home'
      // })
      // window.open(obj, '_blank')
    },
    textHandle() {
      this.$router.push('/text')
    },
    serveHandle() {
      this.$router.push('/serve')
    },
    indexHandle() {
      this.$router.push('/formTable')
    },
    ITPproject() {
      this.$router.push('/itp')
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
