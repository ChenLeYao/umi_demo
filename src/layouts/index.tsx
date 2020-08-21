import React, { useState } from 'react';
import { Link } from 'umi';
import { Menu, Layout } from 'antd';
const { SubMenu } = Menu;
const { Sider, Header, Content, Footer } = Layout;
import { PageHeader } from 'antd';
import 'antd/dist/antd.css';
console.log('enter');
const asizeData = [
  {
    title: '订单管理',
    childNode: [
      {
        title: '商品订单',
        childNode: [],
        path: '/ProductOrder',
      },
      {
        title: '退款订单',
        childNode: [],
        path: '/RefundOrder',
      },
    ],
    path: '',
  },
  {
    title: '用户管理',
    childNode: [
      {
        title: 'Vip用户',
        childNode: [],
        path: '/VipUser',
      },
      {
        title: '普通用户',
        childNode: [],
        path: '/User',
      },
    ],
    path: '',
  },
  {
    title: '商品管理',
    childNode: [
      {
        title: '日用品',
        childNode: [],
        path: '/commonProduct',
      },
      {
        title: '护肤品',
        childNode: [],
        path: '/commonProduct',
      },
    ],
    path: '',
  },
  {
    title: '设置',
    childNode: [
      {
        title: '系统设置',
        childNode: [],
        path: '',
      },
      {
        title: '管理员设置',
        childNode: [],
        path: '',
      },
    ],
    path: '',
  },
];

function LayOutNav(props: any) {
  const [navactive, useNavactive] = useState(0);
  const changeActive = (index: number) => {
    useNavactive(index);
  };
  return (
    <Menu mode="inline">
      {props.data.map((data: any, index: number) => {
        return (
          <SubMenu title={data.title}>
            {data.childNode.map((_d: any) => {
              return (
                <Menu.Item>
                  <Link to={_d.path}>{_d.title}</Link>
                </Menu.Item>
              );
            })}
          </SubMenu>
        );
      })}
    </Menu>
  );
}

// export const layout = {
//   logout: () => {}, // do something
//   leftRender:()=> { console.log(123); return 23; },// return string || ReactNode;
// };

export default (props: any) => {
  return (
    <>
      <Layout>
        <Header>后台管理</Header>
        <Layout>
          <Sider style={{ width: 256 }}>
            <LayOutNav data={asizeData} />
          </Sider>
          <Layout>
            <PageHeader
              className="site-page-header"
              title="Title"
              subTitle="This is a subtitle"
            />
            <Content>{props.children}</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};
