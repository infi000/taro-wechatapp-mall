import Taro, { useState, useRouter } from '@tarojs/taro';
import { View, Block } from '@tarojs/components';
import { AtSearchBar } from 'taro-ui';
import '../index.scss';

const SearchBar = () => {
    const router = useRouter();

  const [searchVal,setSearchVal] = useState('');
  const onChange = (text) => {
    setSearchVal(text);
  };
  const onClick = (text) => {
    const { params } = router;
    const { cid, title } = params;
    console.log(searchVal);
    Taro.navigateTo({ url: '/pages/SearchRes/index?from=sortpage&cid='+cid+'&key=' + searchVal +'&title=' + searchVal});
  };
  return <AtSearchBar value={searchVal} onChange={onChange} onActionClick={onClick} />;
};

export default SearchBar;
