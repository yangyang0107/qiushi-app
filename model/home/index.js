// 引入请求配置文件
import req from '../../utils/request';

// 获取文章所有分类
export const postclass = () => {
    return req.get('/postclass')
}

// 获取所有话题分类
export const topicclass = (id, page) => {
    return req.get(`/topicclass/${id}/topic/${page}`)
}

// 获取热门话题
export const hottopic = () => {
    return req.get('/hottopic')
}