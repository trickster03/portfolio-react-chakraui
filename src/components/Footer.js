import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
            <Box  w='100%' h='auto' borderTop='2px' borderColor='grey' >
        <Heading textAlign='center' color='white' size='xs'> Made with ❤️ by <span style={{ color:'#00FFAB' }}>Pranjal Mishra</span> </Heading>
            </Box>
    </Box>
    
  )
}

export default Footer