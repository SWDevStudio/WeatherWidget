import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/widgets.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'widgets',
    component: Home
  },
  {
    path: '/options',
    name: 'options',
    component: () => import( '../pages/options.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
