// import Taro from '@tarojs/taro';
import Taro, { useRouter, useMemo, useEffect } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { useSelector, useDispatch } from '@tarojs/redux';
import GoodsDetail from './modules/GoodsDetail';
import BuysRecord from './modules/BuysRecord';
import './index.scss';
/**
 * 商品展示
 */
const GoodsShow = () => {
  const goodsShowStore = useSelector((state) => state.goodsShow);
  const { isShowBuysPage } = useSelector((state) => state.goodsShow);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    const { params } = router;
    const gid =  params.gid;
    console.log("gid", gid);
    dispatch({ type: 'goodsShow/updateGid', payload: gid });
    return ()=>{
      dispatch({ type: 'goodsShow/init' });
    }
  }, [])
  console.log("goodsShowStore", goodsShowStore);

  return <View>{isShowBuysPage ? <BuysRecord /> : <GoodsDetail />}</View>;
};

export default GoodsShow;
