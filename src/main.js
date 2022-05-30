import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'

//Routes
import HotelHome from './components/Home/HotelHome'
import CheckIn from './components/CheckIn/CheckIn'
import CheckOut from './components/CheckOut/CheckOut'
import ServicesHome from './components/Services/ServicesHome'
import ProfileHome from './components/Profile/ProfileHome'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: HotelHome
    },
    {
      path: '/check_in',
      component: CheckIn
    },
    {
      path: '/check_out',
      component: CheckOut
    },
    {
      path: '/services',
      component: ServicesHome
    },
    {
      path: '/profile',
      component: ProfileHome
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')