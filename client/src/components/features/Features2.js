import React from 'react';
import clsx from  'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import { blue, yellow, green, purple, pink, deepOrange } from '@material-ui/core/colors';

import ApartmentIcon from '@material-ui/icons/Apartment';

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage: 'url("nereus-assets/img/bg/pattern1.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },  
  iconWrapper: {
    backgroundColor: theme.palette.primary.light,
  },
  icon1: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  icon2: {
    backgroundColor: yellow[100],
    color: yellow[800],
  },
  icon3: {
    backgroundColor: green[100],
    color: green[600],
  },
  icon4: {
    backgroundColor: purple[100],
    color: purple[600],
  },
  icon5: {
    backgroundColor: pink[100],
    color: pink[600],
  },
  icon6: {
    backgroundColor: deepOrange[100],
    color: deepOrange[600],
  },
}));

export default function Features(props) {
  const classes = useStyles();

  const content = {
    'badge': 'LOREM IPSUM',
    'header-p1': 'Donec lacinia',
    'header-p2': 'turpis non sapien lobortis pretium',
    'description': 'Integer feugiat massa sapien, vitae tristique metus suscipit nec.',
    'col1-header': 'Lorem ipsum dolor sit amet',
    'col1-desc': 'In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.',
    'col2-header': 'Lorem ipsum dolor sit amet',
    'col2-desc': 'In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.',
    'col3-header': 'Lorem ipsum dolor sit amet',
    'col3-desc': 'In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.',
    'col4-header': 'Lorem ipsum dolor sit amet',
    'col4-desc': 'In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.',
    'col5-header': 'Lorem ipsum dolor sit amet',
    'col5-desc': 'In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.',
    'col6-header': 'Lorem ipsum dolor sit amet',
    'col6-desc': 'In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.',
    ...props.content
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={6}>
          <Box textAlign="center" mb={9}>
            <Container maxWidth="sm">
              <Typography variant="overline" color="textSecondary">{content['badge']}</Typography>
              <Typography variant="h3" component="h2" gutterBottom={true}>
                <Typography variant="h3" component="span" color="primary">{content['header-p1']} </Typography>
                <Typography variant="h3" component="span">{content['header-p2']}</Typography>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>
            </Container>
          </Box>          
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex">
                <Box pr={5}>
                  <Avatar variant="rounded" className={ clsx(classes.iconWrapper, classes.icon1) }>
                    <ApartmentIcon />
                  </Avatar>
                </Box>
                <div>
                  <Typography variant="h6" component="h3" gutterBottom={true}>{content['col1-header']}</Typography>
                  <Typography variant="body2" component="p" color="textSecondary">{content['col1-desc']}</Typography>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex">
                <Box pr={5}>
                  <Avatar variant="rounded" className={ clsx(classes.iconWrapper, classes.icon2) }>
                    <ApartmentIcon />
                  </Avatar>
                </Box>
                <div>
                  <Typography variant="h6" component="h3" gutterBottom={true}>{content['col2-header']}</Typography>
                  <Typography variant="body2" component="p" color="textSecondary">{content['col2-desc']}</Typography>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex">
                <Box pr={5}>
                  <Avatar variant="rounded" className={ clsx(classes.iconWrapper, classes.icon3) }>
                    <ApartmentIcon />
                  </Avatar>
                </Box>
                <div>
                  <Typography variant="h6" component="h3" gutterBottom={true}>{content['col3-header']}</Typography>
                  <Typography variant="body2" component="p" color="textSecondary">{content['col3-desc']}</Typography>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex">
                <Box pr={5}>
                  <Avatar variant="rounded" className={ clsx(classes.iconWrapper, classes.icon4) }>
                    <ApartmentIcon />
                  </Avatar>
                </Box>
                <div>
                  <Typography variant="h6" component="h3" gutterBottom={true}>{content['col4-header']}</Typography>
                  <Typography variant="body2" component="p" color="textSecondary">{content['col4-desc']}</Typography>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex">
                <Box pr={5}>
                  <Avatar variant="rounded" className={ clsx(classes.iconWrapper, classes.icon5) }>
                    <ApartmentIcon />
                  </Avatar>
                </Box>
                <div>
                  <Typography variant="h6" component="h3" gutterBottom={true}>{content['col5-header']}</Typography>
                  <Typography variant="body2" component="p" color="textSecondary">{content['col5-desc']}</Typography>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex">
                <Box pr={5}>
                  <Avatar variant="rounded" className={ clsx(classes.iconWrapper, classes.icon6) }>
                    <ApartmentIcon />
                  </Avatar>
                </Box>
                <div>
                  <Typography variant="h6" component="h3" gutterBottom={true}>{content['col6-header']}</Typography>
                  <Typography variant="body2" component="p" color="textSecondary">{content['col6-desc']}</Typography>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}