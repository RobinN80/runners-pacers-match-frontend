import {useState, useEffect} from 'react';
import {FormControl, Dialog, DialogTitle, TextField, InputLabel, Select, MenuItem, FormLabel, RadioGroup, FormControlLabel, Radio} from '@mui/material';

const InputForm  = (props) => {
    const {participantFormType, handleClose, open} = props;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');
    const [partnerGender, setPartnerGender] = useState('none')
    const [distance, setDistance] = useState(0);
    const [timeEstimate, setTimeEstimate] = useState('');
    console.log('all the states', name, email, age, gender, partnerGender, distance, timeEstimate);

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
            <TextField id='name' label="Name" onChange={(e)=>setName(e.target.value)} required  placeholder='Full Name'>Name</TextField>
        </FormControl>
        <FormControl>
            <TextField id='email address' onChange={(e)=>setEmail(e.target.value)} label="Email Address" required placeholder='Email Address, be sure it is correct!'>Email Adddress</TextField>
        </FormControl>
        <FormControl>
            <TextField id='age' label="Age" required onChange={(e)=>setAge(e.target.value)} placeholder='Age'>Age</TextField>
        </FormControl>
        <FormControl >
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
        <FormControl >
            <InputLabel id="select-gender-preference">Prefered Gender of Partner</InputLabel>
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
                    name: 'distance',
                    id: 'select-distance'
                }}
            >
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
            </Select>
        </FormControl>
        
            
        <FormControl >
            <FormLabel id="demo-radio-buttons-group-label">Time Estimate to Finish</FormLabel>
            <RadioGroup
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
            </RadioGroup>
        </FormControl>
    </Dialog>
 );

}

export default InputForm