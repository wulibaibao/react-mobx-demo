import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react'
import stores from './stors'

ReactDOM.render(
    <Provider store={stores}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
