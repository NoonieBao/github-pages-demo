import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


window['_git'] = Object.freeze({
  COMMIT_HASH: process.env.COMMIT_HASH,
  BRANCH: process.env.BRANCH,
  LAST_COMMIT_DATETIME: process.env.LAST_COMMIT_DATETIME
})

