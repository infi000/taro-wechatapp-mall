import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import '../index.scss';

const LIST_URL_MAP = [
  { name: '照片墙', url: '/pages/PhotoWall/index' },
  { name: '收藏', url: '/pages/Collect/index' },
  { name: '我的藏品', url: '/pages/MyVip/index' },
  { name: '地址管理', url: '/pages/Address/index' },
];


const Others = () => {
   const handleClickItem = (url) => {
    Taro.navigateTo({ url });
  };
  return (
    <View className='me-other-wrap'>
      {LIST_URL_MAP.map((item) => {
        const { name, url } = item;
        return (
          <View className='at-row me-others-con' key={name}>
            <View className='at-col-6 textL'>{name}</View>
            <View
              className='at-col-6 textR'
              onClick={() => {
                handleClickItem(url);
              }}
            >
              {'>'}
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Others;
