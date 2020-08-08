import React, { useState, useEffect, FC } from 'react';
import style from './index.less';
const EmptyList: FC = () => {
  return (
    <div className={style.wrapper}>
      <img src={require('@/assets/imgs/empty_list.png')} alt="暂无委托" />
      <p>暂无委托</p>
    </div>
  );
};
export default EmptyList;
