import React from 'react';
import { Select, MenuItem} from '@mui/material';
const SelectGender = (props) => {

    const {gender, handleChangeGender, labelId} = props;
    const display = labelId ==="select-gender-preference" ? "block" : "none";
    // console.log(visibility, "vis", labelId) ;
    return(
        <div>
            
                <Select
                    labelId={labelId}
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
                    <MenuItem style={{display: `${display}` }} value={'none'}>
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
        </div>
    );
}

export default SelectGender;