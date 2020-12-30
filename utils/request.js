// 引入uniRequest
import uniRequest from 'uni-request';
// 引入vuex 
import store from '../store'
let token = store.state.token ? store.state.token : '';

// console.log(token);

// 公共地址
uniRequest.defaults.baseURL = 'http://ceshi2.dishait.cn/api/v1';

// #ifdef H5
uniRequest.defaults.baseURL = '/api';
// #endif
uniRequest.defaults.headers.common['token'] = token;


// 请求拦截
uniRequest.interceptors.request.use(
    request => {
        //配置基本信息	
        return request;
    },
    err => {
        console.log('请求失败');
        return Promise.reject(err);
    });

// 响应拦截
uniRequest.interceptors.response.use(function(response) {
    console.log('返回进入拦截成功')
    return Promise.resolve(response.data);
}, function(error) {
    console.log('返回进入拦截失败')
    return Promise.reject(error);
});

export default uniRequest;