import React from 'react'
import {Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Grid, TextField, Button} from '@mui/material';

const SendEmail = (props) => {
    const {sendeeId, sendeeName, open, setOpen} = props;
    
    const handleClose = ()=> {
        setOpen(false);
    }

    // console.log(sendeeId, 'Sendee ID');

    return(
        <Dialog open={open} onClose={handleClose} maxWidth={'md'}>
          <DialogTitle>
            {`Send Email to ${sendeeName}`}
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
        <Grid container spacing={1}>
         
          <Grid item xs={12}>
            <TextField
              id="from"
              label="Your email address"
              helperText={`Make sure your email address is correct so that ${sendeeName}, can resply to your email`}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="subject"
              label="Subject"
              // defaultValue={`Re: RACE NAME`}
            ></TextField>
          </Grid>
          <Grid item xs={12} >
            <TextField
              id="outlined-multiline-static"
              label="Content of Email"
              multiline
              rows={4}
              defaultValue={`Dear ${sendeeName},`}
              fullWidth={true}
            />
          </Grid>
        </Grid>
        </DialogContent> 
        <DialogActions>
          <Button>SEND</Button>
          <Button onClick={handleClose} >Cancel</Button>
        </DialogActions>
        </Dialog>
    );
    
}

export default SendEmail;