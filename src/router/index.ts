import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginVue from '@/views/Login.vue'
import RegisterVue from '@/views/Register.vue'
import ForgotPasswordVue from '@/views/ForgotPassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginVue
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterVue
    },

    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      component: ForgotPasswordVue
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
