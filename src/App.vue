<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style lang="less">
  html,body,h3,p{
    margin: 0;
    padding: 0;
    line-height: 48px;
    font-size: 16px;
    font-weight: 400px;
  }
  .el-aside::-webkit-scrollbar{
    display: none;
  }
</style>