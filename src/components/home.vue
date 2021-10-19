<template>
  <!-- 跳转页 -->
  <div class="box_login">
    <h1>{{ msg }}</h1>
    <div>
      <el-button type="primary" @click="multionHandle()">多表头</el-button>
      <el-button type="primary" @click="serveHandle()">合并单元表格</el-button>
      <el-button type="primary" @click="indexHandle()">表格套表单</el-button>
      <el-button type="primary" @click="textHandle()">拆分单元格</el-button>
      <el-button type="primary" @click="ITPproject()">ITP项目</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
    multionHandle() {
      this.$router.push('/mulheader')
      // let obj =  this.$router.resolve({
      //   path: '/mulheader'
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
  margin: 0px 10px;
}
a {
  color: #42b983;
}
</style>
