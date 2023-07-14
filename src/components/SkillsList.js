import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
const SkillsList = (props) => {
  return (
    <>
        <Box display='flex' 
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        color='white' py="5%"
        borderBottom='2px'
        borderColor='#00FFAB'>
            <Heading  size='l' fontWeight='thin'>{props.Skill}</Heading>
        </Box>
    </>
  )
}

export default SkillsList