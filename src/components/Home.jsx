import React from 'react'   
import SwipeDrawer from './SwipeDrawer';
import Notes from './notes/Notes';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ArchiveNotes from './archive/ArchiveNotes';
import DeleteNotes from './delete/DeleteNotes';

const Home = () => {
  return (
    <Router>

      <div className='w-[100vw] ' > 
          <SwipeDrawer/>

          <Routes>
            <Route path="/" element={<Notes/>} />
            <Route path="/archive" element={<ArchiveNotes/>} />
            <Route path="/trash" element={<DeleteNotes/>} />
          </Routes>

      </div>
      
    </Router>
  )
}

export default Home
