import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Clapans from './components/Clapans.vue' 
import Masters from './components/Masters.vue' 
import MasterHub from './components/MasterHub.vue' 
import Settings from './components/Settings.vue'

const routes = [{
    path: '/',
    component: Clapans
  },
  {
    path: '/masters',
    component: Masters
  },
  {
    path: '/masterhub',
    component: MasterHub
  },
  {
    path: '/settings',
    component: Settings
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
