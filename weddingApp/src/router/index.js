import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import aStream from '@/components/aStream'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/one',
      name: 'Main',
      component: Main
    },
    {
      path: '/two',
      name: 'Main',
      component: Main
    },
    {
      path: '/three',
      name: 'Main',
      component: Main
    },
    {
      path: '/four',
      name: 'Main',
      component: Main
    },
    {
      path: '/five',
      name: 'Main',
      component: Main
    },
    {
    	path: '/stream',
    	name: 'Stream',
    	component: aStream
    }
  ]
})
