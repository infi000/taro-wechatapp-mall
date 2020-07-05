import request from '@/utils/request';
import Api from '@/config/api';

/**
 * 商品详情
 * @param payload
 * @param payload.gid string 商品id
 */
export const getDetail = (payload: { gid: string }) => request.get(Api.goodsDetail, payload);
/**
 * 商品关联热门推荐
 * @param payload
 * @param payload.gid string 商品id
 */
export const getRelatedGoods = (payload: { gid: string }) => request.get(Api.relatedGoods, payload);
/**
 * 获取购买记录
 * @param payload
 * @param payload.gid string 商品id
 * @param payload.offset number 偏移量
 * @param payload.count number 获取数量
 */
export const getBuysRecord = (payload: { gid: string; offset: number; count: number }) => request.get(Api.buysRecord, payload);

export default {};
