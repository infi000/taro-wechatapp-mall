import Taro, { useEffect } from '@tarojs/taro';
import { View, Checkbox, Block } from '@tarojs/components';
import { AtList, AtListItem } from 'taro-ui';
import '../index.scss';

interface IProps {
  info: [
    {
      id: Array<object>;
      [key: string]: any;
    }
  ];
}

const ListItem = (props: IProps) => {
  const { info } = props;
  console.log('info', info);
  return (
    <View className='list-group-wrap'>
      {(!info || !info[0]) && <View> 暂无信息</View>}
      <AtList hasBorder={false}>
        {info &&
          info[0] &&
          info[0].id &&
          info[0].id.map((item) => {
            const { title, price, fpath, id } = item;
            return (
              <View className='list-item-wrap' key={id}>
       
                  <AtListItem
                    title={title}
                    note={`¥${price}`}
                    thumb={fpath}
                    onClick={() => {
                      console.log('点击了');
                    }}
                  ></AtListItem>
        
              </View>
            );
          })}
      </AtList>
    </View>
  );
};

export default ListItem;
