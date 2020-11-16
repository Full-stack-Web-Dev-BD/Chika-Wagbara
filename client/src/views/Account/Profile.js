import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { connect } from 'react-redux'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles
} from '@material-ui/core';
import { setCurrentUser, uploadPhoto } from '../../actions/authActions'

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100
  }
}));

const Profile = (props) => {
  const { className, rest }=props
  const { user }=props.auth
  const classes = useStyles();

  const [photo, setPhoto]=useState('');


  const logout=()=>{
    window.localStorage.removeItem('jwtToken')
    window.location.href="/"
  }

  useEffect(()=>{
    const formData= new FormData();
    formData.append('photo', photo)
    props.uploadPhoto(user.id, formData)
  }, [photo])

  const handlePhoto=(e)=>{
    e.preventDefault()
    const formData= new FormData();
    formData.append('photo', photo)

  }
  console.log(user)
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          {
           user.photo?
           <img src={`http://localhost:5000/${user.photo}`} width="100" height="100" />:
           <Avatar
            className={classes.avatar}
          />
          }
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {user.name}
          </Typography>
          <Typography
            className={classes.dateText}
            color="textSecondary"
            variant="body1"
          >
            {user.user_role}
          </Typography>
          <div className="text-center mt-5 mb-2">
          <Button onClick={logout} color="secondary" size="small" variant="contained" className="btn-danger">Log out</Button>
          </div>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
        >
          Upload picture
        </Button>
        <input type="file" 
          //style={{display:'none'}} 
          id="uploadPP"
          name="photo"
          onChange={e=> setPhoto(e.target.files[0])}
        />
      </CardActions>
    </Card>
  );
};
Profile.propTypes = {
  uploadPhoto: PropTypes.func.isRequired,
  setCurrentUser: PropTypes.func.isRequired,
  className: PropTypes.string,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {setCurrentUser, uploadPhoto})(Profile);
