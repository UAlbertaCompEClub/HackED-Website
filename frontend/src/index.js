import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { ConnectedRouter, routerMiddleware, routerReducer } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import authR from './Reducers/auth';
import authS from './Sagas/auth';
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'

function* rootSaga() {
    yield all([
        ...authS,
        // ...eventsS,
        // ...scheduleS,
        // ...sponsorsS,
        // ...userS,
    ])
}

const history = createHistory();

const sagaMiddleware = createSagaMiddleware(rootSaga)

const middlewares = [
    routerMiddleware(history),
    sagaMiddleware
];



const store = createStore(
    combineReducers({
        auth: authR,
        router: routerReducer
    }), composeWithDevTools(applyMiddleware(...middlewares))
)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter store={store} history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
