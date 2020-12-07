import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import StreetviewIcon from '@material-ui/icons/Streetview';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ViewDetails from './ViewDetails'
import { getReferringCenter } from '../../../actions/referringCenterAction'

const ViewReferringCenterDetails=(props)=> {
  const { id, referringCenter }=props
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    props.getReferringCenter(id)
  }, [])

  return (
    <div className="d-inline ml-auto">
      <span  title="View Full Details" style={{cursor:"pointer"}} onClick={handleClickOpen}><StreetviewIcon/> </span>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">View Referring Center Details </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p style={{ visibility: 'hidden',lineHeight:'0' }}>
              Please  enter required all filed to Update a Branch Please  enter required all
            </p>
          </DialogContentText>
          <ViewDetails referringCenter={ referringCenter } />
          <DialogActions>
              <Button onClick={handleClose} color="primary">Close </Button>
            </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}

ViewReferringCenterDetails.prototype={
  getReferringCenter:PropTypes.func.isRequired,
  referringCenter:PropTypes.object.isRequired
}
const mapStateToPropes=(state)=>({
  referringCenter:state.referringCenter.referringCenter
})

export default connect(mapStateToPropes, { getReferringCenter })(ViewReferringCenterDetails);