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
  Message,
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
  }

  state = {
    checkList: [],
    checkAll: false,
    hasSelected: true,
    indeterminate: true,
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
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
    // console.log(selectedAll);
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
    const layout = {
      labelCol: { span: 5 },
    };
    const brandClass = ['HUAWEI', 'IPHONE'];
    return (
      <div>
        <ButtonControl onshowAddVisible={this.showAddVisible.bind(this)} />
        <Table
          rowSelection={rowSelection}
          dataSource={product_data}
          columns={product_column}
        />
        <Modal
          title="添加商品0"
          visible={this.state.addVisible}
          onOk={this.hideAddVisible.bind(this)}
          onCancel={this.hideAddVisible.bind(this)}
        >
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
        </Modal>
      </div>
    );
  }
}

function ButtonControl(props) {
  const style = { marginRight: 8 };
  return (
    <div style={{ padding: '10px 0' }}>
      <Button type="primary" style={style}>
        刷新
      </Button>
      <Button type="primary" style={style}>
        筛选
      </Button>
      <Button type="primary" style={style} onClick={props.onshowAddVisible}>
        添加商品
      </Button>
      <Button type="primary" style={style}>
        编辑
      </Button>
      <Button type="primary" style={style}>
        删除
      </Button>
    </div>
  );
}
export default CommonProduct;
