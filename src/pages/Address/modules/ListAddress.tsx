import Taro from '@tarojs/taro';
import { View, Block } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { useSelector, useDispatch } from '@tarojs/redux';
import { useCheckBoxList } from '@/utils/hooks';

const ListAddress = () => {
  const { list } = useSelector((state) => state.address);
  const dispatch = useDispatch();
  /**
   * 添加新地址
   */
  const handleAddAddress = () => {
    dispatch({ type: 'address/updateModal', payload: { show: true, type: 'create',data:{} } });
  };
  /**
   * 编辑
   */
  const handleEditAddress = (item) => {
    dispatch({ type: 'address/updateModal', payload: { show: true, type: 'edit',data:item } });
  }
  const handleDelAddress = (item) => {
    console.log("删除");
  }
  return (
    <View>
      {list.map((item) => {
        const { name, phone, address, choose = false } = item;
        return (
          <View key={address}>
            <View className='at-row'>
              <View className='at-col at-col-1 at-col--auto'>{name}</View>
              <View className='at-col'>{phone}</View>
            </View>
            <View className='at-row'>
              <View className='at-col-12'>{address}</View>
            </View>
            <View className='at-row'>
              <View className='at-col-3'>asdfasdf</View>
              <View className='at-col-3  at-col__offset-2'>
                <AtButton size='small' onClick={() => handleEditAddress(item)}>编辑</AtButton>
              </View>
              <View className='at-col-3'>
                <AtButton type='primary' size='small' onClick={() => handleDelAddress(item)}>
                  删除
                </AtButton>
              </View>
            </View>
          </View>
        );
      })}
      <View>
        <AtButton type='primary' size='small' onClick={handleAddAddress}>
          +添加新地址
        </AtButton>
      </View>
    </View>
  );
};

export default ListAddress;
