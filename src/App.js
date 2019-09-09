import React, { Component } from 'react';
import './App.css';
import HeaderContent from './public/HeaderContent'
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '张三'
    }
  }
  handleClick = (str) => {
    alert(str)
  }
  render() {
    let {name} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <HeaderContent clickMe={this.handleClick} getname={name}></HeaderContent>
        </header>
      </div>
    );
  }
}

export default App;
