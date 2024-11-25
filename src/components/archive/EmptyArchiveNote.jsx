import React from 'react'
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import {Box, Typography} from '@mui/material'
import { styled } from '@mui/material';


const Archive = styled(ArchiveOutlinedIcon)`
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

const EmptyArchiveNote = () => {
  return (
   <ContainerDiv>
     <Archive/>
     <br/>
     <Text>
       Nothing is Archived!
     </Text>
   </ContainerDiv>
  )
}

export default EmptyArchiveNote
