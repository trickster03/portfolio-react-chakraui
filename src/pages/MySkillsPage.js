import React from 'react'
import { useState } from 'react';
import { Heading, useBreakpointValue , Box} from '@chakra-ui/react';
import { LiaShapesSolid } from 'react-icons/lia';
import {TbDatabase} from 'react-icons/tb'
import {FaLaptopCode,FaCodeBranch} from 'react-icons/fa'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import {BsCodeSlash} from 'react-icons/bs'
import SkillsList from '../components/SkillsList';
import MakePage from '../components/MakePage';
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
const MySkillsPage = () => {
  const [ref,inView]=useInView({
    triggerOnce:false,
  })
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

  const isDesktop=useBreakpointValue({base:false , md:false , lg : true})

    const[isHovered,setIsHovered]=useState(false);

    const handleMouseEnter=()=>{
        setIsHovered(true)
    }
    const handleMouseLeave=()=>{
        setIsHovered(false)
    }
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
                    <LiaShapesSolid size='1em'  color='white' ></LiaShapesSolid>
                </Box>
                <Box px='7px'>
                    <Heading color='#FFFAE7' size='xs'>MY SKILLS</Heading>
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
                        <Heading fontSize='2rem' fontWeight='light' color='#FFFAE7'>My</Heading>
                    </Box>
                    <Box  px='0.5rem'>
                        <Heading fontSize='2rem' fontWeight='light' color='#00FFAB'>Specializations</Heading>
                    </Box>
                </Box>
                </motion.div>
                
                <Box display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
                    <Box borderColor='#FFFAE7' border='2px' borderRadius='15px'>
                    <Accordion  border='0px' allowToggle >
                        {/* <Box display='flex' flexDirection='column' justifyContent='space-between' > */}
                            {/* <Box marginBottom='10%'
                             marginRight='5%'
                             > */}
                            <AccordionItem my='05%' border='0px' >
    <h2>
      <AccordionButton 
      w={isDesktop ? '400px' : '90%'} 
      h='70px' 
      p='0px'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      _hover={{bg :"grey"}}
      >
        <Box display='flex' h='100%' flexDirection='row'
        justifyContent='center'
        alignItems='center' w='100%'>
            <Box px='7%'>
                <BsCodeSlash size='45px' color='#00FFAB' />
                </Box> 
            <Box as="span" flex='1' textAlign='center'>
                <Heading 
                fontWeight='thin' 
                size='md' 
                color='#FFFAE7'>Frontend Development</Heading>
            </Box>
        </Box>
       
        <AccordionIcon color='#00FFAB' />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <SkillsList Skill="React.JS" />
      <SkillsList Skill="React Native" />
      <SkillsList Skill="JavaScript" />
    </AccordionPanel>
                </AccordionItem>
                <AccordionItem my='05%' border='0px'>
                <h2>
      <AccordionButton 
      w={isDesktop ? '400px' : '90%'} 
      h='70px' 
      p='0px'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      _hover={{bg :"grey"}}
      >
        <Box display='flex' h='100%' flexDirection='row'
        justifyContent='center'
        alignItems='center' w='100%'>
            <Box px='7%'>
                <TbDatabase size='45px' color='#00FFAB' />
                </Box> 
            <Box as="span" flex='1' textAlign='center'>
                <Heading 
                fontWeight='thin' 
                size='md' 
                color='#FFFAE7'>Backend Development</Heading>
            </Box>
        </Box>
       
        <AccordionIcon color='#00FFAB' />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <SkillsList Skill="Node.JS" />
      <SkillsList Skill="Express.JS" />
      <SkillsList Skill="MongoDB(Database)" />
    </AccordionPanel>
                </AccordionItem > 
                            {/* </Box> */}
                            {/* <Box marginBottom='10%' marginRight='5%'> */}
                            <AccordionItem my='05%'  border='0px'>
    <h2>
      <AccordionButton 
      w={isDesktop ? '400px' : '90%'} 
      h='70px' 
      p='0px'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      _hover={{bg :"grey"}}
      >
        <Box display='flex' h='100%' flexDirection='row'
        justifyContent='center'
        alignItems='center' w='100%'>
            <Box px='7%'>
                <FaLaptopCode size='45px' color='#00FFAB' />
                </Box> 
            <Box as="span" flex='1' textAlign='center'>
                <Heading 
                fontWeight='thin' 
                size='md' 
                color='#FFFAE7'>Competitive Programming</Heading>
            </Box>
        </Box>
       
        <AccordionIcon color='#00FFAB' />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <SkillsList Skill="C++" />
      <SkillsList Skill="Algorithms" />
      <SkillsList Skill="Data Structures" />
    </AccordionPanel>
                </AccordionItem>
                <AccordionItem my='05%' border='0px'>
                <h2>
      <AccordionButton 
      w={isDesktop ? '400px' : '90%'} 
      h='70px' 
      p='0px'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      _hover={{bg :"grey"}}
      >
        <Box display='flex' h='100%' flexDirection='row'
        justifyContent='center'
        alignItems='center' w='100%'>
            <Box px='7%'>
                <FaCodeBranch size='45px' color='#00FFAB' />
                </Box> 
            <Box as="span" flex='1' textAlign='center'>
                <Heading 
                fontWeight='thin' 
                size='md' 
                color='#FFFAE7'>Version Control</Heading>
            </Box>
        </Box>
       
        <AccordionIcon color='#00FFAB' />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <SkillsList Skill="Git" />
      <SkillsList Skill="Github" />
    </AccordionPanel>
                </AccordionItem >
                            {/* </Box> */}
                        {/* </Box> */}
                </Accordion>
                    </Box>
                </Box>

    </>
  )
}

export default function MySkills() {
  return <MakePage Children={<MySkillsPage />} />
}