import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/Layout/index.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/home/index.vue'),
      },
      {
        path: '/setting',
        name: 'Setting',
        component: () => import('../views/setting/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
