<template>
  <div id="app">
    <div class="login-header" style="-webkit-app-region: drag;">
      <img src="./assets/images/login_logo.png" class="login-header-logo">
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
    line-height: 135px;
    text-align: center;
    background: url("./assets/images/login_bg.png") repeat-x;
  }
  .login-header-logo {
    height: 38px;
  }
</style>
