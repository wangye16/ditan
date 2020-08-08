import React, { useState, useEffect, FC } from 'react';
import style from './index.less';
import { CardInfoProps, BrokerInfo } from '../../interface/index';
console.log('style', style);
import { Carousel, WingBlank } from 'antd-mobile';

const AgentCard: FC<CardInfoProps> = ({ cardInfo }) => {
  const {
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
    receiveInfo,
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
            <p>委托给中介</p>
          </div>
          <div className={style.houseInfo}>
            <p className={style.title}>{title}</p>
            <p className={style.detail} style={{ marginBottom: '4px' }}>
              {location}·{area}·{towards}·{price}
            </p>
            <p className={style.detail}>{postDate}</p>
          </div>
        </div>
        <div>
          {receiveInfo && receiveInfo.length > 0 ? (
            <div className={style.brokerInfo}>
              <WingBlank>
                <Carousel
                  className="my-carousel"
                  vertical
                  dots={false}
                  // @ts-ignore
                  dragger={false}
                  swiping={false}
                  autoplay
                  infinite
                >
                  {receiveInfo.map((broker: BrokerInfo, index) => {
                    const {
                      brokerImage,
                      broekrName,
                      brokerCompany,
                      progressText,
                      btnInfo,
                    } = broker;
                    return (
                      <div className={style.brokerInfoItem} key={index}>
                        <div className={style.brokerImage}>
                          <img src={brokerImage} alt="经纪人图片" />
                        </div>

                        <div className={style.brokerDetail}>
                          <p className={style.brokerName}>
                            {broekrName}·{brokerCompany}
                          </p>
                          <p className={style.progressText}>{progressText}</p>
                        </div>
                        <div
                          className={`${style.btn} ${
                            btnInfo.progressKey === 'toConfirm'
                              ? style.highLightBtn
                              : style.normalBtn
                          }`}
                        >
                          {btnInfo.btnText}
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              </WingBlank>
            </div>
          ) : (
            <div className={style.pushInfo}>
              {pushInfo.pushText && <p className={style.text}>{pushInfo.pushText}</p>}
              {pushInfo.btnInfo.btnText && (
                <div className={style.btn}>{pushInfo.btnInfo.btnText}</div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default AgentCard;
