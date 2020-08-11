import Taro, { useState, useEffect } from '@tarojs/taro';
import { View, Checkbox, Block, Image, MovableArea, MovableView, Swiper, SwiperItem } from '@tarojs/components';
import { useSelector, useDispatch } from '@tarojs/redux';

import './index.scss';

const PhotoWall = () => {
  const [current, setCurrent] = useState(0);
  const { wallList, wallBgList } = useSelector((state) => state.photoWall);
  const dispatch = useDispatch();
  const handleNext = () => {
    setCurrent((num) => {
      num = num + 1;
      return num < 3 ? num : 0;
    });
  };
  useEffect(()=>{
    dispatch({ type: 'photoWall/searchDynamic'});
    dispatch({ type: 'photoWall/getBgs'});
  },[])
  return (
  <View className='photo-swiper-wrap'>
      {current === 0 && (
        <MovableArea style='height: 100vh; width: 1300px; background: url(https://www.tangguostore.com/Uploads/Picture/2020-07-27/5f1e7ee45c41c.jpg);background-size: cover;background-position: center;background-repeat: no-repeat;'>
          <MovableView direction='all'>
            <Image
              src='https://www.tangguostore.com/Uploads/Picture/2020-07-26/5f1d979f118d0.jpg'
              mode='heightFix'
              style='height:150px;box-shadow:1px 1px 1px #000'
            ></Image>
          </MovableView>
        </MovableArea>
      )}
      {current === 1 && (
        <MovableArea style='height: 100vh; width:1300px; background: url(../../static/images/pic2.png);background-size: cover;background-position: center;background-repeat: no-repeat;'>
          <MovableView direction='all'>
            <Image
              src='https://www.tangguostore.com/Uploads/Picture/2020-07-27/5f1e7ee45c41c.jpg'
              mode='heightFix'
              style='height:150px;box-shadow:1px 1px 1px #000'
            ></Image>
          </MovableView>
        </MovableArea>
      )}
      {current === 2 && (
        <MovableArea style='height: 100vh; width: 1300px; background: url(../../static/images/pic3.png);background-size: cover;background-position: center;background-repeat: no-repeat;'>
          <MovableView direction='all'>
            <Image
              src='https://www.tangguostore.com/Uploads/Picture/2020-07-27/5f1ee938add10.png'
              mode='heightFix'
              style='height:150px;box-shadow:1px 1px 1px #000'
            ></Image>
          </MovableView>
        </MovableArea>
      )}

      <View className='btn-group'>
        <View className='btn' onClick={handleNext}>
          下一张
        </View>
      </View>
    </View>
  );
};

export default PhotoWall;
