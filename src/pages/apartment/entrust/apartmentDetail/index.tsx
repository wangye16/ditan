import React, { FC, useEffect, useState, ReactNode } from 'react';
import { ConnectProps, connect, history } from 'umi';
import { Dispatch } from 'redux';
import { DetailModelState } from '../models/apartmentDetail';
import style from './index.less';
import NoOrders from './components/NoOrders';
import OrdersList from './components/OrdersList';
import HouseInfo from '../../../../components/HouseInfo';

interface PageProps extends ConnectProps {
  dispatch: Dispatch;
  apartmentDetail: DetailModelState;
  HouseInfo: ReactNode;
}
const IndexPage: FC<PageProps> = ({ apartmentDetail, dispatch }) => {
  const { location } = history;
  const { data } = apartmentDetail;
  useEffect(() => {
    const orderId = location.query.orderId;
    dispatch({ type: 'apartmentDetail/getDetail', payload: { orderId } });
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

export default connect(({ apartmentDetail }: { apartmentDetail: DetailModelState }) => {
  return {
    apartmentDetail,
  };
})(IndexPage);
