import Vue from 'vue'
import Router from 'vue-router'
import Education from './views/Education.vue'
import Simulation from './views/Simulation.vue'
import EducationIntroduction from './views/EducationIntroduction.vue'
import EducationFinance from './views/EducationFinance.vue'
import EducationLoans from './views/EducationLoans.vue'
import virtual from './views/SimulationVirtual.vue'
import real from './views/SimulationReal.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/education',
      redirect: '/education/introduction',
      name: 'Education',
      component: Education,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'introduction',
          component: EducationIntroduction
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'finance',
          component: EducationFinance
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'loans',
          component: EducationLoans
        }
      ]
    },
    {
      path: '/calculator',
      name: 'Simulation',
      component: Simulation,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'simulation',
          component: virtual
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'real',
          component: real
        },
      ]
    }
  ]
})
