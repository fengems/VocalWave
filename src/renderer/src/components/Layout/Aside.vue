<template>
  <aside class="layout-sidebar">
    <RouterLink class="menu" to="/home">文本</RouterLink>
    <RouterLink class="menu" to="/file-import">文件导入</RouterLink>
    <RouterLink class="menu" to="/setting">设置</RouterLink>
  </aside>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.layout-sidebar {
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #f8f8f8;

  .menu {
    padding: 10px;
    text-decoration: none;
    color: #2c3e50;
    font-size: 20px;
  }

  .router-link-exact-active {
    font-weight: bold;
  }
}
</style>
