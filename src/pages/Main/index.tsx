import Taro, { useShareAppMessage } from '@tarojs/taro';
import { View, Block } from '@tarojs/components';
import { useSelector, useDispatch } from '@tarojs/redux';
import { getWindowHeight } from '@/utils/app';
import Tabbar from '@/components/Tabbar';
import Me from '@/pages/Me';
import GoodGoods from '@/pages/GoodGoods';
import { ROUTER_NAME_MAP } from '@/constants/index';
import './index.scss';

const Main = (props) => {
  const { nav, currentNavIndex } = useSelector((state) => state.tabbar);
  useShareAppMessage(res => {
    // if (res.from === 'button') {
    //   // 来自页面内转发按钮
    //   console.log(res.target)
    // }
    return {
      title: '糖',
      path: '/pages/Main/index'
    }
  })

  return (
    <View className='page-wrap'>
      {nav[currentNavIndex].type == ROUTER_NAME_MAP.me && <Me />}
      {nav[currentNavIndex].type == ROUTER_NAME_MAP.goodGoods && <GoodGoods />}
      <Tabbar />
    </View>
  );
};

export default Main;
