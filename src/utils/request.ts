import axios from "axios";

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const request = axios.create({
    baseURL: 'http://192.168.251.43:8080',
    timeout: 10000,
});

// request拦截器
// request.interceptors.request.use(config => {
//     // 是否需要设置 token
//     const isToken = (config.headers || {}).isToken === false
//     if (getToken() && !isToken) {
//         config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
//     }
//     return config
// }, error => {
//     console.log(error)
//     Promise.reject(error)
// })

// 响应拦截器
request.interceptors.response.use(res => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;
    // 获取错误信息
    if(res.status === 200){
        return res.data
    }   
    return res;
},
    error => {
        return Promise.reject(error)
    }
)

export default request;