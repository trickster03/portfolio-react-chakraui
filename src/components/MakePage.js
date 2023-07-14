import React from 'react'
import { Box, useBreakpointValue } from '@chakra-ui/react'
const MakePage = ({Children}) => {
  const isDesktop=useBreakpointValue({base:false,md:false,lg:true})
  return (
    <>
        <Box w='100%' 
         display='flex'
         flexDirection='row'
         justifyContent={isDesktop ?'flex-end' : 'center'}
         alignItems={isDesktop?'flex-start':'center'}
         minH='100vh'
          h='auto'
         >
            <Box
            w={isDesktop ? "70%" : "100%"}
            px={isDesktop ? "120px" : "5%"}
            minH='120vh'
            h='auto' 
            py='70px'
            display='flex' 
            flexDirection='column'
            // justifyContent='center'
            alignItems={isDesktop?'flex-start':'center'}
            >
                    {Children}

                </Box>
                </Box>
    </>
  )
}

export default MakePage