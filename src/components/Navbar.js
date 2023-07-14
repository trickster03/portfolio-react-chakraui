import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import { Flex, Box, IconButton , useBreakpointValue} from '@chakra-ui/react';
import NavbarCss from '../styles/Navbar.module.css'
import { TbHome } from "react-icons/tb";
import {TfiPencil} from 'react-icons/tfi'
import {LiaShapesSolid, LiaProjectDiagramSolid} from 'react-icons/lia'
import {RxCross1} from 'react-icons/rx'
import {HiBars2} from 'react-icons/hi2'
const Navbar = () => {
  const isDesktop=useBreakpointValue({base:false,md:false,lg:true})

    // const hoverStyles = {
    //     _hover: {
    //       color: "#00FFAB", 
    //     },
    //   };

    const [active,setActive]=useState(true);

    const handleNavbar=()=>{
      setActive(!active)
    }

    const goToHome=()=>{
      window.scrollTo({top : 0 , left: 0, behavior: "smooth" })
    }

    const goToEducation=()=>{
      window.scrollTo({top: 1000, left: 0,behavior: 'smooth'})
    }
    
    const goToSpecializations=()=>{
      window.scrollTo({top : 1800 , left: 0, behavior: "smooth" })
    }

    const goToProjects=()=>{
      window.scrollTo({top : 2900 , left: 0, behavior: "smooth" })
    }
    
  return (
    <>
   <Box  w='30px' 
    h='70vh' 
    border='0px' 
    position='sticky'
     left={['95%','95%']}
      top={['2%','6%','15%']} 
      my={isDesktop ? '-380px' : '-250px'}> 
      <Box
      display='flex' 
      justifyContent='center' 
      alignItems='center' 
      w='25px' 
      // color='white' 
      h='40px' 
      borderRadius='15px'
      border='2px' 
      borderColor='white'
      onClick={handleNavbar}>
        <IconButton  
        // aria-label='edit'
        border='2px'
        bg='#212121'
        _hover={{bg: "grey"}}
        icon={active ? <RxCross1 color='#00FFAB'/> : <HiBars2 color='#00FFAB'/>}/>
      </Box>

   {active  && (
      <Flex
      as="nav"
      borderColor='grey'
      // textAlign='right'
      // padding="1rem"
      h='23vh'
      borderWidth='2px'
      display='flex'
      my='30%'
      flexDirection='column'
      borderRadius='15px'
      // position='sticky'
      // top='20%'
      // left='95%'
      w='25px'
      // my='-77px'
      alignItems='center'
      justifyContent='space-evenly'
  >
    <ul>
    <NavLink onClick={goToHome}>
        <Box  >
        <TbHome className={NavbarCss.navicons}/>
        </Box>
      </NavLink>
      <NavLink onClick={goToEducation}>
        <Box >
        <TfiPencil className={NavbarCss.navicons}/>
        </Box>
      </NavLink>
      <NavLink onClick={goToSpecializations}>
        <Box >
        <LiaShapesSolid className={NavbarCss.navicons}/>
        </Box>
      </NavLink>
      <NavLink onClick={goToProjects}>
        <Box >
        <LiaProjectDiagramSolid className={NavbarCss.navicons}/>
        </Box>
      </NavLink>
    </ul>
  </Flex>
   )} 
   </Box>
    </> 
  )
}

export default Navbar