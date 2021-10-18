<template>
  <!-- 跳转页 -->
  <div class="hello">
    <div>
      待完善的登录页面！
    </div>
    <el-button type="primary" @click="login()">登录</el-button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      
    }
  },
  methods: {
    login() {
      this.$router.push('/home')
    },
  },
}
</script>

<style scoped>

</style>
