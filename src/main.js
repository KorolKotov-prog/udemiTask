import Vue from 'vue'
import App from './App.vue'
import serverStatus from '@/components/serverStatus'
import serverItems from '@/components/serverItems'
import serverUpdate from '@/components/serverUpdate'
import serverManaged from '@/components/serverManaged'

  Vue.config.productionTip = false
  Vue.component('server-status', serverStatus)
  Vue.component('server-items', serverItems)
  Vue.component('server-update', serverUpdate)
  Vue.component('server-managed', serverManaged)

new Vue({
  render: h => h(App),
}).$mount('#app')
