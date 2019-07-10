import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app'
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/errorBoundry';
import CoffeeService from './services/coffeeService';
import CoffeeServiceContext from './components/coffee-diploma-context';
import store from './store';

const coffeeService = new CoffeeService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <CoffeeServiceContext.Provider value={coffeeService}>
                <Router>
                    <App/>
                </Router>
            </CoffeeServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));
