import React from 'react'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import {Box, Typography} from '@mui/material'
import { styled } from '@mui/material';
import { Container } from 'postcss';

const Light = styled(LightbulbOutlinedIcon)`
    font-size: 120px;
    color: #F5F5F5;

`

const Text = styled(Typography)`
    color:#80868b;
    font-size: 22px;
`

const ContainerDiv = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30vh
`

const EmptyNote = () => {
  return (
   <ContainerDiv>
     <Light/>
     <br/>
     <Text>
       Notes you add, apear here
     </Text>
   </ContainerDiv>
  )
}

export default EmptyNote
