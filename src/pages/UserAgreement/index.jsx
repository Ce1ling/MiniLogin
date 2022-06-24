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
            此App的最终解释权归ycC所有。您所注册的账号您拥有使用权，
            所有权归属ycC所有。如无特殊情况ycC不会干涉您的账号。以下为特殊情况：<br/>
            1. 借卖给第三方人士<br/>
            2. 使用账号进行非法违规行为（包括但不限于：刷单、发布或出售黄赌毒内容，全部请见<a href="#illegal"> 非法违规行为详情</a>）<br/>
            3. 使用账号非法获利，金额超过10000人民币<br/>
            如您有以上行为其中之一，ycC有权收回收、封禁、注销此帐号，并夺回账号所有权。甚至对您的违法行为进行控告
          </p>
        </article>
      </div>
    )
  }
}
