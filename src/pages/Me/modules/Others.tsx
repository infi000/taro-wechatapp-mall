import Taro from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { showSuccessToast } from '@/utils/util';
import '../index.scss';

const LIST_URL_MAP = [
  { name: '照片墙', url: '/pages/PhotoWall/index' },
  { name: '收藏', url: '/pages/Collect/index' },
  { name: '我的藏品', url: '/pages/MyVip/index' },
  { name: '地址管理', url: '/pages/Address/index' },
  { name: '客服', url: '/pages/Kefu/index' },
];

const Others = () => {
  const handleClickItem = (url) => {
    Taro.navigateTo({ url });
  };
  const handleSubscribe = (url) => {
    Taro.requestSubscribeMessage({
      tmplIds: ['vqWshHTalxdFaNqhdSWJ8Mkb7HsysV39m1h9Yk-94hY','05mTNKODj3164t8tEgu60oLUyqddSUHtjAOS6i1S0Zs', ],
      success: function(res) {
        console.log(res);
        showSuccessToast('消息已订阅成功');
      },
    });
  };
  return (
    <View className='me-other-wrap'>
      {LIST_URL_MAP.map((item) => {
        const { name, url } = item;
        return (
          <View
            className='at-row me-others-con'
            key={name}
            onClick={() => {
              handleClickItem(url);
            }}
          >
            <View className='at-col-6 textL'>{name}</View>
            <View
              className='at-col-6 textR'
              // onClick={() => {
              //   handleClickItem(url);
              // }}
            ></View>
          </View>
        );
      })}
      <View className='at-row me-others-con' onClick={handleSubscribe}>
        <View className='at-col-6 textL'>消息订阅</View>
        <View className='at-col-6 textR'></View>
      </View>
    </View>
  );
};

export default Others;
