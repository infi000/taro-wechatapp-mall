import Taro, { useDidShow } from '@tarojs/taro';
import { View, Checkbox, Block, Button } from '@tarojs/components';
import { AtList, AtListItem } from 'taro-ui';
import { useCheckBoxList } from '@/utils/hooks';
import QRCode from '../../utils/weapp-qrcode.js';



const ZcyTest = () => {
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
  useDidShow(() => {
    // 切换tab 请求接口
    const qrcode = new QRCode('canvas', {
      // usingIn: this,
      text: "/pages/BuyPage/index",
      width: 150,
      height: 150,
      padding: 12,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
      callback: (res) => {
          // 生成二维码的临时文件
          console.log(res.path)
      }
    });
  });
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
          <Button onClick={handleGet}>获取</Button>
          <Button onClick={handleCarm}>扫码</Button>
          <canvas class='canvas' canvas-id='canvas' bindlongtap='save'></canvas>

    </View>
  );
};

export default ZcyTest;
