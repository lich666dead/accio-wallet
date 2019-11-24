import Vue from 'vue'
import VueRouter from 'vue-router'

import guard from '@/router/guard'

import Home from '@/pages/Home'
import Create from '@/pages/Create'
import First from '@/pages/First'

Vue.use(VueRouter)

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
// @example component: () => import('Page/Home')

const routes = [
  /**
   * No guards routers.
  */
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/first',
    name: 'First',
    component: First
  },
  /**
   * Guard enable routers.
   */
  {
    path: '/home',
    name: 'Home',
    beforeEnter: guard,
    component: Home
  },
  {
    path: '*',
    redirect: '/first'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
