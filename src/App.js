import React from 'react';
import Settings from './pages/Settings'
import Quastion from './pages/Quastions'
import FinalScreen from './pages/FinalScreen'
import Container from '@mui/material/Container';
import Box from '@mui/system/Box';
import {
  Route,
  Routes
} from 'react-router-dom'
function App() {
  return (
    <>
    <Container maxWidth='sm'>
     <Box textAlign={'center'} mt={5} >
        <Routes>
            <Route path='/' element={<Settings/>}/> 
          
            
            <Route path='/quastions' element={<Quastion/>} />
            <Route path='/final'  element={<FinalScreen/>} />
        </Routes>
      </Box>
    </Container>
    </>
  );
}

export default App;
