import React from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Form from './Form';
import Note from './Note';
import { useContext } from 'react'


import {DataContext} from '../../context/DataProvider';
import EmptyNote from './EmptyNote';

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Notes = () => {

  const { notes } = useContext(DataContext)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Form />
        
        {
          notes.length > 0 ?
            <div className=' ml-[2%] mt-[7%] ' >
            <Grid container>
                {
                  notes.map(note => (
                    <Grid item>
                      <Note note={note} />
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

export default Notes;
