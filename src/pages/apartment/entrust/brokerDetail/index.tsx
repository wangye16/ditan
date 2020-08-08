import React, { FC, useEffect, useState, ReactNode } from 'react';
import { ConnectProps, connect, history } from 'umi';
import { Dispatch } from 'redux';
import { DetailModelState } from '../models/brokerDetail';
import style from './index.less';
import NoOrders from './components/NoOrders';
import OrdersList from './components/OrdersList';
import HouseInfo from '../../../../components/HouseInfo';

interface PageProps extends ConnectProps {
  dispatch: Dispatch;
  brokerDetail: DetailModelState;
  HouseInfo: ReactNode;
}
const IndexPage: FC<PageProps> = ({ brokerDetail, dispatch }) => {
  const { location } = history;
  const { data } = brokerDetail;
  useEffect(() => {
    const orderId = location.query.orderId;
    dispatch({ type: 'brokerDetail/getDetail', payload: { orderId } });
  }, []);

  const { pushNum, orderApartmentList } = data;
  let childrenOfOrdersList;
  if (!pushNum || (pushNum !== 0 && orderApartmentList?.length === 0)) {
    childrenOfOrdersList = <NoOrders {...data} />;
  } else if (orderApartmentList?.length !== 0) {
    childrenOfOrdersList = <OrdersList {...data} />;
  }

  return (
    <div className={style.container}>
      <HouseInfo {...data} />
      <div className={style.ordersList}>{childrenOfOrdersList}</div>
    </div>
  );
};

export default connect(({ brokerDetail }: { brokerDetail: DetailModelState }) => {
  return {
    brokerDetail,
  };
})(IndexPage);
