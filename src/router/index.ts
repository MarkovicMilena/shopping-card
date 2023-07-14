import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('../views/HomePage.vue')
const ProductsPage = () => import('../views/ProductsPage.vue')

export const HOME_PAGE_ROUTE_NAME = 'home-page'
export const PRODUCTS_PAGE_ROUTE_NAME = 'products-page'

const routes = [
  {
    path: '/',
    name: HOME_PAGE_ROUTE_NAME,
    component: HomePage
  },
  {
    path: '/products',
    name: PRODUCTS_PAGE_ROUTE_NAME,
    component: ProductsPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
