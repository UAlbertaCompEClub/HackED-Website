import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { ConnectedRouter, routerMiddleware, routerReducer } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
    combineReducers({
        router: routerReducer
    }), applyMiddleware(middleware)
)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();