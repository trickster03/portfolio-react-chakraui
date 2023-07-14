import { Box, Heading, Image } from '@chakra-ui/react'
import React , {useState}from 'react'
import imageSrc from '../images/profileNew.jpg'
import HomeCss from '../styles/Home.module.css'
import HoverCss from '../styles/HoverCss.module.css'
import BioCss from '../styles/Bio.module.css'
import {SiGmail} from "react-icons/si";
import { Link } from 'react-router-dom'
import { TbBrandLeetcode, TbBrandLinkedin, TbBrandGithub } from "react-icons/tb";
const Bio = () => {
    
    const handleEmailClick = () => {
        window.location.href="mailto:21ucs156@lnmiit.ac.in"
      };


    const linkedInURL="https://www.linkedin.com/in/pranjal-mishra-063b30225/"
    const githubUrl ="https://github.com/trickster03"
    const leetcodeURL="https://leetcode.com/_trickster/"
    return (
    <>
    <Box h='95vh' border='2px' borderColor='grey'
    className={BioCss.bio}>
        <Box 
         py='2%' 
        w='100%' 
        display='flex' 
        alignItems='center' 
        textAlign='center' 
        justifyContent='center' >
    
                <Heading fontWeight='light' className={HomeCss.title} as='h1'>Pranjal Mishra</Heading>
        </Box>
        <Box  h='250px' w='70%' backgroundColor='#212121'>
            <Image src={imageSrc}
                borderRadius='20px'
                width='100%'
                height='100%'
              />
        </Box>
        <Box textAlign='center' py='5%' flexDirection='column' alignItems='center'>
            <Box >
                <Heading fontWeight='light' py='3%' size= 'l' color='white'>CSE student@LNMIIT</Heading>
            </Box>
            <Box>
                <Heading fontWeight='light'  size= 'l' color='white'>Based in Lucknow,Uttar Pradesh,India</Heading>
            </Box>
            <Box py='10%'>
            <Heading fontWeight='light' color='grey' size='xs' >©2023 Pranjal. All Rights Reserved</Heading>
        </Box>
        </Box>
       
        <Box flexDirection='row'
        display='flex' 
        w='70%' 
        justifyContent='space-evenly' 
        py='5%'
        >
            <Link to={leetcodeURL}>
            <Box className={HoverCss.border} display='flex' 
            justifyContent='center' 
            alignItems='center' 
            width='50px' 
            height='50px' 
            border='2px' 
            borderRadius='full' 
            color='grey'>
        
                <TbBrandLeetcode className={HoverCss.icons} size='1.7em' />
            </Box>
                </Link>
            
                <Link to={linkedInURL}>
                <Box className={HoverCss.border} display='flex' 
            justifyContent='center' 
            alignItems='center' 
            width='50px' 
            height='50px' 
            border='2px' 
            borderRadius='full' 
            color='grey' >
              
                <TbBrandLinkedin className={HoverCss.icons} size='1.7em'/>

            </Box>
                </Link>
           
                <Link to={githubUrl}>
                <Box className={HoverCss.border}
            display='flex' 
            justifyContent='center' 
            alignItems='center' 
            width='50px' 
            height='50px' 
            border='2px' 
            borderRadius='full' 
            color='grey'>
                <TbBrandGithub className={HoverCss.icons} size='1.7em'/>   

            </Box>
                </Link>
            
        </Box>
        <Box className={HoverCss.mailBox}
         w='80%'
        //  my='90px'
         display='flex' 
         justifyContent='center' 
         alignItems='center'
         flexDirection='row'
         border='1px'
         my='30px'
         borderRadius='15px'
         height='50px'
         onClick={handleEmailClick}
         >
            <Box 
             px='5px'>
                <SiGmail className={HoverCss.mail} />
            </Box>
            <Box 
             px='5px'>
            <Heading size='l' color= 'black' fontWeight='bold' >E-Mail Me!</Heading>
            </Box>
           
        </Box>
    </Box>
    </>
  )
}

export default Bio