import request from '../utils/request';

// 获取列表
const API_LIST = '/mock/find'

export function getList(params = {}){
  return request({
    method: 'get',
    url:API_LIST,
    params
  })
}