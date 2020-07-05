import Taro from '@tarojs/taro';
import { View, Picker } from '@tarojs/components';
import { useSelector, useDispatch } from '@tarojs/redux';
import { AtInput, AtButton, AtList, AtListItem } from 'taro-ui';
// import {getList,getIndex,areaList} from '@/utils/area';

const { useState } = Taro;
const EditAddress = () => {
  const { searchCondition } = useSelector((state) => state.address);
  const dispatch = useDispatch();
  const [ select1 ] = useState([]);
  // const selector = [['美国', '中国', '巴西', '日本'],[1,2,3,4],['s','d','r']];
  const handleUpdateSearchCondition = (payload) => {
    dispatch({ type: 'address/updateSearchCondition', payload });
  };
  // const handleChangePicker = (e) => {
  //   console.log(e.detail.value);
  //   // setSelect1(e.detail.value);
  // };
  const handleCancel = (e) => {
    dispatch({type: 'address/updateIsEditPage',payload:{ type:'create', show: false, data: {} }})
  }
  const handleSubmit = () => {
    console.log('searchCondition', searchCondition);
    console.log("select1",select1);
  };

  return (
    <View>
      <AtInput
        name='name'
        title='收货人'
        type='text'
        placeholder='请输入收货人姓名'
        value={searchCondition.name}
        onChange={(e) => handleUpdateSearchCondition({ name: e })}
      />
      <AtInput
        name='phone'
        title='联系电话'
        type='phone'
        placeholder='请输入收货人手机号'
        value={searchCondition.phone}
        onChange={(e) => handleUpdateSearchCondition({ phone: e })}
      />
      <AtInput
        name='area'
        title='所在地区'
        type='text'
        placeholder='请输入所在地区'
        value={searchCondition.area}
        onChange={(e) => handleUpdateSearchCondition({ phone: e })}
      />
      <AtInput
        name='addr'
        title='详细地址'
        type='text'
        placeholder='请输入详细地址'
        value={searchCondition.addr}
        onChange={(e) => handleUpdateSearchCondition({ phone: e })}
      />

      {/* <Picker mode='multiSelector' range={selector} value={select1} onChange={handleChangePicker} onColumnChange={handleColumnChang}>
        <AtList>
          <AtListItem title='国家地区' />
        </AtList>
      </Picker> */}
      <AtButton formType='submit' onClick={handleSubmit}>
        提交
      </AtButton>
      <AtButton  onClick={handleCancel}>
        取消
      </AtButton>
    </View>
  );
};

export default EditAddress;
