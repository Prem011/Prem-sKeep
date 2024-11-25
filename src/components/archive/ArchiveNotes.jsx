import React from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArchiveNote from './ArchiveNote';
import { useContext } from 'react'


import {DataContext} from '../../context/DataProvider';
import EmptyNote from './EmptyArchiveNote';

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const ArchiveNotes = () => {

  const { archiveNotes } = useContext(DataContext)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        
        {
          archiveNotes.length > 0 ?
            <div className=' ml-[2%]' >
            <Grid container>
                {
                  archiveNotes.map(archive => (
                    <Grid item>
                      <ArchiveNote archive={archive} />
                    </Grid>
                  ))
                }
              </Grid>
          </div>
         :
          <EmptyNote/>
        }

      </Box>
    </Box>
  );
};

export default ArchiveNotes;
