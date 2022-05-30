import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from '../src/config/router'

Vue.config.productionTip = false

const vm = new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

export { vm }