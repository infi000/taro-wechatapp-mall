import Taro from '@tarojs/taro';
import { AtTabBar } from 'taro-ui'

import { View } from '@tarojs/components';
import '../index.scss';

const MyOrder = () => {
  return <View >
    <View className='at-row at-row__justify--between'>
  <View className='at-col at-col-6'>我的订单</View>
  <View className='at-col at-col-6'>全部订单</View>
</View>
   <AtTabBar
     current={0}
     onClick={()=>{}}
     tabList={[
      { title: '待付款', iconType: 'bullet-list'},
      { title: '待发货', iconType: 'camera' },
      { title: '待收货', iconType: 'folder' },
      { title: '交易完成', iconType: 'folder' }
    ]}
   />
  </View>
};

export default MyOrder;