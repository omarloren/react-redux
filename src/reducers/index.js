import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const AppReducers = combineReducers({
    routing: routerReducer
});

export default AppReducers