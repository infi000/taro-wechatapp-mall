// import Taro from '@tarojs/taro';
import Taro, { useRouter, useEffect, useTabItemTap, useDidShow, useDidHide } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { useSelector, useDispatch } from '@tarojs/redux';
import GoodsDetail from './modules/GoodsDetail';
import BuysRecord from './modules/BuysRecord';
import './index.scss';
/**
 * 商品展示
 */
const GoodsShow = () => {
  const { isShowBuysPage } = useSelector((state) => state.goodsShow);
  const dispatch = useDispatch();
  const router = useRouter();
  useDidShow(() => {
    const { params } = router;
    const {gid,title} = params;
    dispatch({ type: 'goodsShow/updateGid', payload: gid });
    dispatch({ type: 'goodsShow/getDetail' });
    dispatch({ type: 'goodsShow/getPageBuysRecord', payload: { refresh: true } });
    dispatch({ type: 'goodsShow/getRelatedGoods' });
    dispatch({ type: 'goodsShow/getIsfav' });
    Taro.setNavigationBarTitle({
      title:title||'糖'
    });
  });

  useEffect(() => {
    return () => {
      dispatch({ type: 'goodsShow/init' });

    };
  }, []);
  return <View>{isShowBuysPage ? <BuysRecord /> : <GoodsDetail />}</View>;
};

export default GoodsShow;
