import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer , inject } from 'mobx-react'

@inject('store')
@observer
class App extends Component {
  render() {
    console.log(this.props)
    const store = this.props.store
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" onClick={store.adds}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {store.numbers}
      </div>
    );
  }
}

export default App;
