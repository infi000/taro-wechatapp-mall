import Taro, { useDidShow, useRouter, useState } from '@tarojs/taro';
import { View,Button } from '@tarojs/components';
import { picketCheck } from './services';
import './index.scss';
import { showErrorToast } from '@/utils/util';
import { get } from 'lodash';


const PicketResult = () => {
    const [picketInfo, SetPicketInfo] = useState({});
    const router = useRouter();

  useDidShow(async () => {
    const {params} = router;
    const {data} = params;
        try {
           const res =  await picketCheck({data});
           SetPicketInfo(res);
        } catch (error) {
            showErrorToast(error.toString())
        }

  });
  return (
    <View class='qrres-wrap'>
                <View class='line2'>验票结果:{get(picketInfo,['msg'],'-')}</View>

        <View class='line1'>活动id:{get(picketInfo,['p','id'],'-')}</View>
        <View class='line1'>活动:{get(picketInfo,['p','title'],'-')}</View>
        <View class='line1'>开场时间:{get(picketInfo,['p','stime'],'-')}</View>
        <View class='line1'>结束时间:{get(picketInfo,['p','etime'],'-')}</View>
        <View  class='line3'>
            检票历史：
            { !Array.isArray(picketInfo.checks)? '暂无' :  picketInfo.checks.map((item) => {
                return <View   class='line3-1'>{item['checktime']}检票成功</View>
            })}
        </View>
    </View>
  );
};

export default PicketResult;
