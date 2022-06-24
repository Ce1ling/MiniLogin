import React, { Component } from 'react';
import { NavBar, Toast, Button, InputItem, Modal } from 'antd-mobile';
import './index.css';

export default class UserCenter extends Component {

  state = {
    userData: {
      uname: '',
      pnumber: ''
    }
  }

  componentDidMount() {
    // 如果没有仿token，则退出
    if(!sessionStorage.getItem('token')) {
      Toast.fail('请登录后查看');
      return this.props.history.replace('/login');
    }
    const { search } = this.props.location;
    const slice = search.slice(1, search.length);
    const uname = slice.split('&')[0].split('=')[1];
    const pnumber = slice.split('&')[1].split('=')[1];
    this.setState( {userData: {uname, pnumber}});
  }

  logout = () => {
    // ant design v2 弹窗功能貌似不够完善
    // Modal.prompt('提示', '您确定要退出吗?', () => {}, 'default', '');
    if(window.confirm('确定退出？')) {
      sessionStorage.clear();
      this.props.history.replace('/login');
    }
  }

  render() {
    const { uname, pnumber } = this.state.userData;
    return (
      <div>
        <NavBar mode='light' className='usercenter'>个人中心</NavBar>
        <div className='avatar-container'>
          <img src="https://avatars.githubusercontent.com/u/87267984?v=4" alt="" className='avatar'/>
          <p className='user-name'>欢迎，{ uname }</p>
          <p className='user-data'>个人信息</p>
          <InputItem placeholder={ uname } clear className='nickName'>您的昵称</InputItem>
          <InputItem placeholder={ pnumber } clear className='phoneNumber'>手机号码</InputItem>
          {/* @ts-ignore */}
          <Button type='warning' className='logout' onTouchStart={this.logout}>退出登录</Button>
        </div>
        
      </div>
    )
  }
}
