import Taro, { useEffect, useMemo } from '@tarojs/taro';
import { View, Checkbox, Block } from '@tarojs/components';
import GoodsList from './modules/List';
import GoodsPage from './modules/GoodsPage';
import GoodsDetail from './modules/GoodsDetail';
import GoodsChange from './modules/GoodsChange';
import GoodsAdd from './modules/GoodsAdd';
import { useSelector, useDispatch } from '@tarojs/redux';
import { AtList, AtListItem } from 'taro-ui';
import { useCheckBoxList } from '@/utils/hooks';
import './index.scss';

const MyVip = () => {
  const { pageInfo } = useSelector((state) => state.myvip);
  const { type } = pageInfo || {};
  console.log("goodsPageInfo", pageInfo);
  return (
    <View className='page-wrap'>
      {type === 'list' && <GoodsList />}
      {type === 'goods' && <GoodsPage />}
      {type === 'detail' && <GoodsDetail />}
      {type === 'change' && <GoodsChange />}
      {type === 'add' && <GoodsAdd />}
    </View>
  );
};

export default MyVip;
