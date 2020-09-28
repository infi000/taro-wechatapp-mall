import main from './main';
import tabbar from '@/components/Tabbar/store.ts';
import address from '@/pages/Address/store';
import goodsShow from '@/pages/GoodsShow/store';
import goodGoods from '@/pages/GoodGoods/store';
// import searchRes from '@/pages/SearchRes/store';
import collect from '@/pages/Collect/store';
import order from '@/pages/Order/store';
import myvip from '@/pages/MyVip/store';
import photoWall from '@/pages/PhotoWall/store';

export default [
  main,tabbar,address,goodsShow,goodGoods,order,collect,myvip,photoWall
]
