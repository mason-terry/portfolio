import Vue from 'vue'
import Router from 'vue-router'
const Main = () => import('@/components/Main')
const Blog = () => import('@/components/Blog')
const Admin = () => import('@/components/Admin')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Main', component: Main },
    { path: '/blog', name: 'Blog', component: Blog },
    { path: '/admin', name: 'Admin', component: Admin }
  ]
})
