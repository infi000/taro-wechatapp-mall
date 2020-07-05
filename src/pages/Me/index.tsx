import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import MyAvatar from './modules/MyAvatar';
import MyOrder from './modules/MyOrder';
import MySales from './modules/MySales';
import Others from './modules/Others';
import './index.scss';

const Me = () => {
  return <View>
    <MyAvatar />
    <MyOrder />
    <MySales />
    <Others />
  </View>;
};

export default Me;