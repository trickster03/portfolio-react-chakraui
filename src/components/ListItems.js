import { UnorderedList, ListItem, Box,Heading } from '@chakra-ui/react'
import React from 'react'

const ListItems = (props) => {
  return (
    <UnorderedList>
        <ListItem listStyleType='none' px='30px' color='#00FFAB' >
        <Box >
            <Box py='7px'>
                <Heading color='grey' size='xs'>{props.FirstLine}</Heading>
            </Box>
            <Box>
                <Heading py='7px' fontWeight='light' size='md' color='#FFFAE7'>{props.SecondLine}</Heading>
            </Box>
            <Box>
                <Heading py='7px' fontWeight='light' size='l' color='#FFFAE7'>{props.ThirdLine}</Heading>
            </Box>
        </Box>
    </ListItem>
    </UnorderedList>
    
    
  )
}

export default ListItems