import Vue from 'vue'
import App from './App'
// 引入vuex
import store from './store'
Vue.config.productionTip = false

App.mpType = 'app'

// 设置顶部通知栏的高度
Vue.prototype.$statusBarHeight = uni.getSystemInfoSync().statusBarHeight;

// 
Vue.prototype.$store = store

const app = new Vue({
    store,
    ...App
})
app.$mount()