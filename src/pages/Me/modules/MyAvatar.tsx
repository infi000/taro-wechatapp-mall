import Taro from '@tarojs/taro';
import { View, Button, Block } from '@tarojs/components';
import { AtAvatar } from 'taro-ui';
import { useSelector, useDispatch } from '@tarojs/redux';

import { logIn } from '@/utils/auth';

import '../index.scss';
{
  /* <open-data type="userAvatarUrl"></open-data>
<open-data type="userNickName"></open-data>
<!-- 需要使用 button 来授权登录 -->
<button wx:if="{{canIUse}}" open-type="getUserInfo" bindgetuserinfo="bindGetUserInfo">授权登录</button>
<view wx:else>请升级微信版本</view> */
}
const MyAvatar = () => {
  const { isLogIn, wxUserInfo } = useSelector((state) => state.main);
  const dispatch = useDispatch();
  const handleLogIn = (e) => {
    logIn(dispatch);
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
          <Button open-type='getUserInfo' onGetUserInfo={handleLogIn}>
            授权登录
          </Button>
        )}
      </View>
      <View className='at-row at-row--wrap  my-avatar-bottom'>
        <View className='at-col at-col-6'>
          <View>¥0.00</View>
          <View className='my-avatar-desc'>我的钱包</View>
        </View>
        <View className='at-col at-col-6'>
          <View>0个寄存中</View>
          <View className='my-avatar-desc'>我的仓库</View>
        </View>
      </View>
    </View>
  );
};

export default MyAvatar;
