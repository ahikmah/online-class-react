import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import rpm from 'redux-promise-middleware';

import { loginReducer, registerReducer } from './Reducers/auth';

const logger = createLogger();
const enhancers = applyMiddleware(rpm, logger);
const reducers = combineReducers({
    loginReducer,
    registerReducer,
});

const reduxStore = createStore(reducers, enhancers);

export default reduxStore;
