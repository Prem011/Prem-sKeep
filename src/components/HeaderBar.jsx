import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {Toolbar, AppBar, IconButton, styled} from '@mui/material';


const Header = styled(AppBar)`
    z-index:1201;
    background-color:#fff;
    height: 70px;
    box-shadow: inset 0 -1px 0 0 #dadce0;
`



const HeaderBar = ({handleDrawer, open}) => {
    const logo = "https://ssl.gstatic.com/keep/manifest/icons/icon_2020q4_144.png"


  return (
    <Header  open={open}>
        <Toolbar>
          <IconButton
          
            onClick={handleDrawer}
            edge="start"
            sx={[{ marginRight: 5,}]}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} className='w-[4%] ml-[-2.55%] mr-[1.5%]' alt="" />

          <p className='text-[#5F6368] text-2xl' >Keep</p>

        </Toolbar>
      </Header> 
  )
}

export default HeaderBar
