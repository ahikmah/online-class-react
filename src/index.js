import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import App from './pages/App.js';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import reduxStore from './redux/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
