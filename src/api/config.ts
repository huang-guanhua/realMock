import request from '../utils/request';

// 添加mock
const API_ADD = '/mock/add'

export function addApi(data = {}){
  return request({
    method: 'post',
    url:API_ADD,
    data
  })
}