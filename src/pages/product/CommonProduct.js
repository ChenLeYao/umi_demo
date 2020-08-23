import React, { Component } from 'react';
import {
  Table,
  Tag,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  Select,
  message,
} from 'antd';

import { product_data } from './product.js';

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
    render: tags => {
      return (
        <>
          {tags.map((tag, index) => {
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
  constructor(props) {
    super(props);
    this.showAddVisible = this.showAddVisible.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.hideAddVisible = this.hideAddVisible.bind(this);
    this.showConfirmPanel = this.showConfirmPanel.bind(this);
    this.hideConfirmPanel = this.hideConfirmPanel.bind(this);
  }

  state = {
    productColumn: product_column,
    productData: product_data,
    checkList: [],
    checkAll: false,
    hasSelected: true,
    indeterminate: true,
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    confirmPanel: false,
  };

  onChange = (selectedRowKeys, selectRows) => {
    this.setState({ selectedRowKeys });
  };

  onSelect = (record, selected, selectedRows, nativeEvent) => {
    //选中某组的回调
    console.log(record, selected, selectedRows, nativeEvent);
  };

  onSelectAll = selectedAll => {
    //选中或取消所有的回调
    //console.log(selectedAll);
  };

  showAddVisible() {
    this.setState({
      addVisible: true,
    });
  }

  hideAddVisible() {
    this.setState({
      addVisible: false,
    });
  }

  deleteProduct() {
    if (this.state.selectedRowKeys.length > 0) {
      this.showConfirmPanel();
    } else {
      message.info('请选中至少一项');
    }
  }

  showConfirmPanel(fn) {
    this.setState({
      confirmPanel: true,
    });
  }

  hideConfirmPanel(judge) {
    this.setState({
      confirmPanel: false,
    });
    if (judge) {
      let productData = this.state.productData;
      let selectedRowKeys = this.state.selectedRowKeys;
      let selectedRowKeysLength = selectedRowKeys.length;
      //console.log(selectedRowKeys);
      for (let i = 0; i < selectedRowKeysLength; i++) {
        let num = selectedRowKeys[i] - 1;
        productData.splice(num, 1);
        console.log(num);
        console.log(productData);
      }

      // selectedRowKeys.forEach(( num )=>{
      //   num = parseInt(num) -1;
      //   productData.splice(num  , 1);
      //   console.log('____', num , productData.length);
      // });
      // console.log( productData);
      this.setState({
        productData: productData,
        selectedRowKeys: [],
      });
    }
  }

  render() {
    const rowSelection = {
      selectedRowKeys: this.state.selectedRowKeys,
      onChange: this.onChange.bind(this),
      onSelectAll: this.onSelectAll.bind(this),
      onSelect: this.onSelect.bind(this),
      getCheckboxProps: false,
      hideSelectAll: false,
      type: 'checkbox',
      checkStrictly: true,
    };

    return (
      <div>
        <EditMenu
          onShowAddVisible={this.showAddVisible}
          onDeleteProduct={this.deleteProduct}
        />
        <Table
          rowSelection={rowSelection}
          dataSource={this.state.productData}
          columns={this.state.productColumn}
        />
        <Modal
          title="添加商品0"
          visible={this.state.addVisible}
          onOk={this.hideAddVisible}
          onCancel={this.hideAddVisible}
        >
          <ProductForm />
        </Modal>
        <Modal
          title="确认删除商品?"
          visible={this.state.confirmPanel}
          onOk={() => {
            this.hideConfirmPanel(true);
          }}
          onCancel={this.hideConfirmPanel}
        >
          <p>此操作不能取消</p>
        </Modal>
      </div>
    );
  }
}

const ProductForm = React.memo(props => {
  console.log(123);
  const layout = {
    labelCol: { span: 5 },
  };
  const brandClass = ['HUAWEI', 'IPHONE'];
  return (
    <Form {...layout}>
      <Form.Item
        label="名称"
        name="product_name"
        rules={[{ required: true, message: '请填写商品名称' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="品牌"
        name="brand"
        rules={[
          {
            required: true,
            message: '请填写品牌',
          },
        ]}
      >
        <Select>
          {brandClass.map((item, index) => (
            <Select.Option value={item}></Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="ID"
        name="username"
        rules={[
          {
            required: true,
            message: '请填写商品ID(数字)',
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="单价($)"
        name="price"
        rules={[
          {
            required: true,
            message: '请填写商品价格(数字)',
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
    </Form>
  );
});

const EditMenu = React.memo(props => {
  console.log(props);
  const style = { marginRight: 8 };
  return (
    <div style={{ padding: '10px 0' }}>
      <Button type="primary" style={style}>
        刷新
      </Button>
      <Button type="primary" style={style}>
        筛选
      </Button>
      <Button type="primary" style={style} onClick={props.onShowAddVisible}>
        添加商品
      </Button>
      <Button type="primary" style={style}>
        编辑
      </Button>
      <Button type="primary" style={style} onClick={props.onDeleteProduct}>
        删除
      </Button>
    </div>
  );
});

export default CommonProduct;
