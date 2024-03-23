import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/goods',
    name: 'goods',
    component: () => import('../views/GoodsView.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/UserView.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/OrderView.vue')
  },
  {
    path: '/free',
    name: 'free',
    component: () => import('../views/FreeView.vue')
  },
  {
    path: '/detelis',
    name: 'detelis',
    component: () => import('../views/DetelisView.vue')
  },
  {
    path: '/torlley',
    name: 'torlley',
    component: () => import('../views/TorlleyView.vue')
  }

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
