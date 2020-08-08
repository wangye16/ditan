import React, { FC } from 'react';
import style from './index.less';

interface MyProps {
  orderType?: string;
  imgUrl?: string;
  title?: string;
  district?: string;
  block?: string;
  area?: string;
  direction?: string;
  decoration?: string;
  createTime?: string;
}
const houseInfo: FC<MyProps> = props => {
  return (
    <div className={style.houseInfo}>
      <div style={{ backgroundImage: `url(${props.imgUrl})` }} className={style.leftImg}>
        <div className={style.bottomMsg}>
          <p className={style.text}>委托给{props.orderType === '1' ? '公寓' : '经纪人'}</p>
        </div>
      </div>
      <div className={style.rightDetails}>
        <div className={style.topDetail}>{props.title || '标题'}</div>
        <div className={style.middleDetail}>
          {`${props.district || '区域'}·${props.block || '商圈'}·${props.area ||
            '面积'}㎡·${props.direction || '朝向'}·${props.decoration || '装修'}`}
        </div>
        <div className={style.bottomDetail}>{props.createTime || '时间'}</div>
      </div>
    </div>
  );
};
export default houseInfo;
