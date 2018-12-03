import 'babel-polyfill';
import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store.js';
import { router } from './router.js';
import registerServiceWorker from './registerServiceWorker';



// render the main component
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <div>
        {router}
      </div>
    </PersistGate>
  </Provider>,
  document.getElementById('app'),
);

registerServiceWorker();
