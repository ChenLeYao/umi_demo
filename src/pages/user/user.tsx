import React from 'react';
console.log('user');
export default ( props:any )=>{
  const children = props.children.props.children;
  return (
    <div>
       <i>User Manager</i>
    </div>
  )
}
