import React, {useState} from 'react';
import {FormControl, FormLabel, Select, MenuItem, Grid, Box} from '@mui/material';
// import '../CompnentCSS/FilterDisplay.css'
import SelectGender from './Forms/SelectGender';

const Example = () => { 
    // const [test] = useState(true); 
    const handleChangeGender = (event) => {
        console.log(event.target.value, 'inside filter');
    }
    return ( 
        <Box component="section" id="box">
            <Grid container spacing={0}>
                <Grid item xs={12} id="item">
                <FormControl variant="filled">
                    <FormLabel id="filter-by-gender">Gender</FormLabel>
                        <SelectGender lableId="filter-by-gender" gender="gender placeholder"
                        handleChangeGender={() => handleChangeGender}
                    
                    />
                    
                </FormControl>
                </Grid>
            </Grid>
            

        </Box>
    ); 
} 
export default Example;

// export default FilterDisplay;