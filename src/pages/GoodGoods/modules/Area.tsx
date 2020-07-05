import Taro from '@tarojs/taro';
import { View, Block, Image } from '@tarojs/components';
import AREA_LIST from '@/config/area';
import '../index.scss';

const Area = () => {
  return (
    AREA_LIST &&
    AREA_LIST.length > 2 ? (
      <View className='area-wrap'>
        <View className='at-row'>
          <View className='at-col at-col-6 area-l'>
            <Image mode='scaleToFill' style='width: 100%;height: 100%;' src={AREA_LIST[0].image} />
          </View>
          <View className='at-col at-col-6'>
            <View className='at-row at-row--wrap'>
              <View className='at-col at-col-12  area-r-top'>
                <Image mode='scaleToFill' style='width: 100%;height: 100%;' src={AREA_LIST[1].image} />
              </View>
              <View className='at-col at-col-12 area-r-bottom'>
                {' '}
                <Image mode='scaleToFill' style='width: 100%;height: 100%;' src={AREA_LIST[2].image} />
              </View>
            </View>
          </View>
        </View>
      </View>
    ):null
  );
};

export default Area;
