import React, { FC, ReactNode } from 'react';
import NoOrdersIcons from '../../../../../../components/NoOrdersIcons';
import style from './index.less';

interface MyProps {
  pushNum?: number;
  pushTime?: number;
  orderApartmentList?: any[];
}
const NoOrders: FC<MyProps> = props => {
  const { pushNum, pushTime, orderApartmentList } = props;
  let statusText: string = '';
  let alertInfo: string = '';
  let ChildNode: ReactNode;

  if (pushTime === undefined) {
    statusText = '';
    alertInfo = '';
  }
  // 推送时长小宇48h
  else if (pushTime <= 48) {
    if (pushNum === 0) {
      statusText = '推送中';
      alertInfo = '保持电话畅通，最多有4位经纪人与您联系';
    } else if (pushNum !== 0 && orderApartmentList?.length === 0) {
      statusText = `已推送给${pushNum}位经纪人，0人接单`;
      alertInfo = '保持电话畅通，最多有4位经纪人与您联系';
    } else if (pushNum === undefined) {
      statusText = '';
      alertInfo = '';
    }
    ChildNode = (
      <>
        <NoOrdersIcons />
        <div className={style.pushStatus}>{statusText}</div>
        <div className={style.privacyNotice}>{alertInfo}</div>
      </>
    );
  } else if (pushTime > 48) {
    if (orderApartmentList?.length === 0) {
      statusText = '暂无经纪人接单';
      alertInfo = `委托订单已为您推送${pushNum}位经纪人`;
    } else if (pushNum === undefined) {
      statusText = '';
      alertInfo = '';
    }
    ChildNode = (
      <>
        <div className={style.pushStatus}>{statusText}</div>
        <div className={style.privacyNotice}>{alertInfo}</div>
        <button className={style.releaseBtn}>
          <p>试试发布房源</p>
        </button>
      </>
    );
  }

  return <div className={style.container}>{ChildNode}</div>;
};
export default NoOrders;
