import React, {useState, useEffect} from 'react';
import {
    Dialog, DialogTitle, DialogContent, TextField, InputLabel, Select, MenuItem, FormLabel, FormControl, IconButton, DialogActions, Button, Grid
} from '@mui/material';
import SelectGender from './SelectGender';


const InputFormPacers  = (props) => {
    const {participantFormType, open, setOpen} = props;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');
    const [partnerGender, setPartnerGender] = useState('none')
    const [distance, setDistance] = useState(0);
    const [timeEstimate, setTimeEstimate] = useState('');
    const [familiarity, setFamiliarity] = useState('')
    const [moreInfo, setMoreInfo] = useState('');
    console.log('all the states', name, email, age, gender, partnerGender, distance, timeEstimate, familiarity, moreInfo);

    useEffect(() => {
        setGender('');
        setDistance(0);
    },[])

    const handleChangeGender = (event) => {
        setGender(event.target.value)
    };
    const handleChangePartnerGender = (event) => {
        setPartnerGender(event.target.value)
    };

    const handleChangeDistance = (event) => {
        setDistance(event.target.value)
    };
    const handleClose = () => {
        setOpen(false);
        setName('');
        setEmail('');
        setAge(0);
        setGender('');
        setDistance(0);
        setPartnerGender('');
        setTimeEstimate('');
    }
 return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle maxWidth={'md'}>
            {`${participantFormType.toUpperCase()} add your info to the board`} 
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
            <Grid item xs={12} md={6}>
                {/* <InputLabel id="name">Name</InputLabel> */}
                <TextField id='name' label="Name" onChange={(e)=>setName(e.target.value)} required  placeholder='Full Name'>Name</TextField>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField id='email address' onChange={(e)=>setEmail(e.target.value)} label="Email Address" required placeholder='Email Address, be sure it is correct!'>Email Adddress</TextField>
            </Grid>
            <Grid item xs={12}>
                <FormControl>
                <TextField id='age' label="Age" required onChange={(e)=>setAge(e.target.value)} placeholder='Age'>Age</TextField>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
                <FormControl>
                <FormLabel id="select-gender">Runner Gender</FormLabel>
                    <SelectGender gender={gender} handleChangeGender={() => handleChangeGender} labelId="select-gender" />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={4} >
                <InputLabel id="select-gender-preference">Prefered Gender of Pacer</InputLabel>
                    <SelectGender gender={partnerGender} handleChangeGender={() => handleChangePartnerGender} labelId="select-gender-preference" />
            </Grid>
            
                
            <Grid item xs={12} sm={6}>
                <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Pace Estimate</FormLabel>
                <Select 
                labelId="demo-radio-buttons-group-label"
                value={timeEstimate}
                onChange={(e)=> setTimeEstimate(e.target.value)}
                label="Time Estimate"
                >
                    <MenuItem  value="15+ minute mile"> 15+ minute mile</MenuItem>
                    <MenuItem  value="10-15 minute mile"> 10-15 minute mile</MenuItem>
                    <MenuItem  value="sub 10 minute mile"> sub 10 minute mile</MenuItem>
                </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
                <FormControl>
                    <FormLabel id="familiarity-with-cource-label">Familiarity With Course</FormLabel>
                    <Select
                     labelId="familiarity-with-cource-label"
                     value={familiarity}
                     onChange={(e)=>setFamiliarity(e.target.value)}
                    >
                        <MenuItem value="none">None</MenuItem>
                        <MenuItem value="some">Some</MenuItem>
                        <MenuItem value="whole course">Whole Course</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
        <Grid item xs={12}>
                {/* <InputLabel id="more-info">More Info</InputLabel> */}
                <TextField multiline id='more-info' label="Additonal Comments" onChange={(e)=>setMoreInfo(e.target.value)}   placeholder='Additional inforrmation you would like to add'>Additional Information You'd Like To Add</TextField>
            </Grid>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
        </DialogContent>
    </Dialog>
 );

}

export default InputFormPacers;