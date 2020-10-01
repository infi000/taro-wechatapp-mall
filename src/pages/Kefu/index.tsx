import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';

import { kefu } from '@/static/images/index';
import './index.scss';
const Kefu = () => {
  return (
    <View className="photo-wrap">
      <Image src={kefu} style={{ 'width': '100%','marginTop':'20%' }} mode="aspectFit" />
    </View>
  );
};

export default Kefu;
