import { createRouter, createWebHashHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import Layout from "../layouts/index.vue"
const router = createRouter({
  history: createWebHashHistory(),  // hash 模式
  // history: createWebHistory(), // history 模式
  routes: [
    {
      path: '/login',
      name: 'login',
      component: defineAsyncComponent(() => import(`../views/Sign.vue`)),
      meta: {
        title: '登录',
      },
    },
    {
      path: '/statistics',
      component: Layout,//指定使用Layout组件布局
      redirect: '/statistics',//重定向至/home页面
      children: [
        {//子菜单信息
          path: '/statistics',//路径
          name: 'statistics',
          component: defineAsyncComponent(() => import(`../views/statistics.vue`)),//指定组件
          meta: { title: '数据统计', access: 0, affix: true }
        },
        {//子菜单信息
          path: '/buryPoint',//路径
          name: 'buryPoint',
          component: defineAsyncComponent(() => import(`../views/buryPoint/buryPoint.vue`)),//指定组件
          meta: { title: '埋点', access: 0, affix: true },
        },
        {
          path: '/buryPoint/Task',//路径
          name: 'Task',
          component: defineAsyncComponent(() => import(`../views/buryPoint/Task.vue`)),//指定组件
          meta: { title: '任务', access: 0, affix: true },
        }
      ]

    },
    {
      path: '/*',
      redirect: '/login',
    },
  ],
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
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
