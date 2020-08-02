import Taro from '@tarojs/taro';
import { AtButton, AtInput } from 'taro-ui';
import { View, Block, Image } from '@tarojs/components';
import { useSelector, useDispatch } from '@tarojs/redux';
import { postAdddetail } from '../services';
import '../index.scss';

const { useState } = Taro;
const defaultForm: { [key: string]: any } = {};
const GoodsAdd = () => {
  const { pageInfo } = useSelector((state) => state.myvip);
  const dispatch = useDispatch();
  const [form, setForm] = useState(defaultForm);
  const { data } = pageInfo || {};
  const handleUpdateForm = (opt: any) => {
    setForm((params) => {
      return { ...params, ...opt };
    });
  };
  const handleSubmit = () => {
    console.log(form);
    postAdddetail({ ...form }).then((d) => {
      handleCancel();
    });
  };
  const handleCancel = () => {
    dispatch({ type: 'myvip/updatePageInfo', payload: { type: 'goods', data: data } });
  };
  return (
    <Block>
      <View className='myvip-wrap'>
        <AtInput
          className='goods-input'
          required
          name='ccid'
          title='持有者手机号'
          value={form.ccid}
          onChange={(e) => handleUpdateForm({ ccid: e })}
        />
        <AtInput
          className='goods-input'
          required
          name='detail'
          title='物品描述'
          value={data.detail}
          onChange={(e) => handleUpdateForm({ detail: e })}
        />
        <AtInput
          className='goods-input'
          required
          name='cstatus'
          title='物品状态描述'
          value={data.cstatus}
          onChange={(e) => handleUpdateForm({ cstatus: e })}
        />
        <View className='edit-btn-wrap'>
          <View className='btn-submit'>
            <AtButton type='primary' size='small' onClick={handleSubmit}>
              提交
            </AtButton>
          </View>

          <AtButton size='small' onClick={handleCancel}>
            取消
          </AtButton>
        </View>
      </View>
    </Block>
  );
};

export default GoodsAdd;
