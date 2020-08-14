import delay from '@/utils/delay';
import { liwu, liwu_s, wode, wode_s } from '@/static/images';
import { ROUTER_NAME_MAP } from '@/constants/index';

export default {
  namespace: 'tabbar',
  state: {
    nav: [
      {
        title: '好物',
        type: ROUTER_NAME_MAP.goodGoods,
        image: liwu,
        selectedImage: liwu_s,
      },
      {
        title: '我的',
        type: ROUTER_NAME_MAP.me,
        image: wode,
        selectedImage: wode_s,
      },
    ],
    currentNavIndex: 0,
  },
  reducers: {
    updateNav: (state, { payload }) => {
      state.nav = payload;
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
