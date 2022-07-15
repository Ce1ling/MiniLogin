import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './index.css';

export default class UserAgreement extends Component {

  back = () => {
    this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <NavBar 
          className="agreement-nav"
          mode='light' 
          icon={<Icon type="left" />} 
          leftContent='返回' 
          onLeftClick={this.back}
        >用户协议</NavBar>
        <article className='agreement-content'>
          {/* 一些测试文字 */}
          <p>
            ycC Copyright 2022 | ycC 版权所有 2022
          </p>
        </article>
      </div>
    )
  }
}
