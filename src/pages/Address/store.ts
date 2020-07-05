import delay from '@/utils/delay';
import { cloneDeep } from 'lodash';

interface IState {
  list: Array<TObj<any>>
  searchCondition: TObj<any>
  modal: IModal
}


const defaultState: IState = {
  list: [
    {
      name: 'jeck',
      phone: '11122313213',
      address: 'sdfasfdsadfsdfsasdfas的撒放水淀粉asdfsadfasfasfasfsafdasf',
      choose: true,
    },
    {
      name: 'tom',
      phone: '321312312312',
      address: '撒发生的发生的发生地方色彩想在vxzcvsaf',
      choose: true,
    },
  ],
  searchCondition: { name: '', phone: '' },
  modal: { type:'create', show: false, data: {} },
};

export default {
  namespace: 'address',
  state: defaultState,
  reducers: {
    updateModal: (state, { payload }) => {
      state.modal = payload;
    },
    updateSearchCondition: (state, { payload }) => {
      const searchCondition = cloneDeep(state.searchCondition);
      state.searchCondition = { ...searchCondition, ...payload };
    },
  },
  effects: {
    *asyncAdd(_, { all, call, put }) {
      yield call(delay, 2000); //增加延迟测试效果

      //   yield put({ type: 'add' });
    },
  },
};
