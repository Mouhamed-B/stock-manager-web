import { createRouter, createWebHashHistory } from 'vue-router'
import UserList from '../views/UserList.vue'

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
     component: () => import( '../views/UserDetail.vue')
  },
  {
    path: '/categories/',
    name: 'CategoryList',
    component: () => import( '../views/CategoryList.vue')
  },
  {
    path: '/categories/:id',
    name: 'CategoryDetail',
    props: true,
    component: () => import( '../views/CategoryDetail.vue')
  },
  {
    path: '/providers/',
    name: 'ProviderList',
    component: () => import( '../views/ProviderList.vue')
  },
  {
    path: '/providers/:id',
    name: 'ProviderDetail',
    props: true,
    component: () => import( '../views/ProviderDetail.vue')
  },
  {
    path: '/products/',
    name: 'ProductList',
    component: () => import( '../views/ProductList.vue')
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    props: true,
    component: () => import( '../views/ProductDetail.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
