import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 70
  },
  brand: {
    lineHeight: 1,
    marginRight: 'auto'
  },
  link: {
    marginRight: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  primaryAction: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  menuButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  iconWrapper: {
    minWidth: 40,
  },
  icon: {
    color: theme.palette.text.hint
  },
  drawerContainer: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3),
    width: 300,
  }
}));

export default function Navigation(props) {
  const classes = useStyles();

  const content = {
    'brand': { image: 'nereus-assets/img/nereus-light.png', width: 110 },
    'link1': 'Section One',
    'link2': 'Section Two',
    'link3': 'Section Three',
    'link4': 'Section Four',
    'primary-action': 'Action',
    ...props.content
  };

  let brand;

  if (content.brand.image) {
    brand = <img src={content.brand.image} alt="" width={content.brand.width} />;
  } else {
    brand = content.brand.text || '';
  }

  const [state, setState] = React.useState({ open: false });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, open });
  };

  return (
    <AppBar position="static" color="inherit">
      <Toolbar className={classes.toolbar}>
        <Link href="/" color="primary" underline="none" variant="h5" className={classes.brand}>
          {brand}
        </Link>

        <Link href="/login" className={classes.link}>
          <Button variant="contained" color="secondary" className={classes.primaryAction}> Sign in </Button>
        </Link>
        <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton} onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
        <div className={classes.drawerContainer}>
          <Box mb={1} ml={2} pb={2} borderTop={0} borderLeft={0} borderRight={0} borderColor="background.emphasis">
            <Link href="#" color="primary" underline="none" variant="h5" className={classes.linkBrand}>
              {brand}
            </Link>
            <Button variant="contained" color="secondary" style={{marginLeft:'30px'}} > Sign in </Button>
          </Box>
        </div>
      </Drawer>
    </AppBar>
  );
}