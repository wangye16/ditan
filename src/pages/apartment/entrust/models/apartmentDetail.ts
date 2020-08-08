import { Effect } from 'dva';
import { Reducer } from 'redux';
import { getApartmentDetail } from '../service/apartmentDetail';

export interface DetailModelState {
  data: {
    orderType?: string;
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
  };
}

export interface DetailModelType {
  namespace: string;
  state: DetailModelState;
  effects: {
    getDetail: Effect;
  };
  reducers: {
    detailInfo: Reducer;
  };
}
const detailModel: DetailModelType = {
  namespace: 'apartmentDetail',
  state: {
    data: {},
  },
  effects: {
    *getDetail({ payload, callback }, { put, call }) {
      const response = yield call(getApartmentDetail, { ...payload });
      yield put({
        type: 'detailInfo',
        payload: response.data.data,
      });
    },
  },
  reducers: {
    detailInfo(state, action) {
      console.log('reducer:', action);
      console.log('action.payload', action.payload);
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};

export default detailModel;
