import Taro from '@tarojs/taro';
import { AtTabBar } from 'taro-ui'

import { View } from '@tarojs/components';
import '../index.scss';

const MySales = () => {
  return <View >
    <View className='at-row at-row__justify--between'>
  <View className='at-col at-col-6'>我的出售</View>
  <View className='at-col at-col-6'>全部订单</View>
</View>
   <AtTabBar
     current={0}
     onClick={()=>{}}
     tabList={[
      { title: '出售中', iconType: 'bullet-list'},
      { title: '待寄出', iconType: 'camera' },
      { title: '已寄出', iconType: 'folder' },
      { title: '已退回', iconType: 'folder' }
    ]}
   />
  </View>
};

export default MySales;