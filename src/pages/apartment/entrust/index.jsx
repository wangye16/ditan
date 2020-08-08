import React, { memo } from 'react';
import { Link } from 'umi';
import styles from './index.less';

const Entrust = () => {
  return (
    <div className={styles.Entrust}>
        <p>公寓的委托页</p>
    </div>
  );
};

export default memo(Entrust);
