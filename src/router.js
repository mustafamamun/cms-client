import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import { history, store } from './store.js';
import App from './components/App';
import DashboardContainer from './components/dashboard/DashBoardContainer';
import DetailsContainer from './components/DetailsContainer/DetailsContainer';
import ListContainer from './components/ListContainer/ListContainer';
import NewContainer from './components/NewContainer/NewContainer';
import AdminContainer from './components/admin/AdminContainer';
import NotFound from './components/NotFound/NotFound';

// build the router
const router = (
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to="home" />
        <Route path="admin" component={AdminContainer} />
        <Route path="dashboard" component={DashboardContainer} />
        <Route path="list" component={ListContainer} />
        <Route path="list">
          <Route path="list">
            <Route path=":id" component={DetailsContainer} />
          </Route>
        </Route>
        <Route path="addNew" component={NewContainer} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
);

// export
export { router };
