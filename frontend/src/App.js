import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import jwt_decode from 'jwt-decode';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import './Style/Update.css';
import store from './store';

//import routes from 'src/routes';
import Branch from './views/AdminPages/Branch/Branch';
import WarehouseInventorySetup from './views/AdminPages/WarehouseInventorySetup';
import ActivityLog from './views/AdminPages/ActivityLog/ActivityLog';
import FinanceAnalytics from './views/AdminPages/FinanceAnalytics/FinanceAnalytics';

// Common Component 
import LandingPage from './views/auth/LandingPage';
import NotFoundView from 'src/views/errors/NotFoundView';
import NotificationView from './views/CommonComponent/NotificationView';
import AccountView from './views/Account/AccountView';
import Staff from './views/AdminPages/Staff/Staff';
import SignIn from './layouts/home/auth/SignIn';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';
import { RouteWithLayout } from './components';
import TaskManagement from './views/AdminPages/TaskManagement/TaskManagement';

const browserHistory = createBrowserHistory();

if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = '/';
  }
}

const App = () => {
 // const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route exact path="/" component={SignIn}  />
          <Switch>
            <RouteWithLayout
              component={FinanceAnalytics}
              exact
              layout={MainLayout}
              path="/admin/dashboard"
            />
          </Switch>
          <Switch>
            <RouteWithLayout
              component={ActivityLog}
              exact
              layout={MainLayout}
              path="/admin/activityLog"
            />
          </Switch>
          <Switch>
            <RouteWithLayout
              component={Branch}
              exact
              layout={MainLayout}
              path="/admin/branch"
            />
          </Switch>
          <Switch>
            <RouteWithLayout
              component={Staff}
              exact
              layout={MainLayout}
              path="/admin/staffManagement"
            />
          </Switch>
          <Switch>
            <RouteWithLayout
              component={TaskManagement}
              exact
              layout={MainLayout}
              path="/admin/taskManagement"
            />
          </Switch>
          <Switch>
            <RouteWithLayout
              component={WarehouseInventorySetup}
              exact
              layout={MainLayout}
              path="/admin/warehouseInventorySetup"
            />
          </Switch>
          <Switch>
            <RouteWithLayout
              component={AccountView}
              exact
              layout={MainLayout}
              path="/admin/account"
            />
          </Switch>
          <Switch>
            <RouteWithLayout
              component={NotificationView}
              exact
              layout={MainLayout}
              path="/admin/Notifications"
            />
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
