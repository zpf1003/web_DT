<template>
  <div class="scp_mutionSelect">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
.scp_mutionSelect {
  padding: 10px 15px;
  width: calc(100% - 30px);
  min-height: calc(100% - 20px);
  background-color: #E0F2F7;
}
</style>
