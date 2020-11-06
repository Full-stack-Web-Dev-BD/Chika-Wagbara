import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
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

const data = [
  {
    id: uuid(),
    name: 'Branch Name',
    imageUrl: '/static/images/products/product_3.png',
    status: "A short description"
  },
  {
    id: uuid(),
    name: 'Branch Name',
    imageUrl: '/static/images/products/product_3.png',
    status: "A short description"
  },
  {
    id: uuid(),
    name: 'Branch Name',
    imageUrl: '/static/images/products/product_3.png',
    status: "A short description"
  },
  {
    id: uuid(),
    name: 'Branch Name',
    imageUrl: '/static/images/products/product_3.png',
    status: "A short description"
  },
  {
    id: uuid(),
    name: 'Branch Name',
    imageUrl: '/static/images/products/product_3.png',
    status: "A short description"
  },
];

const useStyles = makeStyles(({
  root: {
    height: '100%'
  },
  image: {
    height: 48,
    width: 48
  }
}));

const TopTenBranchActivity = ({ className, ...rest }) => {
  const classes = useStyles();
  const [products] = useState(data);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        subtitle={`${products.length} in total`}
        title="Top 10 Branch  Activity"
      />
      <Divider />
      <List>
        {products.map((product, i) => (
          <ListItem
            divider={i < products.length - 1}
            key={product.id}
          >
            <ListItemAvatar>
              <img
                alt="Product"
                className={classes.image}
                src={product.imageUrl}
              />
            </ListItemAvatar>
            <ListItemText
              primary={product.name}
              secondary={`Updated ${product.status}`}
            />
            <IconButton
              edge="end"
              size="small"
            >
              <MoreVertIcon />
            </IconButton>
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