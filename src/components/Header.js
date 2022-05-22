
import React from 'react'
import { Box} from '@mui/material'

const Header = () => {
  return (

    <Box sx={{
        width:'100%',
        height:'130px',
        position:'fixed',
        overflow:'hidden',
        top:'0%',
        zIndex:'2',
        cursor:'pointer'
        // border:'1px solid red'
        // , borderBottom:'1px solid red'
    }}  >
 <Box component={'img'}
    src="/Img/Header.png"
     sx={{
        width:'100%',
        height:'100%',
    }}  >
       
    </Box>
    </Box>
  )
}

export default Header;
