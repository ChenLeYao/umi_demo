import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },

  routes: [
    { path: '/index', component: '@/pages/index/index' },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/commonProduct', component: '@/pages/product/commonProduct' },
      ],
    },
  ],
});
// export default {
//     base : '/build/' ,
//     publicPath : '/de/',
//     hash:true ,
//     history : {
//       type : 'hash'
//     },
//     layout : {}
// }
