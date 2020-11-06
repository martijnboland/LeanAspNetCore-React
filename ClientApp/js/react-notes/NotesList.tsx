import * as React from 'react';
import { Note } from './models';
import NoteCard from './NoteCard';

interface NotesListProps {
  notes: Note[],
  handleDelete: (note: Note) => Promise<any>
}

const NotesList: React.FC<NotesListProps> = ({ notes, handleDelete }) => {
  return (
    notes.length > 0 
      ? 
      <div>
        {notes.map(n => <NoteCard key={n.id} note={n} handleDelete={handleDelete} />)}    
      </div>
      :
      <em>There are currently no notes</em>
  );
};

export default NotesList;