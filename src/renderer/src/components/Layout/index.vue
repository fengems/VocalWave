<template>
  <div class="layout-container">
    <div class="layout-main">
      <Aside></Aside>

      <main class="layout-content">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Aside from './Aside.vue'

// If you have other components to import, add them like this:
// import ComponentName from '@/components/ComponentName.vue'
</script>

<style scoped>
.layout-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  /* flex-direction: column; */
}

.layout-main {
  flex: 1;
  display: flex;
}

.layout-sidebar {
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #f8f8f8;
  border-right: 1px solid #eee;
}

.layout-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}
</style>
