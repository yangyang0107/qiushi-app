const TOKEN_KEY = 'token';
const INFO_KEY = 'info';

// 保存token
export function setToken(token) {
    uni.setStorageSync(TOKEN_KEY, token);

}
// 保存用户信息
export function setInfo(info) {
    uni.setStorageSync(INFO_KEY, info);
}
// 获取token
export function getToken() {
    return uni.getStorageSync(TOKEN_KEY);
}
// 获取用户信息
export function getInfo() {
    return uni.getStorageSync(INFO_KEY);
}

// 清除
export function clear() {
    uni.clearStorageSync()
}