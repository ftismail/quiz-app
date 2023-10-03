import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { amountAction, scoreAction } from '../redux/reducer';

const FinalScreen = () => {
    const {score,amount_of_quastion} = useSelector(state=>state.info) 
    const dispatch = useDispatch()
    const navigate= useNavigate()
    const handelBack = ()=>{
        dispatch(scoreAction(0))
        dispatch(amountAction(10))
        navigate('/')
    }
    return (
        <Box mt={30} >
            <Typography variant='h3' fontWeight={'bold'} mb={3} > Final Score: {score}/{amount_of_quastion}</Typography>
            <Button variant='outlined' onClick={handelBack} > back home</Button>
        </Box>
    );
}

export default FinalScreen;
