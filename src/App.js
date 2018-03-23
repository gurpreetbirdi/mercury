import React, { Component } from 'react';
import { PaymentManagement } from 'payment-management'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <div className='body'>
          <PaymentManagement />
        </div>
      </div>
    );
  }
}

export default App;
