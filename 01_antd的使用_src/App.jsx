import React, { Component } from 'react';
import { Button, DatePicker, Input, message } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import './App.css';
import 'antd/dist/antd.css';

export default class App extends Component {

  success() {
    message.success('This is a success message');
  };

  render() {
    return (
      <div>
        App
        <DatePicker />
        <Button type="primary">Primary</Button>
        <SmileOutlined />
        <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" style={{width: '500px'}}/>
        <Button onClick={this.success}>Success</Button>
      </div>
    )
  }
}
