import Taro, { useEffect } from '@tarojs/taro';
import { AtButton } from 'taro-ui';
import { View, Block, Image, Swiper, SwiperItem } from '@tarojs/components';
import { useSelector, useDispatch } from '@tarojs/redux';
import '../index.scss';

const { useState } = Taro;

const GoodsDetail = () => {
  const { goodsDetail,pageInfo } = useSelector((state) => state.myvip);
  const dispatch = useDispatch();
  useEffect(() => {
    if(pageInfo.data.gid){
      dispatch({ type: 'myvip/getGoodsDetail'});
      dispatch({ type: 'myvip/getBuyhistory' });
      dispatch({ type: 'myvip/getPricehistory' });
    }
  }, [pageInfo.data]);
  return (
    <Block>
      <Swiper className='swiper-con' indicatorColor='#999' indicatorActiveColor='#ddd' circular indicatorDots autoplay>
        {goodsDetail.colorimgs &&
          goodsDetail.colorimgs[0] &&
          goodsDetail.colorimgs[0].map((item) => {
            const { clothcolor, id, fpath } = item;
            return (
              <SwiperItem key={id}>
                <View className='swiper-img-con'>
                  <Image mode='heightFix' lazyLoad style='width: 100%;height: 100%' src={fpath} />
                </View>
              </SwiperItem>
            );
          })}
      </Swiper>
    </Block>
  );
};

export default GoodsDetail;
