import request from '@/utils/request';
import Api from '@/config/api';


export const getMyowns = (payload) => request.get(Api.getMyowns, payload);

export const postChangecc = (payload) => request.post(Api.postChangecc, payload);
export const goodsDetail = (payload) => request.get(Api.goodsDetail, payload);

export const getPricehistory = (payload) => request.get(Api.getPricehistory, payload);
export const getBuyhistory = (payload) => request.get(Api.getBuyhistory, payload);


export default {};
