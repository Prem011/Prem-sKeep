import { Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react';
import {styled} from "@mui/material/styles"
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {useContext} from 'react'

import { DataContext } from '../../context/DataProvider';

const Note = ({ note }) => {

    const {notes, setNotes, setArchiveNotes, setDeletedNotes} = useContext(DataContext)

    const archiveNote = () => {
        const updatedNotes = notes.filter(data => data.id !== note.id) 
        setNotes(updatedNotes)
        setArchiveNotes(prevArr  => [note, ...prevArr])
    }

    const deleteNote = () => {
        const updatedNotes = notes.filter(data => data.id !== note.id) 
        setNotes(updatedNotes)
        setDeletedNotes(prevArr  => [note, ...prevArr])
    }


  return (
    <Card sx={{ margin: 1, boxShadow: 3 , width: 260, height:180 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>{note.heading}</Typography>
        <Typography variant="h6" color="textSecondary">{note.tagline}</Typography>
        <Typography variant="body2" color="textSecondary">{note.text}</Typography>
      </CardContent>

      <CardActions>
        <PushPinOutlinedIcon
           fontSize='small'
  
           cursor='pointer'
           style={{marginLeft: "auto", marginTop: "20"}}
           onClick={() => archiveNote(note)}
        />
        <ArchiveOutlinedIcon 
            fontSize='small'
  
            cursor='pointer'
            style={{marginTop: "20"}}
            onClick={() => archiveNote(note)}
        />
        <DeleteOutlinedIcon
            cursor='pointer'
            fontSize='small'
            style={{marginTop: "20"}}
            onClick={() => deleteNote(note)}
        />
      </CardActions>

    </Card>
  );
};

export default Note;
