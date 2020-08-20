import React , { useState } from 'react';
import { Link } from 'umi';
import { Menu , SubMenu  } from 'antd';
const asizeData =  [
  {
    title : '订单管理' ,
    childNode : [
      {
        title : '商品订单' ,
        childrenNode : [] ,
        path : '/ProductOrder'
      },
      {
        title : '退款订单' ,
        childrenNode : [] ,
        path : '/RefundOrder'
      },
    ] ,
    path : ''
  },
  {
    title : '用户管理' ,
    childNode : [
      {
        title : 'Vip用户' ,
        childrenNode : [] ,
        path : '/VipUser'
      },
      {
        title : '普通用户' ,
        childrenNode : [] ,
        path : '/User'
      }
    ] ,
    path : ''
  },
  {
    title : '商品管理' ,
    childNode : [
      {
        title : '日用品' ,
        childrenNode : [] ,
        path : ''
      },
      {
        title : '护肤品' ,
        childrenNode : [] ,
        path : ''
      }
    ] ,
    path : ''
  },
];
export default ()=>{
  const [ navactive , useNavactive ] = useState(0);
  const changeActive =( index:number )=>{
     useNavactive( index );
  }
  return (
    <Menu>
      asizeData.map(( data , index:number )=>{
        return (
            <SubMenu title={ data.title }>
            {
              data.childrenNode.map(( _d:any )=>{
                return <Menu.Item>
                         <Link to={_d.path  }>{  _d.title }</Link>
                       </Menu.Item>
              })
            }
            </SubMenu>
         )
       })
    </Menu>
  )
}


