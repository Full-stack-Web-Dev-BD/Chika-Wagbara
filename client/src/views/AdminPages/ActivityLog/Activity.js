import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles(({
  root: {
    height: '100%'
  },
  image: {
    height: 48,
    width: 48
  }
}));

const TopTenBranchActivity = ({ log,title, className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        subtitle={`${log.length} in total`}
        title={title} />
      <Divider />
      <List>
        {log.map((singleEvent, i) => (
          <ListItem
            divider={i < log.length - 1}
            key={singleEvent.id}
          >
            <ListItemAvatar>
              <img
                alt="Product"
                className={classes.image}
                src={singleEvent.imageUrl}
              />
            </ListItemAvatar>
            <ListItemText
              primary={`From ${singleEvent.branchName} `}
              secondary={`Status : ${singleEvent.status}`}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

TopTenBranchActivity.propTypes = {
  className: PropTypes.string
};

export default TopTenBranchActivity;
