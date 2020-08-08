import React, { useState, useEffect, FC } from 'react';
import style from './index.less';
import { CardInfoProps, BrokerInfo } from '../../interface/index';
console.log('style', style);
const ApartmentCard: FC<CardInfoProps> = ({ cardInfo }) => {
  const {
    orderType,
    statusText,
    expireText,
    houseImage,
    title,
    location,
    area,
    towards,
    price,
    postDate,
    pushInfo,
  } = cardInfo;
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.status}>
          <span>{statusText}</span>
          <img src={require('@/assets/imgs/right_arrow.png')} alt="返回" />
        </div>
        <div className={style.houseInfoWrapper}>
          <div className={style.houseImgWrapper}>
            <div className={style.houseImg} style={{ backgroundImage: `url(${houseImage})` }}></div>
            <p>委托给公寓</p>
          </div>
          <div className={style.houseInfo}>
            <p className={style.title}>{title}</p>
            <p className={style.detail} style={{ marginBottom: '4px' }}>
              {location}·{area}·{towards}·{price}
            </p>
            <p className={style.detail}>{postDate}</p>
          </div>
        </div>
        {/* 推送结果展示 委托失败展示重新委托，其他情况只有文字展示*/}
        <div className={style.pushInfo}>
          {pushInfo.pushText && <p className={style.text}>{pushInfo.pushText}</p>}
          {pushInfo.btnInfo.btnText && <div className={style.btn}>{pushInfo.btnInfo.btnText}</div>}
        </div>
      </div>
    </>
  );
};
export default ApartmentCard;
