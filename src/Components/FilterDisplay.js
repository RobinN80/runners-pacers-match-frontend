import React, {useState} from 'react';
import {FormControl, FormLabel, Select, MenuItem, Grid, Box} from '@mui/material';
// import '../CompnentCSS/FilterDisplay.css'
import SelectGender from './Forms/SelectGender';
import SelectDistance from './Forms/SelectDistance';

const Example = () => { 
    // const [test] = useState(true); 
    const handleChangeGender = (event) => {
        console.log(event.target.value, 'inside filter gender');
    }

    const handleChangeDistance = (event) => {
        console.log(event.target.value, "filter distance")
    }
    return ( 
        <Box component="section" id="box">
            <Grid container spacing={0}>
                <Grid item xs={12} id="item">
                <FormControl variant="filled">
                    <FormLabel id="filter-by-gender">Gender</FormLabel>
                        <SelectGender lableId="filter-by-gender" gender="gender PLACEHOLDER"
                        handleChangeGender={() => handleChangeGender}
                    
                    />
                </FormControl>
                <FormControl>
                    <FormLabel id="Select Distance">
                        Distance
                    </FormLabel>
                    <SelectDistance 
                        distance="distance PLACEHOLDER"
                        handleChangeDistance={()=> handleChangeDistance}
                    />
                </FormControl>
                </Grid>
            </Grid>
            

        </Box>
    ); 
} 
export default Example;

// export default FilterDisplay;