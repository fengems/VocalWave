<script setup lang="ts">
// 如果需要路由相关功能可以从vue-router导入
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="app">
    <!-- 导航栏 -->
    <nav>
      <RouterLink to="/">首页</RouterLink> |
      <RouterLink to="/setting">设置</RouterLink>
    </nav>

    <!-- 路由出口 -->
    <RouterView />
  </div>
</template>

<style>
.app {
  padding: 20px;
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
