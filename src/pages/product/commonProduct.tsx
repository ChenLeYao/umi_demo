import  React  , { Component } from 'react';
import { Table , Column  , Tag , Button   } from 'antd';
// @ts-ignore
import  { product_data } from './product.tsx';

type umiString = string;
const operation:umiString = 'my name';

class TabsControl extends Component {
   constructor( props : object  ) {
     super( props );
   }
   render(){
      return (
        <div>
          <span>{ props.param }</span>
        </div>
      )
   }
}


class CommonProduct extends Component {
   constructor( props:object ) {
     super( props );
   }
   render(){
      return (
        <Table dataSource={ this.props.data }>
           <Column title="商品名称" dataIndex="name" key=""/>
           <Column title="商品数量" dataIndex="count" key=""/>
           <Column title="商品价格" dataIndex="price" key=""/>
           <Column title="品牌" dataIndex="brand" key=""/>
           <Column title="品牌" dataIndex="tags" key="" render={( tags:[] )=>{
             return <>
               {
                 tags.map(( tag:any , index:number )=> {
                   return <Tag color="blue" key={ tag }> { tag }</Tag>
                 })
               }
               </>
            }}/>
        </Table>
      )
   }
}

export default CommonProduct;
