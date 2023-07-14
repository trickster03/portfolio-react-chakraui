import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box , Heading, Image } from '@chakra-ui/react'
import MakePage from '../components/MakePage'
import {LiaProjectDiagramSolid} from 'react-icons/lia'
import gifSrc from '../gif/Project1.gif'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
const MyProjects = () => {
  const [isHovered,setIsHovered]=useState(false);

  const handleMouseEnter=()=>{
    setIsHovered(true);
  }
  const handleMouseLeave=()=>{
    setIsHovered(false);
  }

  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  const fadeInVariants = {
    hidden: {
      opacity: 0,
      x:-100
    },
    visible: {
      opacity: 1,
      x:0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const appProjectRepo="https://github.com/trickster03/E-commerce"
  return (
    <>
        <Box borderColor='grey'
            w='140px'
            display='flex' 
            alignItems='center'
            justifyContent='center' 
            flexDirection='row'
            borderWidth='1px'
            borderRadius='15px'
            my='5%'
            h='30px'>
                <Box px='7px'>
                <LiaProjectDiagramSolid size='01em' color='white' />
              </Box>
              <Box px='7px'>
                <Heading color='#FFFAE7' size='xs'>PROJECTS</Heading>
              </Box>
        </Box>
        <motion.div ref={ref}
                    variants={fadeInVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}>
                           <Box display='flex' 
                flexDirection='row'
                justifyContent='flex-start'
                alignItems='center'
                >
                    <Box py='70px'>
                        <Heading fontSize='2rem' fontWeight='light' color='#FFFAE7'>Featured</Heading>
                    </Box>
                    <Box  px='0.5rem'>
                        <Heading fontSize='2rem' fontWeight='light' color='#00FFAB'>Project</Heading>
                    </Box>
                </Box>
                    </motion.div>
                <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} position='relative' >
                {isHovered && ( <Link to={appProjectRepo} > <Box display='flex' justifyContent='center' alignItems='center' border='2px' borderColor='grey' borderRadius='15px' h='400px' w='200px' bg='grey' opacity='0.5' top='0' left='0' position="absolute" >
                  <Heading opacity='1' size='md' color='white'>Visit Github link</Heading>
                </Box> </Link>)

                }
                
                <Box    h='400px' w='200px' border='2px' borderColor='grey' borderRadius='15px'>
                  <Image borderRadius='15px' w='100%' h='100%' src={gifSrc} />
                </Box>
                
                </Box>
               
        
                
                
    </>
  )
}

export default function MyProjectsPage(){
  return <MakePage Children={<MyProjects />} />
}