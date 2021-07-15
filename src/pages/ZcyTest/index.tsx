import Taro, { useDidShow } from '@tarojs/taro';
import { View, Checkbox, Block, Button, WebView } from '@tarojs/components';
import { AtList, AtListItem } from 'taro-ui';
import { useCheckBoxList } from '@/utils/hooks';
import QRCode from '../../utils/weapp-qrcode.js';
import { useSelector } from '@tarojs/redux';



const ZcyTest = () => {
  const main = useSelector((state) => state.main);
  console.log('main', main);
  const handleGet = () => {
    if(Taro.chooseAddress){
      Taro.chooseAddress({
       success: function (res) {
        console.log("成功",res);
       },
       fail: function(err){
         console.log("失败",err);
       }
      })
     }else{
      console.log('当前微信版本不支持chooseAddress');
     }
  };
  // useDidShow(() => {
  //   // 切换tab 请求接口
  //   const qrcode = new QRCode('canvas', {
  //     // usingIn: this,
  //     text: "/pages/BuyPage/index",
  //     width: 150,
  //     height: 150,
  //     padding: 12,
  //     colorDark: "#000000",
  //     colorLight: "#ffffff",
  //     correctLevel: QRCode.CorrectLevel.H,
  //     callback: (res) => {
  //         // 生成二维码的临时文件
  //         console.log(res.path)
  //     }
  //   });
  // });
  const handleCarm = () => {
    // eslint-disable-next-line no-undef
    wx.scanCode({
      onlyFromCamera: true,
      success (res) {
        console.log(res)

        Taro.navigateTo({ url: res.result});
      }
    })
  }
  return (
    <View>
          <WebView src='https://www.tangguostore.com/index.php/MiniApi/User/lottery/openid/o7xPG5K4SBeJ4kCPl2D8H078nKRc.html'></WebView>
    </View>
  );
};

export default ZcyTest;
