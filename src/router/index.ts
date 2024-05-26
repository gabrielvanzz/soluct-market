import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useUserStore } from '@/stores/user'

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
      component: () => import('../views/LoginView.vue')
      
    },
  ]
})

router.beforeEach(async (to) => {
  const { isAuthenticated } = useUserStore()
  if (
    !isAuthenticated &&
    to.name !== 'login'
  ) {
    return { name: 'login' }
  }
  if (
    isAuthenticated &&
    to.name === 'login'
  ) {
    return { name: 'home' }
  }
  
})



export default router


//criar pasta services para usar o axios, configurar instancia padrão