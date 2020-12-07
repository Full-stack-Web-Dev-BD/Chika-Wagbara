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
import { getReferringPerson } from '../../../actions/referringPersonAction'

const ViewReferringPersonDetails=(props)=> {
  const { id, referringPerson }=props
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    props.getReferringPerson(id)
  }, [])

  return (
    <div className="d-inline ml-auto">
      <span  title="View Full Details" style={{cursor:"pointer"}} onClick={handleClickOpen}><StreetviewIcon/> </span>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">View Referring Person Details </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p style={{ visibility: 'hidden',lineHeight:'0' }}>
              Please  enter required all filed to Update a Branch Please  enter required all
            </p>
          </DialogContentText>
          <ViewDetails referringPerson={ referringPerson } />
          <DialogActions>
              <Button onClick={handleClose} color="primary">Close </Button>
            </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}

ViewReferringPersonDetails.prototype={
  getReferringPerson:PropTypes.func.isRequired,
  referringPerson:PropTypes.object.isRequired
}
const mapStateToPropes=(state)=>({
  referringPerson:state.referringPerson.referringPerson
})

export default connect(mapStateToPropes, { getReferringPerson })(ViewReferringPersonDetails);