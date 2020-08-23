import request from '@/utils/request';
import Api from '@/config/api';

/**
 * 获取商品类型
 */
export const getAllCtype = () => request.get(Api.goodsAllCtype);
/**
 * 商品搜索 返回商品列表
 */
export const getSearchGoods = (payload: ISearchGoodsParams) => request.get(Api.searchGoods, payload);


/**
 * 	29.	搜索分类集合
 * @param payload 
 * @param payload.ctype  显示位置，1顶部显示，2中部显示
 */
export const getClassifySearch = (payload: { ctype: 1|2 }) => request.get(Api.getClassifySearch, payload);

export default {};
