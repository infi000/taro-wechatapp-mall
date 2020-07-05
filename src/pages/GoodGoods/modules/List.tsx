import Taro from '@tarojs/taro';
import { View, Block, ScrollView } from '@tarojs/components';
import GoodsList from '@/components/GoodsList';
import { useSelector, useDispatch } from '@tarojs/redux';
import '../index.scss';

const { useMemo } = Taro;

const List = () => {
  const { goodsData } = useSelector((state) => state.goodGoods);
  const dispatch = useDispatch();
  const formatList = useMemo(() => {
    const { goods } = goodsData;
    return goods;
  }, [goodsData.goods]);
  // const onScroll = (e) => {
  //   console.log('onScroll', e.detail);
  // };
  // const onScrollToUpper = (e) => {
  //   console.log('onScrollToUpper', e);
  // };
  const onScrollToLower = (e) =>{
    dispatch({type:'goodGoods/getPageGoods'});
    console.log('onScrollToLower', e);
  }
  // const onRefresherRefresh = (e) => {
  //   console.log("onRefresherRefresh" , e);
  //   setTimeout(

  //     () => Taro.stopPullDownRefresh(),
      
  //         500
      
  //       )
  //   return true
  // }
  return (
    <ScrollView
      className='list-wrap'
      scrollY
      scrollWithAnimation
      scrollTop={0}
      style={{ height: '1000px' }}
      lowerThreshold={50}
      upperThreshold={100}
      refresherEnabled 
      refresherThreshold={20}
      // onScrollToUpper={onScrollToUpper}
      onScrollToLower={onScrollToLower}
      // onScroll={onScroll}
    >
      <GoodsList list={formatList} />
    </ScrollView>
    // <View className='list-wrap'>
    //     <GoodsList list={formatList} />
    // </View>
  );
};

export default List;
