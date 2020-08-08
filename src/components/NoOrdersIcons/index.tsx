import React, { FC } from 'react';
import style from './index.less';

const NoOrdersIcons: FC = () => {
  return (
    <div className={style.icons}>
      <div className={style.red}>
        <div />
      </div>
      <div className={style.blue}>
        <div />
      </div>
      <div className={style.green}>
        <div />
      </div>
      <div className={style.yellow}>
        <div />
      </div>
    </div>
  );
};
export default NoOrdersIcons;
