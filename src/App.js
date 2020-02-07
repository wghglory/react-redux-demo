import React, { Component } from 'react';

import { Provider } from 'react-redux';

import { store } from './store';

import Hello from './pages/Hello';
import User from './pages/User';
import './styles.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Provider store={store}>
        <Hello name={this.state.name} />
        <hr />
        <User />
      </Provider>
    );
  }
}
