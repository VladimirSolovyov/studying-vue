import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from '@/App.vue'
import router from '@/router.js'
import store from '@/store.js'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

Vue.use(VeeValidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
