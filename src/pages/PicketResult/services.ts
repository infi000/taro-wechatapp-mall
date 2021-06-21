import request from '@/utils/request';
import Api from '@/config/api';


export const picketCheck = (payload) => request.get(Api.picketCheck, payload);


export default {};
