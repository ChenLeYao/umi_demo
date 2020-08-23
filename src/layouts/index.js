import React, { useState } from 'react';
import { Link } from 'umi';
import { Menu, Layout, PageHeader } from 'antd';
import 'antd/dist/antd.css';
const { SubMenu } = Menu;
const { Sider, Header, Content, Footer } = Layout;
const asideData = [
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
        path: '/DailyProduct',
      },
      {
        title: '护肤品',
        childNode: [],
        path: '/CommonProduct',
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

function LayOutNav(props) {
  const [navactive, useNavactive] = useState(0);
  const changeActive = index => {
    useNavactive(index);
  };
  return (
    <Menu mode="inline">
      {props.data.map((data, index) => {
        return (
          <SubMenu title={data.title}>
            {data.childNode.map(_d => {
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

export default props => {
  return (
    <>
      <Layout>
        <Header>后台管理</Header>
        <Layout>
          <Sider style={{ width: 256 }}>
            <LayOutNav data={asideData} />
          </Sider>
          <Layout>
            <PageHeader
              className="site-page-header"
              title="Title"
              subTitle="This is a subtitle"
            />
            <Content style={{ padding: '0 10px' }}>{props.children}</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};
