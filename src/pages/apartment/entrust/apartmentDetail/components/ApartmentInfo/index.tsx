import React, { FC } from 'react';
import style from './index.less';

interface MyProps {
  imgUrl?: string;
  title?: string;
  district?: string;
  block?: string;
  area?: string;
  direction?: string;
  decoration?: string;
  createTime?: string;
}
const ApartmentInfo: FC<MyProps> = props => {
  return (
    <div className={style.apartmentInfo}>
      <div style={{ backgroundImage: `url(${props.imgUrl})` }} className={style.leftImg}>
        <div className={style.bottomMsg}>
          <p className={style.text}>委托给公寓</p>
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
export default ApartmentInfo;
