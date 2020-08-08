import React, { FC } from 'react';
import style from './index.less';
import OrdersCell from '../OrdersCell';

interface DataSource {
  orderId?: string;
  title?: string;
  district?: string;
  block?: string;
  area?: string;
  direction?: string;
  decoration?: string;
  createTime?: string;
  imgUrl?: string;
  pushNum?: number;
  orderApartmentList?: any[];
}
interface MyProps {
  orderApartmentList?: DataSource[];
}
const OrdersList: FC<MyProps> = props => {
  const { orderApartmentList } = props;
  return (
    <div className={style.listContainer}>
      <h1>{`${props.orderApartmentList?.length}家公寓已接单`}</h1>
      {orderApartmentList?.map((item, index) => {
        return <OrdersCell {...item} key={index} />;
      })}
    </div>
  );
};
export default OrdersList;
