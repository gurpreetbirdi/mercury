import React, { Component } from 'react';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import './App.css'
import {PM, PaymentManager} from 'payment-management-mc'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <div className='body'>
          <PaymentManager/>
        </div>
      </div>
    );
  }
}

export default App;
