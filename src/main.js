import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'

//Routes
import CheckIn from './components/CheckIn/CheckIn'
import CheckOut from './components/CheckOut/CheckOut'
import HotelHome from './components/Home/HotelHome'
import LoginHome from './components/Login/LoginHome'
import ProfileHome from './components/Profile/ProfileHome'
import ServicesHome from './components/Services/ServicesHome'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: LoginHome
    },
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
  ],
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')