import Taro, { scope, Component, useState } from '@tarojs/taro';
import { View, Block, ScrollView } from '@tarojs/components';
import { useSelector, useDispatch } from '@tarojs/redux';
import SearchBar from './modules/SearchBar';
import Area from './modules/Area';
import Banner from './modules/Banner';
import List from './modules/List';
import TagBar from './modules/TagBar';
import './index.scss';

const GoodGoods = () => {
  const { listScroll } = useSelector((state) => state.goodGoods);
  const [tagBarStyle, setTagBarStyle]: [null | object, Function] = useState(null);
  const onScroll = (e) => {
    if (e.target.scrollTop >= 360) {
      if (!tagBarStyle) {
        setTagBarStyle({
          position: 'fixed',
          top: 0,
          zIndex: 10,
          boxShadow: ' 1rpx 1rpx 10rpx #ccc',
          width: '100%',
          marginBottom: 0,
        });
      }
    } else {
      if (tagBarStyle) {
        setTagBarStyle(null);
      }
    }
  };
  return (
    <View className='goodgoods-wrap'>
      <ScrollView scrollY={true} scrollWithAnimation style={{ height: '100%' }} onScroll={onScroll}>
        <SearchBar />
        <Banner />
        <Area />
        <TagBar style={tagBarStyle} />
        <List />
      </ScrollView>
    </View>
  );
};
export default GoodGoods;
