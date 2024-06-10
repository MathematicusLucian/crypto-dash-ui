// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      /** route level code-splitting
        * this generates a separate chunk (Home-[hash].js) for this route
        * which is lazy-loaded when the route is visited. */
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/details/:coinID',
    name: 'details',
    component: () => import('@/views/Details.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router