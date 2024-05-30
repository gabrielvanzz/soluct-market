import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeProductView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/new-product',
      name: 'newProduct',
      component: () => import('../views/InsertProductView.vue')
    }
  ]
})

router.beforeEach(async to => {
  const { isAuthenticated } = useUserStore()
  if (!isAuthenticated && to.name !== 'login') {
    return { name: 'login' }
  }
  if (isAuthenticated && to.name === 'login') {
    return { name: 'home' }
  }
})

export default router
