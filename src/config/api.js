const MOCK = 'http://gz-cvm-ebuild-ningzhang-dev001.gz.sftcwl.com:7300/mock/5f007cea552f4047ea3d0872/lujia';
const yjw_test = 'http://testxiaochengxu.ntof.club/index.php/MiniApi';
const yjw = 'https://www.tangguostore.com/index.php/MiniApi';
const WxApiRoot = yjw;
// https://www.tangguostore.com/index.php/MiniApi/CC/myowns?openid=oKDX35X2NHYdiZdb8ukgFZmqwM8M
export default {
  searchGoods: WxApiRoot + '/Shop/searchgoods', // 1.	商品搜索（推荐、最热、最新、关键词、分类、页码）
  goodsAllCtype: WxApiRoot + '/Shop/allctype', // 3.	获取商品类型
  goodsDetail: WxApiRoot + '/Shop/detail', // 4.	商品详情
  relatedGoods: WxApiRoot + '/Shop/tjgoods', // 5.	商品关联热门推荐
  isfav: WxApiRoot + '/User/isfav', // 6.	检测是否已收藏商品	
  fav: WxApiRoot + '/User/fav', // 7.	收藏商品
  unfav: WxApiRoot + '/User/unfav', // 8.	删除收藏
  buysRecord: WxApiRoot + '/Shop/buys', // 9. 获取购买记录	
  searchOrder: WxApiRoot + '/Order/search', // 11.	我的订单（全部、待付款、待发货、待收货、交易完成）
  userFavorite: WxApiRoot + '/User/favorite', // 12.	我的收藏	
  myAddress: WxApiRoot + '/User/address', // 13.	我的地址
  saveAddress: WxApiRoot + '/User/saveAddress', // 14.	添加新地址
  setDefaultAddress: WxApiRoot + '/User/defulatAddress', // 设置默认地址
  delAddress: WxApiRoot + '/User/delAddress', // 删除地址
  delOrder: WxApiRoot + '/Order/del', // 16.	删除订单
  getJscode2session:  WxApiRoot + '/User/jscode2session', //	19.	小程序登录更新session
  saveUserData:  WxApiRoot + '/User/saveuserdata', //	20.	添加/更新小程序用户信息
  getMyowns:  WxApiRoot + '/CC/myowns', //	13.	我的藏品myowns/更新小程序用户信息
  postChangecc:  WxApiRoot + '/CC/changecc', //	14.	变更归属（添加传承信息）changecc
  postAdddetail:  WxApiRoot + '/CC/adddetail', //	15.	添加商品信息
  getPricehistory:  WxApiRoot + '/CC/pricehistory', //		2.	历史价格信息
  getBuyhistory:  WxApiRoot + '/CC/buyhistory', //		3.	成交价格信息
  getSearchmsg:  WxApiRoot + '/CC/searchmsg', //		4.	留言信息接口
  getSearchbuymsg:  WxApiRoot + '/CC/searchbuymsg', //	7.	求购信息接口
  postAddmsg:  WxApiRoot + '/CC/addmsg', //		5.	添加留言
  postAddbuymsg:  WxApiRoot + '/CC/addbuymsg', //		8.	添加求购信息
  getSearchcc:  WxApiRoot + '/CC/searchcc', //		10.	商品传承信息接口
  ccUpload:  WxApiRoot + '/CC/upload', //		10.	商品传承信息接口
  searchDynamic:  WxApiRoot + '/DynamicShow/search', //	24.	展示墙产品搜索
  getBgs:  WxApiRoot + '/DynamicShow/getbgs', //	25.	展示墙背景
  payQuery:  WxApiRoot + '/Pay/query', //	23.	查询支付状态
  payex:  WxApiRoot + '/Pay/payex', //	22.	预支付付款
  createOrder:  WxApiRoot + '/User/createorder', //	21.	添加订单
};
