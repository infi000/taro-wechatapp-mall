import request from '@/utils/request';
import Api from '@/config/api';

// 11.	我的订单（全部、待付款、待发货、待收货、交易完成）
export const searchOrder = (payload) => request.get(Api.searchOrder, payload);

export default {};
