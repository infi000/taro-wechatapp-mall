import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtList, AtListItem } from 'taro-ui';

const LIST_URL_MAP = {
  '收藏':'/pages/Collect/index',
  '地址管理':'/pages/Address/index',
  '客服助手':''
};

const Others = () => {
  const handleClickItem = (name) => {

    Taro.navigateTo({url:LIST_URL_MAP[name]})
  }
  return (
    <View>
      <AtList>
        <AtListItem
          title='收藏'
          arrow='right'
          thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
          onClick={()=>handleClickItem('收藏')}
        />
        <AtListItem
          title='地址管理'
          arrow='right'
          thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
          onClick={()=>handleClickItem('地址管理')}
        />
      
        <AtListItem
          title='客服助手'
          arrow='right'
          thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
          onClick={()=>handleClickItem('客服助手')}
        />
      
      </AtList>
    </View>
  );
};

export default Others;
