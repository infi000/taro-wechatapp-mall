import Taro, { useDidShow, useMemo } from '@tarojs/taro';
import { View, Block, ScrollView } from '@tarojs/components';
import GoodsList from '@/components/GoodsList';
import { useSelector, useDispatch } from '@tarojs/redux';
import { getClassifyGoods } from './services';
import './index.scss';

const { useRouter, useEffect, useState } = Taro;
const PAGE_LEN = 100;
const SortPage = () => {
  const router = useRouter();
  const [formatList, setFormatList] = useState([]);
  // const [offset, setOffset] = useState(0);
  useDidShow(() => {
    const { params } = router;
    const { cid, title } = params;
    getClassifyGoods({ cid, offset: 0, count: PAGE_LEN }).then((d) => {
      const goods = d.goods;
      setFormatList(goods || []);
    });
    Taro.setNavigationBarTitle({
      title: title || '糖',
    });
  });
  const onScrollToLower = (e) => {
    console.log('触底了');
    // dispatch({ type: 'goodGoods/getPageGoods'});
  };
  // const list = useEffect(()=>{
  //   const { cid } = router.params;
  //   getClassifyGoods({ cid, offset: offset, count: PAGE_LEN }).then((d) => {
  //     const goods = d.goods || [];
  //     setFormatList((arr)=>{
  //         arr.concat(goods);
  //         return arr;
  //     });
      
  //   });
  // },[offset]);
  return (
    <View className='list-wrap' >
      <ScrollView scrollY={true} scrollWithAnimation style={{ height: '100%' }} onScrollToLower={onScrollToLower}> 
        <GoodsList list={formatList} />
      </ScrollView>
    </View>
  );
};

export default SortPage;
