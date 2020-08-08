import { getList } from '../service/list';
import { Effect } from 'dva';
import { Reducer } from 'redux';
export interface listModelState {
  data: any[];
}

export interface listModelType {
  namespace: string;
  state: listModelState;
  effects: {
    getList: Effect;
  };
  reducers: {
    listInfo: Reducer;
  };
}
const listModel: listModelType = {
  namespace: 'list',
  state: {
    data: [],
  },
  effects: {
    *getList({ payload, callback }, { put, call }) {
      const response = yield call(getList, payload);
      yield put({
        type: 'listInfo',
        payload: response.data.data,
      });
    },
  },
  reducers: {
    listInfo(state, action) {
      console.log('reducer:', action);
      console.log('action.payload', action.payload);
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};

export default listModel;
