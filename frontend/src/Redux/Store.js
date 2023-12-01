import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

import { combinereducer } from './Reducer/Combinereducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(combinereducer, /* preloadedState, */ composeEnhancers(

    applyMiddleware(thunk)
  ));
