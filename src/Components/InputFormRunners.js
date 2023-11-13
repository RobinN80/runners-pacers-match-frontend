import {useState, useEffect} from 'react';
import {
    Dialog, DialogTitle, DialogContent, TextField, InputLabel, Select, MenuItem, FormLabel, FormControl, IconButton, DialogActions, Button, Grid
} from '@mui/material';

const InputFormRunners  = (props) => {
    const {participantFormType, open, setOpen} = props;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');
    const [partnerGender, setPartnerGender] = useState('none')
    const [distance, setDistance] = useState(0);
    const [timeEstimate, setTimeEstimate] = useState('');
    const [familiarity, setFamiliarity] = useState('')
    console.log('all the states', name, email, age, gender, partnerGender, distance, timeEstimate, familiarity);

    useEffect(() => {
        setGender('');
        setDistance(0);
    },[])

    const handleChangeGender = (event) => {
        setGender(event.target.value)
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
            <Grid item xs={12} sm={3}>
                <InputLabel id="select-gender">Runner Gender</InputLabel>
                <Select
                    labelId="select-gender"
                    // id="demo-simple-select-label"
                    value={gender}
                    required
                    label="Select Gender"
                    // placeholder='Select Gender'
                    inputProps={{
                        name: 'gender',
                        id: 'select-gender'
                    }}
                    onChange={handleChangeGender}
                >
                    <MenuItem 
                    value={'male'}
                    >
                        Male
                    </MenuItem>
                    <MenuItem 
                    value={'female'}
                    >
                        Female
                    </MenuItem>
                    <MenuItem 
                    value={'transgender woman'}
                    >
                        Transgender Woman
                    </MenuItem>
                    <MenuItem 
                    value={'transgender man'}
                    >
                        Transgender Man
                    </MenuItem>
                    <MenuItem 
                    value={'non-binary'}
                    >
                        Non-Binary
                    </MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} sm={5} >
                <InputLabel id="select-gender-preference">Prefered Gender of Pacer</InputLabel>
                <Select
                    labelId="select-gender-preference"
                    // id="demo-simple-select-label"
                    value={partnerGender}
                    required
                    label="Select Gender"
                    // placeholder='Select Gender'
                    inputProps={{
                        name: 'prefered gender',
                        id: 'select-gender-preference'
                    }}
                    onChange={(e)=>setPartnerGender(e.target.value)}
                >
                    <MenuItem value="none" disabled>
                        Prefered Gender of Pacer
                    </MenuItem>
                    <MenuItem 
                    value={'none'}
                    >
                        None
                    </MenuItem>
                    <MenuItem 
                    value={'male'}
                    >
                        Male
                    </MenuItem>
                    <MenuItem 
                    value={'female'}
                    >
                        Female
                    </MenuItem>
                    <MenuItem 
                    value={'transgender woman'}
                    >
                        Transgender Woman
                    </MenuItem>
                    <MenuItem 
                    value={'transgender man'}
                    >
                        Transgender Man
                    </MenuItem>
                    <MenuItem 
                    value={'non-binary'}
                    >
                        Non-Binary
                    </MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} sm={3}> 
            <FormControl>
                <FormLabel id="select-distance">Distance</FormLabel>
                <Select
                    labelId="select-distance"
                    id="demo-simple-select"
                    value={distance}
                    label="Distance"
                    onChange={handleChangeDistance}
                    inputProps={{
                        name: 'distance',
                        id: 'select-distance'
                    }}
                >
                    <MenuItem value={50}>50</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                </Select>
            </FormControl>
            </Grid>
            
                
            <Grid item xs={12} sm={6}>
                <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Time Estimate to Finish</FormLabel>
                <Select 
                labelId="demo-radio-buttons-group-label"
                value={timeEstimate}
                onChange={(e)=> setTimeEstimate(e.target.value)}
                label="Time Estimate"
                >
                    <MenuItem disabled={distance === 50 } value="sub 36hrs"> 100 miles in sub 36hrs</MenuItem>
                    <MenuItem disabled={distance === 50 } value="sub 30hrs"> 100 miles in sub 30hrs</MenuItem>
                    <MenuItem disabled={distance === 50 } value="sub 24hrs"> 100 miles in sub 24hrs</MenuItem>
                    <MenuItem disabled={distance === 100 } value="sub 20hrs"> 50 miles in sub 20hrs</MenuItem>
                    <MenuItem disabled={distance === 100 } value="sub 15hrs"> 50 miles in sub 15hrs</MenuItem>
                </Select>
                </FormControl>
                {/* <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="sub 36hrs"
                    name="radio-buttons-group"
                    value={timeEstimate}
                    onChange={(e)=> setTimeEstimate(e.target.value)}
                >
                    <FormControlLabel disabled={distance === 50 } value="sub 36hrs" control={<Radio />} label="100 miles in sub 36hrs" />
                    <FormControlLabel disabled={distance === 50 } value="sub 30hrs" control={<Radio />} label="100 miles in sub 30hrs" />
                    <FormControlLabel  disabled={distance === 50 }value="sub 24hrs" control={<Radio />} label="100 miles in sub 24hrs" />
                    <FormControlLabel disabled={distance === 100 }value="sub 20hrs" control={<Radio />} label="50 miles in sub 20hrs" />
                    <FormControlLabel disabled={distance === 100 } value="sub 15hrs" control={<Radio />} label="50 miles in sub 15hrs" />
                </RadioGroup> */}
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
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
        </DialogContent>
    </Dialog>
 );

}

export default InputFormRunners;