import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Project from '../views/projectsView.vue'
import resume from '../views/resumeView.vue'
import testmonials from '../views/testmonialsView.vue'
import contact from '../views/contactView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
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
    path:'/project',
    name:'project',
    component: Project
  }, 
  {
    path:'/resume',
    name:'resume',
    component: resume
  },
  {
    path:'/testmonials',
    name:'testmonials',	
    component: testmonials
  },
  {
    path:'/contact',
    name:'contact',
    component: contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
