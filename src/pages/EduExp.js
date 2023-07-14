import { Box, Heading, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import {TfiPencil} from 'react-icons/tfi'
import DottedLine from '../components/DottedLine'
import MakePage from '../components/MakePage'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const EduExp = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
      });
      const fadeInVariants = {
        hidden: {
          opacity: 0,
          x: -100, 
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5, 
          },
        },
      };
    const isDesktop= useBreakpointValue({base:false , md : false , lg:true})
  return (
    <>
                <Box w='140px'
                display='flex' 
                alignItems='center'
                justifyContent='center' 
                flexDirection='row'
                borderColor='grey'
                borderWidth='1px'
                borderRadius='15px'
                h='30px'
                >
                <Box px='7px'>
                    <TfiPencil size='1em'  color='white' ></TfiPencil>
                </Box>
                <Box px='7px'>
                    <Heading color='#FFFAE7' size='xs'>RESUME</Heading>
                </Box>
                </Box>
                <Box display='flex' 
                flexDirection='row'
                justifyContent={isDesktop ? 'flex-start' : 'center'}
                alignItems='center'
                >
                    <motion.Box 
                     ref={ref}
                    variants={fadeInVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    >
                        <Heading py='70px' fontSize='2rem' fontWeight='light' color='#FFFAE7' textAlign={isDesktop?'left':'center'}>Education and <span style={{color:"#00FFAB" }}>Experience</span></Heading>
                    </motion.Box>
                </Box>
                <motion.div  ref={ref}
                    variants={fadeInVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    >
                <Box>
                    <DottedLine />
                </Box>
                </motion.div>
               
    </>
  )
}

export default function EduExpPage(){
    return <MakePage Children={<EduExp />}  />
}