import { Box, useBreakpointValue,Image } from '@chakra-ui/react'
import React from 'react'
import { Heading, Text } from '@chakra-ui/react';
import { TbHome } from "react-icons/tb";
import MakePage from '../components/MakePage';
import imgSrc from '../images/profileNew.jpg'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  const fadeInVariants = {
    hidden: {
      opacity: 0,
      y:-100
    },
    visible: {
      opacity: 1,
      y:50,
      transition: {
        duration: 0.5,
      },
    },
  };
  const isDesktop=useBreakpointValue({base:false,md:false,lg:true})
  return (
    <>

            <Box borderColor='grey'
            w='140px'
            display='flex'
            my='0' 
            alignItems='center'
            justifyContent='center' 
            flexDirection='row'
            borderWidth='1px'
            borderRadius='15px'
            h='30px'>
              <Box px='7px'>
                <TbHome size='01em' color='white' />
              </Box>
              <Box  px='7px'>
                <Heading  color='#FFFAE7' size='xs'>HOME</Heading>
              </Box>
            </Box>
            <motion.Box  ref={ref}
      variants={fadeInVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} display='flex' 
            flexDirection='column' 
            my='4%'
            justifyContent='flex-start'
            py={isDesktop ? '50px' : '0px'}
            w={isDesktop?'85%':'100%'} 
            h={isDesktop ? "100vh" : "100px"}>
              <Box w='100%' 
               justifyContent={isDesktop ? 'flex-start' : 'center'}
                display='flex' 
              //   flexDirection={isDesktop?'row':'column'}
                >
                {/* <Heading fontWeight='light' fontSize={isDesktop ? "3rem" :"1rem"}  color='#FFFAE7'>Say Hi from</Heading>
                <Heading fontWeight='light' fontSize={isDesktop ? "3rem" :"1rem"} px='0.5rem'  color='#00FFAB'>Pranjal</Heading>
                <Heading fontWeight='light' fontSize={isDesktop ? "3rem" :"1rem"} color='#FFFAE7'>,</Heading> */}
                <Heading  textAlign={isDesktop ? "left" : "center"}  fontWeight='light' fontSize={isDesktop ? "3rem" :"2.5rem"} w='100%' color='#FFFAE7'>Say Hi from <span style={{ color:'#00FFAB' }}>Pranjal</span>, </Heading>
              </Box>
              <Box w='100%'>
                <Heading textAlign={isDesktop ? "left" : "center"} fontWeight='light' fontSize={isDesktop ? "3rem" :"2.5rem"} color='#FFFAE7' >Full-Stack Developer and</Heading>
                <Heading textAlign={isDesktop ? "left" : "center"} fontWeight='light' fontSize={isDesktop ? "3rem" :"2.5rem"} color='#FFFAE7'>Competitive Programmer</Heading>
              </Box>
              <Box display='flex' flexDirection='column' alignItems='center'
              mt='13%' w={isDesktop ? '70%' : "100%"} h='auto' px='3%' >
                <Text textAlign={isDesktop ? "left" : "center"} w='100%' color='grey' >I am a nerd who prefers to sleep than party so don't plan any outings with me because it's not nice to have a 21 years old boy teling you "Mummy nahi jane dengi mjhe". Also I don't drink I prefer drugs. </Text>
                {/* <Box zIndex={10} classname={SplineCss.model}>
                <SplineModel  />
                </Box> */}
                
                {!isDesktop && (<Box
             h={isDesktop?'300px':'250px'} w={isDesktop?'300px':'250px'} borderRadius='100%' backgroundColor='#212121' my='5%'>
            <Image src={imgSrc}
                // borderRadius='20px'
               
                borderRadius='100%'
                width='100%'
                height='100%'
              />
        </Box>)
             } 
              </Box>

            </motion.Box>            
            
    </>
  )
}

export default function HomePage (){
  return <MakePage Children={<Home />} />
}