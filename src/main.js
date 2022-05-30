import Vue from 'vue'
import VueRouter from "vue-router";
import vuetify from './plugins/vuetify'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'

Vue.config.productionTip = false


Vue.use(VueRouter);
const router = new VueRouter({
  router: [
    {
      path: '/',
      redirect: '/LoginHome'
    },
    {
      path: '/hello_world',
      component: HelloWorld
    }
  ]
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')