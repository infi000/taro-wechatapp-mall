import Taro, { useEffect } from '@tarojs/taro';
import { AtButton, AtCard, AtTabs, AtTabsPane, AtNavBar } from 'taro-ui';
import { View, Block, Image, Swiper, SwiperItem, ScrollView } from '@tarojs/components';
import { useSelector, useDispatch } from '@tarojs/redux';
// import Chuan from '../components/Chuan';
import Price from '../components/Price';
import Chuan from '../components/Chuan';

import '../index.scss';

const { useState } = Taro;
const tabList = [{ title: '价格' }, { title: '传承' }];

const GoodsDetail = () => {
  const { goodsDetail, pageInfo } = useSelector((state) => state.myvip);
  const dispatch = useDispatch();
  const [tabCurrent, setTabCurrent] = useState(0);

  const onScroll = () => {};
  useEffect(() => {
    if (pageInfo.data.gid) {
      dispatch({ type: 'myvip/getGoodsDetail' });
    }
  }, [pageInfo.data]);
  const handleBack = () => {
    dispatch({ type: 'myvip/updatePageInfo', payload: { type: 'goods', data: pageInfo.data } });
  };
  useEffect(() => {
    dispatch({ type: 'myvip/getSearchcc' });
  },[tabCurrent]);
  return (
    <Block>
      <Swiper className='swiper-con' indicatorColor='#999' indicatorActiveColor='#ddd' circular indicatorDots autoplay>
        {goodsDetail.colorimgs &&
          goodsDetail.colorimgs[0] &&
          goodsDetail.colorimgs[0].map((item) => {
            const { clothcolor, id, fpath } = item;
            return (
              <SwiperItem key={id}>
                <View className='swiper-img-con'>
                  <Image mode='heightFix' lazyLoad style='width: 100%;height: 100%' src={fpath} />
                </View>
              </SwiperItem>
            );
          })}
      </Swiper>
      <View style="height:48px">
      <AtTabs current={tabCurrent} tabList={tabList} onClick={setTabCurrent}></AtTabs>
      </View>
      {tabCurrent === 0 && <Price />}
      {tabCurrent === 1 && <Chuan />}

    </Block>
  );
};

export default GoodsDetail;
