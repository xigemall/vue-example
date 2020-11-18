import request from '@/utils/request';

export async function list(){
    return request({
        url:'/api/bankcode',
        method:'GET',
    })
}
