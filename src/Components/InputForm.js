import {FormControl, Dialog, DialogTitle} from '@mui/material';

const InputForm  = (props) => {
    const {participantFormType, handleClose, open} = props;
 return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
            {`${participantFormType} add your info to the board`} 
        </DialogTitle>
        <FormControl>
        </FormControl>
    </Dialog>
 );

}

export default InputForm