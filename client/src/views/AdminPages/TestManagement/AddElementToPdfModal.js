import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Input, TextField } from '@material-ui/core';

import SpaceBarIcon from '@material-ui/icons/SpaceBar';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddElementToPdfModal({ pdfContent, elementName, addTestToPDF }) {
  const [open, setOpen] = React.useState(false);

  const [position, setPosition] = useState()
  const [title, setTitle] = useState('')








  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addToPdf = () => {
    addTestToPDF({ position: position, title: title, rowType: elementName })
    handleClose()
  }


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {
          elementName === "whiteSpaceRow" ?
            <SpaceBarIcon /> : ''
        }
        {
          elementName === "spaceWithTitle" ?
            <SpellcheckIcon /> : ''
        }
        {
          elementName === "divider" ?
            <DeviceHubIcon /> : ''
        }
      </Button >
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <h3 className="text-center">Select The Position for this element</h3>
            {/* <TextField
              onChange={e => { setPosition(e.target.value) }}
              margin="dense"
              id="gender"
              label="Gender"
              type="text"
              fullWidth
              select
              SelectProps={{
                native: true,
              }}
            >
              <option >Select Position</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
            </TextField> */}
            {
              elementName === 'spaceWithTitle' ?
                <TextField placeholder="Enter Title " label="Enter Title" fullWidth onChange={e => setTitle(e.target.value)} /> : ''
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={e => { handleClose() }} variant="outlined" color="primary">Cancel</Button>
          {
            elementName === 'spaceWithTitle' ?
              <>
                {
                  title ?
                    <Button onClick={e => { addToPdf() }} color="primary" variant="contained">Add</Button> : ''
                }
              </> :
              <>
                {
                  position ?
                    <Button onClick={e => { addToPdf() }} variant="contained" color="primary">Add</Button> : ''
                }
              </>
          }
        </DialogActions>
      </Dialog>
    </div>
  );
}