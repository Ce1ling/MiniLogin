// 路由配置文件
import { Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import UserAgreement from '../pages/UserAgreement';
import UserCenter from '../pages/UserCenter';

export default [
  {
    path: '/login', 
    component: Login
  },
  {
    path: '/usercenter', 
    component: UserCenter
  },
  {
    path: '/useragreement',
    component: UserAgreement
  },
  {
    path: '/',
    render() {
      return <Redirect to='/login'/>
    }
  }
]