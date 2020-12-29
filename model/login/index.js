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
    }
}