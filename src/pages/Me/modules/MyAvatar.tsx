import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtAvatar } from 'taro-ui';

import '../index.scss';

const MyAvatar = () => {
  return (
    <View className='my-avatar-con'>
      <View className='at-row at-row__align--center  my-avatar-top'>
        <View className='at-col  at-col-3'>
          <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
        </View>
        <View className='at-col'>这是我的名字</View>
      </View>
      <View className='at-row at-row--wrap  my-avatar-bottom'>
        <View className='at-col at-col-6'>
          <View>¥0.00</View>
          <View className='my-avatar-desc'>我的钱包</View>
        </View>
        <View className='at-col at-col-6'>
          <View>0个寄存中</View>
          <View className='my-avatar-desc'>我的仓库</View>
        </View>
      </View>
    </View>
  );
};

export default MyAvatar;
