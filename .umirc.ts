import { defineConfig } from 'umi';

export default {
  nodeModulesTransform: {
    type: 'none',
  },

  routes: [
    { path: '/index', component: '@/pages/index/index' },
    { path: '/login', component: '@/pages/index/login' },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/commonProduct', component: '@/pages/product/commonProduct' },
        { path: '/ProductOrder', component: '@/pages/order/productOrder' },
      ],
    },
  ],
};
// export default {
//     base : '/build/' ,
//     publicPath : '/de/',
//     hash:true ,
//     history : {
//       type : 'hash'
//     },
//     layout : {}
// }
