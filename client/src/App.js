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
import Product from './views/AdminPages/Product/Product';
import OrderInventory from './views/AdminPages/OrderInventory/OrderInventory';
import WarehouseInventorySetup from './views/AdminPages/WarehouseInventory/WarehouseInventorySetup';
import Sample from './views/AdminPages/Sample/Sample';
import ActivityLog from './views/AdminPages/ActivityLog/ActivityLog';
import FinanceAnalytics from './views/AdminPages/FinanceAnalytics/FinanceAnalytics';
import Patient from './views/AdminPages/Patient/Patient'
import Guardian from './views/AdminPages/Guardian/Guardian';
import ReferringPerson from './views/AdminPages/ReferringPerson/ReferringPerson'
import ReferringCenter from './views/AdminPages/ReferringCenter/ReferringCenter'
import AddPatientTest from './views/AdminPages/AddPatientTest/AddPatientTest'
import PatientTest from './views/AdminPages/PatientTest/PatientTest'
import PatientTestDetails from './views/AdminPages/PatientTest/PatientTestDetails'
import AllBill from './views/AdminPages/AllBill/AllBill'
import EditPatientTest from './views/AdminPages/AllBill/EditPatientTest/EditPatientTest'

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
import TestManagement from './views/AdminPages/TestManagement/TestManagement';
import ReportManagement from './views/AdminPages/ReportManagement/ReportManagement';
import HomeIndex from './pages/HomeIndex';

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
        <Route exact path="/" component={HomeIndex}  />
          <Route exact path="/login" component={SignIn}  />
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
              component={Patient}
              exact
              layout={MainLayout}
              path="/admin/patient"
            />
          </Switch>
          <Switch>
            <RouteWithLayout
              component={AddPatientTest}
              exact
              layout={MainLayout}
              path="/admin/addPatientTest"
            />
          </Switch>
          <Switch>
            <RouteWithLayout
              component={PatientTest}
              exact
              layout={MainLayout}
              path="/admin/patientTest"
            />
          </Switch>
          <Switch>
            <RouteWithLayout
              component={PatientTestDetails}
              exact
              layout={MainLayout}
              path="/admin/patientTest/:id"
            />
          </Switch>
          <Switch>
            <RouteWithLayout
              component={AllBill}
              exact
              layout={MainLayout}
              path="/admin/allBill"
            />
          </Switch>
          <Switch>
            <RouteWithLayout
              component={EditPatientTest}
              exact
              layout={MainLayout}
              path="/admin/allBill/:id"
            />
          </Switch>
          <Switch>
            <RouteWithLayout
              component={Guardian}
              exact
              layout={MainLayout}
              path="/admin/guardian"
            />
          </Switch>
          <Switch>
            <RouteWithLayout
              component={ReferringPerson}
              exact
              layout={MainLayout}
              path="/admin/referringPerson"
            />
          </Switch>
          <Switch>
            <RouteWithLayout
              component={ReferringCenter}
              exact
              layout={MainLayout}
              path="/admin/referringCenter"
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
              component={Product}
              exact
              layout={MainLayout}
              path="/admin/product"
            />
          </Switch>
          <Switch>
            <RouteWithLayout
              component={OrderInventory}
              exact
              layout={MainLayout}
              path="/admin/order"
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
              component={TestManagement}
              exact
              layout={MainLayout}
              path="/admin/testManagement"
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
              path="/admin/warehouseInventory"
            />
          </Switch>
          <Switch>
            <RouteWithLayout
              component={Sample}
              exact
              layout={MainLayout}
              path="/admin/sample"
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
          <Switch>
            <RouteWithLayout
              component={ReportManagement}
              exact
              layout={MainLayout}
              path="/admin/reportmanagement"
            />
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
