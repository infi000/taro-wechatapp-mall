const MOCK = 'http://easy-mock.sftcwl.com/mock/5f6a20a67266ef5678785185/wxschool';
const MOCK2 = 'http://easy-mock.sftcwl.com/mock/5f1a8bf410c3f359faddc7df/test';
const yjw_test = 'https://dev.tangguostore.com/index.php/MiniApi';
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
  setDefaultAddress: WxApiRoot + '/User/saveAddress', // 设置默认地址
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
  getCCdetial:  WxApiRoot + '/CC/ccdetail', //		11.	商品传承信息详情接口
  searchDynamic:  WxApiRoot + '/DynamicShow/search', //	24.	展示墙产品搜索
  getBgs:  WxApiRoot + '/DynamicShow/getbgs', //	25.	展示墙背景
  payQuery:  WxApiRoot + '/Pay/query', //	23.	查询支付状态
  getOderDetail:  WxApiRoot + '/Order/getdetail', //	24.	获取订单详情
  payex:  WxApiRoot + '/Pay/payex', //	22.	预支付付款
  createOrder:  WxApiRoot + '/User/createorder', //	21.	添加订单
  subMsg:   WxApiRoot + '/User/submsg', //	28.	订阅消息
  getAllTemplate:   WxApiRoot + '/User/alltemplate', //	31.	获取所有模板信息
  getClassifySearch:   WxApiRoot + '/Classify/search', //	29.	搜索分类集合
  getClassifyGoods:   WxApiRoot + '/Classify/getgoods', //	30.	获取分类集合下的商品
  orderComplete:   WxApiRoot + '/Order/complete', //	30.	获取分类集合下的商品
  picketSearch:   WxApiRoot + '/Picket/search', //	获取我的票
  picketCheck:   WxApiRoot + '/Picket/check', //	验票
};
