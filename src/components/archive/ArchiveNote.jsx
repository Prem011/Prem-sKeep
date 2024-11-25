import { Card, CardActions, CardContent, Typography } from '@mui/material';
import React, { useContext } from 'react';
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { DataContext } from '../../context/DataProvider';

const ArchiveNote = ({ archive }) => {
  const { setNotes, setArchiveNotes, setDeletedNotes, archiveNotes } = useContext(DataContext);

  const archiveNote = () => {
    const updatedNotes = archiveNotes.filter(data => data.id !== archive.id);
    setArchiveNotes(updatedNotes); 
    setNotes(prevArr => [archive, ...prevArr]);
  };

  const deleteNote = () => {
    const updatedNotes = archiveNotes.filter(data => data.id !== archive.id);
    setArchiveNotes(updatedNotes);
    setDeletedNotes(prevArr => [archive, ...prevArr]);
  };

  return (
    <Card sx={{ margin: 1, boxShadow: 3, pb:8, width: 240, height: 100 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>{archive.heading}</Typography>
        <Typography variant="body2" color="textSecondary">
          {archive.text}
        </Typography>
      </CardContent>

      <CardActions>
        <UnarchiveOutlinedIcon
          fontSize="small"
          style={{ marginLeft: 'auto', cursor: 'pointer' }}
          onClick={archiveNote} 
        />

        <DeleteOutlinedIcon
          fontSize="small"
          style={{ cursor: 'pointer' }}
          onClick={deleteNote} 
        />
      </CardActions>
    </Card>
  );
};

export default ArchiveNote;
