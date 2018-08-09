import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    }
  ]
})
