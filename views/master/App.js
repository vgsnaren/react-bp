import React, {Component} from 'react';
import Header from '../components/Header.js';
import Home from '../components/Home.js';

export default class App extends Component {
  render() {
    return (
     <div>
        <Header title="Hello World!" />
        <Home />
     </div>
    )
  }
}