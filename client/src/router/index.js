import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Profile from '../views/Profile.vue'
import Layout from '../views/Layout.vue'
import Count from '../views/Count.vue'
import Home from '../views/Home.vue'
import Transaction from '../views/Transaction.vue'
import Notification from '../views/Notification'
import Retrait from '../views/Retrait'
import Historique from '../views/Historique'
import Statistique from '../views/Statistique'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login-register',
    name: 'login',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/notification',
    name: 'notification',
    component: Notification
  },
  {
    path: '/layout',
    name: 'layout',
    component: Layout
  },
  {
    path: '/count',
    name: 'count',
    component: Count
  },
  {
    path: '/transaction',
    name: 'transaction',
    component: Transaction
  },
  {
    path: '/retrait',
    name: 'retrait',
    component: Retrait
  },
  {
    path: '/historique',
    name: 'historique',
    component: Historique
  },
  {
    path: '/statistique',
    name: 'statistique',
    component: Statistique
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.fullPath === '/profile'){
    if(!localStorage.getItem('user')){
      next('/')
    }
  }
  if(to.fullPath === '/login-register'){
    if(localStorage.getItem('user')){
      next('/profile')
    }
  }
  if(to.fullPath === '/transaction'){
    if(!localStorage.getItem('user')){
      next('/')
    }
  }
  if(to.fullPath === '/statitique'){
    if(!localStorage.getItem('user')){
      next('/')
    }
  }
  if(to.fullPath === '/retrait'){
    if(!localStorage.getItem('user')){
      next('/')
    }
  }
  if(to.fullPath === '/notification'){
    if(!localStorage.getItem('user')){
      next('/')
    }
  }
  if(to.fullPath === '/historique'){
    if(!localStorage.getItem('user')){
      next('/')
    }
  }
  if(to.fullPath === '*'){
    if(!localStorage.getItem('user')){
      next('/')
    }
  }


  next()
})

export default router
