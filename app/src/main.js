import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
console.log(process.env)
Vue.prototype.$git = Object.freeze({
  COMMIT_HASH: process.env.COMMIT_HASH,
  BRANCH: process.env.BRANCH,
  VERSION: process.env.VERSION,
  LASTCOMMITDATETIME: process.env.LASTCOMMITDATETIME,
})

new Vue({
  render: h => h(App),
}).$mount('#app')



