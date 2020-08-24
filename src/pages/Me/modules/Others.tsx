import Taro, { useEffect, useState } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { showSuccessToast } from '@/utils/util';
import { subMsg, getAllTemplate } from '../services';
import '../index.scss';
import { isArray } from 'lodash';

const LIST_URL_MAP = [
  { name: '照片墙', url: '/pages/PhotoWall/index' },
  { name: '收藏', url: '/pages/Collect/index' },
  { name: '我的藏品', url: '/pages/MyVip/index' },
  { name: '地址管理', url: '/pages/Address/index' },
  { name: '客服', url: '/pages/Kefu/index' },
];

const tmplIds = ['vqWshHTalxdFaNqhdSWJ8Mkb7HsysV39m1h9Yk-94hY','05mTNKODj3164t8tEgu60oLUyqddSUHtjAOS6i1S0Zs'];
const Others = () => {
  const [tmplIds, setTmplIds]:[string[],any] = useState([]);
  const handleClickItem = (url) => {
    Taro.navigateTo({ url });
  };
  const handleSubscribe = (url) => {
    Taro.requestSubscribeMessage({
      tmplIds:tmplIds,
      success: function(res) {
        const templateids:string[] = [];
        tmplIds.forEach((id) => {
          if(res[id] === 'accept'){
            templateids.push(id);
          }
        });
        if(templateids.length>0){
          subMsg({templateids:templateids.join(",")})
          showSuccessToast('提交成功');
        }
      },
    });
  };
  useEffect(() => {
    getAllTemplate().then(d=>{
      const temids = isArray(d)?d.map(item=>item.templateid):[];
      setTmplIds(temids);
    })
  },[])
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
