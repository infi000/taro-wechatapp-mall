import delay from '@/utils/delay';
import { goods, goodsSelected, Home, HomeSelected } from '@/static/images';
import { ROUTER_NAME_MAP } from '@/constants';

export default {
  namespace: 'tabbar',
  state: {
    nav: [
      {
        title: '好物',
        type: ROUTER_NAME_MAP.goodGoods,
        image: goods,
        selectedImage: goodsSelected,
      },
      {
        title: '我的',
        type: ROUTER_NAME_MAP.me,
        image: Home,
        selectedImage: HomeSelected,
      },
    ],
    currentNav: {
      title: '好物',
      type: ROUTER_NAME_MAP.goodGoods,
      image: goods,
      selectedImage: goodsSelected,
    },
    currentNavIndex: 0,
  },
  reducers: {
    updateNav: (state, { payload }) => {
      state.nav = payload;
    },
    updateCurrentNav: (state, { payload }) => {
      state.currentNav = payload;
    },
    updateCurrentNavIndex: (state, { payload }) => {
      state.currentNavIndex = payload;
    },
  },
  effects: {
    *asyncAdd(_, { all, call, put }) {
      yield call(delay, 2000); //增加延迟测试效果

      yield put({ type: 'add' });
    },
  },
};
