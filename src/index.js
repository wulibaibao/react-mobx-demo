import React from 'react';
import ReactDOM from 'react-dom';
import  { BrowserRouter as Router } from "react-router-dom";

import App from './Router/index';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react'
import stores from './Store/index'

ReactDOM.render(
    <Router >
        <Provider store={stores}>
            <App />
        </Provider>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
