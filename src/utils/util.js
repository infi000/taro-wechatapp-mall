import Taro from '@tarojs/taro';

import {ImgError} from '../static/images/index';

export function showErrorToast(msg) {
  Taro.showToast({
    title: msg,
    image:ImgError
  })
}
export function showToast(msg) {
  Taro.showToast({
    title: msg,
  })
}


export function redirect(url) {

  //判断页面是否需要登录
  if (false) {
    Taro.redirectTo({
      url: '/pages/auth/login/login'
    });
    return false;
  } else {
    Taro.redirectTo({
      url: url
    });
  }
}
