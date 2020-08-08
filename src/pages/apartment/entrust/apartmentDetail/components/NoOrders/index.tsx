import React, { FC } from 'react';
import NoOrdersIcons from '../../../../../../components/NoOrdersIcons';
import style from './index.less';

interface MyProps {
  pushNum?: number;
  orderApartmentList?: any[];
}
const NoOrders: FC<MyProps> = props => {
  const { pushNum, orderApartmentList } = props;
  let statusText: string = '';
  if (pushNum === 0) {
    statusText = '推送中';
  } else if (pushNum !== 0 && orderApartmentList?.length === 0) {
    statusText = `已推送给${pushNum}家公寓`;
  } else if (pushNum === undefined) {
    statusText = '';
  }
  return (
    <div className={style.container}>
      <NoOrdersIcons />

      <div className={style.pushStatus}>{statusText}</div>

      <div className={style.privacyNotice}>
        为保证您的隐私，对方会通过隐私号码与您联系，最多4家公寓接单
      </div>
    </div>
  );
};
export default NoOrders;
