import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import freeze from 'redux-freeze';
import { reducers } from './reducers/index';
import { sagas } from './sagas/index';
import {
  createRemAction,
  createSizeAction,
  listenResize,
} from 'redux-windowsize';
import {browserHistory} from 'react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

// add the middlewares
const middlewares = [];


// add the router middleware
middlewares.push(routerMiddleware(browserHistory));

// add the saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// add the freeze dev middleware
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(freeze);
}

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: storageSession
  },
  reducers,
);

// create the store
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);
store.dispatch(createSizeAction(window));
store.dispatch(createRemAction(window));
// Dispatch an action every 100ms when window size changes.
listenResize(store, window, 100);

const history = syncHistoryWithStore(browserHistory, store);
sagaMiddleware.run(sagas);

// export
export { store, history, persistor };
