import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout:{},
  routes : [
    { path : '/' , component : '@/pages/index/index' , exact : true ,
      routes: [
        { path: '/main', component: '@/pages/index/main' , exact : true }
      ]
    },
    { path : '/user' ,
      component : '@/pages/user/user' ,
      exact : true
    }
  ]
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
