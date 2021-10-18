import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',  //去掉url中的#
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 多表头
    {
      path: '/home',
      name: 'home',
      component: () => import('@/components/home')
    },
    // 合并单元表格
    {
      path:'/serve',
      name:'serve',
      component:()=>import('@/components/serve')
    },
    // 表格套表单
    {
      path:'/formTable',
      name:'formTable',
      component:()=>import('@/components/formTable'),
      // redirect: {name: 'home'}  // 路由重定向
    },
    // 拆分单元格
    {
      path:'/text',
      name:'text',
      component:()=>import('@/components/text')
    },
    // itp
    {
      path:'/itp',
      name:'itp',
      component:()=>import('@/components/itp')
    }
  ]
})
