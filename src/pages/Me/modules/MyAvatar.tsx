import Taro from '@tarojs/taro';
import { View, Button, Block } from '@tarojs/components';
import { AtAvatar } from 'taro-ui';
import { useSelector, useDispatch } from '@tarojs/redux';

import { logIn } from '@/utils/auth';

import '../index.scss';

const MyAvatar = () => {
  const { isLogIn, wxUserInfo } = useSelector((state) => state.main);
  const dispatch = useDispatch();

  const handleLogIn = () => {
    // eslint-disable-next-line no-undef
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res);
        logIn({dispatch,userInfo: res.userInfo});
      }
    })
  };
  return (
    <View className='my-avatar-con'>
      <View className='at-row at-row__align--center  my-avatar-top'>
        {isLogIn ? (
          <Block>
            <View className='at-col  at-col-3'>
              <AtAvatar circle image={wxUserInfo.avatarUrl}></AtAvatar>
            </View>
            <View className='at-col'>{wxUserInfo.nickName}</View>
          </Block>
        ) : (
            <Button onClick={handleLogIn}>
            授权登录
          </Button>
        )}
      </View>
      {/* <View className='at-row at-row--wrap  my-avatar-bottom'>
        <View className='at-col at-col-6'>
          <View>¥0.00</View>
          <View className='my-avatar-desc'>我的钱包</View>
        </View>
        <View className='at-col at-col-6'>
          <View>0个寄存中</View>
          <View className='my-avatar-desc'>我的仓库</View>
        </View>
      </View> */}
    </View>
  );
};

export default MyAvatar;
