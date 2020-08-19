import React from 'react';
import styles from './index.less';
console.log('index');
export default ( props:any ) => {
  console.log(props);
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <p>
        { props.children }
      </p>
    </div>
  );
}
