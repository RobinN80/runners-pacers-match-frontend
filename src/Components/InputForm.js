import {useState, useEffect} from 'react';
import {FormControl, Dialog, DialogTitle, TextField, InputLabel, Select, MenuItem, FormLabel, RadioGroup, FormControlLabel, Radio} from '@mui/material';

const InputForm  = (props) => {
    const {participantFormType, handleClose, open} = props;
    const [gender, setGender] = useState('');
    const [distance, setDistance] = useState(0);
    const [timeEstimate, setTimeEstimate] = useState('');
    console.log('time estimate', timeEstimate);

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
 return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle maxWidth={'md'}>
            {`${participantFormType.toUpperCase()} add your info to the board`} 
        </DialogTitle>
        <FormControl>
            {/* <InputLabel id="name">Name</InputLabel> */}
            <TextField id='name' label="Name" required  placeholder='Full Name'>Name</TextField>
        </FormControl>
        <FormControl>
            <TextField id='email address' label="Email Address" required placeholder='Email Address, be sure it is correct!'>Name</TextField>
        </FormControl>
        <FormControl>
            <TextField id='age' label="Age" required defaultValue="" placeholder='Age'>Name</TextField>
        </FormControl>
        <FormControl>
            <InputLabel id="select-gender">Gender</InputLabel>
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
        </FormControl>
        <FormControl>
            <InputLabel id="select-distance">Distance</InputLabel>
            <Select
                labelId="select-distance"
                id="demo-simple-select"
                value={distance}
                label="Distance"
                onChange={handleChangeDistance}
                inputProps={{
                    name: '',
                    id: 'select-distance'
                }}
            >
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
            </Select>
        </FormControl>
        {/* <FormControl>
            <InputLabel id="select-time-estimate">Time Estimate to Finish</InputLabel>
            <Select
                labelId="select-time-estimate"
                id="demo-simple-select"
                value={timeEstimate}
                label="Time Estimate"
                onChange={handleChangeDistance}
                inputProps={{
                    name: '',
                    id: 'select-time-estimate'
                }}
            >
                <MenuItem value='100 miles in sub 36hrs'>100 miles in sub 36hrs</MenuItem>
                <MenuItem value='100 miles in sub 30 hours'>100 miles in sub 30 hours</MenuItem>
                <MenuItem value='100 miles in sub 24 hours'>100 miles in sub 24 hours</MenuItem>
                <MenuItem value='50 miles in sub 20 hours'>50 miles in sub 20 hours</MenuItem>
                <MenuItem value='50 miles in sub 15 hours'>50 miles in sub 15 hours</MenuItem>
                <MenuItem value=''></MenuItem>
            </Select>
        </FormControl> */}
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Time Estimate to Finish</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="sub 36hrs"
                name="radio-buttons-group"
                value={timeEstimate}
                onChange={(e)=> setTimeEstimate(e.target.value)}
            >
                <FormControlLabel  value="sub 36hrs" control={<Radio />} label="100 miles in sub 36hrs" />
                <FormControlLabel value="sub 30hrs" control={<Radio />} label="100 miles in sub 30hrs" />
                <FormControlLabel value="sub 24hrs" control={<Radio />} label="100 miles in sub 24hrs" />
                <FormControlLabel value="sub 20hrs" control={<Radio />} label="50 miles in sub 20hrs" />
                <FormControlLabel value="sub 15hrs" control={<Radio />} label="50 miles in sub 15hrs" />
            </RadioGroup>
            {/* <Radio
        checked={timeEstimate === 'sub 36hrs'}
        onChange={(e)=> setTimeEstimate(e.target.value)}
        value="sub 36hrs"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'sub 36hrs' }}
      /> */}
        </FormControl>
    </Dialog>
 );

}

export default InputForm