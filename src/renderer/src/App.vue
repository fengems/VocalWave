<script setup lang="ts">
// 如果需要路由相关功能可以从vue-router导入
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="app">
    <!-- 路由出口 -->
    <RouterView />
  </div>
</template>

<style>
.app {
  height: 100vh;
  width: 100vw;

  display: flex;
}

nav {
  padding: 20px 0;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #2c3e50;
}

nav a.router-link-active {
  color: #42b983;
}
</style>
