import { Box, Button, CircularProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import UseAxios from '../hooks/UseAxios';
import { useDispatch, useSelector } from 'react-redux';
import {RandomNumber} from '../components/RandomNumber';
import { useNavigate } from 'react-router-dom';
import { scoreAction } from '../redux/reducer';
import {decode} from 'html-entities';

const Quastions = () => {

    const {
        quastion_category,
        quastion_difficulty,
        question_type,
        amount_of_quastion,
        score,
    } = useSelector(state=>state.info)
    
    let apiUrl = `/api.php?amount=${amount_of_quastion}`;
  if (quastion_category) {
    apiUrl = apiUrl.concat(`&category=${quastion_category}`);
  }
  if (quastion_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${quastion_difficulty}`);
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { response, loading } = UseAxios({ url: apiUrl });
    const [quastionIndex,setQuastionIndex] = useState(0)
    const [option,setOption] = useState([])
    
    useEffect(()=>{
        if (response?.results.length) {
           const question =  response.results[quastionIndex]
           let answers = [...question.incorrect_answers]
           
           answers.splice(
            RandomNumber(question.incorrect_answers.length),
            0,
            question.correct_answer
           )
           setOption(answers)
           
        }
        

    },[response,quastionIndex])
    if(loading){
        return <Box mt={20} >
            <CircularProgress/>
        </Box>
    }
  const handelClickAnswer = (e)=>{
    let question = response.results[quastionIndex]
    if (e.target.textContent === question.correct_answer) {
        dispatch(scoreAction(score+1))
    }
    if (quastionIndex+1 < response.results.length) {
        setQuastionIndex(quastionIndex+1)
    }
    else{
        navigate('/final')
    }
  }
    return (
        <Box>
            <Typography variant='h4'> Quastions {quastionIndex+1}</Typography>
            <Typography variant='h4' mt={5} >  { decode(response.results[quastionIndex].question) }</Typography>
            {option.map((data,id)=>(
                <Box mt={2} key={id} >
                    <Button onClick={(e)=>handelClickAnswer(e)} variant='contained' >{decode(data)}</Button>
                </Box>
            ))}
            
            
            <Box mt={5} >
                <Button>Score: {score}/{amount_of_quastion}</Button>
            </Box>
        </Box>
    );
}

export default Quastions;
