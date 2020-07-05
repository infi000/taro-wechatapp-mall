import Taro from '@tarojs/taro';
import { View, Block } from '@tarojs/components';
import SearchBar from './modules/SearchBar';
import Area from './modules/Area';
import Banner from './modules/Banner';
import List from './modules/List';
import TagBar from './modules/TagBar';
import './index.scss';

const GoodGoods = () => {
  return (
    <View className='goodgoods-wrap'>
      <SearchBar />
      <Banner />
      <Area />
      <TagBar />
      <List />
    </View>
  );
};

export default GoodGoods;
