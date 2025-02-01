import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/About-us',
      name: 'about-us',
      component: () => import('../views/About-us.vue'),
    },
    {
      path: '/Home',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/Profile',
      name: 'profile',
      component: () => import('../views/Profile.vue'),
    },
    {
      path: '/Dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue'),
    },
  ],
})

export default router
