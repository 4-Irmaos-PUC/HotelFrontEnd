import Vue from 'vue'
import Router from 'vue-router'

// Traditional loading
import Home from '../components/Home/HotelHome'

// Lazy loading (lazy-loaded when the route is visited)
// const Page404 = () => import(/* webpackChunkName: "Page404" */ '@/components/pages/404)
// const Page503 = () => import(/* webpackChunkName: "Page503" */ '@/components/pages/503)

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  routes: [
    // {
    //   path: '*',
    //   name: 'Page404',
    //   component: Page404
    // },
    // {
    //   path: '*',
    //   name: 'Page503',
    //   component: Page503
    // },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
  ]
})

// Global place, if you need do anything before you enter to a new route.
router.beforeEach(async (to, from, next) => {
  next()
})

export default router