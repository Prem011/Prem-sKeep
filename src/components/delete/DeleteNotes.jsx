import React, { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import DeleteNote from './DeleteNote';
import EmptyDeleteNote from './EmptyDeleteNote';
import { DataContext } from '../../context/DataProvider';

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {
  const { deletedNotes } = useContext(DataContext);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        
        {deletedNotes.length > 0 ? (
          <div className='ml-[2%]'>
            <Grid container spacing={2}>
              {deletedNotes.map((deletedNote, index) => (
                <Grid item key={index}>
                  {/* Pass the prop with the correct name */}
                  <DeleteNote deletedNote={deletedNote} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          <EmptyDeleteNote />
        )}
      </Box>
    </Box>
  );
};

export default DeleteNotes;
