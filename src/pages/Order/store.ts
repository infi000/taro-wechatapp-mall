import delay from '@/utils/delay';
import { isArray, toNumber } from 'lodash';
import { searchOrder } from './services';
const PAGE_LEN = 10; // 每页个数

interface IState {
  orderList: { total: number; list: Array<object> };
}

const defaultState: IState = {
  orderList: { total: 0, list: [] },
};

export default {
  namespace: 'order',
  state: defaultState,
  reducers: {
    init: (state: IState, { payload }) => {
      state = defaultState;
    },
    updateOrderList: (state: IState, { payload }) => {
      const { total, orders } = payload;
      state.orderList = { list: orders, total: Number(total) };
    },
  },
  effects: {
    *searchOrder({ params }, { all, call, put }) {
      const res = yield call(searchOrder, params);
      yield put({ type: 'updateOrderList', payload: res });
    },
    *delFav({ params }, { all, call, put }) {
      // yield call(getUnfav,{...params});
      // yield put({ type: 'geFavorite' });
    },
  },
};
