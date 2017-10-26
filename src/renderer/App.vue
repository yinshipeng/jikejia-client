<template>
  <div id="app">
    <div class="login-header">
      <img src="./assets/images/login_logo.png">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'my-electron-vue'
  }
</script>

<style>
  body{
    margin: 0;
  }
  .login-header {
    height: 118px;
    line-height: 118px;
    text-align: center;
    background: url("./assets/images/login_bg.png") repeat-x;
  }
</style>
