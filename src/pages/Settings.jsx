import { Box, Button, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import SelecFile from '../components/SelecFile';
import TextFieldComp from '../components/TextFieldComp';
import UseAxios from '../hooks/UseAxios';
import {useNavigate} from 'react-router-dom'

const Settings = () => {
    const {response,error,loading} = UseAxios({url:'/api_category.php'})
    const history = useNavigate()
    if (loading) {
        return(
            <Box mt={3}>
                <CircularProgress/>
            </Box>
        )
    }
    if (error) {
        <Typography variant='h4' mt={20} color={'red'} >
            Some thing Went Wrong
        </Typography>
    }
    const difficultyOptions = [
        {id:'easy',name:'Easy'},
        {id:'medium',name:'Medium'},
        {id:'hard',name:'Hard'},
    ]
    const typeOption = [
        {id:'multiple', name:'multiple chose'},
        {id:'boolean', name:'True/False'},
    ]
    const handelSubmit = (e)=>{
        e.preventDefault()
        history('/quastions')
    }
    return (
        <div>
            <Typography variant='h2' fontWeight={'bold'} >Quiz App</Typography> 
            <form onSubmit={handelSubmit}>
                <SelecFile option={response.trivia_categories} label='Categories' />
                <SelecFile option={difficultyOptions} label='Difficulty' />
                <SelecFile option={typeOption} label='Type' />
                <TextFieldComp/>
                <Box mt={3} width={'100%'} >
                    <Button fullWidth variant='contained' type='submit' >
                        Get Started
                    </Button>
                </Box>
            </form>
        </div>
    );
}

export default Settings;
