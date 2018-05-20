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
    	path: '/stream',
    	name: 'Stream',
    	component: aStream
    }
  ]
})
