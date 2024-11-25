import React, { useContext } from 'react';
import { Card, CardActions, CardContent, Typography } from '@mui/material';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { DataContext } from '../../context/DataProvider';

const DeleteNote = ({ deletedNote }) => {
  const { notes, setNotes, setArchiveNotes,deletedNotes, setDeletedNotes } = useContext(DataContext);

  if (!deletedNote) return null; // Prevent rendering if `deletedNote` is undefined.

  const archiveNote = () => {
    const updatedNotes = deletedNotes.filter(data => data.id !== deletedNote.id);
    setDeletedNotes(updatedNotes);
    setNotes(prevArr => [deletedNote, ...prevArr]);
  };

//   permanently delete
  const permanentlydeleteNote = () => {
    const updatedNotes = deletedNotes.filter(data => data.id !== deletedNote.id);
    setDeletedNotes(updatedNotes);
    // setDeletedNotes(prevArr => [deletedNote, ...prevArr]);
  };

  return (
    <Card sx={{ margin: 1, boxShadow: 3, pb:8, width: 240, height: 100 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {deletedNote.heading}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {deletedNote.text}
        </Typography>
      </CardContent>

      <CardActions>
        <UndoOutlinedIcon
          fontSize="small"
          style={{ marginLeft: 'auto', cursor: 'pointer' }}
          onClick={archiveNote}
        />
        <DeleteOutlinedIcon
          fontSize="small"
          style={{ cursor: 'pointer' }}
          onClick={permanentlydeleteNote}
        />
      </CardActions>
    </Card>
  );
};

export default DeleteNote;
