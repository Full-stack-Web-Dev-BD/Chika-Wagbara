import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Bell } from 'react-feather';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.background.paper,
  },
}));

const notification = [
    {
        text:'This is Notification !',
    },
    {
        text:'This is Notification !',
    },
    {
        text:'This is Notification !',
    },
    {
        text:'This is Notification !',
    },
];

export default function SimpleListMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <span >
        <span onClick={handleClickListItem}> <Bell/> </span>
      </span>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {notification.map((el, index) => (
          <MenuItem
            key={index}
          >
              <Link to="/admin/notifications" onClick={e=>handleClose()}>  {el.text}</Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
