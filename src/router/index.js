import { createRouter, createWebHashHistory } from 'vue-router'
import UserList from '../views/user/UserList.vue'

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList
  },
  {
     path: '/users/:id',
     name: 'UserDetail',
     props: true,
     // route level code-splitting
     // this generates a separate chunk (about.[hash].js) for this route
     // which is lazy-loaded when the route is visited.
     component: () => import( '../views/user/UserDetail.vue')
  },
  {
    path: '/categories/',
    name: 'CategoryList',
    component: () => import( '../views/category/CategoryList.vue')
  },
  {
    path: '/categories/:id',
    name: 'CategoryDetail',
    props: true,
    component: () => import( '../views/category/CategoryDetail.vue')
  },
  {
    path: '/providers/',
    name: 'ProviderList',
    component: () => import( '../views/provider/ProviderList.vue')
  },
  {
    path: '/providers/:id',
    name: 'ProviderDetail',
    props: true,
    component: () => import( '../views/provider/ProviderDetail.vue')
  },
  {
    path: '/products/',
    name: 'ProductList',
    component: () => import( '../views/product/ProductList.vue')
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    props: true,
    component: () => import( '../views/product/ProductDetail.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
