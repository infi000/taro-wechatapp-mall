import delay from '@/utils/delay';
import { isArray, toNumber, cloneDeep } from 'lodash';
import { getDetail, getRelatedGoods, getBuysRecord, getIsfav, getFav, getUnfav, payQuery, payex,createOrder, getMyAddress } from './services';
import Taro from '@tarojs/taro';
import { showToast, showSuccessToast } from '@/utils/util';
const PAGE_LEN = 100;

interface IState {
  gid?: string;
  detail: TObj<any>;
  buysRecordList: { buys: Array<TObj<any>>; total: string; offset: number };
  relatedGoods: Array<TObj<any>>;
  isShowBuysPage: boolean;
  isfav: 0 | 1;
}

const defaultState: IState = {
  gid: '',
  detail: {},
  buysRecordList: { buys: [], total: '0', offset: 0 },
  relatedGoods: [],
  isShowBuysPage: false,
  isfav: 0,
};

export default {
  namespace: 'goodsShow',
  state: defaultState,
  reducers: {
    // init:(state: IState ) => {
    //   state = defaultState;
    // },
    updateIsShowBuysPaget: (state: IState, { payload }) => {
      state.isShowBuysPage = payload;
    },
    updateGid: (state, { payload }) => {
      state.gid = payload;
    },
    updateDetail: (state, { payload }) => {
      state.detail = payload;
    },
    updateRelatedGoods: (state, { payload }) => {
      state.relatedGoods = payload;
    },
    updateBuysRecordList: (state, { payload }) => {
      state.buysRecordList = payload;
    },
    updateIsfav: (state, { payload }) => {
      state.isfav = payload;
    },
  },
  effects: {
    *init({ }, { all, call, put, select }) {
      yield put({ type: 'updateIsShowBuysPaget', payload: false });
      yield put({ type: 'updateGid', payload: '' });
      yield put({ type: 'updateDetail', payload: {} });
      yield put({ type: 'updateRelatedGoods', payload: [] });
      yield put({ type: 'updateBuysRecordList', payload: { buys: [], total: '0', offset: 0 } });
      yield put({ type: 'updateIsfav', payload: 0 });
    },
    *getDetail({}: { payload: { gid: string } }, { all, call, put, select }) {
      const { gid } = yield select((state) => state.goodsShow);
      const res = yield call(getDetail, { gid });
      yield put({ type: 'updateDetail', payload: res });
    },
    *getRelatedGoods({}: { payload: { gid: string } }, { all, call, put, select }) {
      const { gid } = yield select((state) => state.goodsShow);
      const res = yield call(getRelatedGoods, { gid });
      yield put({ type: 'updateRelatedGoods', payload: res });
    },
    *getPageBuysRecord({ payload = {} }: { payload: { refresh?: boolean } }, { all, call, put, select }) {
      const { refresh = false } = payload;
      const { gid, buysRecordList = {} } = yield select((state) => state.goodsShow);
      const { offset, total, buys = [] } = buysRecordList;
      if (!refresh && offset > 0 && offset === toNumber(total)) {
        return;
      }
      const res = yield call(getBuysRecord, { gid, count: PAGE_LEN, offset: refresh ? 0 : offset });
      if (res.buys && isArray(res.buys) && res.buys.length > 0) {
        const _buys = buys.concat(res.buys);
        const _offset = _buys.length;
        yield put({ type: 'updateBuysRecordList', payload: { ...res, buys: _buys, offset: _offset } });
      }
    },
    *getIsfav({}, { all, call, put, select }) {
      const { gid } = yield select((state) => state.goodsShow);
      const res = yield call(getIsfav, { gid });
      yield put({ type: 'updateIsfav', payload: Number(res) });
    },
    *getFav({}, { all, call, put, select }) {
      const { gid } = yield select((state) => state.goodsShow);
      yield call(getFav, { gid });
      yield put({ type: 'getIsfav' });
    },
    *getUnfav({}, { all, call, put, select }) {
      const { gid } = yield select((state) => state.goodsShow);
      yield call(getUnfav, { gids:gid });
      yield put({ type: 'getIsfav' });
    },
    *createOrder({}, { all, call, put, select }) {
      const { gid,detail } = yield select((state) => state.goodsShow);
      const { size, price } =detail;
      // const {addresses} = yield call(getMyAddress);
      const { orderid } = yield call(createOrder, { "id[]":gid,'sort[]':`1`,'sel[]':`1`,'parameters[]':`${size}`,'price[]':price,'num[]':'1' });
      Taro.navigateTo({ url:'/pages/BuyPage/index?orderid=' + orderid });
      // if(!addresses){
      //   showToast("没有设置收货地址");
      //   return 
      // }
      // const defalutAddress = addresses.find(item => item.status == 1);
      // if(!defalutAddress){
      //   showToast("没有默认收货地址");
      //   return 
      // }
      // const { arraydata } = yield call(payex, { tag:orderid,orderfrom:1, addressid:defalutAddress.id,paytype:'miniwxpay'});
      // appId: "wx772ff4b63e617a3a"
      // nonceStr: "fmfzyk0tpjl7phshmcp09scbses2xul0"
      // order: "J8135087831860352251"
      // package: "prepay_id=wx13004758566883ed0ea8bcbea7a3600000"
      // paySign: "1AE51EE62371D5BD7D317F095F9CE8AB2FB507A7FC843000C471229229451D61"
      // paytype: "miniwxpay"
      // return: "https://www.tangguostore.com/index.php/MiniApi/Public/miniwxpaynotify/rmethod/return.html"
      // signType: "HMAC-SHA256"
      // timeStamp: 1597250878
      // const { nonceStr,timeStamp, signType,paySign } = arraydata;
      // const pak = arraydata.package;
      // Taro.requestPayment({
      //   timeStamp: timeStamp+"",
      //   nonceStr: nonceStr,
      //   package: pak,
      //   signType,
      //   paySign,
      //   success: function (res) { 
      //     showSuccessToast("购买成功")
      //   },
      //   fail: function (res) {
      //     showToast("购买失败");
      //     console.log(res)
      //    }
      // })
    },
    // *payQuery({}, { all, call, put, select }) {
    //   const { gid } = yield select((state) => state.goodsShow);
    //   yield call(payQuery, { gids:gid });
    //   yield put({ type: 'getIsfav' });
    // },
    *payex({}, { all, call, put, select }) {
      const { gid } = yield select((state) => state.goodsShow);
      yield call(payex, { gids:gid });
      yield put({ type: 'getIsfav' });
    },
  },
};

// order: "J8126730434670760780"
// paytype: "miniwxpay"
// return: "https://www.tangguostore.com/index.php/MiniApi/Public/miniwxpaynotify/rmethod/return.html"