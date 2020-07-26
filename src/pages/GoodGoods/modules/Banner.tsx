import Taro from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import BANNER_LIST from '@/config/banner';
import '../index.scss';

const Banner = () => {
  return (
    <View className='banner-wrap'>
      <View className='banner-con'>
        <Swiper className='swiper-con' indicatorColor='#999' indicatorActiveColor='#333' circular indicatorDots autoplay>
          {BANNER_LIST &&
            BANNER_LIST.map((item) => {
              const { image } = item;
              return (
                <SwiperItem key={image}>
                  <Image mode='aspectFill' style='width: 100%;height: 100%;' src={image} />
                </SwiperItem>
              );
            })}
        </Swiper>
      </View>
      <View className='at-row at-row__justify--between banner-grid'>
        <View className='at-col at-col-3'>正品保证</View>
        <View className='at-col at-col-3'>假一赔三</View>
        <View className='at-col at-col-3'>闪电发货</View>
        <View className='at-col at-col-3'>售后无忧</View>
      </View>
    </View>
  );
};

export default Banner;
