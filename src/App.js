import React from 'react'
import "./App.css"
import Home from './pages/Home';
import Navbar from './components/Navbar';
import EduExp from './pages/EduExp';
import Bio from './components/Bio';
import { Box,useBreakpointValue } from '@chakra-ui/react';
import MySkillsPage from './pages/MySkillsPage';
import MyProjects from './pages/MyProjects';
import SplineModel from './pages/SplineModel';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
function App(){
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const isDesktop=useBreakpointValue({base:false,md:false,lg:true})
  
  return(
    <>
    {isLoading ? <Preloader /> : <div className='body' style={{fontFamily:'roboto,sans-serif'}}> 
   {isDesktop &&(<Bio />)}
    <Navbar />
    <Box  my='-16%'>
      {isDesktop && (
        <SplineModel />
      )

      }
    
    <Home />
    
      <EduExp />
      <MySkillsPage />
      <MyProjects />
      <Footer />
    </Box>
    
    </div>
    

    }
    
    
    </>
  );
}

export default App;