import {useState, useEffect} from 'react';
import {FormControl, Dialog, DialogTitle, TextField, InputLabel, Select, MenuItem} from '@mui/material';

const InputForm  = (props) => {
    const {participantFormType, handleClose, open} = props;
    const [gender, setGender] = useState('');
    const [distance, setDistance] = useState(0);

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
        <FormControl fullWidth>
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
    </Dialog>
 );

}

export default InputForm