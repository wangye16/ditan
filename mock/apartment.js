export default {
  // 支持值为 Object 和 Array
  /* 
  status:0  委托中
  status:1  委托失败
  status:2  委托完成

  // 经纪人
  status:3  待接单
  status:4  已接单
  status:0  委托中
  status:5  委托结束
  status:6  已失效




  */
  'GET /apartment/list': {
    code: 0,
    message: '成功',
    data: [
      {
        status: 2,
        statusText: '委托中',
        orderType: '1(公寓)，2(租房)',
        expireText: '订单4天后失效',
        houseImage:
          'https://pic7.58cdn.com.cn/nowater/fangfe/n_v2ff76212bc7b24828aded32e20eb12bcf.png',
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
            brokerImage:
              'https://pic2.58cdn.com.cn/nowater/fangfe/n_v23110609050e94f8991dbfa39b51f22dc.jpg',
            broekrName: '张晓明',
            brokerCompany: '小明房地产经纪公司',
            progressText: '房屋信息已上传，请您确认',
            btnInfo: {
              progressKey: 'toConfirm',
              btnText: '去确认',
            },
          },
          {
            brokerImage:
              'https://pic2.58cdn.com.cn/nowater/fangfe/n_v23110609050e94f8991dbfa39b51f22dc.jpg',
            broekrName: '王健林',
            brokerCompany: '建林房地产经纪公司',
            progressText: '房屋信息已上传，请您确认',
            btnInfo: {
              progressKey: 'toConfirm',
              btnText: '去确认',
            },
          },
          {
            brokerImage:
              'https://pic2.58cdn.com.cn/nowater/fangfe/n_v23110609050e94f8991dbfa39b51f22dc.jpg',
            broekrName: '111',
            brokerCompany: '北京我爱我家房地产经纪公司',
            progressText: '房屋信息已上传，请您确认',
            btnInfo: {
              progressKey: 'toConfirm',
              btnText: '去确认',
            },
          },
          {
            brokerImage:
              'https://pic2.58cdn.com.cn/nowater/fangfe/n_v23110609050e94f8991dbfa39b51f22dc.jpg',
            broekrName: '222',
            brokerCompany: '北京我爱我家房地产经纪公司',
            progressText: '房屋信息已上传，请您确认',
            btnInfo: {
              progressKey: 'toConfirm',
              btnText: '去确认',
            },
          },
          {
            brokerImage:
              'https://pic2.58cdn.com.cn/nowater/fangfe/n_v23110609050e94f8991dbfa39b51f22dc.jpg',
            broekrName: '333',
            brokerCompany: '北京我爱我家房地产经纪公司',
            progressText: '房屋信息已上传，请您确认',
            btnInfo: {
              progressKey: 'toConfirm',
              btnText: '去确认',
            },
          },
        ],
      },
      {
        status: 3,
        statusText: '委托结束',
        orderType: '1(公寓)，2(租房)',
        expireText: '订单4天后失效',
        houseImage:
          'https://pic7.58cdn.com.cn/nowater/fangfe/n_v2ff76212bc7b24828aded32e20eb12bcf.png',
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
            brokerImage:
              'https://pic2.58cdn.com.cn/nowater/fangfe/n_v23110609050e94f8991dbfa39b51f22dc.jpg',
            broekrName: '王旭东',
            brokerCompany: '北京我爱我家房地产经纪公司',
            progressText: '房屋信息已上传，请您确认',
            btnInfo: {
              progressKey: 'toCommet',
              btnText: '评价一下',
            },
          },
        ],
      },
      {
        status: 3,
        statusText: '委托结束',
        orderType: '1(公寓)，2(租房)',
        expireText: '订单4天后失效',
        houseImage:
          'https://pic7.58cdn.com.cn/nowater/fangfe/n_v2ff76212bc7b24828aded32e20eb12bcf.png',
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
        receiveInfo: [],
      },
      {
        status: 3,
        statusText: '委托结束',
        orderType: '1',
        expireText: '订单4天后失效',
        houseImage:
          'https://pic7.58cdn.com.cn/nowater/fangfe/n_v2ff76212bc7b24828aded32e20eb12bcf.png',
        title: '整租 荷塘月色 1室1厅1卫',
        location: '朝阳区·酒仙桥',
        area: '44.7㎡',
        towards: '朝南',
        price: '5000元/月',
        postDate: '2020-02-02',
        pushInfo: {
          pushText: '',
          btnInfo: {
            progressKey: '',
            btnText: '',
          },
        },
        receiveInfo: [
          {
            brokerImage:
              'https://pic2.58cdn.com.cn/nowater/fangfe/n_v23110609050e94f8991dbfa39b51f22dc.jpg',
            broekrName: '444',
            brokerCompany: '北京我爱我家房地产经纪公司',
            progressText: '已将您的房屋重新出租',
            btnInfo: {
              progressKey: 'toCommet',
              btnText: '评价一下',
            },
          },
        ],
      },
      {
        status: 2,
        statusText: '委托中',
        orderType: '1',
        expireText: '订单4天后失效',
        houseImage:
          'https://pic7.58cdn.com.cn/nowater/fangfe/n_v2ff76212bc7b24828aded32e20eb12bcf.png',
        title: '整租 荷塘月色 1室1厅1卫',
        location: '朝阳区·酒仙桥',
        area: '44.7㎡',
        towards: '朝南',
        price: '5000元/月',
        postDate: '2020-02-02',
        pushInfo: {
          pushText: '已推送给20位经纪人，2人接单',
          btnInfo: {
            progressKey: 'continuePush',
            btnText: '继续推送',
          },
        },
        receiveInfo: [
          {
            brokerImage:
              'https://pic2.58cdn.com.cn/nowater/fangfe/n_v23110609050e94f8991dbfa39b51f22dc.jpg',
            broekrName: '555',
            brokerCompany: '北京我爱我家房地产经纪公司',
            progressText: '房屋信息已上传，请您确认',
            btnInfo: {
              progressKey: 'toConfirm',
              btnText: '去确认',
            },
          },
          {
            brokerImage:
              'https://pic2.58cdn.com.cn/nowater/fangfe/n_v23110609050e94f8991dbfa39b51f22dc.jpg',
            broekrName: '6666',
            brokerCompany: '北京我爱我家房地产经纪公司',
            progressText: '房屋信息已上传，请您确认',
            btnInfo: {
              progressKey: 'toConfirm',
              btnText: '去确认',
            },
          },
          {
            brokerImage:
              'https://pic2.58cdn.com.cn/nowater/fangfe/n_v23110609050e94f8991dbfa39b51f22dc.jpg',
            broekrName: '77777',
            brokerCompany: '北京我爱我家房地产经纪公司',
            progressText: '房屋信息已上传，请您确认',
            btnInfo: {
              progressKey: 'toConfirm',
              btnText: '去确认',
            },
          },
          {
            brokerImage:
              'https://pic2.58cdn.com.cn/nowater/fangfe/n_v23110609050e94f8991dbfa39b51f22dc.jpg',
            broekrName: '8888',
            brokerCompany: '北京我爱我家房地产经纪公司',
            progressText: '房屋信息已上传，请您确认',
            btnInfo: {
              progressKey: 'toConfirm',
              btnText: '去确认',
            },
          },
          {
            brokerImage:
              'https://pic2.58cdn.com.cn/nowater/fangfe/n_v23110609050e94f8991dbfa39b51f22dc.jpg',
            broekrName: '9999',
            brokerCompany: '北京我爱我家房地产经纪公司',
            progressText: '房屋信息已上传，请您确认',
            btnInfo: {
              progressKey: 'toConfirm',
              btnText: '去确认',
            },
          },
        ],
      },
      {
        status: 2,
        statusText: '委托中',
        orderType: '1',
        expireText: '',
        houseImage:
          'https://pic7.58cdn.com.cn/nowater/fangfe/n_v2ff76212bc7b24828aded32e20eb12bcf.png',
        title: '整租 荷塘月色 1室1厅1卫',
        location: '朝阳区·酒仙桥',
        area: '44.7㎡',
        towards: '朝南',
        price: '5000元/月',
        postDate: '2020-02-02',
        pushInfo: {
          pushText: '已推送给20位经纪人，0人接单',
          btnInfo: {
            progressKey: '',
            btnText: '',
          },
        },
        receiveInfo: [],
      },
      {
        status: 3,
        statusText: '委托结束',
        orderType: '1',
        expireText: '订单4天后失效',
        houseImage:
          'https://pic7.58cdn.com.cn/nowater/fangfe/n_v2ff76212bc7b24828aded32e20eb12bcf.png',
        title: '整租 荷塘月色 1室1厅1卫',
        location: '朝阳区·酒仙桥',
        area: '44.7㎡',
        towards: '朝南',
        price: '5000元/月',
        postDate: '2020-02-02',
        pushInfo: {
          pushText: '',
          btnInfo: {
            progressKey: 'rePush',
            btnText: '重新委托',
          },
        },
        receiveInfo: [],
      },
    ],
  },
  'GET /apartment/apartmentDetail': (req, res) => {
    const oId = req.query.orderId;
    const result = {
      code: 0,
      data: {
        orderId: oId,
        orderType: '1',
        title: oId === '111' ? '丽都壹号 4室2厅1卫' : '丽都八号 4室2厅1卫',
        district: '朝阳区', //  区域
        block: '酒仙桥', // 商圈w
        area: '149.77', //  房源面积
        direction: '朝南', // 朝向
        decoration: '精装修', //  装修
        createTime: '2020-04-07', //  时间
        imgUrl:
          'https://t9.baidu.com/it/u=3363001160,1163944807&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1596704569&t=fd091f615c36f7f75aa2f69fe5c04fcb',
        pushNum: 10, // 推送给*家公寓
        orderApartmentList:
          oId === '111'
            ? [
                {
                  imgUrl:
                    'https://t9.baidu.com/it/u=3363001160,1163944807&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1596704569&t=fd091f615c36f7f75aa2f69fe5c04fcb',
                  name: '公寓名称',
                  qualityScore: 7, // 质量分
                  receivedPerson: '王志', //  收房人
                  contactStatus: '等待对方联系', // 联系状态：等待对方联系或已沟通
                },
                {
                  imgUrl:
                    'https://t8.baidu.com/it/u=2247852322,986532796&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1596704562&t=c83c68d14a55497642cff5d2981bbcda',
                  name: '公寓名称',
                  qualityScore: 100, // 质量分
                  receivedPerson: '王志强', //  收房人
                  contactStatus: '等待对方联等待对方联方联', // 联系状态：等待对方联系或已沟通
                },
                {
                  imgUrl:
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596111552968&di=3b69844222743ef52e13fd34010b30fe&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f0f557495c3532f875a4298d916a.jpg',
                  name: '公寓名称',
                  qualityScore: 72, // 质量分
                  receivedPerson: '王志强', //  收房人
                  contactStatus: '已沟通', // 联系状态：等待对方联系或已沟通
                },
                {
                  imgUrl:
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596111552968&di=3b69844222743ef52e13fd34010b30fe&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f0f557495c3532f875a4298d916a.jpg',
                  name: '公寓名称',
                  qualityScore: 72, // 质量分
                  receivedPerson: '王志强', //  收房人
                  contactStatus: '已沟通', // 联系状态：等待对方联系或已沟通
                },
              ]
            : [],
      },
      message: '请求成功',
    };
    res.send(result);
  },
  'GET /apartment/brokerDetail': (req, res) => {
    const oId = req.query.orderId;
    const result = {
      code: 0,
      data: {
        pushTime: 49,
        orderId: oId,
        orderType: '2',
        title: oId === '111' ? '丽都壹号 4室2厅1卫' : '丽都八号 4室2厅1卫',
        district: '朝阳区', //  区域
        block: '酒仙桥', // 商圈w
        area: '149.77', //  房源面积
        direction: '朝南', // 朝向
        decoration: '精装修', //  装修
        createTime: '2020-04-07', //  时间
        imgUrl:
          'https://t9.baidu.com/it/u=3363001160,1163944807&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1596704569&t=fd091f615c36f7f75aa2f69fe5c04fcb',
        pushNum: 10, // 推送给*家公寓
        orderApartmentList:
          oId === '111'
            ? [
                {
                  imgUrl:
                    'https://t9.baidu.com/it/u=3363001160,1163944807&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1596704569&t=fd091f615c36f7f75aa2f69fe5c04fcb',
                  name: '公寓名称',
                  qualityScore: 7, // 质量分
                  receivedPerson: '王志', //  收房人
                  contactStatus: '等待对方联系', // 联系状态：等待对方联系或已沟通
                },
                {
                  imgUrl:
                    'https://t8.baidu.com/it/u=2247852322,986532796&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1596704562&t=c83c68d14a55497642cff5d2981bbcda',
                  name: '公寓名称',
                  qualityScore: 100, // 质量分
                  receivedPerson: '王志强', //  收房人
                  contactStatus: '等待对方联等待对方联方联', // 联系状态：等待对方联系或已沟通
                },
                {
                  imgUrl:
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596111552968&di=3b69844222743ef52e13fd34010b30fe&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f0f557495c3532f875a4298d916a.jpg',
                  name: '公寓名称',
                  qualityScore: 72, // 质量分
                  receivedPerson: '王志强', //  收房人
                  contactStatus: '已沟通', // 联系状态：等待对方联系或已沟通
                },
                {
                  imgUrl:
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596111552968&di=3b69844222743ef52e13fd34010b30fe&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f0f557495c3532f875a4298d916a.jpg',
                  name: '公寓名称',
                  qualityScore: 72, // 质量分
                  receivedPerson: '王志强', //  收房人
                  contactStatus: '已沟通', // 联系状态：等待对方联系或已沟通
                },
              ]
            : [],
      },
      message: '请求成功',
    };
    res.send(result);
  },
};

/*

  接口需要修改的地方：
  1. 租房这边是价钱，公寓这边是精装修，需要添加一个精装修字段：


  */
