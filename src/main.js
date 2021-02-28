import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import router from './router'

import './assets/sf.css'
import './assets/main.css'

Vue.config.productionTip = true

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
