import Taro from '@tarojs/taro';
import {View,Block} from "@tarojs/components";
import { useSelector, useDispatch } from '@tarojs/redux'
import Tabbar from "@/components/Tabbar";
import Me from '@/pages/Me';
import GoodGoods from '@/pages/GoodGoods';
import {ROUTER_NAME_MAP} from '@/constants';


const Main = (props) => {
    const {nav, currentNavIndex} = useSelector(state => state.tabbar);
    
    return (
        <View>
            {nav[currentNavIndex].type == ROUTER_NAME_MAP.me && <Me /> }
            {nav[currentNavIndex].type == ROUTER_NAME_MAP.goodGoods && <GoodGoods /> }
        <Tabbar />
        </View>
    )
}

export default Main;