import React, { useState, useRef, useContext } from 'react';
import { TextField, ClickAwayListener, Box, Typography, radioClasses } from '@mui/material';
import { DataContext } from '../../context/DataProvider';
import { v4 as uuid } from 'uuid';

const initialNote = {
  id: '',
  heading: '',
  tagline: '',
  text: '',
};

const Form = () => {
  const [addNote, setAddNote] = useState({ ...initialNote, id: uuid() });
  const { notes, setNotes } = useContext(DataContext);
  const [showTextField, setShowTextField] = useState(false);
  const containerRef = useRef();

  const handleOnClick = () => {
    setShowTextField(true);
    containerRef.current.style.minHeight = '100px';
  };

  const handleClickAway = () => {
    setShowTextField(false);
    containerRef.current.style.minHeight = '50px';

    // Add the note if it contains any data
    if (addNote.heading || addNote.tagline || addNote.text) {
      setNotes((prevArray) => [addNote, ...prevArray]);
    }
    setAddNote({ ...initialNote, id: uuid() });
  };

  const onTextChange = (e) => {
    setAddNote({ ...addNote, [e.target.name]: e.target.value });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Centers horizontally
        alignItems: 'center', // Centers vertically
        width: '90vw',
        padding: 2,
        position: 'fixed',
      }}
     
    >
      <ClickAwayListener onClickAway={handleClickAway}>
        <div
          ref={containerRef}
          className={`flex flex-col  w-[600px] py-[10px] px-[10px] rounded-[8px] ${
            showTextField ? 'border-[#e0e0e0] shadow-lg shadow-zinc-300' : ''
          }`}
          onClick={handleOnClick}
        >
          {!showTextField ? (
            <Typography
              sx={{
                width:"30%",
                marginX: "auto",
                color: 'black',
                textAlign: 'center',
                cursor: 'pointer',
                fontSize: '1rem',
                background: "#ffba00",
                padding: '1rem 0.5rem',
                borderRadius: "30px"
              }}
            >
              Create Note...
            </Typography>
          ) : (
            <>
              <TextField
                placeholder="Title"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                style={{
                  marginBottom: 10,
                  border: 'none',
                }}
                onChange={onTextChange}
                name="heading"
                value={addNote.heading}
              />

              <TextField
                placeholder="Tagline..."
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                style={{
                  marginBottom: 10,
                  border: 'none',
                }}
                onChange={onTextChange}
                name="tagline"
                value={addNote.tagline}
              />

              <TextField
                placeholder="Description..."
                multiline
                maxRows={Infinity}
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                style={{
                  marginBottom: 30,
                  border: 'none',
                }}
                onChange={onTextChange}
                name="text"
                value={addNote.text}
              />
            </>
          )}
        </div>
      </ClickAwayListener>
    </Box>
  );
};

export default Form;
