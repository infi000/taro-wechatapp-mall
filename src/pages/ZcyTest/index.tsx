import Taro from '@tarojs/taro';
import { View, Checkbox, Block, Button } from '@tarojs/components';
import { AtList, AtListItem } from 'taro-ui';
import { useCheckBoxList } from '@/utils/hooks';

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
  return (
    <View>
          <Button onClick={handleGet}>获取</Button>
    </View>
  );
};

export default ZcyTest;
