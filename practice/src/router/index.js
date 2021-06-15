import { createRouter, createWebHistory } from 'vue-router'
import Frontend from '../layouts/Frontend'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Frontend,
    redirect : {name: 'home'},
    children : [
      {
            path: '/home',
            name: 'home',
            component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
          },
        {
            path: 'slider',
            name: 'slider',
            component: () => import(/* webpackChunkName: "about" */ '../views/Slider.vue')
          },
           {
          path: '/star',
          name: 'star',
          component: () => import(/* webpackChunkName: "about" */ '../views/Star.vue')
        },
         {
          path: '/chart',
          name: 'chart',
          component: () => import(/* webpackChunkName: "about" */ '../views/Chart.vue')
        }
    ]
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
