import Taro, { useEffect } from '@tarojs/taro';
import { View, ScrollView, Block } from '@tarojs/components';
import List from './modules/List';

import { useSelector, useDispatch } from '@tarojs/redux';
import { AtList, AtListItem } from 'taro-ui';
import { useCheckBoxList } from '@/utils/hooks';
import './index.scss';
import { isArray } from 'lodash';

const SortPage = () => {

    return (
        <View className='.page-wrap'>分类页面
 
        </View>
    )

}

export default SortPage;