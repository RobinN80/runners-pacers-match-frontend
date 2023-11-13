import React, {useState} from 'react';
import {FormControl, FormLabel, Select, MenuItem, Grid, Box} from '@mui/material';
// import '../CompnentCSS/FilterDisplay.css'

const Example = () => { 
    // const [test] = useState(true); 
    return ( 
        <Box component="section" id="box">
            <Grid container spacing={0}>
                <Grid item xs={12} id="item">
                <FormControl variant="filled">
                    <FormLabel id="filter-by-gender">Gender</FormLabel>
                    <Select
                        labelId="filter-by-gender"
                        value=""
                    >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                    </Select>
                    
                </FormControl>
                </Grid>
            </Grid>
            

        </Box>
    ); 
} 
export default Example;

// export default FilterDisplay;