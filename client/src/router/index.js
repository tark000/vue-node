import Vue from 'vue'
import Router from 'vue-router'
import Finances from '@/components/Finances'
import LandAssets from '@/components/LandAssets'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Finances',
      component: Finances
    },
    {
      path: '/land-assets',
      name: 'LandAssets',
      component: LandAssets
    }
  ]
})
