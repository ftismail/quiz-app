import { Box, FormControl, TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { amountAction } from '../redux/reducer';

const TextFieldComp = () => {
    const dispatch = useDispatch()
    const handelChange = (e)=>{
        
        dispatch(amountAction(e.target.value))
    }
    return (
        <Box mt={3}>
            <FormControl fullWidth size='small'>
                <TextField 
                 onChange={handelChange}
                 variant='outlined'
                 label='Amount Of Quastions'
                 type='number'
                 size='small'
                 defaultValue={10}
                  />
            </FormControl>
        </Box>
    );
}

export default TextFieldComp;
