import axios from 'axios';
import ReactDom from 'react-dom';
import Login from '../pages/modalLogin/modalLogin'

// 渲染登录
const renderLogin = () => {
    ReactDom.render(
        <Login visible={true} />,
        document.getElementById('container')
    )
}

// 拦截请求
axios.interceptors.request.use((config) => {
    const { isLogin } = sessionStorage;
    // if (!isLogin) {
    //     renderLogin();
    //     return;
    // }
    return config;
})

// 拦截响应
axios.interceptors.response.use((response) => {
    return response;
}, (err) => {
    return Promise.reject(err);
})

export default axios;