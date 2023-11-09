import {FormControl, Dialog, DialogTitle, TextField, InputLabel, Select, MenuItem} from '@mui/material';

const InputForm  = (props) => {
    const {participantFormType, handleClose, open} = props;
 return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle maxWidth={'md'}>
            {`${participantFormType} add your info to the board`} 
        </DialogTitle>
        <FormControl>
            {/* <InputLabel id="name">Name</InputLabel> */}
            <TextField id='name' label="Name" required  placeholder='Full Name'>Name</TextField>
            </FormControl>
            <TextField id='email address' label="Email Address" required placeholder='Email Address, be sure it is correct!'>Name</TextField>
            <TextField id='age' label="Age" required defaultValue="" placeholder='Age'>Name</TextField>
            <FormControl>
            <InputLabel id="select-gender">Gender</InputLabel>
            <Select
                labelId="select-gender"
                // id="demo-simple-select-label"
                value=""
                required
                label="Select Gender"
                placeholder='Select Gender'
                inputProps={{
                    name: 'gender',
                    id: 'select-gender'
                }}
                // onChange={handleChange}
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
       
    </Dialog>
 );

}

export default InputForm