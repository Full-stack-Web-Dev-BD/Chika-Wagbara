import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Drawer } from '@material-ui/core';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Bell,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon
} from 'react-feather';
import { Business, BusinessOutlined, DashboardOutlined, GroupWork, PermIdentity, Replay, Rowing, Store, TextsmsTwoTone } from '@material-ui/icons';


import { SidebarNav } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Finance Analytics',
      href: '/admin/dashboard',
      icon: <DashboardOutlined/>
    },
    {
      href: '/admin/activityLog',
      icon: <Rowing/>,
      title: 'Activity Log'
    },
    {
      href: '/admin/branch',
      icon: <Business/>,
      title: 'Branch'
    },
    {
      href: '/admin/staffManagement',
      icon: <GroupWork/>,
      title: 'Staff Management'
    },
    {
      href: '/admin/testManagement',
      icon: <TextsmsTwoTone/>,
      title: 'Test Management'
    },
    {
      href: '/admin/taskManagement',
      icon: <Replay/>,
      title: 'Task Management'
    },
    {
      href: '/admin/reportmanagement',
      icon: <BusinessOutlined/>,
      title: 'Report management'
    },
    {
      href: '/admin/warehouseInventorySetup',
      icon: <Store/>,
      title: 'Warehouse Inventory Setup'
    },
    {
      href: '/admin/account',
      icon: <PermIdentity/>,
      title: 'Account'
    },
    {
      href: '/admin/notifications',
      icon: <Bell/>,
      title: 'Notifications'
    },
    
    // {
    //   href: '/login',
    //   icon: LockIcon,
    //   title: 'Login'
    // },
    // {
    //   href: '/register',
    //   icon: UserPlusIcon,
    //   title: 'Register'
    // },
    // {
    //   href: '/404',
    //   icon: AlertCircleIcon,
    //   title: 'Error'
    // }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
