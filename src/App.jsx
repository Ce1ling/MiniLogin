import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import routers from './config/routers';
import './App.css';
import './utils/rem.js';

export default class App extends Component {

  

  render() {
    return (
      <div className='app'>
        <Switch>
          {
            routers.map((item) => {
              return <Route {...item} key={item.path} />
            })
          }
        </Switch>
      </div>
    )
  }
}
