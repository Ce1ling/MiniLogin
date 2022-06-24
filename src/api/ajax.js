// 对axios二次封装，目的是统一处理错误，返回服务器的纯数据
import axios from "axios";
import { Toast } from 'antd-mobile';
import NProgress from 'nprogress';

axios.interceptors.request.use((config) => {
  NProgress.start();  // 进度条开始
  return config;
});
// 响应拦截器
axios.interceptors.response.use(
  response => {
    NProgress.done(); // 进度条完成
    return response
  },
  error => {
    Toast.fail(error.message);
    throw error;
  }
);

export default ajax;