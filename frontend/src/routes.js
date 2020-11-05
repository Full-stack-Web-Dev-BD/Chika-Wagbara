import React from 'react';
import { Navigate } from 'react-router-dom';

// Admin Component
import Branch from './views/AdminPages/Branch';
import StaffManagement from './views/AdminPages/StaffManagement';
import TestManagement from './views/AdminPages/TestManagement';
import WarehouseInventorySetup from './views/AdminPages/WarehouseInventorySetup';
import ActivityLog from './views/AdminPages/ActivityLog/ActivityLog';
import FinanceAnalytics from './views/AdminPages/FinanceAnalytics/FinanceAnalytics';


// Layout
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';




// Common Component 
import LandingPage from './views/auth/LandingPage';
import NotFoundView from 'src/views/errors/NotFoundView';
import NotificationView from './views/CommonComponent/NotificationView';
import AccountView from './views/Account/AccountView';

const routes = [
  
  {
    path: 'admin',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <FinanceAnalytics /> },
      { path: 'activityLog', element: <ActivityLog /> },
      { path: 'branch', element: <Branch /> },
      { path: 'staffManagement', element: <StaffManagement /> },
      { path: 'testManagement', element: <TestManagement /> },
      { path: 'warehouseInventorySetup', element: <WarehouseInventorySetup /> },
      { path: 'account', element: <AccountView /> },
      { path: 'notifications', element: <NotificationView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  // Default  Routes
  // {
  //   path: 'app',
  //   element: <DashboardLayout />,
  //   children: [
  //     { path: 'account', element: <AccountView /> },
  //     { path: 'customers', element: <CustomerListView /> },
  //     { path: 'dashboard', element: <DashboardView /> },
  //     { path: 'products', element: <ProductListView /> },
  //     { path: 'settings', element: <NotificationView /> },
  //     { path: '*', element: <Navigate to="/404" /> }
  //   ]
  // },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LandingPage /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/admin" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
