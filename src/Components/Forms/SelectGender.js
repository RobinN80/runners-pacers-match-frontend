import React, {useState} from 'react';
import {FormLabel, Select, MenuItem} from '@mui/material';
const SelectGender = (props) => {

    const {gender, handleChangeGender} = props;
    return(
        <div>
            <FormLabel id="select-gender">Runner Gender</FormLabel>
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
                    onChange={handleChangeGender()}
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
        </div>
    );
}

export default SelectGender;