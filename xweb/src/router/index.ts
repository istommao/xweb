import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import IndexView from '@/modules/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/modules/About.vue')
  },
  {
    path: '/codemirror',
    name: 'codemirror',
    component: () => import('@/modules/CodeMirrorEditor.vue')
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import('@/modules/editor.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
