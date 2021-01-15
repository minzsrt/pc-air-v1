import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Overview from '@/components/Overview'
import Customers from '@/components/Customers'
import Orders from '@/components/Orders'
import CreateInvoice from '@/components/CreateInvoice'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Overview',
      component: Overview
    },
    {
      path: '/customers',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    },
    {
      path: '/orders/create/invoice',
      name: 'CreateInvoice',
      component: CreateInvoice
    }
  ]
})
