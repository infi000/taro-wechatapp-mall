import Taro from '@tarojs/taro';
import { getJscode2session, saveUserData } from '@/services/user';

export const logIn = (params: { dispatch: any; SuccessCb?: Function; errorCb?: Function; userInfo: any }) => {
  const { dispatch, SuccessCb, errorCb, userInfo } = params;
  Taro.login({
    success: async function (res) {
      if (res.code) {
        //发起网络请求
        const { code } = res;
        getJscode2session({ jscode: code }).then((d) => {
          const openid = d.od;
          const ut = d.ut;
          const nickName = userInfo.nickName;
          const avatarUrl = userInfo.avatarUrl;
          const gender = userInfo.gender; //性别 0：未知、1：男、2：女
          const province = userInfo.province;
          const city = userInfo.city;
          const country = userInfo.country;
          saveUserData({ nickName, avatarUrl, gender, province, country, city, openid }).then(() => {
            Taro.setStorage({ key: 'wxUserInfo', data: { nickName, avatarUrl, gender, province, country, city, openid, ut } });
            dispatch({ type: 'main/updateIsLogIn', payload: true });
            dispatch({ type: 'main/updateWxUserInfo', payload: { nickName, avatarUrl, gender, province, country, city, openid, ut } });
            dispatch({ type: 'main/updateOpenid', payload: openid });
          });
        });
      } else {
        console.log('登录失败！' + res.errMsg);
      }
    },
  })
};

export default {};