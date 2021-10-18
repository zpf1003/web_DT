import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  mode: 'history',  //去掉url中的#
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/components/home')
    },
    // 多表头
    {
      path: '/mulheader',
      name: 'mulheader',
      component: () => import('@/components/mulheader')
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
      // redirect: {name: 'mulheader'}  // 路由重定向
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
