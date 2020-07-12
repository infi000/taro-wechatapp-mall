import Taro from '@tarojs/taro';
import { View, Checkbox, Block } from '@tarojs/components';
import { useSelector, useDispatch } from '@tarojs/redux';
import { AtTabs, AtTabsPane } from 'taro-ui';
import { ORDER_STATUS_MAP } from '@/constants/index';
import { useInitialValue } from '@/utils/hooks';
import ListItem from './modules/ListItem';
import './index.scss';

const { useState, useEffect, useMemo, useRouter } = Taro;

const Order = () => {
  const { orderList } = useSelector((state) => state.order);
  const router = useRouter();
  const [current, setCurrent] = useState(() => {
    const { params = {} } = router;
    const { status = '全部订单' } = params;
    return [...ORDER_STATUS_MAP.keys()].indexOf(status);
  });
  const dispatch = useDispatch();
  const tabList = useMemo(() => {
    const arr = [...ORDER_STATUS_MAP.keys()];
    return arr.map((name) => {
      const res = { title: name };
      return res;
    });
  }, []);
  useInitialValue('order',dispatch);
  useEffect(() => {
    // 切换tab 请求接口
    const status = [...ORDER_STATUS_MAP.values()][current];
    dispatch({ type: 'order/searchOrder', params: { otype: status } });
  }, []);
  // useEffect(() => {
  //   // 切换tab 请求接口
  //   const status = [...ORDER_STATUS_MAP.values()][current];
  //   dispatch({ type: 'order/searchOrder', params: { otype: status } });
  // }, [current]);
  return (
    <View className='order-wrap'>
      <AtTabs current={current} tabList={tabList} scroll onClick={setCurrent}>
        {[...ORDER_STATUS_MAP.keys()].map((item,index) => {
          return (
            <AtTabsPane current={current} index={index} key={item}>
              <View>
                {
                  orderList.list.length>0 && <ListItem info={orderList.list.filter(({status}) => status == ORDER_STATUS_MAP.get(item))} />
                }
              </View>
            </AtTabsPane>
          );
        })}
      </AtTabs>
    </View>
  );
};

export default Order;

