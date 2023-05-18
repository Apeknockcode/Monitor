import {createRouter, createWebHashHistory} from 'vue-router'
import {defineAsyncComponent} from 'vue'
const router = createRouter({
  history: createWebHashHistory(),  // hash 模式
  // history: createWebHistory(), // history 模式
  routes: [
    {
      path: '/statistics',
      name: 'statistics',
      component: defineAsyncComponent(() => import(`../views/statistics.vue`)),
      meta: {
        title: '数据统计',
      },
    },
    {
      path: '/buryPoint',
      name: 'buryPoint',
      component: defineAsyncComponent(() => import(`../views/buryPoint.vue`)),
      meta: {
        title: '埋点',
      },
    },
    {
      path: '/*',
      redirect: '/statistics',
    },
  ],
})

// 全局路由守卫
router.beforeEach((to,from,next) => {
  console.log(from)
  if (to.meta.title) {
    document.title = `${to.meta.title}`
  }
  next()
})

// router.afterEach((to, from) => {
//   console.info(to, from)
//   console.log('afterEach')
// })

export default router
