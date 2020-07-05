import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtAvatar } from 'taro-ui'

// import '../index.scss';

const MyAvatar = () => {
  return (
    <View className='my-avatar-con'>
      <View className='at-row at-row--wrap'>
        <View className='at-col at-col-12'>
          <View className='at-row at-row__align--center'>
            <View style='height:100px' className='at-col'>
            <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>

            </View>
            <View className='at-col'>居中对齐 -- center</View>
          </View>
        </View>
        <View className='at-col at-col-12'>
        <View className='at-row at-row--wrap'>
        <View className='at-col at-col-6'>
          $0.00
        </View>
        <View className='at-col at-col-6'>
          0个积存中
        </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyAvatar;
