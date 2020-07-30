import { getMyowns, goodsDetail, getPricehistory, getBuyhistory } from './services';
const COUNT = 10;
interface IState {
  //   modal: IModal;
  ccowns: {
    total: number;
    list: Array<{ [key: string]: any }>;
  };
  pageInfo: {
    type: 'list' | 'goods' | 'detail' | 'change' | 'add';
    data: { [key: string]: any };
  };
  goodsDetail: { [key: string]: any };
  pricehistory: Array<{ [key: string]: any }>;
  buyhistory: Array<{ [key: string]: any }>;
}

const defaultState: IState = {
  ccowns: {
    list: [],
    total: 0,
  },
  pageInfo: {
    type: 'list',
    data: {},
  },
  goodsDetail: {},
  pricehistory:[],
  buyhistory:[]
  //   modal: { type: 'create', show: false, data: {} },
};

export default {
  namespace: 'myvip',
  state: defaultState,
  reducers: {
    updatePageInfo: (state, { payload }) => {
      state.pageInfo = payload;
    },
    // updateSearchCondition: (state, { payload }) => {
    //   const searchCondition = cloneDeep(state.searchCondition);
    //   state.searchCondition = { ...searchCondition, ...payload };
    // },
    updateMyowns: (state, { payload }) => {
      const { total, ccowns } = payload;
      state.ccowns = { list: ccowns || [], total: Number(total) };
    },
    updateGoodsDetail: (state, { payload }) => {
      state.goodsDetail = payload;
    },
    updatePricehistory: (state, { payload }) => {
      const { pricedata } = payload;
      state.pricehistory = pricedata || [];
    },
    updateBuyhistory: (state, { payload }) => {
      const { pricedata } = payload;
      state.buyhistory = pricedata || [];
    },
  },
  effects: {
    *getMyowns(_, { all, call, put }) {
      const res = yield call(getMyowns);
      yield put({ type: 'updateMyowns', payload: res });
    },

    *getGoodsDetail({}: { payload: { gid: string } }, { all, call, put, select }) {
      const { pageInfo } = yield select((state) => state.myvip);
      const res = yield call(goodsDetail, { gid: pageInfo.data.gid });
      yield put({ type: 'updateGoodsDetail', payload: res });
    },
    *getPricehistory({}: { payload: { gid: string } }, { all, call, put, select }) {
      const { pageInfo } = yield select((state) => state.myvip);
      const res = yield call(getPricehistory, { gid: pageInfo.data.gid, offset: 0, count: COUNT });
      yield put({ type: 'updatePricehistory', payload: res });
    },
    *getBuyhistory({}: { payload: { gid: string } }, { all, call, put, select }) {
      const { pageInfo } = yield select((state) => state.myvip);
      const res = yield call(getBuyhistory, { gid: pageInfo.data.gid, offset: 0, count: COUNT });
      yield put({ type: 'updateBuyhistory', payload: res });
    },
  },
};
