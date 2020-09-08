import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { useSelector, useDispatch } from '@tarojs/redux';
import '../index.scss';

const ADDR = {
  realname: 'xingm',
  cellphone: '18555555555',
  province: '河北',
  city: '张家口',
  area: '海淀',
  addr: '田村山南路田村山南路田村山南路田村山南路田村山南路田村山南路',
};
interface IProp {
  defaultAddr: false | any;
}
const Addr = (props: IProp) => {
  const { defaultAddr } = props;
  const handleGoTo = () => {
    Taro.navigateTo({ url: '/pages/Address/index' });
  };
  return (
    <View>
      {defaultAddr ? (
        <View className='address-wrap'>
          <View className='address-con'>
            <View className='at-row address-con-top'>
              <View className='at-col at-col-1 at-col--auto'>{defaultAddr.realname}</View>
              <View className='at-col'>{defaultAddr.cellphone}</View>
            </View>
            <View className='at-row  address-con-mid'>
              <View className='at-col-12'>
                <Text className='addr-text'> {defaultAddr.province}</Text>
                <Text className='addr-text'> {defaultAddr.city}</Text>
                <Text className='addr-text'> {defaultAddr.area}</Text>
                <Text className='addr-text'> {defaultAddr.address}</Text>
              </View>
            </View>
          </View>
          <View className='address-btn-con'>
            <View className='address-edit-btn' onClick={handleGoTo}>
              编辑
            </View>
          </View>
        </View>
      ) : (
        <View className='no-address-con'>
          <View className='no-address-text'>
            暂无默认地址{' '}
            <Text className='no-address-edit' onClick={handleGoTo}>
              点击编辑
            </Text>
          </View>
         
        </View>
      )}
    </View>
  );
};

export default Addr;
