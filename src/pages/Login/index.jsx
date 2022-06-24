import React, { Component } from 'react';
import { NavBar, InputItem, Button, Toast, Modal } from 'antd-mobile';
// import axios from 'axios';
import github from './imgs/github.png';
import wechat from './imgs/wechat.png';
import qq from './imgs/qq.png';
import { phoneReg, verifyCodeReg } from '../../utils/reg';
import './index.css';

export default class Login extends Component {

  state = {
    phone: '',              // 手机号
    verifyCode: '',         // 验证码
    createVerifyCode: '',   // 存储创建的验证码
    time: 60,               // 验证码冷却时间
    canClick: false,        // 验证码按钮是否能点击
  }

  saveData = (type) => {
    return (value) => {
      if (type === 'phone' && phoneReg.test(value)) return this.setState({ phone: value });
      if (type === 'verifyCode' && verifyCodeReg.test(value)) return this.setState({ [type]: value });
      this.setState({ [type]: '' });
    }
  }
  getVerify = () => {
    return () => {
      const { phone, canClick } = this.state;
      if(canClick) return false;    // 判断是否为禁用，
      if (!phone) return Toast.fail('您的手机号码不合法', 1);
      this.setState({ canClick: true });
      this.timer = setInterval(() => {
        let { time } = this.state;
        time--;
        if(time < 0) {
          clearInterval(this.timer);
          return this.setState({ canClick: false, time: 60 });
        }
        this.setState({time});
      }, 1000);
      // 生成验证码，如果你有服务器，请使用axios或自己的封装请求。axios.post('your back end server url', { phone });
      const createVerifyCode = (Math.random() * 9999999).toString().slice(0, 6);
      this.setState({createVerifyCode});
      Modal.alert('提示', `由于没有服务器，为您随机生成了验证码，为：${createVerifyCode}。请您牢记`);
      // console.log('测试使用。手机号是:', phone, '验证码是:', this.state.verifyCode, '生成的验证码是:', createVerifyCode);
    }
  }
  loginBtn = () => {
    const { phone, verifyCode,createVerifyCode } = this.state;
    if (phone && (createVerifyCode === verifyCode)) {
      Toast.success('登录成功，欢迎您');
      sessionStorage.setItem('token', 'encrypt');   // 模仿token
      this.props.history.push(`/usercenter?pnumber=${phone}&uname=${phone}`);
    }
    else Toast.fail('登录失败，手机号或验证码不正确');
  }
  githubLogin = () => {
    window.location.href = 'https://github.com/login/oauth/authorize'
  }



  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { time, canClick, phone, verifyCode } = this.state;
    return (
      <div className='login-container'>
        <NavBar mode='light'>手机验证码登录</NavBar>
        <InputItem placeholder='请输入手机号' clear onChange={this.saveData('phone')} />
        <div className='verify-container'>
          <InputItem placeholder='请输入验证码' clear onChange={this.saveData('verifyCode')} />
          <button 
            className='verify-btn' 
            onTouchStart={this.getVerify()}
            disabled={canClick}
            style={{color: !canClick ? '#5ed9ef' : 'gray'}}
          >获取验证码{canClick ? `(${time})` : ''} </button>
        </div>
        {/* @ts-ignore */}
        <Button 
          type='primary' 
          onTouchStart={this.loginBtn}
          disabled={(phone && verifyCode) ? false : true}
        >登录</Button>
        <div className='other-login-container'>
          <span className='other-login-text'>其他登录方式</span>
          <div className='other-login-type'>
            <img src={github} alt="" onTouchStart={this.githubLogin}/>
            <img src={wechat} alt=""/>
            <img src={qq} alt=""/>
          </div>
          <p className='login-protocol'>
            如果您未注册，系统会自动帮你注册登录，登录即代表你同意
            <a href='/useragreement' >《用户协议》</a>
          </p>
        </div>
      </div>
    )
  }
}
