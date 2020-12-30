/**
 * promise 形式 showModal 确认框
 * 
 */
export const showModal = ({
    content
}) => {
    return new Promise((resolve, reject) => {
        uni.showModal({
            title: '提示',
            content: content,
            success: (res) => {
                resolve(res);
            },
            fail: (err) => {
                reject(err);
            }
        });
    })
}

/**
 * 
 * 提示框
 */
export const showToast = ({
    title,
    duration = 1500
}) => {
    uni.showToast({
        title: title,
        icon: 'none',
        duration: duration,

    });
}

/**
 * 页面跳转  
 * 关闭当前页面，跳转到应用内的某个页面。
 */

export const redirectTo = ({
    url
}) => {
    uni.redirectTo({
        url: url
    });
}

/**
 * 页面跳转  
 * 保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面。
 */

export const navigateTo = ({
    url
}) => {
    uni.navigateTo({
        url: url
    });
}

/**
 * 页面跳转  
 * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
 */

export const switchTab = ({
    url
}) => {
    uni.switchTab({
        url: url
    });
}