import {createContext, useState} from 'react' 

export const DataContext = createContext(null); 

const DataProvider = ({children, data}) => {

    const [notes, setNotes] = useState([])
    const [archiveNotes, setArchiveNotes] = useState([])
    const [deletedNotes, setDeletedNotes] = useState([])
    const [pinnedNotes, setpinnedNotes] = useState([])

    const pinNote = (note) => {
        // Move the note to pinnedNotes if not already pinned
        if (!pinnedNotes.find((pinned) => pinned.id === note.id)) {
            setpinnedNotes((prev) => [note, ...prev]);
            setNotes((prev) => prev.filter((data) => data.id !== note.id));
        } else {
            // Unpin the note
            setpinnedNotes((prev) => prev.filter((pinned) => pinned.id !== note.id));
            setNotes((prev) => [note, ...prev]);
        }
    };

    return (
        <DataContext.Provider value={{
            notes,
            setNotes,
            archiveNotes,
            setArchiveNotes,
            deletedNotes,
            setDeletedNotes,
            setpinnedNotes,
            pinNote,
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;

