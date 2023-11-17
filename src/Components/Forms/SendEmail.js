import React from 'react'
import {Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Grid} from '@mui/material';

const SendEmail = (props) => {
    const {sendeeId, open, setOpen} = props;
    
    const handleClose = ()=> {
        setOpen(false);
    }

    // console.log(sendeeId, 'Sendee ID');

    return(
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle maxWidth={'md'}>
            {`Send Email to ... ${sendeeId}`}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          X
        </IconButton>
        <DialogContent>
        <Grid container spacing={1}></Grid>
        </DialogContent> 
        <DialogActions></DialogActions>
        </Dialog>
    );
    
}

export default SendEmail;