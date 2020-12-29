/**
 * promise 形式 showModal
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
 * promise 形式 showToast
 * 
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