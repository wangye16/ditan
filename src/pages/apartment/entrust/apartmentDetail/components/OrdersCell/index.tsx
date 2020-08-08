import React, { FC } from 'react';
import style from './index.less';

interface MyProps {
  imgUrl?: string;
  name?: string;
  qualityScore?: number;
  receivedPerson?: string;
  contactStatus?: string;
}
const OrdersCell: FC<MyProps> = props => {
  console.log(props);

  return (
    <div className={style.cellContainer}>
      <div className={style.apartmentIcon}>
        <img src={props.imgUrl} alt="" />
      </div>
      <div className={style.apartmentInfo}>
        <div className={style.name}>{props.name}</div>
        <div className={style.info}>
          <span className={style.qualityScore}>{`质量分 · ${props.qualityScore}`}</span>
          <span className={style.receivedPerson}>{`收房人 · ${props.receivedPerson}`}</span>
        </div>
      </div>
      <div className={style.apartmentStatus}>{props.contactStatus}</div>
    </div>
  );
};
export default OrdersCell;
