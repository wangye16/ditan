export interface BrokerInfo {
  brokerImage: string;
  broekrName: string;
  brokerCompany: string;
  progressText: string;
  btnInfo: {
    progressKey: string;
    btnText: string;
  };
}

export interface CardInfoProps {
  cardInfo: {
    status: number;
    statusText: string;
    orderType: string;
    expireText: string;
    houseImage: string;
    title: string;
    location: string;
    area: string;
    towards: string;
    price: string;
    postDate: string;
    pushInfo: {
      pushText: string;
      btnInfo: {
        progressKey: string;
        btnText: string;
      };
    };
    receiveInfo: BrokerInfo[];
  };
}

/* 
      {
        status: 2,
        statusText: '委托中',
        orderType: '1(公寓)，2(租房)',
        expireText: '订单4天后失效',
        houseImage: 'https://pic1.58cdn.com.cn/mobile/big/fafsafiwoenqfo.png',
        title: '整租 荷塘月色 1室1厅1卫',
        location: '朝阳区·酒仙桥',
        area: '44.7㎡',
        towards: '朝南',
        price: '5000元/月',
        postDate: '2020-02-02',
        pushInfo: {
          pushText: '已推送给20位经纪人，0人接单',
          btnInfo: {
            progressKey: 'continuePush',
            btnText: '继续推送',
          },
        },
        receiveInfo: [
          {
            brokerImage: 'https://pic1...',
            broekrName: '网',
            brokerCompany: '我爱我家',
            progressText: '房屋信息已上传，请您确认',
            btnInfo: {
              progressKey: 'toConfirm',
              btnText: '去确认',
            },
          },
        ],
      },




*/
