import Taro from '@tarojs/taro';
import { View, Block, ScrollView } from '@tarojs/components';
import GoodsList from '@/components/GoodsList';
import { useSelector, useDispatch } from '@tarojs/redux';
import { getClassifyGoods } from './services';
import './index.scss';

const { useRouter, useEffect, useState } = Taro;

const SortPage = () => {
  const router = useRouter();
  const [formatList, setFormatList] = useState([]);
  useEffect(() => {
    const { params } = router;
    const cid = params.cid;
    getClassifyGoods({ cid, offset: 50, count: 0 }).then((d) => {
      console.log(d);
    });
  }, []);
  return (
    <View className='list-wrap' style={{ 'paddingBottom': '200px' }}>
      <GoodsList list={formatList} />
    </View>
  );
};

export default SortPage;
