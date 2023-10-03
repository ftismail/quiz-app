import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { categoriesAction, difficultyAction, typeAction } from '../redux/reducer';

const SelecFile = (props) => {
    const {label,option} = props
    const [value,setValue]= useState('')
    const dispatch = useDispatch()
    
    const handleChange = (e)=>{
        setValue(e.target.value)
        switch (label) {
            case 'Categories':
                dispatch(categoriesAction(e.target.value))
                break;
            case 'Difficulty':
                dispatch(difficultyAction(e.target.value))
                break;
            case 'Type':
                dispatch(typeAction(e.target.value))
                break;
            default:
                break;
        }
    }
    return (
        <Box width={'100%'} mt={3} >
            <FormControl fullWidth size='small'>
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={handleChange} >
                {option.map(({name,id})=>{
                    return <MenuItem value={id} key={id} >{name}</MenuItem>
                })}
                </Select>
            </FormControl>
        </Box>
    );
}

export default SelecFile;
