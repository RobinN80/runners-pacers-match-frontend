import {Select, MenuItem} from '@mui/material'
const SelectDistance = (props) => {
    const {distance, handleChangeDistance} = props;

    return(
        <Select
        labelId="select-distance"
        id="demo-simple-select"
        value={distance}
        label="Distance"
        onChange={handleChangeDistance()}
        inputProps={{
            name: 'distance',
            id: 'select-distance'
        }}
    >
        <MenuItem value={50}>50</MenuItem>
        <MenuItem value={100}>100</MenuItem>
    </Select> 
    )

}

export default SelectDistance;