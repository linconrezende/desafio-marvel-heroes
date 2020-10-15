import Vue from 'vue'
import VueRouter from 'vue-router'
import appBar from './../components/app-bar/default-app-bar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: () => import('../views/Home.vue'),
      appBar: appBar
    },
    meta: {
      customName: 'Início',
      ShowMenu: true
    }
  }
]
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log('[ROUTER]: triggered beforeEach')
  console.debug('from', from)
  console.debug('to', to)
  next()
  return
})

export default router
