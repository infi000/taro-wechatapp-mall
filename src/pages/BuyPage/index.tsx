import Taro, { useDidShow, useState, useRouter } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { useSelector, useDispatch } from '@tarojs/redux';
import Addr from './modules/Addr';
import { AtListItem } from 'taro-ui';
import { ImgError } from '../../static/images/index';
import { getMyAddress, getOderDetail, payex } from './services';
import { showToast, showSuccessToast } from '@/utils/util';
import './index.scss';
import { get } from 'lodash';

const BuyPage = () => {
  const [addrList, setAddrList] = useState([]);
  const [orderData, setOrderData] = useState({});
  const [defaultAddr, setDefaultAddt]: [false | any, Function] = useState(false);
  const router = useRouter();
  useDidShow(() => {
    const { params } = router;
    const { orderid } = params;
    getMyAddress({}).then((d) => {
      const { addresses } = d;
      if (!addresses) {
        showToast('没有设置收货地址');
        // 1. 设置地址信息
        setDefaultAddt(false);
        return;
      }
      const defalutAddress = addresses.find((item) => item.status == 1);
      if (!defalutAddress) {
        showToast('没有默认收货地址');
        // 1. 去地址信息中配置
        setDefaultAddt(false);
        return;
      }
      setDefaultAddt(defalutAddress);
    });
    getOderDetail({ orderid }).then((d) => {
      d && setOrderData(d);
    });
  });
  const handlePay = () => {
    if (!defaultAddr) {
      showToast('没有设置收货地址');
      return;
    }
    const { params } = router;
    const { orderid } = params;
    if (!orderid) {
      showToast('没有订单号');
      return;
    }
    const addressid = defaultAddr.id;
    const tag = orderid;
    payex({ addressid, tag, orderfrom: 1, paytype: 'miniwxpay' }).then((d) => {
      const { arraydata } = d || {};
      const { nonceStr, timeStamp, signType, paySign } = arraydata || {};
      const pak = arraydata.package;
      Taro.requestPayment({
        timeStamp: timeStamp + '',
        nonceStr: nonceStr,
        package: pak,
        signType,
        paySign,
        success: function(res) {
          Taro.showToast({
            title: '购买成功',
            icon: 'success',
            duration: 2000,
          });
          // 返回上一级页面。
          setTimeout(() => {
            Taro.navigateBack({ delta: 1 });
          }, 2000);
        },
        fail: function(res) {
          showToast('购买失败');
          console.log(res);
        },
      });
    });
  };
  return (
    <View className='buypage-wrap'>
      <Addr defaultAddr={defaultAddr} />
      <AtListItem
        title={get(orderData, ['gdata', 0, 'title'], '未知')}
        note={`价格：¥${get(orderData, ['gdata', 0, 'price'], '-')}    数量：${get(orderData, ['gdata', 0, 'num'], '未知')}`}
        thumb={get(orderData, ['gdata', 0, 'fpath'], ImgError)}
        // num={get(orderData, ['gdata', 0, 'num'], '未知')}
      ></AtListItem>
      <View className='buypage-btn-wrap'>
        <View className='buypage-info'>实付款： {`¥${get(orderData, ['total'], '-')}`}</View>

        <View className='buypage-btn-pay' onClick={handlePay}>
          立即支付
        </View>
      </View>
    </View>
  );
};

export default BuyPage;
