import Taro, { useDidShow, useRouter, useState } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { picketSearch } from './services';
import QRCode from '../../utils/weapp-qrcode.js';
import './index.scss';
import { get } from 'lodash';
import { showErrorToast } from '@/utils/util';


const PicketQe = () => {
  const router = useRouter();
  const [info, setInfo] = useState<any>({});

  useDidShow(async () => {
    const { params } = router;
    try {
      const res = await picketSearch({ orderid: params.orderid });
      setInfo(res['pickets'][0]);
      // const codeCon = get(res,['pickets',0,'codecontent'], '');
      const W = wx.getSystemInfoSync().windowWidth;
      const rate = 750.0 / W;
      const qrcode_w = 300 / rate;

      const codeCon = res['pickets'][0]['codecontent'];
      const qrText = "/pages/PicketResult/index?data=" + codeCon;

      const q = new QRCode('canvas', {
        // usingIn: this,
        text: qrText,
        width: qrcode_w,
        height: qrcode_w,
        padding: 12,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
        callback: (res) => {
          // 生成二维码的临时文件
          console.log(res.path)
          console.log(qrcode_w)
        }
      });
      console.log(q);
    } catch (error) {
      showErrorToast(error.toString())
    }
  });


  return (
    <View className='qr-wrap'>
      <View className='qr-box'>
        <View className='qr-top'>
        
        </View>
        <canvas class='canvas' canvas-id='canvas' bindlongtap='save'></canvas>
        <View className='qr-line1'>扫码关注，浏览两周年限量臻品</View>
        <View className='qr-title'>陈情令艺术展</View>
        <View className='qr-line2'>票务名称：{info.ptitle?`《${info.ptitle}》`: ''}</View>
        <View className='qr-line2'>开始时间：{info.starttime}</View>
        <View className='qr-line2'>结束时间：{info.endtime}</View>
        <View className='qr-buttom'>
        <View className='qr-line'>参展时间：2021年6月25日 ～ 2021年7月25日</View>
        <View className='qr-line'>地址：北京市海淀区复兴路69号凯迪拉克中心M空间(原五棵松体育馆)</View>
        <View className='qr-line3'>本展览最终解释权归主办方所有</View>
        </View>
      </View>
    </View>
  );
};


export default PicketQe;