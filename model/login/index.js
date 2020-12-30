// 引入请求配置文件
import req from '../../utils/request';

export default {
    // 获取验证码
    getCode(phone) {
        return req.post('/user/sendcode', { phone })
    },

    // 手机号登录 /user/phonelogin
    phonelogin(data) {
        return req.post('/user/phonelogin', {...data })
    },
    //账号/手机号/邮箱 
    accountlogin(data) {
        return req.post('/user/login', {...data })
    },
    // 退出登录 /user/logout
    logout() {
        return req.post('/user/logout')
    }
}