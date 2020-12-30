import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
    // 引入存储数据配置文件
import {
    getToken,
    getInfo,
    setToken,
    setInfo
} from '../utils/auth';

const store = new Vuex.Store({
    state: {
        info: getInfo(),
        token: getToken()
    },
    mutations: {
        settoken(state, token) {
            state.token = token;
            setToken(token);
        },
        setinfo(state, info) {
            state.info = info;
            setInfo(info);
        }

    },
    actions: {

    },
    getters: {

    },
    modules: {

    }
})
export default store