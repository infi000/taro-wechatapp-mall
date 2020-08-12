import Taro, { useEffect } from '@tarojs/taro';
import { View, Checkbox, Block } from '@tarojs/components';
import { AtList, AtListItem } from 'taro-ui';
import { isArray } from 'lodash';
import { ImgError } from '../../../static/images/index';

import '../index.scss';

interface IProps {
  list: [
    {
      id: Array<TObj<any>>;
      [key: string]: any;
    }
  ];
  status: string | number;
  handleDelOrder: (id: StringNumber, status: StringNumber) => any;
}

const ListItem = (props: IProps) => {
  const { list, status, handleDelOrder } = props;
  return (
    <View className='list-group-wrap'>
      {(!list || !list[0]) && <View> 暂无信息</View>}
      <AtList hasBorder={false}>
        {isArray(list) &&
          list.map((item) => {
            const { id: ids, total, orderid,status='wu' } = item;
            const { title, fpath } = ids[0];
            return (
              <View className='list-item-wrap' key={orderid}>
                <AtListItem title={title || '-'} note={`¥${total}`} thumb={fpath || ImgError}></AtListItem>
                {status !== '1' && (
                  <View className='list-item-btn-con'>
                    <View className='btn-default' onClick={() => handleDelOrder(orderid, status)}>
                      删除订单 {status}
                    </View>
                  </View>
                )}
              </View>
            );
          })}
      </AtList>
    </View>
  );
};

export default ListItem;
