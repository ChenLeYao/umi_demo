import { defineConfig } from 'umi';

export default {
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/Index', component: '@/pages/index/index' },
    { path: '/login', component: '@/pages/index/Login' },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/CommonProduct',
          component: '@/pages/product/CommonProduct.js',
        },
        { path: '/DailyProduct', component: '@/pages/product/DailyProduct' },
        { path: '/ProductOrder', component: '@/pages/order/ProductOrder' },
        { path: '/RefundOrder', component: '@/pages/order/RefundOrder' },
        { path: '/User', component: '@/pages/user/User' },
        { path: '/VipUser', component: '@/pages/user/VipUser' },
      ],
    },
  ],
};
