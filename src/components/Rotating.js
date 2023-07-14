import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import RotatingCss from '../styles/Rotating.module.css'
const Rotating = () => {
  return (
    <Box display='flex' 
    flexDirection='column' 
    justifyContent='center' 
    alignItems='center' 
    w='200px' 
    h='200px' 
    borderRadius='full'
    border='2px' 
    color='#00FFAB' 
    className={RotatingCss.rotating_cricle}>
        <Box className={RotatingCss.wordContainer}>
            <Text className={RotatingCss.word1}>My Projects</Text>
        </Box>
    </Box>
  )
}

export default Rotating