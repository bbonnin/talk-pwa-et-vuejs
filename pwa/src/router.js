import Vue from 'vue'
import Router from 'vue-router'
import Hello from './views/Hello.vue'
const Stats = () => import(/* webpackChunkName: "stats" */ './views/Stats.vue');

Vue.use(Router)

// La route initial (Hello) est dans le chunk de base (preload)
// Les autres routes sont dans des chunks différents (chargés via prefetch)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/stats',
      name: 'Stats',
      component: Stats
    }
  ]
})
