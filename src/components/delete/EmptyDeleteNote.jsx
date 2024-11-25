import React from 'react'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {Box, Typography} from '@mui/material'
import { styled } from '@mui/material';

const Trash = styled(DeleteOutlinedIcon)`
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

const EmptyDeleteNote = () => {
  return (
   <ContainerDiv>
     <Trash/>
     <br/>
     <Text>
       Nothing is in the Trash!
     </Text>
   </ContainerDiv>
  )
}

export default EmptyDeleteNote
