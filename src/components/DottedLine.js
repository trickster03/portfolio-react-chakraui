import React from 'react'
import {  Box , useBreakpointValue} from "@chakra-ui/react";
import ListItems from '../components/ListItems';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const DottedLine = () => {
    const isDesktop= useBreakpointValue({base:false , md : false , lg:true})
  return (
    <>
        <Box display='flex' 
        flexDirection='column' 
        w='100%' 
        h='auto'
        borderLeft='2px'
        borderColor='grey'
        justifyContent='center'
        alignItems= "flex-start" >

            <Box position='relative'>
                <Box  w='10px' h='10px' 
                borderRadius='full' 
                backgroundColor='#00FFAB' position='absolute'
                top='13px' left='-6px'>
                </Box>
                <motion.div whileHover={{scale:1.2}}>
                <ListItems FirstLine="July 2023 - Present" 
                SecondLine="Google Developer Students Clubs"
                ThirdLine="Development Domain Lead" />
                </motion.div>
                
            </Box>
            <Box position='relative'>
            <Box w='10px' h='10px' 
                borderRadius='full' 
                backgroundColor='#00FFAB' position='absolute'
                top='13px' left='-6px'>
                </Box>
                <motion.div whileHover={{scale:1.2}}>
                <ListItems FirstLine="July 2022 - July 2023" 
                SecondLine="Google Developer Students Clubs"
                ThirdLine="Development Domain Member" />
                </motion.div>
           
            </Box>
            <Box position='relative'>
            <Box w='10px' h='10px' 
                borderRadius='full' 
                backgroundColor='#00FFAB' position='absolute'
                top='13px' left='-6px'>
                </Box>
                <motion.div whileHover={{scale:1.2}}>
                <ListItems FirstLine="Feb 2022 - Present" 
                SecondLine="Debsoc-The Debate Society"
                ThirdLine="Member" />
                </motion.div>
           
                </Box>
                <Box position='relative'>
                <Box w='10px' h='10px' 
                borderRadius='full' 
                backgroundColor='#00FFAB' position='absolute'
                top='13px' left='-6px'
                >
                </Box>
                <motion.div whileHover={{scale:1.2}}>
                <ListItems FirstLine="Dec 2021 - Present" 
                SecondLine="The LNM Institute of Information technology"
                ThirdLine="Bachelor of Technology in Computer Science" />
                </motion.div>
           
                </Box> 
        </Box>
    </>
  )
}

export default DottedLine