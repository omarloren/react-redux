import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk  from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
import mainReducer from './reducers';
import { routerMiddleware } from 'react-router-redux'
import {  Router,  Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import MainContainer from './views/Main/Container'

import './App.css';
import 'semantic-ui-css/semantic.min.css';

const history = createHistory();

let logger = createLogger();
let enhacer = compose(
    applyMiddleware(thunk, logger, routerMiddleware(history))
);

let store = createStore(mainReducer, enhacer);
store.dispatch({
    type: 'INITIAL_EVENT'
})

render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route component={MainContainer} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
