import Note from "../Note/Notes"

const NotesList = ({ notes }) => {
    return (
        <div style={{ display: 'flex' }}>
            { 
                notes.map(note => (
                    <Note key={note.id} note={note}/>
                )) 
            } 
        </div>
    )
}

export default NotesList