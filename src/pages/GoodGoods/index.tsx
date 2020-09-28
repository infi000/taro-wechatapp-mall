import Taro, { scope, Component, useState, useDidShow } from '@tarojs/taro';
import { View, Block, ScrollView } from '@tarojs/components';
import { useSelector, useDispatch } from '@tarojs/redux';
import SearchBar from './modules/SearchBar';
import Area from './modules/Area2';
import Banner from './modules/Banner';
import List from './modules/List';
import TagBar from './modules/TagBar';
import './index.scss';

const GoodGoods = () => {
  const { listScroll } = useSelector((state) => state.goodGoods);
  const [tagBarStyle, setTagBarStyle]: [null | object, Function] = useState(null);
  const dispatch = useDispatch();
  const onScroll = (e) => {
    console.log(e.target.scrollTop);
    if (e.target.scrollTop >= 630) {
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
  const onScrollToLower = (e) => {
    console.log("onScrollToLoweronScrollToLoweronScrollToLower");
    dispatch({ type: 'goodGoods/getPageGoods'});
  }

  return (
    <View className='goodgoods-wrap'>
      <ScrollView scrollY={true} scrollWithAnimation style={{ height: '100%' }} onScroll={onScroll} onScrollToLower={onScrollToLower}>
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
