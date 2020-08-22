import React, { Component } from 'react';
import { Table, Tag, Button, Modal } from 'antd';
import order_data from './order.js';

let order_column = [
  {
    title: '订单号',
    dataIndex: 'orderId',
    key: 'orderId',
  },
  {
    title: '订单名称',
    dataIndex: 'title',
    key: 'title',
  },

  {
    title: '用户ID',
    dataIndex: 'customId',
    key: 'customId',
  },
  {
    title: '数量',
    dataIndex: 'count',
    key: 'count',
  },
  {
    title: '订单状态',
    dataIndex: 'statement',
    key: 'statement',
  },
];

class CommonOrder extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    checkList: [],
    checkAll: false,
    hasSelected: true,
    indeterminate: true,
    selectedRowKeys: [],
    loading: false,
    addVisible: false,
  };

  onChange = (selectedRowKeys, selectRows) => {
    console.log(selectedRowKeys);
    console.log(selectRows);
    this.setState({ selectedRowKeys });
  };

  toggleAddVisible(bool) {
    this.setState({
      addVisible: bool,
    });
  }

  onSelect = (record, selected, selectedRows, nativeEvent) => {
    //选中某组的回调
    // console.log(record, selected, selectedRows, nativeEvent);
  };

  onSelectAll = selectedAll => {
    //选中或取消所有的回调
    // console.log(selectedAll);
  };

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
        <ButtonControl ontoggleAddVisible={this.toggleAddVisible.bind(this)} />
        <Table
          rowSelection={rowSelection}
          dataSource={order_data}
          columns={order_column}
        />
        <Modal
          title="Basic Modal"
          visible={this.state.addVisible}
          onOk={() => {
            this.toggleAddVisible.bind(this, true);
          }}
          onCancel={() => {
            this.toggleAddVisible.bind(this, false);
          }}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

function ButtonControl() {
  const style = { marginRight: 8 };
  return (
    <div style={{ padding: '10px 0' }}>
      <Button type="primary" style={style}>
        刷新
      </Button>
      <Button type="primary" style={style}>
        筛选
      </Button>
      <Button type="primary" style={style}>
        查找
      </Button>
      <Button type="primary" style={style}>
        删除商品
      </Button>
    </div>
  );
}
export default CommonOrder;
