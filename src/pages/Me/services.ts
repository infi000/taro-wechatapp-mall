import request from '@/utils/request';
import Api from '@/config/api';

/**
 * 28.	订阅消息
 * @param payload
 * @param payload.templateids 多个以英文“,”隔开
 */
export const subMsg = (payload: { templateids: string }) => request.get(Api.subMsg, payload);


export default {};
