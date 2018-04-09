import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers'
import { Test } from 'global-store-mc'


ReactDOM.render(<Test><App /></Test>, document.getElementById('root'));
registerServiceWorker();
