const MOCK = 'http://gz-cvm-ebuild-ningzhang-dev001.gz.sftcwl.com:7300/mock/5f007cea552f4047ea3d0872/lujia';
const WxApiRoot = MOCK;

export default {
  goodsDetail: WxApiRoot + '/Shop/detail', // 4.	商品详情
  relatedGoods: WxApiRoot + '/Shop/tjgoods', // 5.	商品关联热门推荐
  goodsAllCtype: WxApiRoot + '/Shop/allctype', // 3.	获取商品类型
  searchGoods: WxApiRoot + '/Shop/searchgoods', // 1.	商品搜索（推荐、最热、最新、关键词、分类、页码）
  buysRecord: WxApiRoot + '/Shop/buys', // 9. 获取购买记录	
};
