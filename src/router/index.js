import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/Base.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/pages/Home.vue')
      },
      {
        path: '/daftar',
        name: 'Home Daftar',
        component: () => import('@/views/pages/HomeDaftar.vue')
      },
      {
        path: '/dasboard',
        name: 'Dasboard',
        component: () => import('@/views/pages/Dasboard.vue')
      }
    ]
  }
]
// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
