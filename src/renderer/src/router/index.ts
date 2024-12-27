import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/Layout/index.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home/index.vue'),
      },
      {
        path: '/file-import',
        name: 'FileImport',
        component: () => import('../views/FileImport/index.vue'),
      },
      {
        path: '/setting',
        name: 'Setting',
        component: () => import('../views/Setting/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
