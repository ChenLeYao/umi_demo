import React, { Component } from 'react';
// @ts-ignore
import { Table, Tag, Button, Input, Checkbox, Divider } from 'antd';
// @ts-ignore
import { product_data } from './product.tsx';
const { Column } = Table;

let product_column = [
  {
    title: '商品名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '商品数量',
    dataIndex: 'count',
    key: 'count',
  },
  {
    title: '商品价格',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '品牌',
    dataIndex: 'brand',
    key: 'brand',
  },
  {
    title: '标签',
    dataIndex: 'tags',
    key: 'tags',
    render: (tags: []) => {
      return (
        <>
          {tags.map((tag: any, index: number) => {
            return (
              <Tag color="blue" key={index}>
                {' '}
                {tag}
              </Tag>
            );
          })}
        </>
      );
    },
  },
];

class CommonProduct extends Component {
  constructor(props: object) {
    super(props);
    this.state = {
      checkList: [],
      checkAll: false,
      indeterminate: true,
    };
    this.onCheckChange = this.onCheckChange.bind(this);
  }
  onCheckChange = (e: object) => {
    console.log(e);
  };

  onCheckallChange = (e: object) => {
    console.log(e);
  };

  render() {
    return (
      <div>
        <Divider />
        <Table dataSource={product_data} columns={product_column}></Table>
      </div>
    );
  }
}

export default CommonProduct;
