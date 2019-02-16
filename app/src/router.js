import Vue from 'vue'
import Router from 'vue-router'
import Education from './views/Education.vue'
import Simulation from './views/Simulation.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/education',
      name: 'Education',
      component: Education
    },
    {
      path: '/simulation',
      name: 'Simulation',
      component: Simulation
    }
  ]
})
